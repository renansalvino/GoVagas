using System;
using System.Collections.Generic;

namespace GoVagas.Domains
{
    public partial class Empresa
    {
        public Empresa()
        {
            Documentacao = new HashSet<Documentacao>();
            Vaga = new HashSet<Vaga>();
        }

        public int IdEmpresa { get; set; }
        public byte[] AnexarLogo { get; set; }
        public string CargoArea { get; set; }
        public string WebSite { get; set; }
        public string NomeEmpresa { get; set; }
        public string Cnpj { get; set; }
        public string RamoEmpresa { get; set; }
        public string DescricaoEmpresa { get; set; }
        public string LocalizacaoEmpresa { get; set; }
        public string EncontrouSenai { get; set; }
        public int? IdUsuario { get; set; }

        public virtual Usuario IdUsuarioNavigation { get; set; }
        public virtual ICollection<Documentacao> Documentacao { get; set; }
        public virtual ICollection<Vaga> Vaga { get; set; }
    }
}
