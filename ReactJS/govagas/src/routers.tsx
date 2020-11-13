import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home/index'
import DashAdm from './pages/Administrador/dashAdm/index'
import TabelaCandidatos from './pages/Administrador/tabelaCandidatos/index'
import CadastroCandidatoUm from './pages/cadastroAluno/etapa01';
import CadastroCandidatoDois from './pages/cadastroAluno/etapa02';
import CadastroCandidatoTres from './pages/cadastroAluno/etapa03';
import CadastroCandidatoQuatro from './pages/cadastroAluno/etapa04';
import completarcadastro_01 from './pages/completarCadastroAluno/Etapa01';
import completarcadastro_02 from './pages/completarCadastroAluno/Etapa02';
import completarcadastro_03 from './pages/completarCadastroAluno/Etapa03';
import cadastroEmpresa01 from './pages/cadastroEmpresa/etapa01';
import cadastrocandidato02 from './pages/cadastroAluno/etapa02';
import cadastroEmpresa02 from './pages/cadastroEmpresa/etapa02';
import LoginCandidato from './pages/loginCandidato/index';
import loginEmpresa from './pages/loginEmpresa';
// 	import Login from ‘./pages/Login’;

function Routers() {
	return (
		<BrowserRouter>
			<Route path='/' exact component={Home}/>
			<Route path='/dashadm' exact component={DashAdm}/>
			<Route path='/tabelacandidatos' exact component={TabelaCandidatos}/>
			<Route path='/cadastroAluno' component={CadastroCandidatoUm}/>
			<Route path='/cadastroAluno2' component={CadastroCandidatoDois}/>
			<Route path='/cadastroAluno3' component={CadastroCandidatoTres}/>
			<Route path='/cadastroAluno4' component={CadastroCandidatoQuatro}/>
			<Route path='/completarCadastroAluno' component={completarcadastro_01}/>
			<Route path='/completarCadastroAluno2' component={completarcadastro_02}/>
			<Route path='/completarCadastroAluno3' component={completarcadastro_03}/>
			<Route path='/cadastroEmpresa' component={cadastroEmpresa01}/>
			<Route path='/cadastroAluno2' component={cadastrocandidato02}/>
			<Route path='/cadastroEmpresa2' component={cadastroEmpresa02}/>
			<Route path='/loginCandidato' component={LoginCandidato}/>
			<Route path='/loginEmpresa' component={loginEmpresa}/>
		</BrowserRouter>
	);
}
export default Routers;