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
            ctx.Documentacao.Update(documentoBuscado);
            ctx.SaveChanges();
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
            return ctx.Documentacao.Select(e => new Documentacao()
            {
                IdDocumentacao = e.IdDocumentacao,
                ResposavelVaga = e.ResposavelVaga,
                DataInicio = e.DataInicio,
                DataTerminoPrev = e.DataTerminoPrev,
                DataTerminoEfe = e.DataTerminoEfe,
                StatusDoc = e.StatusDoc,
                DiasContrato = e.DiasContrato,
                ReqMatricula = e.ReqMatricula,
                TipoContrato = e.TipoContrato,
                PlanoEstagio = e.PlanoEstagio,
                Desligamento = e.Desligamento,
                QtdAvaliacoes = e.QtdAvaliacoes,
                Prorrogacoes = e.Prorrogacoes,
                ProrrogDiasContrato = e.ProrrogDiasContrato,
                AvalicoesProrrog = e.AvalicoesProrrog,
                DataAvaliacao1 = e.DataAvaliacao1,
                Avaliacao1 = e.Avaliacao1,
                DataAvaliacao2 = e.DataAvaliacao2,
                Avaliacao2 = e.Avaliacao2,
                DataAvaliacao3 = e.DataAvaliacao3,
                Avaliacao3 = e.Avaliacao3,
                DataAvaliacao4 = e.DataAvaliacao4,
                Avaliacao4 = e.Avaliacao4,
                TermoEgresso  = e.TermoEgresso,
                MotivoEvasao = e.MotivoEvasao,
                ModeloDoc = e.ModeloDoc,

                IdCandidatoNavigation = new Candidato ()
                {
                    NumMatricula = e.IdCandidatoNavigation.NumMatricula,
                    Cpf = e.IdCandidatoNavigation.Cpf,
                    Sexo = e.IdCandidatoNavigation.Sexo,
                    DataMatricula = e.IdCandidatoNavigation.DataMatricula,
                    Raca = e.IdCandidatoNavigation.Raca,
                    Cidade = e.IdCandidatoNavigation.Cidade,
                    NivelCurso = e.IdCandidatoNavigation.NivelCurso,
                    TipoCurso = e.IdCandidatoNavigation.TipoCurso,
                    NomeCurso = e.IdCandidatoNavigation.NomeCurso,
                    Turma = e.IdCandidatoNavigation.Turma,
                    Turno = e.IdCandidatoNavigation.Turno,
                    Termo = e.IdCandidatoNavigation.Termo,
                    FotoPerfil = e.IdCandidatoNavigation.FotoPerfil,
                    TituloPerfil = e.IdCandidatoNavigation.TituloPerfil,
                    Habilidade = e.IdCandidatoNavigation.Habilidade,
                    NivelIngles = e.IdCandidatoNavigation.NivelIngles,
                    Descricao = e.IdCandidatoNavigation.Descricao,
                    UrlLinkedin = e.IdCandidatoNavigation.UrlLinkedin,
                    UrlGitHub = e.IdCandidatoNavigation.UrlLinkedin,
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
                
                IdEmpresaNavigation = new Empresa()
                {
                    IdEmpresa = e.IdEmpresaNavigation.IdEmpresa,
                    AnexarLogo = e.IdEmpresaNavigation.AnexarLogo,
                    CargoArea = e.IdEmpresaNavigation.CargoArea,
                    WebSite = e.IdEmpresaNavigation.WebSite,
                    Cnpj = e.IdEmpresaNavigation.Cnpj,
                    RamoEmpresa = e.IdEmpresaNavigation.RamoEmpresa,
                    DescricaoEmpresa = e.IdEmpresaNavigation.DescricaoEmpresa,
                    LocalizacaoEmpresa = e.IdEmpresaNavigation.LocalizacaoEmpresa,
                    EncontrouSenai = e.IdEmpresaNavigation.EncontrouSenai,
                    
                    IdUsuarioNavigation =  new Usuario()
                    {
                        Nome = e.IdEmpresaNavigation.IdUsuarioNavigation.Nome,
                        Email = e.IdEmpresaNavigation.IdUsuarioNavigation.Email,
                        DataNascimento = e.IdEmpresaNavigation.IdUsuarioNavigation.DataNascimento,
                        Senha = e.IdEmpresaNavigation.IdUsuarioNavigation.Senha,
                        Telefone = e.IdEmpresaNavigation.IdUsuarioNavigation.Telefone,

                        IdTipoUsuarioNavigation = new TipoUsuario()
                        {
                            IdTipoUsuario = e.IdEmpresaNavigation.IdUsuarioNavigation.IdTipoUsuarioNavigation.IdTipoUsuario,
                            TituloTipoUsuario = e.IdEmpresaNavigation.IdUsuarioNavigation.IdTipoUsuarioNavigation.TituloTipoUsuario,
                        }
                    }
                }
            })
                .ToList();
        }
    }
}
