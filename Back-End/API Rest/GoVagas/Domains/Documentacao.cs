using System;
using System.Collections.Generic;

namespace GoVagas.Domains
{
    public partial class Documentacao
    {
        public int IdDocumentacao { get; set; }
        public string ResposavelVaga { get; set; }
        public DateTime DataInicio { get; set; }
        public DateTime DataTerminoPrev { get; set; }
        public DateTime? DataTerminoEfe { get; set; }
        public string StatusDoc { get; set; }
        public string DiasContrato { get; set; }
        public string ReqMatricula { get; set; }
        public bool TipoContrato { get; set; }
        public bool? PlanoEstagio { get; set; }
        public bool? Desligamento { get; set; }
        public string QtdAvaliacoes { get; set; }
        public DateTime? Prorrogacoes { get; set; }
        public string ProrrogDiasContrato { get; set; }
        public string AvalicoesProrrog { get; set; }
        public DateTime? DataAvaliacao1 { get; set; }
        public byte[] Avaliacao1 { get; set; }
        public DateTime? DataAvaliacao2 { get; set; }
        public byte[] Avaliacao2 { get; set; }
        public DateTime? DataAvaliacao3 { get; set; }
        public byte[] Avaliacao3 { get; set; }
        public DateTime? DataAvaliacao4 { get; set; }
        public byte[] Avaliacao4 { get; set; }
        public bool? TermoEgresso { get; set; }
        public string MotivoEvasao { get; set; }
        public byte[] ModeloDoc { get; set; }
        public int? IdEmpresa { get; set; }
        public int? IdCandidato { get; set; }

        public virtual Candidato IdCandidatoNavigation { get; set; }
        public virtual Empresa IdEmpresaNavigation { get; set; }
    }
}
