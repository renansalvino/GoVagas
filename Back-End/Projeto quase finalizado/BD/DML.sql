USE GoVagas
GO

-- Popular TIPO USUARIO --

INSERT INTO TipoUsuario (TituloTipoUsuario) 
VALUES ('Admin'), ('Empresa'), ('Candidato');
GO

-- Popular USUARIO --

INSERT INTO Usuario (Nome, Email, DataNascimento, Senha, Telefone, IdTipoUsuario)
VALUES ('Roberto Possari', 'possari@email.com', '23/12/1967', 'P0ss4r1', '89224002', 1),
('Alberto Salvino', 'novosclientes@demeo.com.br', '18/08/2018', 'Demeo123', '1130423046', 2),
('Eduardo Costa', 'edu@automatsmart.com', '18/01/2016', 'Automatsmart123', '(11)2526-0600', 2),
('Matheus Pandolfi', 'mat@creditas.com', '05/07/2015', 'creditas123', '(11)3231-0800', 2),
('Alex Paix�o', 'apaixao@eusouspace.com', '10/05/2013', 'SpaceNeedle123', '11934285367', 2),	
('Gabriela Possarle', 'Gabizinhalokinha@email.com', '18/05/2001', 'P0ss4rle', '40029822', 3),
('Erique Henrique', 'erique.henrique.bvl@email.com', '16/09/1996', '123cuy', '08007778', 3),
('Davi Alencarr', 'davi-vidaloka@email.com', '18/02/2002', 'perdao', '70707070', 3),
('Ilda de Suza Castro','ildaCastro132@gmail.com','14/06/1956','gvSEUfby','29 47170-4259',3),
('Fernando Neves Flores Belo','claudia.amauribello@hotmail.com','25/03/1997','UhwCHjKm','61 32287-1768',3),
('Eduardo Cerqueira e Silva','edumanerao@gmail.com','05/05/1998','nKpkBSYd','24 54658-7297',3),
('Antonio Francisco Silva Filho','antoniofsfilho@hotmail.com','05/05/1998','uTmjJCuE','79 81008-9518',3),
('Felipe Moretim Castellanos','fmCastellanos@outlook.com','01/10/1999','WwytzTqV','63 72066-5426',3),
('Jo�o Vitor Santana Alves','JOAO.ALVES9598@OUTLOOK.COM','09/05/1998','bVXMrmrM','68 57963-1071',3),
('Lucas Nogueira da Silva','lucasnogueira_silva@yahoo.com.br','11/12/1998','ypRPjRTr','54 14933-2101',3)
GO

-- Popular CANDIDATO --

