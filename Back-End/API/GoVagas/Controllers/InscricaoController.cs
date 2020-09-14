using GoVagas.Domains;
using GoVagas.Interfaces;
using GoVagas.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoVagas.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]

    public class InscricaoController : ControllerBase
    {
        private IInscricaoRepository _InscricaoRepository;

        public InscricaoController()
        {
            _InscricaoRepository = new InscricaoRepository();
        }

        /// <summary>
        ///  Lista as Incrições
        /// </summary>
        /// <returns>Retorna uma lisa de Inscricaos</returns>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_InscricaoRepository.ListarTodos());
        }
        /// <summary>
        /// Lista uma Inscricão passando seu respectivo ID na URL
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Retorna um Status Code 200</returns>
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            return StatusCode(200, _InscricaoRepository.BuscarPorId(id));
        }
        /// <summary>
        /// Cadastra um novo Inscricão
        /// </summary>
        /// <param name="novoInscricao"></param>
        /// <returns> Status Code 201</returns>
        [HttpPost]
        public IActionResult Post(Inscricao novoInscricao)
        {
            _InscricaoRepository.Cadastrar(novoInscricao);

            return StatusCode(201);
        }
        /// <summary>
        /// Atualiza as Inscricões passando o ID pela URL
        /// </summary>
        /// <param name="id"></param>
        /// <param name="InscricaoAtualizado"></param>
        /// <returns> Status Code 404</returns>
        [HttpPut("{id}")]
        public IActionResult Put(int id, Inscricao InscricaoAtualizado)
        {
            Inscricao InscricaoBuscado = _InscricaoRepository.BuscarPorId(id);

            if (InscricaoBuscado != null)
            {
                try
                {
                    _InscricaoRepository.Atualizar(id, InscricaoAtualizado);

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
        /// Deleta um usuário passando seu respectivo ID pela solução
        /// </summary>
        /// <param name="id"></param>
        /// <returns> Stattus Code 200</returns>
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Inscricao InscricaoBuscado = _InscricaoRepository.BuscarPorId(id);

            if (InscricaoBuscado == null)
            {
                return NotFound();
            }

            _InscricaoRepository.Deletar(id);

            return StatusCode(202);
        }
    }
}
