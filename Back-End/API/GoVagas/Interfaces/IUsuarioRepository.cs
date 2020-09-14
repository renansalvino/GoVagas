using GoVagas.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoVagas.Interfaces
{
    interface IUsuarioRepository
    {
        List<Usuario> ListarTodos();
        public Usuario BuscarPorId(int id);
        void Cadastrar(Usuario novoUsuario);
        void Atualizar(int id, Usuario UsuarioAtualizado);
        void Deletar(int id);
    }
}
