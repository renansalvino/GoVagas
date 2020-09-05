USE GoVagas
GO

INSERT INTO Vaga(TituloVaga,PerfilDev,DiasContrato,TempoExp,HabNecessaria,LocalVaga,ReqVaga,NivelExp,DescAtivFuncoes,TipoContrato,ExpertiseVaga,TrabalhoRemoto,OutraCidade,ValorSalario,OfertaExtra,IdInscricao,IdEmpresa) VALUES
('Web Desenveloper Python','Programador Python','12/05/2020','3 meses', 'Pyton, Excel, Git','Rua Dr. Alberto de Oliveira, n75 - São Paulo', 'Comunicação, Proatividade','Média','Definir e manter a estrutura organizacional de um sistema,','1','júnior','1',NULL,NULL,'Planos de Saúde, Vale Refeição',NULL,NULL)
,('Web Desenveloper Java','Web Desenveloper Java','06/01/2019','5 meses', 'Banck-end, Java, Javascript','Alameda Barão de Limeira, 539 - Santa Cecilia, São Paulo','Empatia, Liderança','Média','Realizar a manutenção e criação de novas funcionalidades,','TRUE','júnior','TRUE',NULL,'880','Planos de Saúde, Vale Refeição',NULL,NULL)
,('Web Desenveloper C#','Programador Full Stack','23/09/2020','1 ano', 'Html,Css, Bootstrap, SQL Server','Avenida Cruzeiro do Sul, 2630 Prédio I - Santana, São Paulo','Criatividade, Flexibilidade','Alta','Desenvolvimento e manutenção de aplicações web,','FALSE','júnior','0',NULL,'1000','Planos de Saúde, Vale Refeição',NULL,NULL);


SELECT * FROM Vaga;