INSERT INTO Candidato (NumMatricula,CPF,Sexo,DataMatricula,Raca,
Cidade,NivelCurso,TipoCurso,NomeCurso,Turma,
Turno,Termo,FotoPerfil,TituloPerfil,Habilidade,NivelIngles,
Descricao,UrlLinkedin,UrlGitHub,Curriculo,PretensaoSalario,
Personalidade,FocoCarreira,ExpertiseCandidato,ExperienciaPro,
NomeEmpresa,PerfilEmpresa,CargoEmpresa,DataInicio,DataTermino,
TamanhoEmpresa,TipoContrato,TrabalharRemoto,DeficienteFisico,IdUsuario)
VALUES 
 ('15121105','53457835004','Feminino','23/03/2015','Branca','S�o Carlos','Aprendizagem','Aprendizagem Industrial','Assistente Administrativo - Programa Meu Novo Mundo','T3 - NOVO MUNDO','Tarde','3',NULL,'Gestora de RH','Trabalho em Equipe/ Resolu��o de problemas', 'Intermedi�rio', 'Assistente administrativa | Estudante na Escola SENAI','www.Linkedin.com/1','www.GitHub.com/1', NULL,'2000','Tubar�o','Gest�o de RH','J�nior','Sim','Avanade', 'Consultoria de TI', 'Gestor de Recursos Humanos','16/09/2019','18/12/2020','Grande Porte','CLT',1,1,11),
 ('15218079','31650491069','Masculino','27/07/2015','Negra','S�o Paulo','N�vel T�cnico','Curso T�cnico', 'T�cnico de Inform�tica', 'TECINFO - TT4','Tarde','4',NULL,'Dev Full-Stack','C# / Javascript / Python','Fluente','Cientista da Computa��o pela Unicamp | T�cnico em Inform�tica | Estudante do T4� na Escola Senai de Inform�tica | Desenvolvedor Full - Stack','www.Linkedin.com/2','www.GitHub.com/2',NULL,'6000','Lobo','Front-End','S�nior','N�o',NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,0,12),
 ('15218133','79068096028','Masculino','27/07/2015','Parda','Suzano','N�vel T�cnico','Curso T�cnico','T�cnico de Inform�tica','TECINFO - TT4','Tarde','4',NULL,'Dev Front-End','Java / C++ / mySql','Gringo','Engenheiro de Software pela USP | Estudante de t�cnico em infom�tica na Escola Senai de Inform�tica | Desenvolvedor Full - Stack na impresa IBM | Em busca de novas oportunidades','www.Linkedin.com/3','www.GitHub.com/3',NULL,'7000','Lobo','Full-Stack','Pleno','N�o',NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,0,13),
 ('16220081','01952035007','Masculino','25/07/2016','Parda','Ferraz','N�vel T�cnico','Curso T�cnico','T�cnico de Redes de Computadores','TECREDE-TT4','Tarde','4',NULL,'Analista de Suportes','MV / Cisco Packet Tracer','Avan�ado','Estudante de T�cnico em Redes de computadores na Escola Senai de Inform�tica | Analista de Suportes Especializado em Linux','www.Linkedin.com/4','www.GitHub.com/4',NULL,'2000','Tubar�o','Sistemas Operacionais','J�nior','Sim','BRQ','Consultoria de TI','Operador de Servidores','01/02/2019','01/03/2020','M�dio Porte','Est�gio',0,1,14),
 ('16220088','60578110032','Masculino','25/07/2016','Branca','Campinas','N�vel T�cnico','Curso T�cnico','T�cnico de Redes de Computadores','TECREDE-MT4','Manh�','4',NULL,'Analista de Suportes','Estrutura de Redes / Sistemas Operacionais / Suporte de Redes','B�sico','� procura de um milagre','www.Linkedin.com/5','www.GitHub.com/5',NULL,'2000','Gato','Rede Wireless','J�nior','N�o',NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,0,15),
 ('16220092','81292504030','Masculino','25/07/2016','Branca','S�o Mateus','N�vel T�cnico','Curso T�cnico','T�cnico de Redes de Computadores','TECREDE-MT3','Manh�','3',NULL,'Analista de Suportes','Suporte de Redes / VM Box','Intermedi�rio','Finalizando 3o Termo em T�cnico de Redes pelo SENAI','www.Linkedin.com/6','www.GitHub.com/6',NULL,'2000','Gato','Rede Wireless','J�nior','N�o',NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,0,16),
 ('16220093','05169015089','Masculino','25/07/2016','Branca','S�o Paulo','N�vel T�cnico','Curso T�cnico','T�cnico de Redes de Computadores','TECREDE-TT3','Tarde','3',NULL,'Analista de Suportes','Estrutura de Redes / Suporte de Redes','Intermedi�rio','Analista de Suporte Especializado em sistemas operacionais Windows e Linux','www.Linkedin.com/7','www.GitHub.com/7',NULL,'1500','�guia','Monitoria de Redes','J�nior','N�o',NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,0,17),
 ('16220097','91810902002','Masculino','25/07/2016','Parda','Limeira','N�vel T�cnico','Curso T�cnico','T�cnico de Redes de Computadores','TECREDE-TT4','Tarde','4',NULL,'Analista de Suportes','Estrutura de Redes, Sistemas Operacionais, Suporte de Redes','B�sico','T�cnico em Redes de computadores | Estudante do T4� na Escola Senai de Inform�tica | Especialista em suportes de redes de computadores','www.Linkedin.com/8','www.GitHub.com/8',NULL,'1500','�guia','Suporte t�cnico em Redes','J�nior','N�o',NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,18),
 ('16220102','90192814028','Masculino','25/07/2016','Negra','Itu','N�vel T�cnico','Curso T�cnico','T�cnico de Redes de Computadores','TECREDE-TT4','Tarde','4',NULL,'Analista de Suportes','Estrutura de Redes / Sistemas Operacionais / Suporte de Redes','Intermedi�rio','Engenheiro C�vil | Estudante de Redes de computadores pela Escola Senai de inform�tica | Estagi�rio na empresa BRQ - SOLU��ES EM INFORM�TICA | Em busca de novas oportunidades','www.Linkedin.com/9','www.GitHub.com/9',NULL,'2500','Gato','Suporte t�cnico em Redes','J�nior','N�o',NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,1,19),
 ('16220109','37919293057','Feminino','25/07/2016','Parda','S�o Paulo','N�vel T�cnico','Curso T�cnico','T�cnico de Redes de Computadores','TECREDE-MT3','Manh�','3',NULL,'Analista de Suportes','Estrutura de Redes / Sistemas Operacionais / Suporte de Redes','Fluente','Estudante de T�cnico em Redes de Computadores na Escola Senai de Inform�tica | � procurando novas oportunidades','www.Linkedin.com/10','www.GitHub.com/10',NULL,'3000','Tubar�o','Suporte de Redes Industriais','J�nior','N�o',NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,20);
 GO

 -- Popular ADMINISTRADOR --

