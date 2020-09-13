using GoVagas.Contexts;
using GoVagas.Domains;
using GoVagas.Interfaces;
using Microsoft.AspNetCore.DataProtection.XmlEncryption;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;
using System.Threading.Tasks;

namespace GoVagas.Repositories
{
    public class DocumentacaoRepository : IDocumentacaoRepository
    {
       GoVagasContext ctx =  new GoVagasContext();
        public void Atualizar(int id, Documentacao DocumentoAtualizado)
        {
            Documentacao documentoBuscado = ctx.Documentacao.Find(id);
            ctx.Documentacao.Update(documentoBuscado);
            ctx.SaveChanges();
        }

        public Documentacao BuscarPorId(int id)
        {
            return ctx.Documentacao.FirstOrDefault(x => x.IdDocumentacao == id);
        }

        public void Cadastrar(Documentacao Documentonovo)
        {
            ctx.Documentacao.Add(Documentonovo);
            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            Documentacao documentoBuscado = ctx.Documentacao.Find(id);
            ctx.Documentacao.Remove(documentoBuscado);
            ctx.SaveChanges();
        }

        public List<Documentacao> ListarTodos()
        {
            return ctx.Documentacao.ToList();
        }
    }
}
