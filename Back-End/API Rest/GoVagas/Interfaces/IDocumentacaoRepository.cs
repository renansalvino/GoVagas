using GoVagas.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoVagas.Interfaces
{
    interface IDocumentacaoRepository
    {
        List<Documentacao> ListarTodos();
        public Documentacao BuscarPorId(int id);
        void Cadastrar(Documentacao Documentonovo);
        void Atualizar(int id, Documentacao DocumentoAtualizado);
        void Deletar(int id);
    }
}
