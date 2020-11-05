import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home/index';
import Admin from './pages/empresa/Admin/index';
import Publicar_Vaga from "./pages/empresa/publi_vaga/index";
import Publicar_Vaga_2 from './pages/empresa/publi_vaga2/index';
import Publicar_Vaga_3 from './pages/empresa/publi_vaga3/index';
import Info_Estagio from './pages/empresa/info_estagio/index';



function Routers() {
	return (
		<BrowserRouter>
			<Route path='/' exact component={Home}/>
			<Route path='/Admin' component={Admin}/>
			<Route path="/publicar_vaga" component={Publicar_Vaga}/>
			<Route path="/publicar_vaga_2" component={Publicar_Vaga_2}/>
			<Route path="/publicar_vaga_3" component={Publicar_Vaga_3}/>
			<Route path="/info_estagio" component={Info_Estagio}/>
		</BrowserRouter>
	);
}
export default Routers;