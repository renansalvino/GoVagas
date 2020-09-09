USE GoVagas

INSERT INTO TipoUsuario (TituloTipoUsuario) 
VALUES ('Admin'), ('Empresa'), ('Candidato');
INSERT INTO Usuario (Nome, Email, DataNascimento, Senha, Telefone, IdTipoUsuario)
VALUES ('Roberto Possari', 'possari@email.com', '23/12/1967', 'P0ss4r1', '89224002', 1),
('Intelitrader', 'novosclientes@intelitrader.com.br', '18/08/2018', 'Intelitrader123', '1130423046', 2),
('BRQ', 'brq@brq.com', '18/01/2016', 'BRQ123', '(11)2526-0600', 2),
('SpaceNeedle', 'spaceneedle@eusouspace.com', '10/05/2013', 'SpaceNeedle123', '11934285367', 2),	
('Gabriela Possarle', 'Gabizinhalokinha@email.com', '18/05/2001', 'P0ss4rle', '40029822', 3),
('Erique Henrique', 'erique.henrique.bvl@email.com', '16/09/1996', '123cuy', '08007778', 3),
('Davi Alencarr', 'davi-vidaloka@email.com', '18/02/2002', 'perdao', '70707070', 3),
('Ilda de Suza Castro','ildaCastro132@gmail.com','14/06/1956','gvSEUfby','29 47170-4259',3),
('Fernando Neves Flores Belo','claudia.amauribello@hotmail.com','25/03/1997','UhwCHjKm','61 32287-1768',3),
('Eduardo Cerqueira e Silva','edumanerao@gmail.com','05/05/1998','nKpkBSYd','24 54658-7297',3),
('Antonio Francisco Silva Filho','antoniofsfilho@hotmail.com','05/05/1998','uTmjJCuE','79 81008-9518',3),
('Felipe Moretim Castellanos','fmCastellanos@outlook.com','01/10/1999','WwytzTqV','63 72066-5426',3),
('João Vitor Santana Alves','JOAO.ALVES9598@OUTLOOK.COM','09/05/1998','bVXMrmrM','68 57963-1071',3),
('Lucas Nogueira da Silva','lucasnogueira_silva@yahoo.com.br','11/12/1998','ypRPjRTr','54 14933-2101',3),
('Matheus Francisco da Silva Costa','matheusfsc01@yahoo.com.br','06/10/1999','MFPvERwd','42 52188-7976',3),
('Vinícius Alves Pacheco Nascimento','janpacheco@ig.com.br','17/04/1999','xSPQmcwW','89 50716-0366',3),
('Luana Jesus de Fontes','Luanafoontes@gmail.com','27/03/2000','KaQSVzHp','61 75462-1688',3);

SELECT * FROM Usuario



