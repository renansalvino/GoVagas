USE GoVagas
GO

INSERT INTO Documentacao (ResposavelVaga,DataInicio,DataTerminoPrev,DataTerminoEfe,StatusDoc,DiasContrato,ReqMatricula,TipoContrato,PlanoEstagio,Desligamento,QtdAvaliacoes,Prorrogacoes,ProrrogDiasContrato,AvalicoesProrrog,Avaliacao1,Avaliacao2,Avaliacao3,Avaliacao4,TermoEgresso,MotivoEvasao,ModeloDoc,IdEmpresa,IdCandidato) VALUES
('Robson de Oliveira','16/09/2019','18/12/2020','18/12/2020', 'CONCLU�DO','19/12/2020', NULL,'0','1','N�o se adaptou a dist�ncia',NULL,NULL,NULL,'2',NULL,NULL,NULL,NULL,'0','N�o se adaptou a dist�ncia',NULL, NULL,NULL)
,('Pedro Pereira','22/01/2018','09/01/2019','09/01/2019', 'EVADIDO','09/01/2019', NULL,'1','0','CONTRATA��O VIA CLT',NULL,NULL,NULL,'2',NULL,NULL,NULL,NULL,'0','MUDAN�A DE CIDADE',NULL, NULL,NULL)
,('Saulo dos Santos ','16/03/2017','13/09/2018','13/09/2018', 'EM ANDAMENTO','13/09/2018', NULL,'1','1','Aluno n�o entregou o contrato na empresa',NULL,NULL,NULL,'2',NULL,NULL,NULL,NULL,'0','EMPRESA RESCINDIU',NULL, NULL,NULL);



SELECT * FROM Documentacao

DELETE Documentacao WHERE IdDocumentacao ='4'