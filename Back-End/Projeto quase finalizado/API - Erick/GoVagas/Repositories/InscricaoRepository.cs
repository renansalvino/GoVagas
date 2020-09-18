using GoVagas.Contexts;
using GoVagas.Domains;
using GoVagas.Interfaces;
using Microsoft.EntityFrameworkCore.Diagnostics;
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
            Inscricao InscricaoBuscado = ctx.Inscricao.FirstOrDefault(e => e.IdInscricao == id);

            Candidato CandidatoBuscado = ctx.Candidato.FirstOrDefault(u => u.IdCandidato == InscricaoBuscado.IdCandidato);

            Vaga VagaBuscado = ctx.Vaga.FirstOrDefault(u => u.IdVaga == InscricaoBuscado.IdVaga);


            //Gambiarra do matheus
            InscricaoBuscado.IdCandidatoNavigation = CandidatoBuscado;
            InscricaoBuscado.IdVagaNavigation = VagaBuscado;

            if (InscricaoBuscado != null)
            {
                if (InscricaoAtualizado.DataInscricao != null)
                {
                    InscricaoBuscado.DataInscricao = InscricaoAtualizado.DataInscricao;
                }

            }
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
            return ctx.Inscricao
                .Select(e => new Inscricao()
                {
                    IdInscricao = e.IdInscricao,
                    DataInscricao = e.DataInscricao,
                    IdCandidato = e.IdCandidato,
                    IdVaga = e.IdVaga,


                    IdCandidatoNavigation = new Candidato()
                    {
                        IdCandidato = e.IdCandidatoNavigation.IdCandidato,
                        NumMatricula = e.IdCandidatoNavigation.NumMatricula,
                        Cpf = e.IdCandidatoNavigation.Cpf,
                        Sexo = e.IdCandidatoNavigation.Sexo,
                        DataMatricula = e.IdCandidatoNavigation.DataMatricula,
                        Raca = e.IdCandidatoNavigation.Raca,
                        Cidade = e.IdCandidatoNavigation.NumMatricula,
                        NivelCurso = e.IdCandidatoNavigation.NivelCurso,
                        TipoCurso = e.IdCandidatoNavigation.TipoCurso,
                        NomeCurso = e.IdCandidatoNavigation.NomeCurso,
                        Turma = e.IdCandidatoNavigation.Turma,
                        Turno = e.IdCandidatoNavigation.Turno,
                        Termo = e.IdCandidatoNavigation.Termo,
                        FotoPerfil = e.IdCandidatoNavigation.FotoPerfil,
                        TituloPerfil = e.IdCandidatoNavigation.TituloPerfil,
                        Habilidade = e.IdCandidatoNavigation.Habilidade,
                        Descricao = e.IdCandidatoNavigation.Descricao,
                        UrlLinkedin = e.IdCandidatoNavigation.UrlLinkedin,
                        UrlGitHub = e.IdCandidatoNavigation.UrlGitHub,
                        Curriculo = e.IdCandidatoNavigation.Curriculo,
                        PretensaoSalario = e.IdCandidatoNavigation.PretensaoSalario,
                        Personalidade = e.IdCandidatoNavigation.Personalidade,
                        FocoCarreira = e.IdCandidatoNavigation.FocoCarreira,
                        ExpertiseCandidato = e.IdCandidatoNavigation.ExpertiseCandidato,
                        ExperienciaPro = e.IdCandidatoNavigation.ExperienciaPro,
                        NomeEmpresa = e.IdCandidatoNavigation.NomeEmpresa,
                        PerfilEmpresa = e.IdCandidatoNavigation.PerfilEmpresa,
                        CargoEmpresa = e.IdCandidatoNavigation.CargoEmpresa,
                        DataInicio = e.IdCandidatoNavigation.DataInicio,
                        DataTermino = e.IdCandidatoNavigation.DataTermino,
                        TamanhoEmpresa = e.IdCandidatoNavigation.TamanhoEmpresa,
                        TipoContrato = e.IdCandidatoNavigation.TipoContrato,
                        TrabalharRemoto = e.IdCandidatoNavigation.TrabalharRemoto,
                        DeficienteFisico = e.IdCandidatoNavigation.DeficienteFisico,

                    },
                        IdVagaNavigation = new Vaga()
                        {
                            IdVaga = e.IdVagaNavigation.IdVaga,
                            TituloVaga = e.IdVagaNavigation.TituloVaga,
                            PerfilDev = e.IdVagaNavigation.PerfilDev,
                            DiasContrato = e.IdVagaNavigation.DiasContrato,
                            TempoExp = e.IdVagaNavigation.TempoExp,
                            HabNecessaria = e.IdVagaNavigation.HabNecessaria,
                            LocalVaga = e.IdVagaNavigation.LocalVaga,
                            ReqVaga = e.IdVagaNavigation.ReqVaga,
                            NivelExp = e.IdVagaNavigation.NivelExp,
                            DescAtivFuncoes = e.IdVagaNavigation.DescAtivFuncoes,
                            TipoContrato = e.IdVagaNavigation.TipoContrato,
                            ExpertiseVaga = e.IdVagaNavigation.ExpertiseVaga,
                            TrabalhoRemoto = e.IdVagaNavigation.TrabalhoRemoto,
                            OutraCidade = e.IdVagaNavigation.OutraCidade,
                            ValorSalario = e.IdVagaNavigation.ValorSalario,
                            OfertaExtra = e.IdVagaNavigation.OfertaExtra,
                           
                        }
                })
                .ToList();
        }
    }
}
