using GoVagas.Domains;
using GoVagas.Interfaces;
using GoVagas.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoVagas.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]

    public class UsuarioController : ControllerBase
    {
        private IUsuarioRepository _UsuarioRepository;

        public UsuarioController()
        {
            _UsuarioRepository = new UsuarioRepository();
        }

        /// <summary>
        ///  Lista os Usuarios
        /// </summary>
        /// <returns>Retorna uma lisa de Usuarios</returns>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_UsuarioRepository.ListarTodos());
        }
        /// <summary>
        /// Lista um Usuario passando seu respectivo ID na URL
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Retorna um Status Code 200</returns>
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            return StatusCode(200, _UsuarioRepository.BuscarPorId(id));
        }
        /// <summary>
        /// Cadastra um novo Usuario
        /// </summary>
        /// <param name="novoUsuario"></param>
        /// <returns> Status Code 201</returns>
        [HttpPost]
        public IActionResult Post(Usuario novoUsuario)
        {
            _UsuarioRepository.Cadastrar(novoUsuario);

            return StatusCode(201);
        }
        /// <summary>
        /// Atualiza os Usuarios passando o ID pela URL
        /// </summary>
        /// <param name="id"></param>
        /// <param name="UsuarioAtualizado"></param>
        /// <returns> Status Cdoe 404</returns>
        [HttpPut("{id}")]
        public IActionResult Put(int id, Usuario UsuarioAtualizado)
        {
            Usuario UsuarioBuscado = _UsuarioRepository.BuscarPorId(id);

            if (UsuarioBuscado != null)
            {
                try
                {
                    _UsuarioRepository.Atualizar(id, UsuarioAtualizado);

                    return StatusCode(200);
                }
                catch (Exception erro)
                {
                    return BadRequest(erro);
                }
            }

            return StatusCode(404);
        }
        /// <summary>
        /// Deleta um usuário passando seu respectivo ID pela solução
        /// </summary>
        /// <param name="id"></param>
        /// <returns> Stattus Code 200</returns>
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Usuario UsuarioBuscado = _UsuarioRepository.BuscarPorId(id);

            if (UsuarioBuscado == null)
            {
                return NotFound();
            }

            _UsuarioRepository.Deletar(id);

            return StatusCode(202);
        }
    }
}
