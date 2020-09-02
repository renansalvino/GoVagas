-- Banco de dados da plataforma GoVagas, proposto pela E.SENAI de Informática --
CREATE DATABASE GoVagas
-- Usando Banco de dados criado na linha acima --
USE GoVagas

-- Tabela de Usuário --
CREATE TABLE Usuario (
IdUsuario				INT PRIMARY KEY IDENTITY
,Nome				VARCHAR(255)
,Email				VARCHAR(255)
,DataNascimento		DATE
,Senha				VARCHAR(255)
,Telefone			VARCHAR(255)
);

-- Tabela de Administrador --
CREATE TABLE Administrador (
IdAdministrador	INT PRIMARY KEY IDENTITY
,CPF			VARCHAR(255)
,Usuario		INT FOREIGN KEY REFERENCES Usuario (IdUsuario)
);

-- Tabela de Empresa --
CREATE TABLE Empresa (
IdEmpresa			INT PRIMARY KEY IDENTITY
,Anexar_Logo		VARBINARY(MAX)
,Cargo_Area			VARCHAR(255)
,WebSite			VARCHAR(255)
,CNPJ				VARCHAR(255)
,Tipo_Empresa		VARCHAR(255)
,Descrição_Empresa	TEXT
,Localizacao		VARCHAR(255)
,EncontrouSenai		VARCHAR(255) -- Foreach --
,IdUsuario			INT FOREIGN KEY REFERENCES Usuario (IdUsuario)
);

--Tabela de aluno --
CREATE TABLE Candidato (
IdAluno			INT PRIMARY KEY IDENTITY
-- Sobre Você --
,CPF			VARCHAR(255)
,Cidade			VARCHAR(255)
-- Apresentação --
,Titulo_Perfil	TEXT
,Curso			VARCHAR(255)
,Nivel_Ingles	VARCHAR(255) --Foreach--
,Descrição		TEXT
,URL_Linkedin	TEXT
,URL_GitHub		TEXT
,Curriculo		VARBINARY(MAX)
-- Habilidades--
,Foco_Carreira	VARCHAR(255)
,Habilidade		VARCHAR(255)
,SoftSkills		VARCHAR
);