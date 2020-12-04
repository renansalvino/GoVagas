import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home/index';
import Perfil from './pages/perfil/index';
import Dashboard from './pages/dashboard/index';
import Candidatar from './pages/candidatar/index';
import Listarvagas from './pages/listarvagas/index';
import Visualizarvaga from './pages/visualizarvaga/index';


function Routers() {
	return (
		<BrowserRouter>
			<Route path='/' exact component={Home}/>
			<Route path='/perfil' component={Perfil}/>
			<Route path='/dashboard' component={Dashboard}/>
			<Route path='/candidatar' component={Candidatar}/>
			<Route path='/listarvagas' component={Listarvagas}/>
			<Route path='/visualizarvaga' component={Visualizarvaga}/>
			 	{/* SR.Miagui */}
			{/* <Route path='/visualizarvaga/:id' component={Visualizarvaga}/> */}
		</BrowserRouter>
	);
}
export default Routers;