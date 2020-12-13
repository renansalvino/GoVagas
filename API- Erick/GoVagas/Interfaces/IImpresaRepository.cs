using GoVagas.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoVagas.Interfaces
{
    interface IImpresaRepository
    {
        List<Empresa> ListarTodos();
        public Empresa BuscarPorId(int id);
        void Cadastrar(Empresa novoEmpresa);
        void Atualizar(int id, Empresa EmpresaAtualizado);
        void Deletar(int id);
    }
}
