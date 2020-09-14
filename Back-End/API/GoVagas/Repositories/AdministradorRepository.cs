using GoVagas.Contexts;
using GoVagas.Domains;
using GoVagas.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoVagas.Repositories
{    public class AdministradorRepository : IAdministradorRepository
    {
        GoVagasContext ctx = new GoVagasContext();

        public void Atualizar(int id, Administrador AdministradorAtualizado)
        {
            Administrador AdministradorBuscado = ctx.Administrador.Find(id);
            ctx.Administrador.Update(AdministradorBuscado);
            ctx.SaveChanges();

        }

        public Administrador BuscarPorId(int id)
        {
            return ctx.Administrador.FirstOrDefault(ca => ca.IdAdministrador == id);
        }

        public void Cadastrar(Administrador novoAdministrador)
        {
            ctx.Administrador.Add(novoAdministrador);
            ctx.SaveChanges();
        }


        public void Deletar(int id)
        {
            Administrador AdministradorBuscado = ctx.Administrador.Find(id);
            ctx.Administrador.Remove(AdministradorBuscado);
            ctx.SaveChanges();
        }




        public List<Administrador> ListarTodos()
        {
            return ctx.Administrador.ToList();
        }
    }
}
