import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home/index'
import DashAdm from './pages/Administrador/dashAdm/index'
import DashEmpresa from './pages/empresa/dashEmpresa';
import TabelaCandidatos from './pages/Administrador/tabelaCandidatos/index'
import CandidaturasVaga from './pages/empresa/Admin/candidaturasVaga';
import Documentacao from './pages/Administrador/documentacao/index'
import CadastroCandidatoUm from './pages/cadastroLogin/cadastroAluno/etapa01';
import CadastroCandidatoDois from './pages/cadastroLogin/cadastroAluno/etapa02';
import CadastroCandidatoTres from './pages/cadastroLogin/cadastroAluno/etapa03';
import CadastroCandidatoQuatro from './pages/cadastroLogin/cadastroAluno/etapa04';
import completarcadastro_01 from './pages/cadastroLogin/completarCadastroAluno/Etapa01';
import completarcadastro_02 from './pages/cadastroLogin/completarCadastroAluno/Etapa02';
import completarcadastro_03 from './pages/cadastroLogin/completarCadastroAluno/Etapa03';
import CadastroEmpresa from './pages/cadastroLogin/cadastroEmpresa/etapa01';
import cadastrocandidato02 from './pages/cadastroLogin/cadastroAluno/etapa02';
import CadastroEmpresaDois from './pages/cadastroLogin/cadastroEmpresa/etapa02';
import LoginCandidato from './pages/cadastroLogin/loginCandidato/index';
import LoginEmpresa from './pages/cadastroLogin/loginEmpresa';
import PublicarVaga from "./pages/empresa/publi_vaga/index";
import PublicarVagaDois from './pages/empresa/publi_vaga2/index';
import PublicarVagaTres from './pages/empresa/publi_vaga3/index';
import infoestagio from './pages/empresa/info_estagio/index';
import Perfil from './pages/candidato/perfil/index';
import Dashboard from './pages/candidato/dashboard/index';
import Candidatar from './pages/candidato/candidatar/index';
import Listarvagas from './pages/candidato/listarvagas/index';
import Listarvagasporid from './pages/empresa/listarvagaid/index';
import Listarcandidaturaporid from './pages/candidato/listarcandidaturaid/index';
import Visualizarvaga from './pages/candidato/visualizarvaga/index';
import Upload from './pages/teste/teste';
import VisualizarCandidato from './pages/VisualizarCandidatos/index';

// 	import Login from ‘./pages/Login’;

function Routers() {
	return (
		<BrowserRouter>
			<Route path='/' exact component={Home}/>
			<Route path='/dashadm' exact component={DashAdm}/>
			<Route path='/dashEmpresa' exact component={DashEmpresa}/>
			<Route path='/tabelacandidatos' exact component={TabelaCandidatos}/>
			<Route path='/candidaturasvaga/:id' exact component={CandidaturasVaga}/>
			<Route path='/documentacao/:id' exact component={Documentacao}/>
			<Route path='/cadastroAluno' component={CadastroCandidatoUm}/>
			<Route path='/cadastroAluno2' component={CadastroCandidatoDois}/>
			<Route path='/cadastroAluno3' component={CadastroCandidatoTres}/>
			<Route path='/cadastroAluno4' component={CadastroCandidatoQuatro}/>
			<Route path='/completarCadastroAluno' component={completarcadastro_01}/>
			<Route path='/completarCadastroAluno2' component={completarcadastro_02}/>
			<Route path='/completarCadastroAluno3' component={completarcadastro_03}/>
			<Route path='/cadastroEmpresa' component={CadastroEmpresa}/>
			<Route path='/cadastroAluno2' component={cadastrocandidato02}/>
			<Route path='/cadastroEmpresa2' component={CadastroEmpresaDois}/>
			<Route path='/loginCandidato' component={LoginCandidato}/>
			<Route path='/loginEmpresa' component={LoginEmpresa}/>
			<Route path="/publicarvaga" component={PublicarVaga}/>
			<Route path="/publicarvagadois"component={PublicarVagaDois}/>
			<Route path="/publicarvagatres"component={PublicarVagaTres}/>
			<Route path="/infoestagio" component={infoestagio}/>
			<Route path='/perfil' component={Perfil}/>
			<Route path='/dashboardCandidato' component={Dashboard}/>
			<Route path='/candidatar' component={Candidatar}/>
			<Route path='/vagas' component={Listarvagas}/>
<<<<<<< HEAD
			<Route path='/inscricoes' component={Listarvagasporid}/>
=======
			<Route path='/inscricoes' component={Listarcandidaturaporid}/>
			<Route path='/vagaspublicadas' component={Listarvagasporid}/>
			{/* <Route path='/visualizarvaga' component={Visualizarvaga}/> */}
>>>>>>> 380a60336e04a5be56c97cc9983fdebd3155e673
			<Route path='/visualizarvaga/:id' component={Visualizarvaga}/>
			<Route path="/teste" component={Upload}/>
			<Route path="/visualizarCandidatos" component={VisualizarCandidato}/>
		</BrowserRouter>
	);
}
export default Routers;