INSERT INTO Candidato (NumMatricula,CPF,Sexo,DataMatricula,Raca,Cidade,NivelCurso,TipoCurso,NomeCurso,Turma,Turno,Termo,FotoPerfil,TituloPerfil,NivelIngles,Descricao,UrlLinkedin,UrlGitHub,Curriculo,PretensaoSalario,Personalidade,FocoCarreira,Habilidade,ExperienciaPro,JaTrabalhou,NomeEmpresa,PerfilEmpresa,CargoEmpresa,DataInicio,DataTermino,TipoContrato,TrabalharRemoto,DeficienteFisico,IdUsuario)
VALUES 
 ('15121105','534.578.350-04','Feminino','23/03/2015','Branca','São Carlos','Aprendizagem','Aprendizagem Industrial','Assistente Administrativo - Programa Meu Novo Mundo','T3 - NOVO MUNDO','Tarde','3',NULL,'Gestora de RH','Intermediário','Assistente administrativa | Estudante na Escola SENAI','www.Linkedin.com/1','www.GitHub.com/1',NULL,'R$2.000','Tubarão','Gestão de RH','Júnior','Finanças, Administração de empresas, Gestão de pessoas, Recursos Humanos',0,'','','','','','',1,1,8),
 ('15218079','316.504.910-69','Masculino','27/07/2015','Negra','São Paulo','Nível Técnico','Curso Técnico','Técnico de Informática','TECINFO - TT4','Tarde','4',NULL,'Full-Stack Sênior','Fluente','Cientista da Computação pela Unicamp | Técnico em Informática | Estudante do T4° na Escola Senai de Informática | Desenvolvedor Full - Stack','www.Linkedin.com/2','www.GitHub.com/2',NULL,'R$6.000','Lobo','Front-End','Sênior','Java, Flutter, React Web',1,'Porto Seguro','Grande Empresa','Sênior','08/2010','08/2020','CLT',1,0,9),
 ('15218133','790.680.960-28','Masculino','27/07/2015','Parda','Suzano','Nível Técnico','Curso Técnico','Técnico de Informática','TECINFO - MT4','Manhã','4',NULL,'Front-End Plenor','Fluente','Engenheiro de Software pela USP | Estudante de técnico em infomática na Escola Senai de Informática | Desenvolvedor Full - Stack na impresa IBM | Em busca de novas oportunidades','www.Linkedin.com/3','www.GitHub.com/3',NULL,'R$7.000','Lobo','Full-Stack','Pleno','C#, Java, Machine Learning, IA',1,'IBM','Grande Empresa','Full-Stack Pleno','10/2016','05/2020','CLT',1,1,10),
 ('16220081','019.520.350-07','Masculino','25/07/2016','Parda','Ferraz','Nível Técnico','Curso Técnico','Técnico de Redes de Computadores','TECREDE-TT4','Tarde','4',NULL,'Analista de Suportes','Básico','Estudante de Técnico em Redes de computadores na Escola Senai de Informática | Analista de Suportes Especializado em Linux','www.Linkedin.com/4','www.GitHub.com/4',NULL,'R$2.000','Tubarão','Sistemas Operacionais','Júnior','Estrutura de Redes, Sistemas Operacionais, Suporte de Redes',0,'','','','','','',1,0,11),
 ('16220088','605.781.100-32','Masculino','25/07/2016','Branca','Campinas','Nível Técnico','Curso Técnico','Técnico de Redes de Computadores','TECREDE-MT4','Manhã','4',NULL,'Analista de Suportes','Básico','Estudante de Técnico de Redes de Computadores na Escola Senai de Informática | Em busca de um primeiro estágio ou emprego','www.Linkedin.com/5','www.GitHub.com/5',NULL,'R$2.000','Gato','Rede Wireless','Júnior','Estrutura de Redes, Sistemas Operacionais, Suporte de Redes',0,'','','','','','',0,0,12),
 ('16220092','812.925.040-30','Masculino','25/07/2016','Branca','São Mateus','Nível Técnico','Curso Técnico','Técnico de Redes de Computadores','TECREDE-MT3','Manhã','3',NULL,'Analista de Suportes','Básico','Estudante de Técnico de Redes de Computadores | Em busca de um primeiro estágio','www.Linkedin.com/6','www.GitHub.com/6',NULL,'R$2.000','Gato','Rede Wireless','Júnior','Estrutura de Redes, Sistemas Operacionais, Suporte de Redes',0,'','','','','','',1,0,13),
 ('16220093','051.690.150-89','Masculino','25/07/2016','Branca','São Paulo','Nível Técnico','Curso Técnico','Técnico de Redes de Computadores','TECREDE-TT3','Tarde','3',NULL,'Analista de Suportes','Intermediário','Analista de Suporte Especializado em sistemas operacionais Windows e Linux','www.Linkedin.com/7','www.GitHub.com/7',NULL,'R$1.500','Àguia','Monitoria de Redes','Júnior','Estrutura de Redes, Sistemas Operacionais, Suporte de Redes',0,'','','','','','',1,0,14),
 ('16220097','918.109.020-02','Masculino','25/07/2016','Parda','Limeira','Nível Técnico','Curso Técnico','Técnico de Redes de Computadores','TECREDE-TT4','Tarde','4',NULL,'Analista de Suportes','Básico','Técnico em Redes de computadores | Estudante do T4° na Escola Senai de Informática | Especialista em suportes de redes de computadores','www.Linkedin.com/8','www.GitHub.com/8',NULL,'R$1.500','Àguia','Suporte técnico em Redes','Júnior','Estrutura de Redes, Sistemas Operacionais, Suporte de Redes',0,'','','','','','',1,1,15),
 ('16220102','901.928.140-28','Masculino','25/07/2016','Negra','Itu','Nível Técnico','Curso Técnico','Técnico de Redes de Computadores','TECREDE-TT4','Tarde','4',NULL,'Analista de Suportes','Intermediário','Engenheiro Cívil | Estudante de Redes de computadores pela Escola Senai de informática | Estagiário na empresa BRQ - SOLUÇÕES EM INFORMÁTICA | Em busca de novas oportunidades','www.Linkedin.com/9','www.GitHub.com/9',NULL,'R$2.500','Gato','Sistemas Operacionais','Júnior','Estrutura de Redes, Sistemas Operacionais, Suporte de Redes',0,'','','','','','',0,1,16),
 ('16220109','379.192.930-57','Feminino','25/07/2016','Parda','São Paulo','Nível Técnico','Curso Técnico','Técnico de Redes de Computadores','TECREDE-MT3','Manhã','3',NULL,'Analista de Suportes','Fluente','Estudante de Técnico em Redes de Computadores na Escola Senai de Informática | À procurando novas oportunidades','www.Linkedin.com/10','www.GitHub.com/10',NULL,'R$3.000','Tubarão','Suporte de Redes Industriais','Júnior','Estrutura de Redes, Sistemas Operacionais, Suporte de Redes',0,'','','','','','',1,1,17);

