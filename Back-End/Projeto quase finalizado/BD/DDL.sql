-- Banco de dados da plataforma GoVagas, proposto pela E.SENAI de Informática --
CREATE DATABASE GoVagas
-- Usando Banco de dados criado na linha acima --
USE GoVagas
GO

--Tabela de Tipo de Usuario --
CREATE TABLE TipoUsuario (
IdTipoUsuario			INT PRIMARY KEY IDENTITY 
,TituloTipoUsuario		VARCHAR(255)
);
GO

-- Tabela de Usuário --
CREATE TABLE Usuario (
IdUsuario				INT PRIMARY KEY IDENTITY 
,Nome					VARCHAR(255)	NOT NULL
,Email					VARCHAR(255)	NOT NULL UNIQUE
,DataNascimento			DATE			NOT NULL
,Senha					VARCHAR(255)	NOT NULL
,Telefone				CHAR(15)		NOT NULL 
,IdTipoUsuario			INT FOREIGN KEY REFERENCES TipoUsuario (IdTipoUsuario) 
);
GO

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
,TituloPerfil			VARCHAR(255)	NOT NULL
,Habilidade				VARCHAR(255)	NOT NULL --Selecionar no mínimo 3 --
,NivelIngles			VARCHAR(255)	--Foreach--
,Descricao				TEXT			
,UrlLinkedin			TEXT			NOT NULL
,UrlGitHub				TEXT			NOT NULL
,Curriculo				VARBINARY(MAX)	
,PretensaoSalario		MONEY			
,Personalidade			VARCHAR(255)	
,FocoCarreira			VARCHAR(255)	NOT NULL
,ExpertiseCandidato	    VARCHAR(255)
,ExperienciaPro			VARCHAR(255)	NOT NULL -- Se sim = tabela abaixo --
-- Experiência profissional
,NomeEmpresa			VARCHAR(255)	
,PerfilEmpresa			VARCHAR(255)	
,CargoEmpresa			VARCHAR(255)	
,DataInicio				DATE			
,DataTermino			DATE			
,TamanhoEmpresa			VARCHAR(255)	
,TipoContrato			VARCHAR(255)					
,TrabalharRemoto		BIT				NOT NULL
,DeficienteFisico		BIT				NOT NULL
,IdUsuario				INT FOREIGN KEY REFERENCES Usuario (IdUsuario)
);
GO

-- Tabela de Empresa --
CREATE TABLE Empresa (
IdEmpresa				INT PRIMARY KEY IDENTITY 
,AnexarLogo				VARBINARY(MAX)	
,CargoArea				VARCHAR(255)	NOT NULL
,WebSite				VARCHAR(255)	
,NomeEmpresa			VARCHAR(255)	NOT NULL
,CNPJ					CHAR(14)		NOT NULL
,RamoEmpresa			VARCHAR(255)	
,DescricaoEmpresa		TEXT			NOT NULL
,LocalizacaoEmpresa		VARCHAR(255)	NOT NULL
,EncontrouSenai			VARCHAR(255)	-- Foreach --
,IdUsuario				INT FOREIGN KEY REFERENCES Usuario (IdUsuario)
);
GO

-- Tabela de Administrador --
CREATE TABLE Administrador (
IdAdministrador			INT PRIMARY KEY IDENTITY 
,CPF					CHAR(11)		NOT NULL
,IdUsuario				INT FOREIGN KEY REFERENCES Usuario (IdUsuario)
);
GO

--Tabela de Documentação --
CREATE TABLE Documentacao (
IdDocumentacao			INT PRIMARY KEY IDENTITY
,ResposavelVaga			VARCHAR(255)	NOT NULL
,DataInicio				DATE			NOT NULL
,DataTerminoPrev		DATE			NOT NULL
,DataTerminoEfe			DATE			
,StatusDoc				VARCHAR(255)	NOT NULL
,DiasContrato			CHAR(3)			NOT NULL
,ReqMatricula			VARCHAR(255)	
,TipoContrato			BIT				NOT NULL	
,PlanoEstagio			BIT	
,Desligamento			BIT
,QtdAvaliacoes			CHAR(1) 
,Prorrogacoes			DATE
,ProrrogDiasContrato	CHAR(3)
,AvalicoesProrrog		CHAR(1)
,DataAvaliacao1			DATE	
,Avaliacao1				VARBINARY(MAX)	
,DataAvaliacao2			DATE
,Avaliacao2				VARBINARY(MAX)
,DataAvaliacao3			DATE
,Avaliacao3				VARBINARY(MAX)
,DataAvaliacao4			DATE
,Avaliacao4				VARBINARY(MAX)
,TermoEgresso			BIT				 
,MotivoEvasao			VARCHAR(255)		
,ModeloDoc				VARBINARY(MAX)	
,IdEmpresa				INT FOREIGN KEY REFERENCES Empresa (IdEmpresa)
,IdCandidato			INT FOREIGN KEY REFERENCES Candidato (IdCandidato)	
);
GO


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
,ValorSalario			MONEY	
,OfertaExtra			VARCHAR(255)	
,IdEmpresa				INT FOREIGN KEY REFERENCES Empresa (IdEmpresa)
);
GO

-- Tabela de Inscrição --
CREATE TABLE Inscricao	(
IdInscricao				INT PRIMARY KEY IDENTITY
,DataInscricao			DATETIME		
,IdCandidato			INT FOREIGN KEY REFERENCES Candidato (IdCandidato)
,IdVaga					INT FOREIGN KEY REFERENCES Vaga (IdVaga)
);