import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home/index';
import Admin from './pages/empresa/Admin/index';
import PublicarVaga from "./pages/empresa/publi_vaga/index";
import PublicarVagaDois from './pages/empresa/publi_vaga2/index';
import PublicarVagaTres from './pages/empresa/publi_vaga3/index';
import infoestagio from './pages/empresa/info_estagio/index';



function Routers() {
	return (
		<BrowserRouter>
			<Route path='/' exact component={Home}/>
			<Route path='/Admin' component={Admin}/>
			<Route path="/publicarvaga" component={PublicarVaga}/>
			<Route path="/publicarvagadois"component={PublicarVagaDois}/>
			<Route path="/publicarvagatres"component={PublicarVagaTres}/>
			<Route path="/infoestagio" component={infoestagio}/>
		</BrowserRouter>
	);
}
export default Routers;