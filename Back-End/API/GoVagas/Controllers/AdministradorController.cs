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

    public class AdministradorController : ControllerBase
    {
        private IAdministradorRepository _AdministradorRepository;

        public AdministradorController()
        {
            _AdministradorRepository = new AdministradorRepository();
        }

        /// <summary>
        ///  Lista os Administradors
        /// </summary>
        /// <returns>Retorna uma lisa de Administradors</returns>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_AdministradorRepository.ListarTodos());
        }
        /// <summary>
        /// Lista um Administrador passando seu respectivo ID na URL
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Retorna um Status Code 200</returns>
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            return StatusCode(200, _AdministradorRepository.BuscarPorId(id));
        }
        /// <summary>
        /// Cadastra um novo Administrador
        /// </summary>
        /// <param name="novoAdministrador"></param>
        /// <returns> Status Code 201</returns>
        [HttpPost]
        public IActionResult Post(Administrador novoAdministrador)
        {
            _AdministradorRepository.Cadastrar(novoAdministrador);

            return StatusCode(201);
        }
        /// <summary>
        /// Atualiza os Administradors passando o ID pela URL
        /// </summary>
        /// <param name="id"></param>
        /// <param name="AdministradorAtualizado"></param>
        /// <returns> Status Cdoe 404</returns>
        [HttpPut("{id}")]
        public IActionResult Put(int id, Administrador AdministradorAtualizado)
        {
            Administrador AdministradorBuscado = _AdministradorRepository.BuscarPorId(id);

            if (AdministradorBuscado != null)
            {
                try
                {
                    _AdministradorRepository.Atualizar(id, AdministradorAtualizado);

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
            Administrador AdministradorBuscado = _AdministradorRepository.BuscarPorId(id);

            if (AdministradorBuscado == null)
            {
                return NotFound();
            }

            _AdministradorRepository.Deletar(id);

            return StatusCode(202);
        }
    }
}
