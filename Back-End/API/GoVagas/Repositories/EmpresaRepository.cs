using GoVagas.Contexts;
using GoVagas.Domains;
using GoVagas.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoVagas.Repositories
{
    public class EmpresaRepository : IImpresaRepository
    {
        GoVagasContext ctx = new GoVagasContext();

        public void Atualizar(int id, Empresa EmpresaAtualizado)
        {
            Empresa EmpresaBuscado = ctx.Empresa.Find(id);
            ctx.Empresa.Update(EmpresaBuscado);
            ctx.SaveChanges();

        }

        public Empresa BuscarPorId(int id)
        {
            return ctx.Empresa.FirstOrDefault(ca => ca.IdEmpresa == id);
        }

        public void Cadastrar(Empresa novoEmpresa)
        {
            ctx.Empresa.Add(novoEmpresa);
            ctx.SaveChanges();
        }


        public void Deletar(int id)
        {
            Empresa EmpresaBuscado = ctx.Empresa.Find(id);
            ctx.Empresa.Remove(EmpresaBuscado);
            ctx.SaveChanges();
        }




        public List<Empresa> ListarTodos()
        {
            return ctx.Empresa.ToList();
        }
    }
}
