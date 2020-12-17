using GoVagas.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoVagas.Interfaces
{
    interface IAdministradorRepository
    {
        List<Administrador> ListarTodos();
        public Administrador BuscarPorId(int id);
        void Cadastrar(Administrador novoAdministrador);
        void Atualizar(int id, Administrador AdministradorAtualizado);
        void Deletar(int id);
    }
}
