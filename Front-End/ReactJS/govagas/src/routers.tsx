import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home/index';
import AdminEmpresa from './pages/empresa/Admin/index';
import PublicarVaga from "./pages/empresa/publi_vaga/index";
import PublicarVagaDois from './pages/empresa/publi_vaga2/index';
import PublicarVagatres from './pages/empresa/publi_vaga3/index';
import infoestagio from './pages/empresa/info_estagio/index';
import completarcadastro_01 from './pages/completarCadastroAluno/Etapa01';
import completarcadastro_02 from './pages/completarCadastroAluno/Etapa02';
import completarcadastro_03 from './pages/completarCadastroAluno/Etapa03';
import LoginCandidato from './pages/loginCandidato';
import loginEmpresa from './pages/loginEmpresa';
import Perfil from './pages/perfil/index';
import Dashboard from './pages/dashboard/index';
import Candidatar from './pages/candidatar/index';
import Listarvagas from './pages/listarvagas/index';
import Visualizarvaga from './pages/visualizarvaga/index';
import DashAdmin from './pages/Administrador/dashAdm/index';
import DashAdmin_tabelaCandidatos from './pages/Administrador/tabelaCandidatos/index';
import candidatar_aluno from '../src/pages/candidatar_vaga_aluno/index'

//Rotas das páginas

function Routers() {
	return (
		<BrowserRouter>
			<Route path='/' exact component={Home} />
			<Route path="/candidatar_aluno" component={candidatar_aluno} />
			<Route path='/DashboardAdmin' component={DashAdmin} />
			<Route path='/DashboardAdmin/tabelaCandidatos' component={DashAdmin_tabelaCandidatos} />
			<Route path='/AdminEmpresa' component={AdminEmpresa} />
			<Route path="/publicarvaga" component={PublicarVaga} />
			<Route path="/publicarvagadois" component={PublicarVagaDois} />
			<Route path="/publicarvagatres" component={PublicarVagatres} />
			<Route path="/infoestagio" component={infoestagio} />
			<Route path='/completarCadastroAluno' component={completarcadastro_01} />
			<Route path='/completarCadastroAlunodois' component={completarcadastro_02} />
			<Route path='/completarCadastroAlunotres' component={completarcadastro_03} />
			<Route path='/loginCandidato' component={LoginCandidato} />
			<Route path='/loginEmpresa' component={loginEmpresa} />
			<Route path='/dashboard' component={Dashboard} />
			<Route path='/candidatar' component={Candidatar} />
			<Route path='/listarvagas' component={Listarvagas} />
			<Route path='/visualizarvaga' component={Visualizarvaga} />
			<Route path='/perfil' component={Perfil} />
		</BrowserRouter>
	);
}
export default Routers;