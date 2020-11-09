import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import './style.css'
import ImgLogo from '../../assets/images/logoGO.png'
import Button from '../../components/button/index'


function Header() {

    let history = useHistory();

    const Logout = () => {
        localStorage.removeItem('tokengovagas');
        history.push('/');
    }

    const Menu = () => {
        const token = localStorage.getItem('tokengovagas');

        if (token === undefined || token === null) {
            return (
                <ul className="menuNav">
                    <li><Link className="link" to="/">Home</Link></li>
                    <li><Link className="link" to="/listarFilme">Filmes</Link></li>
                    <li><Link className="link" to="/login">Login</Link></li>
                    <li><Link className="link" to="/cadastro">Cadastro</Link></li>
                </ul>
            );
        } else {
            return (
                <ul className="menuNav">
                <li><Link className="link" to="/">Home</Link></li>
                <li><Link className="link" to="/filme">Filmes</Link></li>
                <li><Link className="link" to="/genero">Generos</Link></li>
                <li><Link className="link" to="/perfil">Perfil</Link></li>
                <li><Link to="" className="Link" onClick={event => {
                    event.preventDefault();
                    Logout();
                }}>Logout</Link></li>
            </ul>
            );

        }
    }

    return (
        <div className="principal">
            <div className="centro-home">
                <nav>
                    <img src={ImgLogo} alt="logo go vagas" title="GoVagas" />
                    <div id="ul_flex">
                        <ul>
                            <li><a href="#">VER VAGAS</a></li>
                            <li><a href="#">LOGIN</a></li>
                            <li><Button onClick="" name="btn1" value="CADASTRAR-SE"/></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default Header;