INSERT INTO Administrador (CPF, IdUsuario) 
VALUES ('25638717820', 1);
GO

-- Popular TIPO EMPRESA --

INSERT INTO Empresa(AnexarLogo,CargoArea,WebSite,NomeEmpresa,CNPJ,RamoEmpresa,DescricaoEmpresa,LocalizacaoEmpresa,EncontrouSenai,IdUsuario) VALUES
( NULL,'Gerente de projetos','https://www.demeo.com.br/','DE MEO COMERCIAL IMPORTADORA LTDA', '60872124000431','Sociedade Empres�ria Limitada', 'Todas as lojas De Meo trabalham com uma grande linha de produtos atendendo os mais diversos segmentos do mercado.','RUA FLORENCIO DE ABREU, 271','Parceria',2),
( NULL,'Gerente de projetos','https://www.automatsmart.com/site/site/portugues','AUTOMATSMART TECH LTDA - ME', '24809668000142','Sociedade Empres�ria Limitada ', 'Garantimos o melhor Desempenho Industrial com tecnologias inovadoras para aumentar a Efici�ncia e evitar perdas de Produtividade.','SENAI-SCS - RUA SANTO ANDR�, 680','Parceria',3),
( NULL,'Gerente de projetos','https://www.creditas.com/','CREDITAS SOLU��ES FINANCEIRAS LTDA', '17770708000205','Sociedade Empres�ria Limitada', 'A Creditas � uma plataforma digital que atua como correspondente Banc�rio e Sociedade de Cr�dito Direto para facilitar o processo de contrata��o de empr�stimos.','AV. ENG� LUIS CARLOS BERRINI, 105 - 12� AND','Parceria',4),
( NULL,'Gerente de projetos','https://www.spaceneedle.com.br/','SPACE NEEDLE TECNOLOGIA LTDA - EPP', '18381466000140','Sociedade Empres�ria Limitada', 'Nosso prop�sito, valores, princ�pios e boas pr�ticas s�o o resultado de mais de seis anos de experimenta��o e melhorias cont�nuas em todos os aspectos profissionais e pessoais.','ALAMEDA RIO NEGRO, 500, SALA 215A - ALPHAVILLE','Parceria',5);
GO

