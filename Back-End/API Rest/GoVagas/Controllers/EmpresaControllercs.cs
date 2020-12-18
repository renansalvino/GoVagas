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

    public class EmpresaController : ControllerBase
    {
        private IImpresaRepository _EmpresaRepository;

        public EmpresaController()
        {
            _EmpresaRepository = new EmpresaRepository();
        }

        /// <summary>
        ///  Lista os Empresas
        /// </summary>
        /// <returns>Retorna uma lisa de Empresas</returns>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_EmpresaRepository.ListarTodos());
        }
        /// <summary>
        /// Lista um Empresa passando seu respectivo ID na URL
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Retorna um Status Code 200</returns>
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            return StatusCode(200, _EmpresaRepository.BuscarPorId(id));
        }
        /// <summary>
        /// Cadastra um novo Empresa
        /// </summary>
        /// <param name="novoEmpresa"></param>
        /// <returns> Status Code 201</returns>
        [HttpPost]
        public IActionResult Post(Empresa novoEmpresa)
        {
            novoEmpresa.IdUsuarioNavigation.IdTipoUsuario = 2;

            _EmpresaRepository.Cadastrar(novoEmpresa);

            return StatusCode(201);
        }
        /// <summary>
        /// Atualiza os Empresas passando o ID pela URL
        /// </summary>
        /// <param name="id"></param>
        /// <param name="EmpresaAtualizado"></param>
        /// <returns> Status Cdoe 404</returns>
        [HttpPut("{id}")]
        public IActionResult Put(int id, Empresa EmpresaAtualizado)
        {
            Empresa EmpresaBuscado = _EmpresaRepository.BuscarPorId(id);

            if (EmpresaBuscado != null)
            {
                try
                {
                    _EmpresaRepository.Atualizar(id, EmpresaAtualizado);

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
            Empresa EmpresaBuscado = _EmpresaRepository.BuscarPorId(id);

            if (EmpresaBuscado == null)
            {
                return NotFound();
            }

            _EmpresaRepository.Deletar(id);

            return StatusCode(202);
        }
    }
}
