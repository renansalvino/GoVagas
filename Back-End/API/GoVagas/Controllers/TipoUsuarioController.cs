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

    public class TipoUsuarioController : ControllerBase
    {
        private ITipoUsuarioRepository _TipoUsuarioRepository;

        public TipoUsuarioController()
        {
            _TipoUsuarioRepository = new TipoUsuarioRepository();
        }

        /// <summary>
        ///  Lista os TipoUsuarios
        /// </summary>
        /// <returns>Retorna uma lisa de TipoUsuarios</returns>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_TipoUsuarioRepository.ListarTodos());
        }
        /// <summary>
        /// Lista um TipoUsuario passando seu respectivo ID na URL
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Retorna um Status Code 200</returns>
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            return StatusCode(200, _TipoUsuarioRepository.BuscarPorId(id));
        }
        /// <summary>
        /// Cadastra um novo TipoUsuario
        /// </summary>
        /// <param name="novoTipoUsuario"></param>
        /// <returns> Status Code 201</returns>
        [HttpPost]
        public IActionResult Post(TipoUsuario novoTipoUsuario)
        {
            _TipoUsuarioRepository.Cadastrar(novoTipoUsuario);

            return StatusCode(201);
        }
        /// <summary>
        /// Atualiza os TipoUsuarios passando o ID pela URL
        /// </summary>
        /// <param name="id"></param>
        /// <param name="TipoUsuarioAtualizado"></param>
        /// <returns> Status Cdoe 404</returns>
        [HttpPut("{id}")]
        public IActionResult Put(int id, TipoUsuario TipoUsuarioAtualizado)
        {
            TipoUsuario TipoUsuarioBuscado = _TipoUsuarioRepository.BuscarPorId(id);

            if (TipoUsuarioBuscado != null)
            {
                try
                {
                    _TipoUsuarioRepository.Atualizar(id, TipoUsuarioAtualizado);

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
            TipoUsuario TipoUsuarioBuscado = _TipoUsuarioRepository.BuscarPorId(id);

            if (TipoUsuarioBuscado == null)
            {
                return NotFound();
            }

            _TipoUsuarioRepository.Deletar(id);

            return StatusCode(202);
        }
    }
}
