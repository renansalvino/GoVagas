import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home/index'
import DashAdm from './pages/dashAdm/index'
// 	import Login from ‘./pages/Login’;

function Routers() {
	return (
		<BrowserRouter>
			<Route path='/' exact component={Home}/>
			<Route path='/dashadm' exact component={DashAdm}/>
		</BrowserRouter>
	);
}
export default Routers;