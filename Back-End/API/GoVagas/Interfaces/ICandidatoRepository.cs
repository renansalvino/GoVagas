using GoVagas.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoVagas.Interfaces
{
    interface ICandidatoRepository
    {
       List<Candidato> ListarTodos();
       public Candidato BuscarPorId(int id);
       void Cadastrar (Candidato novoCandidato);
       void Atualizar (int id,Candidato candidatoAtualizado);
       void Deletar (int id);

    }
}
