USE GoVagas
GO

INSERT INTO TipoUsuario (TituloTipoUsuario) 
VALUES ('Admin'), ('Empresa'), ('Candidato');

INSERT INTO Usuario (Nome, Email, DataNascimento, Senha, Telefone, IdTipoUsuario)
VALUES ('Roberto Possari', 'possari@email.com', '23/12/1967', 'P0ss4r1', '89224002', 1),
('Intelitrader', 'novosclientes@intelitrader.com.br', '18/08/2018', 'Intelitrader123', '1130423046', 2),
('BRQ', 'brq@brq.com', '18/01/2016', 'BRQ123', '(11)2526-0600', 2),
('SpaceNeedle', 'spaceneedle@eusouspace.com', '10/05/2013', 'SpaceNeedle123', '11934285367', 2),	
('Gabriela Possarle', 'Gabizinhalokinha@email.com', '18/05/2001', 'P0ss4rle', '40029822', 3),
('Erique Henrique', 'erique.henrique.bvl@email.com', '16/09/1996', '123cuy', '08007778', 3),
('Davi Alencarr', 'davi-vidaloka@email.com', '18/02/2002', 'perdao', '70707070', 3);

INSERT INTO Administrador (CPF, IdUsuario) 
VALUES ('25638717820', 1);

INSERT INTO Inscricao (DataInscricao, IdCandidato) 
VALUES ('20/02/2020', NULL);

INSERT INTO Vaga (TituloVaga,PerfilDev,DiasContrato,TempoExp,HabNecessaria,LocalVaga,ReqVaga,NivelExp,DescAtivFuncoes,TipoContrato,ExpertiseVaga,TrabalhoRemoto,OutraCidade,ValorSalario,OfertaExtra,IdInscricao,IdEmpresa) VALUES
('Web Desenveloper Python','Programador Python','12/05/2020','3 meses', 'Pyton, Excel, Git','Rua Dr. Alberto de Oliveira, n75 - S�o Paulo', 'Comunica��o, Proatividade','M�dia','Definir e manter a estrutura organizacional de um sistema,','1','j�nior','1',NULL,NULL,'Planos de Sa�de, Vale Refei��o',NULL,NULL)
,('Web Desenveloper Java','Web Desenveloper Java','06/01/2019','5 meses', 'Banck-end, Java, Javascript','Alameda Bar�o de Limeira, 539 - Santa Cecilia, S�o Paulo','Empatia, Lideran�a','M�dia','Realizar a manuten��o e cria��o de novas funcionalidades,','TRUE','j�nior','TRUE',NULL,'880','Planos de Sa�de, Vale Refei��o',NULL,NULL)
,('Web Desenveloper C#','Programador Full Stack','23/09/2020','1 ano', 'Html,Css, Bootstrap, SQL Server','Avenida Cruzeiro do Sul, 2630 Pr�dio I - Santana, S�o Paulo','Criatividade, Flexibilidade','Alta','Desenvolvimento e manuten��o de aplica��es web,','FALSE','j�nior','0',NULL,'1000','Planos de Sa�de, Vale Refei��o',NULL,NULL);


