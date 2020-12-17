using GoVagas.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoVagas.Interfaces
{
    interface IVagaRepository
    {
        List<Vaga> ListarTodos();
        public Vaga BuscarPorId(int id);
        void Cadastrar(Vaga novoVaga);
        void Atualizar(int id, Vaga VagaAtualizado);
        void Deletar(int id);
    }
}
