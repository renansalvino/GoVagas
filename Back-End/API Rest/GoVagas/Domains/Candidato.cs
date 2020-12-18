using System;
using System.Collections.Generic;

namespace GoVagas.Domains
{
    public partial class Candidato
    {
        public Candidato()
        {
            Documentacao = new HashSet<Documentacao>();
            Inscricao = new HashSet<Inscricao>();
        }

        public int IdCandidato { get; set; }
        public string NumMatricula { get; set; }
        public string Cpf { get; set; }
        public string Sexo { get; set; }
        public DateTime DataMatricula { get; set; }
        public string Raca { get; set; }
        public string Cidade { get; set; }
        public string NivelCurso { get; set; }
        public string TipoCurso { get; set; }
        public string NomeCurso { get; set; }
        public string Turma { get; set; }
        public string Turno { get; set; }
        public string Termo { get; set; }
        public byte[] FotoPerfil { get; set; }
        public string TituloPerfil { get; set; }
        public string Habilidade { get; set; }
        public string NivelIngles { get; set; }
        public string Descricao { get; set; }
        public string UrlLinkedin { get; set; }
        public string UrlGitHub { get; set; }
        public byte[] Curriculo { get; set; }
        public decimal? PretensaoSalario { get; set; }
        public string Personalidade { get; set; }
        public string FocoCarreira { get; set; }
        public string ExpertiseCandidato { get; set; }
        public string ExperienciaPro { get; set; }
        public string NomeEmpresa { get; set; }
        public string PerfilEmpresa { get; set; }
        public string CargoEmpresa { get; set; }
        public DateTime? DataInicio { get; set; }
        public DateTime? DataTermino { get; set; }
        public string TamanhoEmpresa { get; set; }
        public string TipoContrato { get; set; }
        public bool TrabalharRemoto { get; set; }
        public bool DeficienteFisico { get; set; }
        public int? IdUsuario { get; set; }

        public virtual Usuario IdUsuarioNavigation { get; set; }
        public virtual ICollection<Documentacao> Documentacao { get; set; }
        public virtual ICollection<Inscricao> Inscricao { get; set; }
    }
}
