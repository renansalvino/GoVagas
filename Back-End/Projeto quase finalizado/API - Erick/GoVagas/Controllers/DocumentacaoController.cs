using GoVagas.Domains;
using GoVagas.Interfaces;
using GoVagas.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;
using System.Threading.Tasks;

namespace GoVagas.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]

    public class DocumentacaoController : ControllerBase
    {
        private IDocumentacaoRepository _DocumentacaoRepository;

        public DocumentacaoController()
        {
            _DocumentacaoRepository = new DocumentacaoRepository();
        }
        /// <summary>
        /// Lista todos os documentos existentes
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_DocumentacaoRepository.ListarTodos());
        }
        /// <summary>
        /// Lista um documento com o id respectivo ao colocado na URL
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public IActionResult GetById ( int id)
        {
            return StatusCode(200, _DocumentacaoRepository.BuscarPorId(id));
        }
        /// <summary>
        /// Atualiza um documento existente com o ID respectivo da URL
        /// </summary>
        /// <param name="id"></param>
        /// <param name="documentoAtualizado"></param>
        /// <returns></returns>
        [HttpPut("{id}")]
        public IActionResult Put(int id, Documentacao documentoAtualizado)
        {
            Documentacao documentoBuscado = _DocumentacaoRepository.BuscarPorId(id);
            if (documentoAtualizado != null)
            {
                try
                {
                    _DocumentacaoRepository.Atualizar(id, documentoAtualizado);
                    return StatusCode(200);
                }
                catch (Exception erro)
                {
                    return BadRequest(erro);
                }
            }
            return StatusCode(404);
        }
        /// <summary>
        /// Cadastra um novo documento
        /// </summary>
        /// <param name="novoDocumento"></param>
        /// <returns></returns>
        [HttpPost]
        public IActionResult Post(Documentacao novoDocumento)
        {
            _DocumentacaoRepository.Cadastrar(novoDocumento);
            return StatusCode(201);
        }
        /// <summary>
        /// Deleta o documento com o ID respectivo passado na URL
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Documentacao documetoBuscado = _DocumentacaoRepository.BuscarPorId(id);
            if (documetoBuscado == null)
            {
                return NotFound();
            }
            _DocumentacaoRepository.Deletar(id);

            return StatusCode(202);
        }
    }
}
