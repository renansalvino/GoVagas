using GoVagas.Contexts;
using GoVagas.Domains;
using GoVagas.Interfaces;
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


       

        public List<Usuario> ListarTodos()
        {
            return ctx.Usuario.ToList();
        }
    }
}
