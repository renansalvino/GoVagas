USE GoVagas
GO

INSERT INTO Vaga(TituloVaga,PerfilDev,DiasContrato,TempoExp,HabNecessaria,LocalVaga,ReqVaga,NivelExp,DescAtivFuncoes,TipoContrato,ExpertiseVaga,TrabalhoRemoto,OutraCidade,ValorSalario,OfertaExtra,IdInscricao,IdEmpresa) VALUES
('Web Desenveloper Python','Programador Python','12/05/2020','3 meses', 'Pyton, Excel, Git','Rua Dr. Alberto de Oliveira, n75 - S�o Paulo', 'Comunica��o, Proatividade','M�dia','Definir e manter a estrutura organizacional de um sistema,','1','j�nior','1',NULL,NULL,'Planos de Sa�de, Vale Refei��o',NULL,NULL)
,('Web Desenveloper Java','Web Desenveloper Java','06/01/2019','5 meses', 'Banck-end, Java, Javascript','Alameda Bar�o de Limeira, 539 - Santa Cecilia, S�o Paulo','Empatia, Lideran�a','M�dia','Realizar a manuten��o e cria��o de novas funcionalidades,','TRUE','j�nior','TRUE',NULL,'880','Planos de Sa�de, Vale Refei��o',NULL,NULL)
,('Web Desenveloper C#','Programador Full Stack','23/09/2020','1 ano', 'Html,Css, Bootstrap, SQL Server','Avenida Cruzeiro do Sul, 2630 Pr�dio I - Santana, S�o Paulo','Criatividade, Flexibilidade','Alta','Desenvolvimento e manuten��o de aplica��es web,','FALSE','j�nior','0',NULL,'1000','Planos de Sa�de, Vale Refei��o',NULL,NULL);


SELECT * FROM Vaga;