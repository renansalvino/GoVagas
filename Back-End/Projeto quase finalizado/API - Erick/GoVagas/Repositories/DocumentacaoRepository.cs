using GoVagas.Contexts;
using GoVagas.Domains;
using GoVagas.Interfaces;
using Microsoft.AspNetCore.DataProtection.XmlEncryption;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;
using System.Threading.Tasks;

namespace GoVagas.Repositories
{
    public class DocumentacaoRepository : IDocumentacaoRepository
    {
       GoVagasContext ctx =  new GoVagasContext();
        public void Atualizar(int id, Documentacao DocumentoAtualizado)
        {
            Documentacao documentoBuscado = ctx.Documentacao.Find(id);

            if (documentoBuscado != null)
            {
                if (DocumentoAtualizado.ResposavelVaga != null)
                {
                    documentoBuscado.ResposavelVaga = DocumentoAtualizado.ResposavelVaga;
                }

                if (DocumentoAtualizado.DataInicio != null)
                {
                    documentoBuscado.DataInicio = DocumentoAtualizado.DataInicio;
                }

                if (DocumentoAtualizado.DataTerminoPrev != null)
                {
                    documentoBuscado.DataTerminoPrev = DocumentoAtualizado.DataTerminoPrev;
                }

                if (DocumentoAtualizado.DataTerminoEfe != null)
                {
                    documentoBuscado.DataTerminoEfe = DocumentoAtualizado.DataTerminoEfe;
                }

                if (DocumentoAtualizado.StatusDoc != null)
                {
                    documentoBuscado.StatusDoc = DocumentoAtualizado.StatusDoc;
                }

                if (DocumentoAtualizado.DiasContrato != null)
                {
                    documentoBuscado.DiasContrato = DocumentoAtualizado.DiasContrato;
                }

                if (DocumentoAtualizado.ReqMatricula != null)
                {
                    documentoBuscado.ReqMatricula = DocumentoAtualizado.ReqMatricula;
                }


                if (DocumentoAtualizado.TipoContrato != false)      /*Tipo Bool*/
                {
                    documentoBuscado.TipoContrato = DocumentoAtualizado.TipoContrato;
                }

                if (DocumentoAtualizado.PlanoEstagio != false)      /*Tipo Bool*/
                {
                    documentoBuscado.PlanoEstagio = DocumentoAtualizado.PlanoEstagio;
                }

                if (DocumentoAtualizado.Desligamento != false)      /*Tipo Bool*/
                {
                    documentoBuscado.Desligamento = DocumentoAtualizado.Desligamento;
                }


                if (DocumentoAtualizado.QtdAvaliacoes != null)
                {
                    documentoBuscado.QtdAvaliacoes = DocumentoAtualizado.QtdAvaliacoes;
                }

                if (DocumentoAtualizado.Prorrogacoes != null)
                {
                    documentoBuscado.Prorrogacoes = DocumentoAtualizado.Prorrogacoes;
                }

                if (DocumentoAtualizado.ProrrogDiasContrato != null)
                {
                    documentoBuscado.ProrrogDiasContrato = DocumentoAtualizado.ProrrogDiasContrato;
                }

                if (DocumentoAtualizado.AvalicoesProrrog != null)
                {
                    documentoBuscado.AvalicoesProrrog = DocumentoAtualizado.AvalicoesProrrog;
                }

                if (DocumentoAtualizado.DataAvaliacao1 != null)
                {
                    documentoBuscado.DataAvaliacao1 = DocumentoAtualizado.DataAvaliacao1;
                }

                if (DocumentoAtualizado.Avaliacao1 != null)
                {
                    documentoBuscado.Avaliacao1 = DocumentoAtualizado.Avaliacao1;
                }

                if (DocumentoAtualizado.DataAvaliacao2 != null)
                {
                    documentoBuscado.DataAvaliacao2 = DocumentoAtualizado.DataAvaliacao2;
                }

                if (DocumentoAtualizado.Avaliacao2 != null)
                {
                    documentoBuscado.Avaliacao2 = DocumentoAtualizado.Avaliacao2;
                }

                if (DocumentoAtualizado.DataAvaliacao3 != null)
                {
                    documentoBuscado.DataAvaliacao3 = DocumentoAtualizado.DataAvaliacao3;
                }

                if (DocumentoAtualizado.Avaliacao3 != null)
                {
                    documentoBuscado.Avaliacao3 = DocumentoAtualizado.Avaliacao3;
                }

                if (DocumentoAtualizado.DataAvaliacao4 != null)
                {
                    documentoBuscado.DataAvaliacao4 = DocumentoAtualizado.DataAvaliacao4;
                }

                if (DocumentoAtualizado.Avaliacao4 != null)
                {
                    documentoBuscado.Avaliacao4 = DocumentoAtualizado.Avaliacao4;
                }

                if (DocumentoAtualizado.TermoEgresso != false)  /*tipobool*/
                {
                    documentoBuscado.TermoEgresso = DocumentoAtualizado.TermoEgresso;
                }

                if (DocumentoAtualizado.MotivoEvasao != null)
                {
                    documentoBuscado.MotivoEvasao = DocumentoAtualizado.MotivoEvasao;
                }

                if (DocumentoAtualizado.ModeloDoc != null)
                {
                    documentoBuscado.ModeloDoc = DocumentoAtualizado.ModeloDoc;
                }


                ctx.Documentacao.Update(documentoBuscado);
                ctx.SaveChanges();

            }
        }

        public Documentacao BuscarPorId(int id)
        {
            return ctx.Documentacao.FirstOrDefault(x => x.IdDocumentacao == id);
        }

        public void Cadastrar(Documentacao Documentonovo)
        {
            ctx.Documentacao.Add(Documentonovo);
            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            Documentacao documentoBuscado = ctx.Documentacao.Find(id);
            ctx.Documentacao.Remove(documentoBuscado);
            ctx.SaveChanges();
        }

        public List<Documentacao> ListarTodos()
        {
            return ctx.Documentacao.ToList();
        }
    }
}
