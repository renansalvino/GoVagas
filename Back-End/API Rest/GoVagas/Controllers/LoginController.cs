using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using GoVagas.Domains;
using GoVagas.Interfaces;
using GoVagas.Repositories;
using GoVagas.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace GoVagas.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        IUsuarioRepository _UsuarioRepository;

        public LoginController()
        {
            _UsuarioRepository = new UsuarioRepository();
        }


        /// <summary>
        /// Valida o usuário
        /// </summary>
        /// <param name="login">Objeto login que contém o e-mail e a senha do usuário</param>
        /// <returns>Retorna um token com as informações do usuário</returns>
        [HttpPost]
        public IActionResult Post(LoginViewModel login)
        {
            // Busca o usuário pelo e-mail e senha
            Usuario UsuarioBuscado = _UsuarioRepository.BuscarPorEmailSenha(login.Email, login.Senha);

            // Caso não encontre nenhum usuário com o e-mail e senha informados
            if (UsuarioBuscado == null)
            {
                // Retorna NotFound com uma mensagem de erro
                return NotFound("E-mail ou senha inválidos");
            }

            // Caso o usuário seja encontrado, prossegue para a criação do token

            

            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Email, UsuarioBuscado.Email),
                //new Claim(JwtRegisteredClaimNames.Jti, UsuarioBuscado.IdUsuario.ToString()),
                new Claim(ClaimTypes.Role, UsuarioBuscado.IdTipoUsuario.ToString()),
                //12/11/2020 depois da tela azul ;-;
                new Claim("Role", UsuarioBuscado.IdTipoUsuario.ToString())
            };

            if(UsuarioBuscado.IdTipoUsuario == 3 && UsuarioBuscado.Candidato.ToList().Count > 0)
            {
                claims.Add(new Claim(JwtRegisteredClaimNames.Jti, UsuarioBuscado.Candidato.ToList()[0].IdCandidato.ToString()));
            } else if (UsuarioBuscado.IdTipoUsuario == 2 && UsuarioBuscado.Empresa.ToList().Count > 0)
            {
                claims.Add(new Claim(JwtRegisteredClaimNames.Jti, UsuarioBuscado.Empresa.ToList()[0].IdEmpresa.ToString()));
            } else if (UsuarioBuscado.IdTipoUsuario == 1 && UsuarioBuscado.Administrador.ToList().Count > 0)
            {
                claims.Add(new Claim(JwtRegisteredClaimNames.Jti, UsuarioBuscado.Administrador.ToList()[0].IdAdministrador.ToString()));
            }
            else
            {
                claims.Add(new Claim(JwtRegisteredClaimNames.Jti, "0"));
            }

            // Define a chave de acesso ao token
            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("govagas-chave-autenticacao"));

            // Define as credenciais do token - Header
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            // Gera o token
            var token = new JwtSecurityToken(
                issuer: "GoVagas",                       // emissor do token
                audience: "GoVagas",                     // destinatário do token
                claims: claims,                          // dados definidos acima
                expires: DateTime.Now.AddMinutes(30),    // tempo de expiração
                signingCredentials: creds                // credenciais do token
            );

            // Retorna Ok com o token
            return Ok(new
            {
                token = new JwtSecurityTokenHandler().WriteToken(token)
            });
        }
    }
}