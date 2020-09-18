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
    public class VagaController : ControllerBase
        {
            private IVagaRepository _VagaRepository;

            public VagaController()
            {
                _VagaRepository = new VagaRepository();
            }

            /// <summary>
            ///  Lista os Vagas
            /// </summary>
            /// <returns>Retorna uma lisa de Vagas</returns>
            [HttpGet]
            public IActionResult Get()
            {
                return Ok(_VagaRepository.ListarTodos());
            }
            /// <summary>
            /// Lista um Vaga passando seu respectivo ID na URL
            /// </summary>
            /// <param name="id"></param>
            /// <returns>Retorna um Status Code 200</returns>
            [HttpGet("{id}")]
            public IActionResult GetById(int id)
            {
                return StatusCode(200, _VagaRepository.BuscarPorId(id));
            }
            /// <summary>
            /// Cadastra um novo Vaga
            /// </summary>
            /// <param name="novoVaga"></param>
            /// <returns> Status Code 201</returns>
            [HttpPost]
            public IActionResult Post(Vaga novoVaga)
            {
                _VagaRepository.Cadastrar(novoVaga);

                return StatusCode(201);
            }
            /// <summary>
            /// Atualiza os Vagas passando o ID pela URL
            /// </summary>
            /// <param name="id"></param>
            /// <param name="VagaAtualizado"></param>
            /// <returns> Status Cdoe 404</returns>
            [HttpPut("{id}")]
            public IActionResult Put(int id, Vaga VagaAtualizado)
            {
                Vaga VagaBuscado = _VagaRepository.BuscarPorId(id);

                if (VagaBuscado != null)
                {
                    try
                    {
                        _VagaRepository.Atualizar(id, VagaAtualizado);

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
                Vaga VagaBuscado = _VagaRepository.BuscarPorId(id);

                if (VagaBuscado == null)
                {
                    return NotFound();
                }

                _VagaRepository.Deletar(id);

                return StatusCode(202);
            }
        }
}
