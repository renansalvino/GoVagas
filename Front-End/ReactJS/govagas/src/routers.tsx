import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home/index';
import Empresa from './pages/empresa/index';


function Routers() {
	return (
		<BrowserRouter>
			<Route path='/' exact component={Home}/>
			<Route path='/empresa' component={Empresa}/>
		</BrowserRouter>
	);
}
export default Routers;