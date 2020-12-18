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
    public class EmpresaRepository : IImpresaRepository
    {
        GoVagasContext ctx = new GoVagasContext();

        public void Atualizar(int id, Empresa EmpresaAtualizado)
        {
            Empresa EmpresaBuscada = ctx.Empresa.FirstOrDefault(e => e.IdEmpresa == id);

            Usuario UsuarioBuscado = ctx.Usuario.FirstOrDefault(u => u.IdUsuario == EmpresaBuscada.IdUsuario);

            //Gambiarra do matheus
            EmpresaBuscada.IdUsuarioNavigation = UsuarioBuscado;


            if (EmpresaBuscada.AnexarLogo != null)
            {
                EmpresaBuscada.AnexarLogo = EmpresaAtualizado.AnexarLogo;
            }
            if (EmpresaBuscada.NomeEmpresa != null)
            {
                EmpresaBuscada.NomeEmpresa = EmpresaAtualizado.NomeEmpresa;
            }
            if (EmpresaBuscada.WebSite != null)
            {
                EmpresaBuscada.WebSite = EmpresaAtualizado.WebSite;
            }
            if (EmpresaBuscada.CargoArea != null)
            {
                EmpresaBuscada.CargoArea = EmpresaAtualizado.CargoArea;
            }
            if (EmpresaBuscada.Cnpj != EmpresaAtualizado.Cnpj)
            {
                EmpresaBuscada.Cnpj = EmpresaAtualizado.Cnpj;
            }
            if (EmpresaBuscada.RamoEmpresa != null)
            {
                EmpresaBuscada.RamoEmpresa = EmpresaAtualizado.RamoEmpresa;
            }
            if (EmpresaBuscada.DescricaoEmpresa != null)
            {
                EmpresaBuscada.DescricaoEmpresa = EmpresaAtualizado.DescricaoEmpresa;
            }
            if (EmpresaBuscada.LocalizacaoEmpresa != null)
            {
                EmpresaBuscada.LocalizacaoEmpresa = EmpresaAtualizado.LocalizacaoEmpresa;
            }
            if (EmpresaBuscada.EncontrouSenai != null)
            {
                EmpresaBuscada.EncontrouSenai = EmpresaAtualizado.EncontrouSenai;
            }
            if (EmpresaBuscada.IdUsuarioNavigation.Nome != null)
            {
                EmpresaBuscada.IdUsuarioNavigation.Nome = EmpresaAtualizado.IdUsuarioNavigation.Nome;
            }
            if (EmpresaBuscada.IdUsuarioNavigation.Email != null)
            {
                EmpresaBuscada.IdUsuarioNavigation.Email = EmpresaAtualizado.IdUsuarioNavigation.Email;
            }
            if (EmpresaBuscada.IdUsuarioNavigation.DataNascimento != null)
            {
                EmpresaBuscada.IdUsuarioNavigation.DataNascimento = EmpresaAtualizado.IdUsuarioNavigation.DataNascimento;
            }
            if (EmpresaBuscada.IdUsuarioNavigation.Senha != null)
            {
                EmpresaBuscada.IdUsuarioNavigation.Senha = EmpresaAtualizado.IdUsuarioNavigation.Senha;
            }
            if (EmpresaBuscada.IdUsuarioNavigation.Telefone != null)
            {
                EmpresaBuscada.IdUsuarioNavigation.Telefone = EmpresaAtualizado.IdUsuarioNavigation.Telefone;
            }

            ctx.Empresa.Update(EmpresaBuscada);
            ctx.SaveChanges();

        }

        public Empresa BuscarPorId(int id)
        {
            return ctx.Empresa.Include(u => u.IdUsuarioNavigation)
                .FirstOrDefault(ca => ca.IdEmpresa == id);
        }

        public void Cadastrar(Empresa novoEmpresa)
        {
            ctx.Empresa.Include(e => e.IdUsuarioNavigation);
            ctx.Empresa.Add(novoEmpresa);
            ctx.SaveChanges();
        }


        public void Deletar(int id)
        {
            Empresa EmpresaBuscada = ctx.Empresa.FirstOrDefault(e => e.IdEmpresa == id);

            Usuario UsuarioBuscado = ctx.Usuario.FirstOrDefault(u => u.IdUsuario == EmpresaBuscada.IdUsuario);

            if (EmpresaBuscada.IdUsuario == UsuarioBuscado.IdUsuario)
            {
                ctx.Usuario.Remove(UsuarioBuscado);
                ctx.Empresa.Remove(EmpresaBuscada);
                ctx.SaveChanges();
            }
        }




        public List<Empresa> ListarTodos()
        {
            return ctx.Empresa
                .Select(e => new Empresa()
                {
                    IdEmpresa = e.IdEmpresa,
                    AnexarLogo = e.AnexarLogo,
                    NomeEmpresa = e.NomeEmpresa,
                    WebSite = e.WebSite,
                    CargoArea = e.CargoArea,
                    Cnpj = e.Cnpj,
                    RamoEmpresa = e.RamoEmpresa,
                    DescricaoEmpresa = e.DescricaoEmpresa,
                    LocalizacaoEmpresa = e.LocalizacaoEmpresa,
                    EncontrouSenai = e.EncontrouSenai,

                    IdUsuarioNavigation = new Usuario()
                    {
                        IdUsuario = e.IdUsuarioNavigation.IdUsuario,
                        Nome = e.IdUsuarioNavigation.Nome,
                        Email = e.IdUsuarioNavigation.Email,
                        DataNascimento = e.IdUsuarioNavigation.DataNascimento,
                        Telefone = e.IdUsuarioNavigation.Telefone,
                        

                        IdTipoUsuarioNavigation = new TipoUsuario()
                        {
                            IdTipoUsuario = e.IdUsuarioNavigation.IdTipoUsuarioNavigation.IdTipoUsuario,
                            TituloTipoUsuario = e.IdUsuarioNavigation.IdTipoUsuarioNavigation.TituloTipoUsuario,
                        }
                    }
                })
                .ToList();
        }
    }
}
