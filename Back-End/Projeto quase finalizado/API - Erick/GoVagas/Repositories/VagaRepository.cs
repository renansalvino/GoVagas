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
    public class VagaRepository : IVagaRepository
    {
        GoVagasContext ctx = new GoVagasContext();

        public void Atualizar(int id, Vaga vagaAtualizado)
        {
            Vaga vagaBuscado = ctx.Vaga.FirstOrDefault(e => e.IdVaga == id);


            if (vagaBuscado != null)
            {
                if (vagaAtualizado.TituloVaga != null)
                {
                    vagaBuscado.TituloVaga = vagaAtualizado.TituloVaga;
                }

                if (vagaAtualizado.PerfilDev != null)
                {
                    vagaBuscado.PerfilDev = vagaAtualizado.PerfilDev;
                }

                if (vagaAtualizado.DiasContrato != null)
                {
                    vagaBuscado.DiasContrato = vagaAtualizado.DiasContrato;
                }

                if (vagaAtualizado.TempoExp != null)
                {
                    vagaBuscado.TempoExp = vagaAtualizado.TempoExp;
                }

                if (vagaAtualizado.HabNecessaria != null)
                {
                    vagaBuscado.HabNecessaria = vagaAtualizado.HabNecessaria;
                }

                if (vagaAtualizado.LocalVaga != null)
                {
                    vagaBuscado.LocalVaga = vagaAtualizado.LocalVaga;
                }

                if (vagaAtualizado.ReqVaga != null)
                {
                    vagaBuscado.ReqVaga = vagaAtualizado.ReqVaga;
                }

                if (vagaAtualizado.NivelExp != null)
                {
                    vagaBuscado.NivelExp = vagaAtualizado.NivelExp;
                }

                if (vagaAtualizado.DescAtivFuncoes != null)
                {
                    vagaBuscado.DescAtivFuncoes = vagaAtualizado.DescAtivFuncoes;
                }

                if (vagaAtualizado.TipoContrato != false)
                {
                    vagaBuscado.TipoContrato = vagaAtualizado.TipoContrato;
                }

                if (vagaAtualizado.ExpertiseVaga != null)
                {
                    vagaBuscado.ExpertiseVaga = vagaAtualizado.ExpertiseVaga;
                }

                if (vagaAtualizado.TrabalhoRemoto != false)
                {
                    vagaBuscado.TrabalhoRemoto = vagaAtualizado.TrabalhoRemoto;
                }

                if (vagaAtualizado.OutraCidade != false)
                {
                    vagaBuscado.OutraCidade = vagaAtualizado.OutraCidade;
                }

                if (vagaAtualizado.ValorSalario != null)
                {
                    vagaBuscado.ValorSalario = vagaAtualizado.ValorSalario;
                }

                if (vagaAtualizado.OfertaExtra != null)
                {
                    vagaBuscado.OfertaExtra = vagaAtualizado.OfertaExtra;
                }

                ctx.Vaga.Update(vagaBuscado);
                ctx.SaveChanges();
            }

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
