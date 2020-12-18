USE GoVagas
GO

-- 1. (RF02) Listar dados (resumo) do Aluno (Adm)
SELECT 
		U.Nome AS NomeCandidato					
		,U.Email					
		,U.DataNascimento							
		,U.Telefone																	
		,C.Cidade					
		,C.NomeCurso					
		,C.Turma										
		,C.Termo					
		-- Apresentação --
		,C.FotoPerfil				 
		,C.TituloPerfil	-- Dev FullStack, Técnico Redes					
		,C.Descricao -- Gosto de programação e maça				
		,C.UrlLinkedin							
		,C.Curriculo					
		,C.Personalidade --Corno			
		-- Habilidades--
		,C.FocoCarreira	-- Front 					
		,C.Habilidade										
		,C.TrabalharRemoto		
		,C.DeficienteFisico		

FROM Candidato C
INNER JOIN Usuario U
ON C.IdUsuario = U.IdUsuario
WHERE IdCandidato = 1;


-- 2. (RF02) Listar dados (completo) do Aluno (Adm)
SELECT 
		U.Nome AS NomeCandidato					
		,U.Email					
		,U.DataNascimento							
		,U.Telefone
		,C.NumMatricula			
		,C.CPF					
		,C.Sexo					
		,C.DataMatricula			
		,C.Raca					
		,C.Cidade					
		,C.NivelCurso				
		,C.TipoCurso				
		,C.NomeCurso				
		,C.Turma					
		,C.Turno					
		,C.Termo					
		-- Apresentação --
		,C.FotoPerfil				 
		,C.TituloPerfil			
		,C.Habilidade				
		,C.NivelIngles			
		,C.Descricao				
		,C.UrlLinkedin			
		,C.UrlGitHub				
		,C.Curriculo				
		,C.PretensaoSalario		
		,C.Personalidade			
		,C.FocoCarreira			
		,C.ExpertiseCandidato			
		,C.ExperienciaPro						
		,C.NomeEmpresa			
		,C.PerfilEmpresa			
		,C.CargoEmpresa			
		,C.DataInicio				
		,C.DataTermino			
		,C.TamanhoEmpresa			
		,C.TipoContrato				
		,C.TrabalharRemoto		
		,C.DeficienteFisico		

FROM Candidato C
INNER JOIN Usuario U
ON C.IdUsuario = U.IdUsuario
WHERE IdCandidato = 1;


-- 3. (RF02) Listar dados (completo) da Vaga (Adm)

SELECT 
		TituloVaga				
		,PerfilDev				
		,DiasContrato			
		,TempoExp				
		,HabNecessaria			
		,LocalVaga				
		,ReqVaga				
		,NivelExp				
		,DescAtivFuncoes		
		,TipoContrato			
		,ExpertiseVaga			
		,TrabalhoRemoto			
		,OutraCidade			
		,ValorSalario			
		,OfertaExtra AS Benefícios		

		
FROM Vaga

-- 4. (RF02) Listar dados (completo) da Empresa (Adm) 

SELECT 
		E.AnexarLogo AS Logo			
		,E.NomeEmpresa 			
		,E.CargoArea				
		,U.Telefone
		,U.Email					
		,E.WebSite				
		,U.DataNascimento AS DataFundação					
		,E.CNPJ					
		,E.RamoEmpresa			
		,E.DescricaoEmpresa		
		,E.LocalizacaoEmpresa AS Localização	
		,E.EncontrouSenai AS ComoEncontrouSenai
		
FROM Empresa E
INNER JOIN Usuario U
ON E.IdUsuario = U.IdUsuario
		
		
-- 5. (RF04) Listar vagas publicadas (Empresa) 
		
SELECT
		E.NomeEmpresa
		,V.TituloVaga				
		,V.PerfilDev				
		,V.DiasContrato			
		,V.TempoExp				
		,V.HabNecessaria			
		,V.LocalVaga				
		,V.ReqVaga				
		,V.NivelExp				
		,V.DescAtivFuncoes		
		,V.TipoContrato			
		,V.ExpertiseVaga			
		,V.TrabalhoRemoto			
		,V.OutraCidade			
		,V.ValorSalario			
		,V.OfertaExtra AS Benefícios
		

		
FROM Vaga V
INNER JOIN Empresa E
ON V.IdEmpresa = E.IdEmpresa
WHERE E.IdEmpresa = 1;
		

-- 6. (RF04) Listar candidatos às vagas (Empresa) 
		
SELECT 
		V.TituloVaga				
		,V.PerfilDev				
		,V.DiasContrato			
		,V.TempoExp				
		,V.HabNecessaria			
		,V.LocalVaga				
		,V.ReqVaga				
		,V.NivelExp				
		,V.DescAtivFuncoes		
		,V.TipoContrato			
		,V.ExpertiseVaga			
		,V.TrabalhoRemoto			
		,V.OutraCidade			
		,V.ValorSalario			
		,V.OfertaExtra AS Benefícios
		-- Info Candidato --
		,U.Nome AS NomeCandidato					
		,U.Email					
		,U.DataNascimento							
		,U.Telefone																	
		,I.DataInscricao
		,C.Cidade					
		,C.NomeCurso					
		,C.Turma										
		,C.Termo					
		-- Apresentação --
		,C.TituloPerfil	
		,C.Descricao		
		,C.UrlLinkedin	
		,C.UrlGitHub
		,C.Curriculo					
		,C.Personalidade 		
		-- Habilidades--
		,C.FocoCarreira					
		,C.Habilidade										
		,C.TrabalharRemoto		
		,C.DeficienteFisico

		
