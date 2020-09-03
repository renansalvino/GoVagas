-- Banco de dados da plataforma GoVagas, proposto pela E.SENAI de Informática --
CREATE DATABASE GoVagas
-- Usando Banco de dados criado na linha acima --
USE GoVagas

--Tabela de Tipo de Usuario --
CREATE TABLE TipoUsuario (
IdTipoUsuario		INT PRIMARY KEY IDENTITY
,TipoUsuario		VARCHAR(255)
);

-- Tabela de Usuário --
CREATE TABLE Usuario (
IdUsuario			INT PRIMARY KEY IDENTITY
,Nome				VARCHAR(255)
,Email				VARCHAR(255)
,Data_Nascimento	DATETIME2
,Senha				VARCHAR(255)
,Telefone			VARCHAR(255)
,IdTipoUsuario		INT FOREIGN KEY REFERENCES TipoUsuario (IdTipoUsuario)
);

-- Tabela de Administrador --
CREATE TABLE Administrador (
IdAdministrador		INT PRIMARY KEY IDENTITY
,CPF				CHAR(11)
,Usuario			INT FOREIGN KEY REFERENCES Usuario (IdUsuario)
);

-- Tabela de Empresa --
CREATE TABLE Empresa (
IdEmpresa			INT PRIMARY KEY IDENTITY
,Anexar_Logo		VARBINARY(MAX)
,Cargo_Area			VARCHAR(255)
,WebSite			VARCHAR(255)
,CNPJ				CHAR(14)
,Tipo_Empresa		VARCHAR(255)
,Descrição_Empresa	TEXT
,Localizacao		VARCHAR(255)
,EncontrouSenai		VARCHAR(255) -- Foreach --
,IdUsuario			INT FOREIGN KEY REFERENCES Usuario (IdUsuario)
);

--Tabela de Candidato --
CREATE TABLE Candidato (
IdCandidato				INT PRIMARY KEY IDENTITY
-- Sobre Você --
,CPF				CHAR(11)
,Cidade				VARCHAR(255)
-- Apresentação --
,Titulo_Perfil		TEXT
,Curso				VARCHAR(255)
,Nivel_Ingles		VARCHAR(255) --Foreach--
,Descrição			TEXT
,URL_Linkedin		TEXT
,URL_GitHub			TEXT
,Curriculo			VARBINARY(MAX)
-- Habilidades--
,Foco_Carreira		VARCHAR(255)
,Habilidade			VARCHAR(255)
,SoftSkills			VARCHAR(255)
-- Experiência profissioal (se não tiver ignorar esses quadros) --
,Nome_Empresa		VARCHAR(255)
,Perfil_Empresa		VARCHAR(255)
,Cargo_Empresa		VARCHAR(255)
,Data_Inicio		DATETIME2
,Data_Termino		DATETIME2
,Trabalha_Aqui_At	BIT
,Hab_Contrato		VARCHAR(255) --Selecionarno mínimo 4 --
,Atividades			VARCHAR(255)
,Personalidade		VARCHAR(255)
);

--Tabela de Documentação --
CREATE TABLE Documentacao (
IdDocumentacao		INT PRIMARY KEY IDENTITY
,Resposavel_Vaga	VARCHAR(255)
,Data_Inicio		DATETIME2
,Data_Termino_Prev	DATETIME2
,Data_Termino_Efe	DATETIME2
,Razao_Termino		TEXT
,Status_Vaga		TEXT
,Dias_Contrato		DATETIME2
,Req_Matricula		VARBINARY(MAX)
,Tipo_Contrato		BIT
,Plano_Estagio		VARCHAR(255)
,Desligamento		VARCHAR(255)
,Qtd_Avaliacoes		CHAR
,Prorrogacoes		VARCHAR(255)
,ProrrogDias_Contr	VARCHAR(255)
,Avalicoes_Prorrog	VARCHAR(255)
,Avaliacao1			VARBINARY(MAX)
,Avaliacao2			VARBINARY(MAX)
,Avaliacao3			VARBINARY(MAX)
,Avaliacao4			VARBINARY(MAX)
,Termo_Egresso		VARCHAR(255)
,Motivo_Evasao		VARCHAR(255)
,Modelo_Doc			VARBINARY(MAX)
,IdEmpresa			INT FOREIGN KEY REFERENCES Empresa (IdEmpresa)
,IdAdministrador	INT FOREIGN KEY REFERENCES Administrador (IdAdministrador)	
);

--Tabela de Vaga --
CREATE TABLE Vaga (
IdVaga				INT PRIMARY KEY IDENTITY
,Titulo_Vaga		VARCHAR(255)
,Perfil_Dev			VARCHAR(255)
,Dias_Contrato		VARCHAR(255)
,Nivel_Exp			TEXT
,Hab_Necessaria		VARCHAR(255)
,Local_Vaga			VARCHAR(255)
,ReqVaga			VARCHAR(255)
,Desc_Ativ_Funcoes	TEXT
,Tipo_Contrato		BIT
,Expertise_Vaga		VARCHAR(255)
,Aceita_Trab_Remoto	BIT
,Cand_Outra_Cid		BIT
,Valor_Salario		DECIMAL (19,4)
,Oferta_Extra		VARCHAR(255)
,IdEmpresa			INT FOREIGN KEY REFERENCES Empresa (IdEmpresa)
);

-- Tabela de Inscrição --
CREATE TABLE Inscricao	(
IdInscricao			INT PRIMARY KEY IDENTITY
,Nome_Candi			VARCHAR(255)
,Nome_Vaga			VARCHAR(255)
,Cadastre_se		VARCHAR(255)
,Recusar			BIT
,IdCandidato		INT FOREIGN KEY REFERENCES Candidato (IdCandidato)
,IdVaga				INT FOREIGN KEY REFERENCES Vaga	(IdVaga)
);