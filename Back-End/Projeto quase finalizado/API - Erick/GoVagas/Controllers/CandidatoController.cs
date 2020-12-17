using Microsoft.AspNetCore.Mvc;
using GoVagas.Domains;
using GoVagas.Interfaces;
using GoVagas.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace GoVagas.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]

    public class CandidatoController : ControllerBase
    {
        private ICandidatoRepository _CandidatoRepository;

        public CandidatoController()
        {
            _CandidatoRepository = new CandidatoRepository();
        }

        /// <summary>
        ///  Lista os Candidatos
        /// </summary>
        /// <returns>Retorna uma lisa de candidatos</returns>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_CandidatoRepository.ListarTodos());
        }
        /// <summary>
        /// Lista um candidato passando seu respectivo ID na URL
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Retorna um Status Code 200</returns>
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            return StatusCode(200, _CandidatoRepository.BuscarPorId(id));
        }
        /// <summary>
        /// Cadastra um novo Candidato
        /// </summary>
        /// <param name="novoCandidato"></param>
        /// <returns> Status Code 201</returns>
        [HttpPost]
        public IActionResult Post(Candidato novoCandidato)
        {
            _CandidatoRepository.Cadastrar(novoCandidato);

            return StatusCode(201);
        }
        /// <summary>
        /// Atualiza os candidatos passando o ID pela URL
        /// </summary>
        /// <param name="id"></param>
        /// <param name="CandidatoAtualizado"></param>
        /// <returns> Status Cdoe 404</returns>
        [HttpPut("{id}")]
        public IActionResult Put(int id, Candidato CandidatoAtualizado)
        {
            Candidato CandidatoBuscado = _CandidatoRepository.BuscarPorId(id);

            if (CandidatoBuscado != null)
            {
                try
                {
                    _CandidatoRepository.Atualizar(id, CandidatoAtualizado);

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
        /// Deleta um usuário passando um ID pela solução
        /// </summary>
        /// <param name="id"></param>
        /// <returns> Stattus Code 200</returns>
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Candidato CandidatoBuscado = _CandidatoRepository.BuscarPorId(id);

            if (CandidatoBuscado == null)
            {
                return NotFound();
            }

            _CandidatoRepository.Deletar(id);

            return StatusCode(202);
        }
    }
}

