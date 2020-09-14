using GoVagas.Contexts;
using GoVagas.Domains;
using GoVagas.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoVagas.Repositories
{
    public class InscricaoRepository : IInscricaoRepository
    {
        GoVagasContext ctx = new GoVagasContext();

        public void Atualizar(int id, Inscricao InscricaoAtualizado)
        {
            Inscricao InscricaoBuscado = ctx.Inscricao.Find(id);
            ctx.Inscricao.Update(InscricaoBuscado);
            ctx.SaveChanges();

        }

        public Inscricao BuscarPorId(int id)
        {
            return ctx.Inscricao.FirstOrDefault(ca => ca.IdInscricao == id);
        }

        public void Cadastrar(Inscricao novoInscricao)
        {
            ctx.Inscricao.Add(novoInscricao);
            ctx.SaveChanges();
        }


        public void Deletar(int id)
        {
            Inscricao InscricaoBuscado = ctx.Inscricao.Find(id);
            ctx.Inscricao.Remove(InscricaoBuscado);
            ctx.SaveChanges();
        }




        public List<Inscricao> ListarTodos()
        {
            return ctx.Inscricao.ToList();
        }
    }
}
