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
            return ctx.Vaga.Include(e => e.IdEmpresaNavigation)
            .ThenInclude(u => u.IdUsuarioNavigation)
            .Include(e => e.Inscricao)
                .FirstOrDefault(ca => ca.IdVaga == id);
        }

        public List<Vaga> ListarPorIdEmpresa(int id)
        {
            return ctx.Vaga.Include(e => e.IdEmpresaNavigation)
            .ThenInclude(u => u.IdUsuarioNavigation)

            .Where(c => c.IdEmpresaNavigation.IdUsuarioNavigation.IdUsuario == id)

            .ToList();


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
            return ctx.Vaga.Select(e => new Vaga()
            {
                IdVaga = e.IdVaga,
                TituloVaga = e.TituloVaga,
                PerfilDev = e.PerfilDev,
                DiasContrato = e.DiasContrato,
                TempoExp = e.TempoExp,
                HabNecessaria = e.HabNecessaria,
                LocalVaga = e.LocalVaga,
                ReqVaga = e.ReqVaga,
                NivelExp = e.NivelExp,
                DescAtivFuncoes = e.DescAtivFuncoes,
                TipoContrato = e.TipoContrato,
                ExpertiseVaga = e.ExpertiseVaga,
                TrabalhoRemoto = e.TrabalhoRemoto,
                OutraCidade = e.OutraCidade,
                ValorSalario = e.ValorSalario,
                OfertaExtra = e.OfertaExtra,

                IdEmpresaNavigation = new Empresa()
                {
                    IdEmpresa = e.IdEmpresaNavigation.IdEmpresa,
                    AnexarLogo = e.IdEmpresaNavigation.AnexarLogo,
                    CargoArea = e.IdEmpresaNavigation.CargoArea,
                    WebSite = e.IdEmpresaNavigation.WebSite,
                    NomeEmpresa = e.IdEmpresaNavigation.NomeEmpresa,
                    Cnpj = e.IdEmpresaNavigation.Cnpj,
                    RamoEmpresa = e.IdEmpresaNavigation.RamoEmpresa,
                    DescricaoEmpresa = e.IdEmpresaNavigation.DescricaoEmpresa,
                    LocalizacaoEmpresa = e.IdEmpresaNavigation.LocalizacaoEmpresa,
                    EncontrouSenai = e.IdEmpresaNavigation.EncontrouSenai,

                    IdUsuarioNavigation = new Usuario()
                    {
                        IdTipoUsuario = e.IdEmpresaNavigation.IdUsuarioNavigation.IdTipoUsuario,
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
