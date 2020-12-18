﻿using GoVagas.Domains;
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
        List<Inscricao> ListarPorIdCandidato(int id);
        List<Inscricao> ListarPorIdEmpresa(int id);
        List<Inscricao> ListarPorIdVaga(int id);
        void Cadastrar(Inscricao novoInscricao);
        void Atualizar(int id, Inscricao InscricaoAtualizado);
        void Deletar(int id);
    }
}
