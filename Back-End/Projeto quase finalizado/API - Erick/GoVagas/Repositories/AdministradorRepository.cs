using GoVagas.Contexts;
using GoVagas.Domains;
using GoVagas.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoVagas.Repositories
{    public class AdministradorRepository : IAdministradorRepository
    {
        GoVagasContext ctx = new GoVagasContext();

        public void Atualizar(int id, Administrador AdministradorAtualizado)
        {
            Administrador AdministradorBuscado = ctx.Administrador.Find(id);


            Usuario UsuarioBuscado = ctx.Usuario.FirstOrDefault(u => u.IdUsuario == AdministradorBuscado.IdUsuario);


            AdministradorBuscado.IdUsuarioNavigation = UsuarioBuscado;

            if (AdministradorBuscado != null)
            {
                if (AdministradorAtualizado.Cpf != null)
                {
                    AdministradorBuscado.Cpf = AdministradorAtualizado.Cpf;
                }


                if (AdministradorBuscado.IdUsuarioNavigation.Nome != null)
                {
                    AdministradorBuscado.IdUsuarioNavigation.Nome = AdministradorAtualizado.IdUsuarioNavigation.Nome;
                }
                if (AdministradorBuscado.IdUsuarioNavigation.Email != null)
                {
                    AdministradorBuscado.IdUsuarioNavigation.Email = AdministradorAtualizado.IdUsuarioNavigation.Email;
                }
                if (AdministradorBuscado.IdUsuarioNavigation.DataNascimento != null)
                {
                    AdministradorBuscado.IdUsuarioNavigation.DataNascimento = AdministradorAtualizado.IdUsuarioNavigation.DataNascimento;
                }
                if (AdministradorBuscado.IdUsuarioNavigation.Senha != null)
                {
                    AdministradorBuscado.IdUsuarioNavigation.Senha = AdministradorAtualizado.IdUsuarioNavigation.Senha;
                }
                if (AdministradorBuscado.IdUsuarioNavigation.Telefone != null)
                {
                    AdministradorBuscado.IdUsuarioNavigation.Telefone = AdministradorAtualizado.IdUsuarioNavigation.Telefone;
                }




                ctx.Administrador.Update(AdministradorBuscado);
                ctx.SaveChanges();
            }
        }
        public Administrador BuscarPorId(int id)
        {
            return ctx.Administrador.FirstOrDefault(ca => ca.IdAdministrador == id);
        }

        public void Cadastrar(Administrador novoAdministrador)
        {
            ctx.Administrador.Add(novoAdministrador);
            ctx.SaveChanges();
        }



        public void Deletar(int id)
        {
            Administrador AdministradorBuscado = ctx.Administrador.FirstOrDefault(e => e.IdAdministrador == id);

            Usuario UsuarioBuscado = ctx.Usuario.FirstOrDefault(u => u.IdUsuario == AdministradorBuscado.IdUsuario);

            if (AdministradorBuscado.IdUsuario == UsuarioBuscado.IdUsuario)
            {
                ctx.Usuario.Remove(UsuarioBuscado);
                ctx.Administrador.Remove(AdministradorBuscado);
                ctx.SaveChanges();
            }
        }



        public List<Administrador> ListarTodos()
        {
            return ctx.Administrador
                .Select(e => new Administrador()
                {
                    IdAdministrador = e.IdAdministrador,
                    Cpf = e.Cpf,
                    IdUsuario = e.IdUsuario,

                    IdUsuarioNavigation = new Usuario()
                    {
                        IdUsuario = e.IdUsuarioNavigation.IdUsuario,
                        Nome = e.IdUsuarioNavigation.Nome,
                        Email = e.IdUsuarioNavigation.Email,
                        DataNascimento = e.IdUsuarioNavigation.DataNascimento,
                        Senha = e.IdUsuarioNavigation.Senha,
                        Telefone = e.IdUsuarioNavigation.Telefone,
                        IdTipoUsuario = e.IdUsuarioNavigation.IdTipoUsuario
                    }
                })
                .ToList();
        }
    }
}
