using System;
using System.Collections.Generic;

namespace GoVagas.Domains
{
    public partial class Administrador
    {
        public int IdAdministrador { get; set; }
        public string Cpf { get; set; }
        public int? IdUsuario { get; set; }

        public virtual Usuario IdUsuarioNavigation { get; set; }
    }
}
