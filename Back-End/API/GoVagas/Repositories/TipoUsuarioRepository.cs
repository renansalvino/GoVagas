using GoVagas.Contexts;
using GoVagas.Domains;
using GoVagas.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoVagas.Repositories
{
    public class TipoUsuarioRepository : ITipoUsuarioRepository
    {
        GoVagasContext ctx = new GoVagasContext();

        public void Atualizar(int id, TipoUsuario TipoUsuarioAtualizado)
        {
            TipoUsuario TipoUsuarioBuscado = ctx.TipoUsuario.Find(id);
            ctx.TipoUsuario.Update(TipoUsuarioBuscado);
            ctx.SaveChanges();

        }

        public TipoUsuario BuscarPorId(int id)
        {
            return ctx.TipoUsuario.FirstOrDefault(ca => ca.IdTipoUsuario == id);
        }

        public void Cadastrar(TipoUsuario novoTipoUsuario)
        {
            ctx.TipoUsuario.Add(novoTipoUsuario);
            ctx.SaveChanges();
        }


        public void Deletar(int id)
        {
            TipoUsuario TipoUsuarioBuscado = ctx.TipoUsuario.Find(id);
            ctx.TipoUsuario.Remove(TipoUsuarioBuscado);
            ctx.SaveChanges();
        }




        public List<TipoUsuario> ListarTodos()
        {
            return ctx.TipoUsuario.ToList();
        }
    }
}
