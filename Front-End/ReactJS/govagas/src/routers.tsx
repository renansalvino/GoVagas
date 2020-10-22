import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home/index'
// 	import Login from ‘./pages/Login’;

function Routers() {
	return (
		<BrowserRouter>
			<Route path='/' exact component={Home}/>
		</BrowserRouter>
	);
}
export default Routers;