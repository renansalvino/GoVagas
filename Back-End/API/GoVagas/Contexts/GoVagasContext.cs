using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using GoVagas.Domains;

namespace GoVagas.Contexts
{
    public partial class GoVagasContext : DbContext
    {
        public GoVagasContext()
        {
        }

        public GoVagasContext(DbContextOptions<GoVagasContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Administrador> Administrador { get; set; }
        public virtual DbSet<Candidato> Candidato { get; set; }
        public virtual DbSet<Documentacao> Documentacao { get; set; }
        public virtual DbSet<Empresa> Empresa { get; set; }
        public virtual DbSet<Inscricao> Inscricao { get; set; }
        public virtual DbSet<TipoUsuario> TipoUsuario { get; set; }
        public virtual DbSet<Usuario> Usuario { get; set; }
        public virtual DbSet<Vaga> Vaga { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=OFF-WHITE\\SQLEXPRESS; Initial Catalog=GoVagas; user Id=sa; pwd=sa@132;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Administrador>(entity =>
            {
                entity.HasKey(e => e.IdAdministrador)
                    .HasName("PK__Administ__2B3E34A8C470D7A0");

                entity.Property(e => e.Cpf)
                    .IsRequired()
                    .HasColumnName("CPF")
                    .HasMaxLength(11)
                    .IsUnicode(false)
                    .IsFixedLength();

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Administrador)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK__Administr__IdUsu__4316F928");
            });

            modelBuilder.Entity<Candidato>(entity =>
            {
                entity.HasKey(e => e.IdCandidato)
                    .HasName("PK__Candidat__D55989056AC7C995");

                entity.Property(e => e.CargoEmpresa)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Cidade)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Cpf)
                    .IsRequired()
                    .HasColumnName("CPF")
                    .HasMaxLength(11)
                    .IsUnicode(false)
                    .IsFixedLength();

                entity.Property(e => e.DataInicio).HasColumnType("date");

                entity.Property(e => e.DataMatricula).HasColumnType("date");

                entity.Property(e => e.DataTermino).HasColumnType("date");

                entity.Property(e => e.Descricao).HasColumnType("text");

                entity.Property(e => e.ExperienciaPro)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ExpertiseCandidato)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.FocoCarreira)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Habilidade)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.NivelCurso)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.NivelIngles)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.NomeCurso)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.NomeEmpresa)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.NumMatricula)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.PerfilEmpresa)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Personalidade)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.PretensaoSalario).HasColumnType("money");

                entity.Property(e => e.Raca)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Sexo)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.TamanhoEmpresa)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Termo)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.TipoContrato)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.TipoCurso)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.TituloPerfil)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Turma)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Turno)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.UrlGitHub)
                    .IsRequired()
                    .HasColumnType("text");

                entity.Property(e => e.UrlLinkedin)
                    .IsRequired()
                    .HasColumnType("text");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Candidato)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK__Candidato__IdUsu__3D5E1FD2");
            });

            modelBuilder.Entity<Documentacao>(entity =>
            {
                entity.HasKey(e => e.IdDocumentacao)
                    .HasName("PK__Document__7F91479A5753C909");

                entity.Property(e => e.AvalicoesProrrog)
                    .HasMaxLength(1)
                    .IsUnicode(false)
                    .IsFixedLength();

                entity.Property(e => e.DataAvaliacao1).HasColumnType("date");

                entity.Property(e => e.DataAvaliacao2).HasColumnType("date");

                entity.Property(e => e.DataAvaliacao3).HasColumnType("date");

                entity.Property(e => e.DataAvaliacao4).HasColumnType("date");

                entity.Property(e => e.DataInicio).HasColumnType("date");

                entity.Property(e => e.DataTerminoEfe).HasColumnType("date");

                entity.Property(e => e.DataTerminoPrev).HasColumnType("date");

                entity.Property(e => e.DiasContrato)
                    .IsRequired()
                    .HasMaxLength(3)
                    .IsUnicode(false)
                    .IsFixedLength();

                entity.Property(e => e.MotivoEvasao)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ProrrogDiasContrato)
                    .HasMaxLength(3)
                    .IsUnicode(false)
                    .IsFixedLength();

                entity.Property(e => e.Prorrogacoes).HasColumnType("date");

                entity.Property(e => e.QtdAvaliacoes)
                    .HasMaxLength(1)
                    .IsUnicode(false)
                    .IsFixedLength();

                entity.Property(e => e.ReqMatricula)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ResposavelVaga)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.StatusDoc)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdCandidatoNavigation)
                    .WithMany(p => p.Documentacao)
                    .HasForeignKey(d => d.IdCandidato)
                    .HasConstraintName("FK__Documenta__IdCan__46E78A0C");

                entity.HasOne(d => d.IdEmpresaNavigation)
                    .WithMany(p => p.Documentacao)
                    .HasForeignKey(d => d.IdEmpresa)
                    .HasConstraintName("FK__Documenta__IdEmp__45F365D3");
            });

            modelBuilder.Entity<Empresa>(entity =>
            {
                entity.HasKey(e => e.IdEmpresa)
                    .HasName("PK__Empresa__5EF4033EE65FD73B");

                entity.Property(e => e.CargoArea)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Cnpj)
                    .IsRequired()
                    .HasColumnName("CNPJ")
                    .HasMaxLength(14)
                    .IsUnicode(false)
                    .IsFixedLength();

                entity.Property(e => e.DescricaoEmpresa)
                    .IsRequired()
                    .HasColumnType("text");

                entity.Property(e => e.EncontrouSenai)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.LocalizacaoEmpresa)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.NomeEmpresa)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.RamoEmpresa)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.WebSite)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Empresa)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK__Empresa__IdUsuar__403A8C7D");
            });

            modelBuilder.Entity<Inscricao>(entity =>
            {
                entity.HasKey(e => e.IdInscricao)
                    .HasName("PK__Inscrica__6209444BD84C16D3");

                entity.Property(e => e.DataInscricao).HasColumnType("datetime");

                entity.HasOne(d => d.IdCandidatoNavigation)
                    .WithMany(p => p.Inscricao)
                    .HasForeignKey(d => d.IdCandidato)
                    .HasConstraintName("FK__Inscricao__IdCan__49C3F6B7");
            });

            modelBuilder.Entity<TipoUsuario>(entity =>
            {
                entity.HasKey(e => e.IdTipoUsuario)
                    .HasName("PK__TipoUsua__CA04062B30F96787");

                entity.Property(e => e.TituloTipoUsuario)
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .HasName("PK__Usuario__5B65BF97213EB3E7");

                entity.HasIndex(e => e.Email)
                    .HasName("UQ__Usuario__A9D10534576160E1")
                    .IsUnique();

                entity.Property(e => e.DataNascimento).HasColumnType("date");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Senha)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Telefone)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .IsFixedLength();

                entity.HasOne(d => d.IdTipoUsuarioNavigation)
                    .WithMany(p => p.Usuario)
                    .HasForeignKey(d => d.IdTipoUsuario)
                    .HasConstraintName("FK__Usuario__IdTipoU__3A81B327");
            });

            modelBuilder.Entity<Vaga>(entity =>
            {
                entity.HasKey(e => e.IdVaga)
                    .HasName("PK__Vaga__A848DC3E9B354CDC");

                entity.Property(e => e.DescAtivFuncoes)
                    .IsRequired()
                    .HasColumnType("text");

                entity.Property(e => e.DiasContrato)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ExpertiseVaga)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.HabNecessaria)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.LocalVaga)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.NivelExp)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.OfertaExtra)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.PerfilDev)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ReqVaga)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.TempoExp)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.TituloVaga)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ValorSalario).HasColumnType("money");

                entity.HasOne(d => d.IdEmpresaNavigation)
                    .WithMany(p => p.Vaga)
                    .HasForeignKey(d => d.IdEmpresa)
                    .HasConstraintName("FK__Vaga__IdEmpresa__4D94879B");

                entity.HasOne(d => d.IdInscricaoNavigation)
                    .WithMany(p => p.Vaga)
                    .HasForeignKey(d => d.IdInscricao)
                    .HasConstraintName("FK__Vaga__IdInscrica__4CA06362");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