FROM Vaga V
INNER JOIN Candidato C
ON IdCandidato = C.IdCandidato
INNER JOIN Usuario U
ON C.IdUsuario = U.IdUsuario
INNER JOIN Inscricao I
ON IdInscricao = I.IdInscricao
WHERE IdEmpresa = 2;			
				

-- 7. (RF07) Listar vagas (Candidato) 
		
SELECT 
		V.TituloVaga				
		,V.PerfilDev				
		,V.DiasContrato			
		,V.TempoExp				
		,V.HabNecessaria			
		,V.LocalVaga				
		,V.ReqVaga				
		,V.NivelExp				
		,V.DescAtivFuncoes		
		,V.TipoContrato			
		,V.ExpertiseVaga			
		,V.TrabalhoRemoto			
		,V.OutraCidade			
		,V.ValorSalario			
		,V.OfertaExtra AS Benefícios
		

		
FROM Vaga V


-- 8. (RF08) Listar vagas filtro (Candidato) 

SELECT 
		V.TituloVaga				
		,V.PerfilDev				
		,V.DiasContrato			
		,V.TempoExp				
		,V.HabNecessaria			
		,V.LocalVaga				
		,V.ReqVaga				
		,V.NivelExp				
		,V.DescAtivFuncoes		
		,V.TipoContrato			
		,V.ExpertiseVaga			
		,V.TrabalhoRemoto			
		,V.OutraCidade			
		,V.ValorSalario			
		,V.OfertaExtra AS Benefícios
		,I.DataInscricao
	
	
	
FROM Vaga V
INNER JOIN Inscricao I
ON IdInscricao = I.IdInscricao
ORDER BY DataInscricao DESC	

-- 9. (RF10) Listar vagas candidatadas (Candidato) 

SELECT 
		U.Nome AS NomeCandidato					
		,V.TituloVaga				
		,V.PerfilDev				
		,V.DiasContrato			
		,V.TempoExp				
		,V.HabNecessaria			
		,V.LocalVaga				
		,V.ReqVaga				
		,V.NivelExp				
		,V.DescAtivFuncoes		
		,V.TipoContrato			
		,V.ExpertiseVaga			
		,V.TrabalhoRemoto			
		,V.OutraCidade			
		,V.ValorSalario			
		,V.OfertaExtra AS Benefícios
		-- Info Candidato --
		,U.Email					
		,U.DataNascimento							
		,U.Telefone																	
		,I.DataInscricao
		,C.Cidade					
		,C.NomeCurso					
		,C.Turma										
		,C.Termo					
		-- Apresentação --
		,C.TituloPerfil	
		,C.Descricao		
		,C.UrlLinkedin	
		,C.UrlGitHub
		,C.Curriculo					
		,C.Personalidade 		
		-- Habilidades--
		,C.FocoCarreira					
		,C.Habilidade										
		,C.TrabalharRemoto		
		,C.DeficienteFisico

		
FROM Vaga V
INNER JOIN Inscricao I
ON IdInscricao = I.IdInscricao
INNER JOIN Candidato C
ON I.IdCandidato = C.IdCandidato
INNER JOIN Usuario U
ON C.IdUsuario = U.IdUsuario
WHERE Nome = 'Gabriela Possarle';

-- 10. (RF15) Visualizar documentacao (Candidato) 
SELECT 					
	
		-- Info Doc --
		U.Nome AS NomeCandidato											
		,C.NomeCurso AS Cursando				
		,C.Turma										
		,C.Termo					
		 ,D.ResposavelVaga			
		,D.DataInicio				
		,D.DataTerminoPrev		
		,D.DataTerminoEfe			
		,D.StatusDoc				
		,D.DiasContrato			
		,D.ReqMatricula			
		,D.TipoContrato				
		,D.PlanoEstagio				
		,D.Desligamento			
		,D.QtdAvaliacoes			
		,D.Prorrogacoes			
		,D.ProrrogDiasContrato	
		,D.AvalicoesProrrog	
		,D.DataAvaliacao1
		,D.Avaliacao1
		,D.DataAvaliacao2
		,D.Avaliacao2
		,D.DataAvaliacao3
		,D.Avaliacao3
		,D.DataAvaliacao4
		,D.Avaliacao4				
		,D.TermoEgresso							 
		,D.MotivoEvasao			
		,D.ModeloDoc				
		


FROM Documentacao D
INNER JOIN Candidato C
ON D.IdCandidato = C.IdCandidato
INNER JOIN Usuario U
ON C.IdUsuario = U.IdUsuario
