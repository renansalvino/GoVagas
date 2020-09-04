-- Banco de dados da plataforma GoVagas, proposto pela E.SENAI de Informática --
CREATE DATABASE GoVagas
-- Usando Banco de dados criado na linha acima --
USE GoVagas

--Tabela de Tipo de Usuario --
CREATE TABLE TipoUsuario (
IdTipoUsuario			INT PRIMARY KEY IDENTITY 
,TituloTipoUsuario		VARCHAR(255)
);

-- Tabela de Usuário --
CREATE TABLE Usuario (
IdUsuario				INT PRIMARY KEY IDENTITY 
,Nome					VARCHAR(255)	NOT NULL
,Email					VARCHAR(255)	NOT NULL UNIQUE
,DataNascimento			DATE			NOT NULL
,Senha					VARCHAR(255)	NOT NULL
,Telefone				CHAR			NOT NULL 
,IdTipoUsuario			INT FOREIGN KEY REFERENCES TipoUsuario (IdTipoUsuario) 
);



--Tabela de Candidato --
CREATE TABLE Candidato (
IdCandidato				INT PRIMARY KEY IDENTITY 
-- Sobre Você --
,NumMatricula			VARCHAR(255)	NOT NULL
,CPF					CHAR(11)		NOT NULL
,Sexo					VARCHAR(255)	NOT NULL
,DataMatricula			DATE			NOT NULL
,Raca					VARCHAR(255) 
,Cidade					VARCHAR(255)	NOT NULL
,NivelCurso				VARCHAR(255)	NOT NULL
,TipoCurso				VARCHAR(255)	NOT NULL
,NomeCurso				VARCHAR(255)	NOT NULL
,Turma					VARCHAR(255)	NOT NULL
,Turno					VARCHAR(255)	NOT NULL
,Termo					VARCHAR(255)	NOT NULL
-- Apresentação --
,FotoPerfil				VARBINARY(MAX)  
,TituloPerfil			VARCHAR(255)	
,CursoFeito				VARCHAR(255)	NOT NULL
,NivelIngles			VARCHAR(255)	--Foreach--
,Descricao				TEXT			
,UrlLinkedin			TEXT			NOT NULL
,UrlGitHub				TEXT			NOT NULL
,Curriculo				TEXT			NOT NULL
,PretensaoSalario		DECIMAL			
,Personalidade			VARCHAR(255)	NOT NULL
-- Habilidades--
,FocoCarreira			VARCHAR(255)	NOT NULL
,ExperienciaPro			VARCHAR(255)	NOT NULL
,Habilidade				VARCHAR(255)	NOT NULL --Selecionarno mínimo 3 --
,JaTrabalhou			BIT				NOT NULL
-- Experiência profissioal (se não tiver ignorar esses quadros) --
,NomeEmpresa			VARCHAR(255)	NOT NULL
,PerfilEmpresa			VARCHAR(255)	NOT NULL
,CargoEmpresa			VARCHAR(255)	NOT NULL
,DataInicio				SMALLDATETIME	NOT NULL
,DataTermino			SMALLDATETIME	NOT NULL
,TamanhoEmpresa			VARCHAR(255)	NOT NULL
,TipoContrato			BIT				NOT NULL	
,TrabalharRemoto		BIT				NOT NULL
,DeficienteFisico		BIT				NOT NULL
);

-- Tabela de Empresa --
CREATE TABLE Empresa (
IdEmpresa				INT PRIMARY KEY IDENTITY 
,AnexarLogo				VARBINARY(MAX)	NOT NULL
,CargoArea				VARCHAR(255)	NOT NULL
,WebSite				VARCHAR(255)
,NomeEmpresa			VARCHAR(255)	NOT NULL
,CNPJ					CHAR(14)		NOT NULL
,TipoEmpresa			VARCHAR(255)	
,DescriçãoEmpresa		TEXT			NOT NULL
,LocalizacaoEmpresa		VARCHAR(255)	NOT NULL
,EncontrouSenai			VARCHAR(255)	-- Foreach --
,IdUsuario				INT FOREIGN KEY REFERENCES Usuario (IdUsuario)
);

-- Tabela de Administrador --
CREATE TABLE Administrador (
IdAdministrador			INT PRIMARY KEY IDENTITY 
,CPF					CHAR(11)		NOT NULL
,Usuario				INT FOREIGN KEY REFERENCES Usuario (IdUsuario)
);


--Tabela de Documentação --
CREATE TABLE Documentacao (
IdDocumentacao			INT PRIMARY KEY IDENTITY
,ResposavelVaga			VARCHAR(255)	NOT NULL
,DataInicio				DATE			NOT NULL
,DataTerminoPrev		DATE			NOT NULL
,DataTerminoEfe			DATE			NOT NULL
,StatusDoc				VARCHAR(255)	NOT NULL
,DiasContrato			DATE			NOT NULL
,ReqMatricula			VARBINARY(MAX)	NOT NULL
,TipoContrato			BIT				NOT NULL	
,PlanoEstagio			BIT	
,Desligamento			VARCHAR(255)
,QtdAvaliacoes			VARBINARY(MAX)  NOT NULL
,Prorrogacoes			VARCHAR(255)
,ProrrogDiasContrato	VARCHAR(255)
,AvalicoesProrrog		VARCHAR(255)
,Avaliacao1				VARBINARY(MAX)	NOT NULL
,Avaliacao2				VARBINARY(MAX)
,Avaliacao3				VARBINARY(MAX)
,Avaliacao4				VARBINARY(MAX)
,TermoEgresso			BIT				 
,MotivoEvasao			VARCHAR(255)		
,ModeloDoc				VARBINARY(MAX)	
,IdEmpresa				INT FOREIGN KEY REFERENCES Empresa (IdEmpresa)
,IdCandidato			INT FOREIGN KEY REFERENCES Candidato (IdCandidato)	
);

-- Tabela de Inscrição --
CREATE TABLE Inscricao	(
IdInscricao				INT PRIMARY KEY IDENTITY
,DataInscricao			DATETIME		
,IdCandidato			INT FOREIGN KEY REFERENCES Candidato (IdCandidato)
);

--Tabela de Vaga --
CREATE TABLE Vaga (
IdVaga					INT PRIMARY KEY IDENTITY
,TituloVaga				VARCHAR(255)	NOT NULL
,PerfilDev				VARCHAR(255)	NOT NULL
,DiasContrato			VARCHAR(255)	NOT NULL
,TempoExp				VARCHAR(255)	NOT NULL
,HabNecessaria			VARCHAR(255)	NOT NULL
,LocalVaga				VARCHAR(255)	
,ReqVaga				VARCHAR(255)	NOT NULL
,NivelExp				VARCHAR(255)	NOT NULL
,DescAtivFuncoes		TEXT			NOT NULL
,TipoContrato			BIT				NOT NULL
,ExpertiseVaga			VARCHAR(255)	
,TrabalhoRemoto			BIT				NOT NULL
,OutraCidade			BIT				
,ValorSalario			DECIMAL (19,4)	
,OfertaExtra			VARCHAR(255)	
,IdInscricao			INT FOREIGN KEY REFERENCES Inscricao (IdInscricao)
,IdEmpresa				INT FOREIGN KEY REFERENCES Empresa (IdEmpresa)
);