-- Popular TIPO DOCUMENTACAO --

INSERT INTO Documentacao (ResposavelVaga,DataInicio,DataTerminoPrev,DataTerminoEfe,StatusDoc,DiasContrato,ReqMatricula,TipoContrato,PlanoEstagio,Desligamento,QtdAvaliacoes,Prorrogacoes,ProrrogDiasContrato,AvalicoesProrrog,DataAvaliacao1,Avaliacao1,DataAvaliacao2,Avaliacao2,DataAvaliacao3,Avaliacao3,DataAvaliacao4,Avaliacao4,TermoEgresso,MotivoEvasao,ModeloDoc,IdEmpresa,IdCandidato) VALUES
('Robson de Oliveira','16/09/2019','18/12/2020',NULL, 'EM ANDAMENTO','459','Sim','0','1','1','2','18/12/2021','824','4','10/08/2019',NULL,'20/08/2019',NULL,'30/08/2019',NULL,'10/09/2019',NULL,'0',NULL,NULL, 1,11)
,('Pedro Pereira','22/01/2018','09/01/2019','09/06/2018', 'EVADIDO','352','Assinatura','1','0','0','2',NULL,NULL,NULL,'10/12/2017',NULL,'10/12/2017',NULL,NULL,NULL,NULL,NULL,'0','MUDAN�A DE CIDADE',NULL, 2,12)
,('Saulo dos Santos','16/03/2017','13/09/2018','13/09/2018', 'CONCLU�DO','546','Sim','1','1','1','2',NULL,NULL,NULL,'20/02/2017',NULL,'10/03/2017',NULL,NULL,NULL,NULL,NULL,'0','Aluno n�o entregou o contrato na empresa',NULL, 3,13);
GO

-- Popular VAGA --

INSERT INTO Vaga (TituloVaga,PerfilDev,DiasContrato,TempoExp,HabNecessaria,LocalVaga,ReqVaga,NivelExp,DescAtivFuncoes,TipoContrato,ExpertiseVaga,TrabalhoRemoto,OutraCidade,ValorSalario,OfertaExtra,IdEmpresa) VALUES
('Web Desenveloper Python','Programador Python','12/05/2020','3 meses', 'Pyton, Excel, Git','Rua Dr. Alberto de Oliveira, n75 - S�o Paulo', 'Comunica��o, Proatividade','M�dia','Definir e manter a estrutura organizacional de um sistema,','1','j�nior','1',NULL,NULL,'Planos de Sa�de, Vale Refei��o',1)
,('Web Desenveloper Java','Web Desenveloper Java','06/01/2019','5 meses', 'Banck-end, Java, Javascript','Alameda Bar�o de Limeira, 539 - Santa Cecilia, S�o Paulo','Empatia, Lideran�a','M�dia','Realizar a manuten��o e cria��o de novas funcionalidades,','TRUE','j�nior','TRUE',NULL,'880','Planos de Sa�de, Vale Refei��o',2)
,('Web Desenveloper C#','Programador Full Stack','23/09/2020','1 ano', 'Html,Css, Bootstrap, SQL Server','Avenida Cruzeiro do Sul, 2630 Pr�dio I - Santana, S�o Paulo','Criatividade, Flexibilidade','Alta','Desenvolvimento e manuten��o de aplica��es web,','FALSE','j�nior','0',NULL,'1000','Planos de Sa�de, Vale Refei��o',3);
GO

-- Popular TIPO INSCRICAO --

INSERT INTO Inscricao (DataInscricao, IdCandidato, IdVaga) 
VALUES ('10/06/2020', 11,1), ('06/02/2020', 12,2), ('30/09/2020', 13,3);
GO

SELECT *FROM Candidato
