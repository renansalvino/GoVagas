using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GoVagas.ViewModels
{
    /// <summary>
    /// Classe que representa um modelo para Login
    /// </summary>
    public class LoginViewModel
    {
        // Define que o e-mail é obrigatório
        [Required(ErrorMessage = "Informe o e-mail")]
        // Define o tipo do dado
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [Required(ErrorMessage = "Informe a senha")]
        [DataType(DataType.Password)]
        public string Senha { get; set; }
        
    }
}
