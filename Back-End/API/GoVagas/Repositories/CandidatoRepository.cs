using GoVagas.Contexts;
using GoVagas.Domains;
using GoVagas.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoVagas.Repositories
{
    public class CandidatoRepository : ICandidatoRepository
    {

        GoVagasContext ctx = new GoVagasContext();

        public void Atualizar(int id, Candidato candidatoAtualizado)
        {
            Candidato candidatoBuscado =  ctx.Candidato.Find(id);
            ctx.Candidato.Update(candidatoBuscado);
            ctx.SaveChanges();

        }

        public Candidato BuscarPorId(int id)
        {
            return ctx.Candidato.FirstOrDefault(ca => ca.IdCandidato == id);
        }

        public void Cadastrar(Candidato novoCandidato)
        {
            ctx.Candidato.Add(novoCandidato);
            ctx.SaveChanges();
        }
        

        public void Deletar(int id)
        {
            Candidato candidatoBuscado = ctx.Candidato.Find(id);
            ctx.Candidato.Remove(candidatoBuscado);
            ctx.SaveChanges();
        }


       

        public List<Candidato> ListarTodos()
        {
            return ctx.Candidato.ToList();
        }
    }
}
