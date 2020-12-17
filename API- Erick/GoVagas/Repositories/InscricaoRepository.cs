using GoVagas.Contexts;
using GoVagas.Domains;
using GoVagas.Interfaces;
using Microsoft.EntityFrameworkCore;
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
            Inscricao inscricaoBuscado = ctx.Inscricao.Find(id);
            ctx.Inscricao.Update(inscricaoBuscado);
            ctx.SaveChanges();
        }

        public Inscricao BuscarPorId(int id)
        {
            return ctx.Inscricao.Include(c => c.IdVagaNavigation)
                .ThenInclude(c => c.IdEmpresaNavigation)
                .ThenInclude(c => c.IdUsuarioNavigation)
                .Include(c => c.IdCandidatoNavigation)
                .ThenInclude(c => c.IdUsuarioNavigation)
                .FirstOrDefault(ca => ca.IdInscricao == id);
        }

        public List<Inscricao> ListarPorIdCandidato(int id)
        {
            return ctx.Inscricao.Include(c => c.IdVagaNavigation)
                .ThenInclude(c => c.IdEmpresaNavigation)
                .Include(c => c.IdCandidatoNavigation)
                .Where(c => c.IdCandidatoNavigation.IdCandidato == id)
                .ToList();
        }


        public List<Inscricao> ListarPorIdEmpresa(int id)
        {
            return ctx.Inscricao.Include(c => c.IdVagaNavigation)
                .ThenInclude(c => c.IdEmpresaNavigation)
                //.ThenInclude(u => u.IdUsuarioNavigation)
                .Include(c => c.IdCandidatoNavigation)
                .ThenInclude(u => u.IdUsuarioNavigation)
                .Where(c => c.IdVagaNavigation.IdEmpresaNavigation.IdEmpresa == id)
                .ToList();
        }

        public List<Inscricao> ListarPorIdVaga(int id)
        {
            return ctx.Inscricao.Include(c => c.IdVagaNavigation)
                .ThenInclude(c => c.IdEmpresaNavigation)
                //.ThenInclude(u => u.IdUsuarioNavigation)
                .Include(c => c.IdCandidatoNavigation)
                .ThenInclude(u => u.IdUsuarioNavigation)
                .Where(c => c.IdVaga == id)
                .ToList();
        }

        public void Cadastrar(Inscricao novoInscricao)
        {
            //modificacao 06/11
            novoInscricao.DataInscricao = DateTime.Now;
            ctx.Inscricao.Add(novoInscricao);
            ctx.SaveChanges();
        }


        public void Deletar(int id)
        {
            Inscricao InscricaoBuscado = ctx.Inscricao.Find(id);
            ctx.Inscricao.Remove(InscricaoBuscado);
            ctx.SaveChanges();
        }

        //public List<Inscricao> ListarTodos()
        //{
        //    return ctx.Inscricao.Include(c => c.IdVagaNavigation)
        //        .ThenInclude(c => c.IdEmpresaNavigation)
        //        .Include(c => c.IdCandidatoNavigation)
        //        .ThenInclude(c => c.IdUsuarioNavigation)
        //        .ToList();
        //}

        public List<Inscricao> ListarTodos()
        {
            return ctx.Inscricao.Select(e => new Inscricao()
            {
                IdInscricao = e.IdInscricao,
                DataInscricao = e.DataInscricao,

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
                    ValorSalario =  e.IdVagaNavigation.ValorSalario,
                    OfertaExtra = e.IdVagaNavigation.OfertaExtra,
                    
                    IdEmpresaNavigation = new Empresa()
                    {
                        IdEmpresa = e.IdVagaNavigation.IdEmpresaNavigation.IdEmpresa,
                        AnexarLogo = e.IdVagaNavigation.IdEmpresaNavigation.AnexarLogo,
                        CargoArea = e.IdVagaNavigation.IdEmpresaNavigation.CargoArea,
                        WebSite = e.IdVagaNavigation.IdEmpresaNavigation.WebSite,
                        NomeEmpresa = e.IdVagaNavigation.IdEmpresaNavigation.NomeEmpresa,
                        Cnpj = e.IdVagaNavigation.IdEmpresaNavigation.Cnpj,
                        RamoEmpresa = e.IdVagaNavigation.IdEmpresaNavigation.RamoEmpresa,
                        DescricaoEmpresa = e.IdVagaNavigation.IdEmpresaNavigation.DescricaoEmpresa,
                        LocalizacaoEmpresa = e.IdVagaNavigation.IdEmpresaNavigation.LocalizacaoEmpresa,
                        EncontrouSenai = e.IdVagaNavigation.IdEmpresaNavigation.EncontrouSenai,
                    }
                },

                IdCandidatoNavigation = new Candidato()
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
                    UrlGitHub = e.IdCandidatoNavigation.UrlGitHub,
                    Curriculo = e.IdCandidatoNavigation.Curriculo,
                    PretensaoSalario = e.IdCandidatoNavigation.PretensaoSalario,
                    Personalidade = e.IdCandidatoNavigation.Personalidade,
                    FocoCarreira = e.IdCandidatoNavigation.FocoCarreira,
                    ExpertiseCandidato = e.IdCandidatoNavigation.ExpertiseCandidato,
                    ExperienciaPro  = e.IdCandidatoNavigation.ExperienciaPro,
                    NomeEmpresa = e.IdCandidatoNavigation.NomeEmpresa,
                    PerfilEmpresa = e.IdCandidatoNavigation.PerfilEmpresa,
                    CargoEmpresa = e.IdCandidatoNavigation.CargoEmpresa,
                    DataInicio = e.IdCandidatoNavigation.DataInicio,
                    DataTermino = e.IdCandidatoNavigation.DataTermino,
                    TamanhoEmpresa = e.IdCandidatoNavigation.TamanhoEmpresa,
                    TipoContrato = e.IdCandidatoNavigation.TipoContrato,
                    TrabalharRemoto = e.IdCandidatoNavigation.TrabalharRemoto,
                    DeficienteFisico = e.IdCandidatoNavigation.DeficienteFisico,

                    IdUsuarioNavigation = new Usuario()
                    {
                        IdUsuario = e.IdCandidatoNavigation.IdUsuarioNavigation.IdUsuario,
                        Nome = e.IdCandidatoNavigation.IdUsuarioNavigation.Nome,
                        Email = e.IdCandidatoNavigation.IdUsuarioNavigation.Email,
                        DataNascimento = e.IdCandidatoNavigation.IdUsuarioNavigation.DataNascimento,
                        Senha = e.IdCandidatoNavigation.IdUsuarioNavigation.Senha,
                        Telefone = e.IdCandidatoNavigation.IdUsuarioNavigation.Telefone,
                        

                        IdTipoUsuarioNavigation = new TipoUsuario()
                        {
                            IdTipoUsuario = e.IdCandidatoNavigation.IdUsuarioNavigation.IdTipoUsuarioNavigation.IdTipoUsuario,
                            TituloTipoUsuario = e.IdCandidatoNavigation.IdUsuarioNavigation.IdTipoUsuarioNavigation.TituloTipoUsuario,
                        }
                    }
                }
            })
                .ToList();        
        }
    }
}
