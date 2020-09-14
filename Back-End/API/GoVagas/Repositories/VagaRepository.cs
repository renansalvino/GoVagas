using GoVagas.Contexts;
using GoVagas.Domains;
using GoVagas.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoVagas.Repositories
{
    public class VagaRepository : IVagaRepository
    {
        GoVagasContext ctx = new GoVagasContext();

        public void Atualizar(int id, Vaga VagaAtualizado)
        {
            Vaga VagaBuscado = ctx.Vaga.Find(id);
            ctx.Vaga.Update(VagaBuscado);
            ctx.SaveChanges();

        }

        public Vaga BuscarPorId(int id)
        {
            return ctx.Vaga.FirstOrDefault(ca => ca.IdVaga == id);
        }

        public void Cadastrar(Vaga novoVaga)
        {
            ctx.Vaga.Add(novoVaga);
            ctx.SaveChanges();
        }


        public void Deletar(int id)
        {
            Vaga VagaBuscado = ctx.Vaga.Find(id);
            ctx.Vaga.Remove(VagaBuscado);
            ctx.SaveChanges();
        }




        public List<Vaga> ListarTodos()
        {
            return ctx.Vaga.ToList();
        }
    }
}
