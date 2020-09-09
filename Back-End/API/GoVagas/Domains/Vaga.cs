using System;
using System.Collections.Generic;

namespace GoVagas.Domains
{
    public partial class Vaga
    {
        public int IdVaga { get; set; }
        public string TituloVaga { get; set; }
        public string PerfilDev { get; set; }
        public string DiasContrato { get; set; }
        public string TempoExp { get; set; }
        public string HabNecessaria { get; set; }
        public string LocalVaga { get; set; }
        public string ReqVaga { get; set; }
        public string NivelExp { get; set; }
        public string DescAtivFuncoes { get; set; }
        public bool TipoContrato { get; set; }
        public string ExpertiseVaga { get; set; }
        public bool TrabalhoRemoto { get; set; }
        public bool? OutraCidade { get; set; }
        public decimal? ValorSalario { get; set; }
        public string OfertaExtra { get; set; }
        public int? IdInscricao { get; set; }
        public int? IdEmpresa { get; set; }

        public virtual Empresa IdEmpresaNavigation { get; set; }
        public virtual Inscricao IdInscricaoNavigation { get; set; }
    }
}
