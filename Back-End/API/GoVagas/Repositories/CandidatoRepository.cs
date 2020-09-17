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
    public class CandidatoRepository : ICandidatoRepository
    {

        GoVagasContext ctx = new GoVagasContext();
            
        public void Atualizar(int id, Candidato CandidatoAtualizado)
        {
            Candidato CandidatoBuscado = ctx.Candidato.FirstOrDefault(e => e.IdCandidato == id);

            Usuario UsuarioBuscado = ctx.Usuario.FirstOrDefault(u => u.IdUsuario == CandidatoBuscado.IdUsuario);

            //Gambiarra do matheus
            CandidatoBuscado.IdUsuarioNavigation = UsuarioBuscado;


            if (CandidatoBuscado.NumMatricula != null)
            {
                CandidatoBuscado.NumMatricula = CandidatoAtualizado.NumMatricula;
            }
            if (CandidatoBuscado.Cpf != CandidatoBuscado.Cpf)
            {
                CandidatoBuscado.Cpf = CandidatoAtualizado.Cpf;
            }
            if (CandidatoBuscado.Sexo != null)
            {
                CandidatoBuscado.Sexo = CandidatoAtualizado.Sexo;
            }
            if (CandidatoBuscado.DataMatricula != null)
            {
                CandidatoBuscado.DataMatricula = CandidatoAtualizado.DataMatricula;
            }
            if (CandidatoBuscado.Raca != null)
            {
                CandidatoBuscado.Raca = CandidatoAtualizado.Raca;
            }
            if (CandidatoBuscado.Cidade != null)
            {
                CandidatoBuscado.Cidade = CandidatoAtualizado.Cidade;
            }
            if (CandidatoBuscado.NivelCurso != null)
            {
                CandidatoBuscado.NivelCurso = CandidatoAtualizado.NivelCurso;
            }
            if (CandidatoBuscado.TipoCurso != null)
            {
                CandidatoBuscado.TipoCurso = CandidatoAtualizado.TipoCurso;
            }
            if (CandidatoBuscado.NomeCurso != null)
            {
                CandidatoBuscado.NomeCurso = CandidatoAtualizado.NomeCurso;
            }
            if (CandidatoBuscado.Turma != null)
            {
                CandidatoBuscado.Turma = CandidatoAtualizado.Turma;
            }
            if (CandidatoBuscado.Turno != null)
            {
                CandidatoBuscado.Turno = CandidatoAtualizado.Turno;
            }
            if (CandidatoBuscado.Termo != null)
            {
                CandidatoBuscado.Termo = CandidatoAtualizado.Termo;
            }
            if (CandidatoBuscado.FotoPerfil != null)
            {
                CandidatoBuscado.FotoPerfil = CandidatoAtualizado.FotoPerfil;
            }
            if (CandidatoBuscado.TituloPerfil != null)
            {
                CandidatoBuscado.TituloPerfil = CandidatoAtualizado.TituloPerfil;
            }
            if (CandidatoBuscado.Habilidade != null)
            {
                CandidatoBuscado.Habilidade = CandidatoAtualizado.Habilidade;
            }
            if (CandidatoBuscado.NivelIngles != null)
            {
                CandidatoBuscado.NivelIngles = CandidatoAtualizado.NivelIngles;
            }
            if (CandidatoBuscado.Descricao != null)
            {
                CandidatoBuscado.Descricao = CandidatoAtualizado.Descricao;
            }
            if (CandidatoBuscado.UrlLinkedin != null)
            {
                CandidatoBuscado.UrlLinkedin = CandidatoAtualizado.UrlLinkedin;
            }
            if (CandidatoBuscado.UrlGitHub != null)
            {
                CandidatoBuscado.UrlGitHub = CandidatoAtualizado.UrlGitHub;
            }
            if (CandidatoBuscado.Curriculo != null)
            {
                CandidatoBuscado.Curriculo = CandidatoAtualizado.Curriculo;
            }
            if (CandidatoBuscado.PretensaoSalario != null)
            {
                CandidatoBuscado.PretensaoSalario = CandidatoAtualizado.PretensaoSalario;
            }
            if (CandidatoBuscado.Personalidade != null)
            {
                CandidatoBuscado.Personalidade = CandidatoAtualizado.Personalidade;
            }
            if (CandidatoBuscado.FocoCarreira != null)
            {
                CandidatoBuscado.FocoCarreira = CandidatoAtualizado.FocoCarreira;
            }
            if (CandidatoBuscado.ExpertiseCandidato != null)
            {
                CandidatoBuscado.ExpertiseCandidato = CandidatoAtualizado.ExpertiseCandidato;
            }
            if (CandidatoBuscado.ExperienciaPro != null)
            {
                CandidatoBuscado.ExperienciaPro = CandidatoAtualizado.ExperienciaPro;
            }
            if (CandidatoBuscado.PerfilEmpresa != null)
            {
                CandidatoBuscado.PerfilEmpresa = CandidatoAtualizado.PerfilEmpresa;
            }
            if (CandidatoBuscado.CargoEmpresa != null)
            {
                CandidatoBuscado.CargoEmpresa = CandidatoAtualizado.CargoEmpresa;
            }
            if (CandidatoBuscado.DataInicio != null)
            {
                CandidatoBuscado.DataInicio = CandidatoAtualizado.DataInicio;
            }
            if (CandidatoBuscado.DataTermino != null)
            {
                CandidatoBuscado.DataTermino = CandidatoAtualizado.DataTermino;
            }
            if (CandidatoBuscado.TamanhoEmpresa != null)
            {
                CandidatoBuscado.TamanhoEmpresa = CandidatoAtualizado.TamanhoEmpresa;
            }
            if (CandidatoBuscado.TipoContrato != null)
            {
                CandidatoBuscado.TipoContrato = CandidatoAtualizado.TipoContrato;
            }
            if (CandidatoBuscado.TrabalharRemoto)
            {
                CandidatoBuscado.TrabalharRemoto = CandidatoAtualizado.TrabalharRemoto;
            }
            if (CandidatoBuscado.DeficienteFisico)
            {
                CandidatoBuscado.DeficienteFisico = CandidatoAtualizado.DeficienteFisico;
            }
            if (CandidatoBuscado.IdUsuario != null)
            {
                CandidatoBuscado.IdUsuario = CandidatoAtualizado.IdUsuario;
            }

            if (CandidatoBuscado.IdUsuarioNavigation.Nome != null)
            {
                CandidatoBuscado.IdUsuarioNavigation.Nome = CandidatoAtualizado.IdUsuarioNavigation.Nome;
            }
            if (CandidatoBuscado.IdUsuarioNavigation.Email != null)
            {
                CandidatoBuscado.IdUsuarioNavigation.Email = CandidatoAtualizado.IdUsuarioNavigation.Email;
            }
            if (CandidatoBuscado.IdUsuarioNavigation.DataNascimento != null)
            {
                CandidatoBuscado.IdUsuarioNavigation.DataNascimento = CandidatoAtualizado.IdUsuarioNavigation.DataNascimento;
            }
            if (CandidatoBuscado.IdUsuarioNavigation.Senha != null)
            {
                CandidatoBuscado.IdUsuarioNavigation.Senha = CandidatoAtualizado.IdUsuarioNavigation.Senha;
            }
            if (CandidatoBuscado.IdUsuarioNavigation.Telefone != null)
            {
                CandidatoBuscado.IdUsuarioNavigation.Telefone = CandidatoAtualizado.IdUsuarioNavigation.Telefone;
            }

            ctx.Candidato.Update(CandidatoBuscado);
            ctx.SaveChanges();

        }

        public Candidato BuscarPorId(int id)
        {
            return ctx.Candidato.FirstOrDefault(ca => ca.IdCandidato == id);
        }

        public void Cadastrar(Candidato novoCandidato)
        {
            ctx.Candidato.Include(e => e.IdUsuarioNavigation);
            ctx.Candidato.Add(novoCandidato);
            ctx.SaveChanges();
        }
        

        public void Deletar(int id)
        {
            Candidato CandidatoBuscado = ctx.Candidato.FirstOrDefault(e => e.IdCandidato == id);

            Usuario UsuarioBuscado = ctx.Usuario.FirstOrDefault(u => u.IdUsuario == CandidatoBuscado.IdUsuario);

            if (CandidatoBuscado.IdUsuario == UsuarioBuscado.IdUsuario)
            {
                ctx.Usuario.Remove(UsuarioBuscado);
                ctx.Candidato.Remove(CandidatoBuscado);
                ctx.SaveChanges();
            }
        }
       

        public List<Candidato> ListarTodos()
        {
            return ctx.Candidato
                .Select(e => new Candidato()
                {
                    IdCandidato = e.IdCandidato,
                    NumMatricula = e.NumMatricula,
                    NomeEmpresa = e.NomeEmpresa,
                    Cpf = e.Cpf,
                    Sexo = e.Sexo,
                    DataMatricula = e.DataMatricula,
                    Raca = e.Raca,
                    Cidade = e.Cidade,
                    NivelCurso = e.NivelCurso,
                    TipoCurso = e.TipoCurso,
                    NomeCurso = e.NomeCurso,
                    Turma = e.Turma,
                    Turno = e.Turno,
                    Termo = e.Termo,
                    FotoPerfil = e.FotoPerfil,
                    TituloPerfil = e.TituloPerfil,
                    Habilidade = e.Habilidade,
                    NivelIngles = e.NivelIngles,
                    Descricao = e.Descricao,
                    UrlLinkedin = e.UrlLinkedin,
                    UrlGitHub = e.UrlGitHub,
                    Curriculo = e.Curriculo,
                    PretensaoSalario = e.PretensaoSalario,
                    Personalidade = e.Personalidade,
                    FocoCarreira = e.FocoCarreira,
                    ExpertiseCandidato = e.ExpertiseCandidato,
                    ExperienciaPro = e.ExperienciaPro,
                    PerfilEmpresa = e.PerfilEmpresa,
                    CargoEmpresa = e.CargoEmpresa,
                    DataInicio = e.DataInicio,
                    DataTermino = e.DataTermino,
                    TamanhoEmpresa = e.TamanhoEmpresa,
                    TipoContrato = e.TipoContrato,
                    TrabalharRemoto = e.TrabalharRemoto,
                    DeficienteFisico = e.DeficienteFisico,


                    IdUsuarioNavigation = new Usuario()
                    {
                        IdUsuario = e.IdUsuarioNavigation.IdUsuario,
                        Nome = e.IdUsuarioNavigation.Nome,
                        Email = e.IdUsuarioNavigation.Email,
                        DataNascimento = e.IdUsuarioNavigation.DataNascimento,
                        Telefone = e.IdUsuarioNavigation.Telefone,
                        IdTipoUsuario = e.IdUsuarioNavigation.IdTipoUsuario
                    }
                })
                .ToList();
        }
    }
}
