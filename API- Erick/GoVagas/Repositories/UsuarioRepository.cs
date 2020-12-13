using GoVagas.Contexts;
using GoVagas.Domains;
using GoVagas.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoVagas.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        GoVagasContext ctx = new GoVagasContext();

        public void Atualizar(int id, Usuario UsuarioAtualizado)
        {
            Usuario UsuarioBuscado =  ctx.Usuario.Find(id);

            if (UsuarioBuscado !=  null)
            { 
                if (UsuarioAtualizado.Nome != null)
                {
                UsuarioBuscado.Nome = UsuarioAtualizado.Nome;
                }

                if (UsuarioAtualizado.Nome != null)
                {
                    UsuarioBuscado.Email = UsuarioAtualizado.Email;
                }

                if (UsuarioAtualizado.Nome != null)
                {
                    UsuarioBuscado.DataNascimento = UsuarioAtualizado.DataNascimento;
                }

                if (UsuarioAtualizado.Nome != null)
                {
                    UsuarioBuscado.Senha = UsuarioAtualizado.Senha;
                }

                if (UsuarioAtualizado.Nome != null)
                {
                    UsuarioBuscado.Telefone = UsuarioAtualizado.Telefone;
                }

                if (UsuarioAtualizado.Nome != null)
                {
                    UsuarioBuscado.IdTipoUsuario = UsuarioAtualizado.IdTipoUsuario;
                }
            }

            ctx.Usuario.Update(UsuarioBuscado);

            ctx.SaveChanges();

        }

        public Usuario BuscarPorId(int id)
        {
            return ctx.Usuario.FirstOrDefault(ca => ca.IdUsuario == id);
        }

        public void Cadastrar(Usuario novoUsuario)
        {
            ctx.Usuario.Add(novoUsuario);
            ctx.SaveChanges();
        }
        

        public void Deletar(int id)
        {
            Usuario UsuarioBuscado = ctx.Usuario.Find(id);
            ctx.Usuario.Remove(UsuarioBuscado);
            ctx.SaveChanges();
        }
        
        /// <summary>
        /// Valida o usuário
        /// </summary>
        /// <param name="email">E-mail do usuário</param>
        /// <param name="senha">Senha do usuário</param>
        /// <returns>Retorna um usuário validado</returns>
        public Usuario BuscarPorEmailSenha(string email, string senha)
        {
            return ctx.Usuario.Include(c => c.Candidato)
                .Include(e => e.Empresa)
                .Include(e => e.Administrador)
                .FirstOrDefault(e => e.Email == email && e.Senha == senha);
        }

        public List<Usuario> ListarTodos()
        {
            return ctx.Usuario.Select(e => new Usuario()
            {
                IdUsuario = e.IdUsuario,
                Nome = e.Nome,
                Senha = e.Senha,
                Telefone = e.Telefone,

                IdTipoUsuarioNavigation = new TipoUsuario()
                {
                    IdTipoUsuario = e.IdTipoUsuarioNavigation.IdTipoUsuario,
                    TituloTipoUsuario = e.IdTipoUsuarioNavigation.TituloTipoUsuario,
                }

            })
                .ToList();
        }
    }
}
