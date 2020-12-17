using GoVagas.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoVagas.Interfaces
{
    interface IInscricaoRepository
    {
        List<Inscricao> ListarTodos();
        public Inscricao BuscarPorId(int id);
        void Cadastrar(Inscricao novoInscricao);
        void Atualizar(int id, Inscricao InscricaoAtualizado);
        void Deletar(int id);
    }
}
