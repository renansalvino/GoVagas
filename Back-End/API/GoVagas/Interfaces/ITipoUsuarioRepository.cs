using GoVagas.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoVagas.Interfaces
{
    interface ITipoUsuarioRepository
    {
        List<TipoUsuario> ListarTodos();
        public TipoUsuario BuscarPorId(int id);
        void Cadastrar(TipoUsuario novoTipoUsuario);
        void Atualizar(int id, TipoUsuario TipoUsuarioAtualizado);
        void Deletar(int id);
    }
}
