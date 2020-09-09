using System;
using System.Collections.Generic;

namespace GoVagas.Domains
{
    public partial class Inscricao
    {
        public Inscricao()
        {
            Vaga = new HashSet<Vaga>();
        }

        public int IdInscricao { get; set; }
        public DateTime? DataInscricao { get; set; }
        public int? IdCandidato { get; set; }

        public virtual Candidato IdCandidatoNavigation { get; set; }
        public virtual ICollection<Vaga> Vaga { get; set; }
    }
}
