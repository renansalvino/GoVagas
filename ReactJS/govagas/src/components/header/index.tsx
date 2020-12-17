import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './style.css'
import ImgLogo from '../../assets/images/logoGO.png'
import Button from '../../components/button/index'
import { parseJwt } from '../../auth'


function Header() {

    let history = useHistory();

    const Logout = () => {
        localStorage.removeItem('tokengovagas');
        history.push('/');
    }

    const Cadastrese = () => {
        alert('Faça login para Visualizar Vagas!')
    }

    const Menu = () => {
        const token = localStorage.getItem('tokengovagas');

        if (token === undefined || token === null) {
            return (
                <ul className="menuNav">
                    <ul className="menuNav">
                        <button id="btn0" onClick={Cadastrese}><li>VER VAGAS</li></button>
                        <li>
                            {/* <Link className="link" to="/loginCandidato">LOGIN</Link> */}
                            <div className="dropdown">
                                <button className="dropbtn">LOGIN</button>
                                <div className="dropdown-content">
                                    <a href="/loginCandidato">Login como candidato</a>
                                    <a href="/loginEmpresa">Login como empresa</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="dropdown">
                                <button className="dropbtn">CADASTRE-SE</button>
                                <div className="dropdown-content">
                                    <a href="/loginCandidato">Cadastro como candidato</a>
                                    <a href="/loginEmpresa">Cadastro como empresa</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </ul>
            );
        } else {
            if (parseJwt().Role === "3") {
                return (
                    <ul className="menuNav">
                        <li><Link className="link" to="/dashboardCandidato">DASHBOARD</Link></li>
                        <li><Link className="link" to="/vagas">VER VAGAS</Link></li>
                        <li><Link to="" className="Link" onClick={event => {
                            event.preventDefault();
                            Logout();
                        }}><Button name="btn1" value="LOGOFF" /></Link></li>
                    </ul>
                );
            }
            if (parseJwt().Role === "2") {
                return (
                    <ul className="menuNav">
                        <li><Link className="link" to="/dashEmpresa">DASHBOARD</Link></li>
                        <li><Link className="link" to="/publicarvaga">PUBLICAR VAGA</Link></li>
                        <li><Link to="" className="Link" onClick={event => {
                            event.preventDefault();
                            Logout();
                        }}><Button name="btn1" value="LOGOFF" /></Link></li>
                    </ul>
                );
            }
            if (parseJwt().Role === "1") {
                return (
                    <ul className="menuNav">
                        <li><Link className="link" to="/dashadm">DASHBOARD</Link></li>
                        <li><Link className="link" to="/tabelaCandidatos">TABELAS</Link></li>
                        <li><Link to="" className="Link" onClick={event => {
                            event.preventDefault();
                            Logout();
                        }}><Button name="btn1" value="LOGOFF" /></Link></li>
                    </ul>
                );
            }


        }
    }

    return (
        <div className="principal">
            <div className="centro-home">
                <nav>
                    <Link className="link" to="/">
                        <img src={ImgLogo} alt="logo go vagas" title="GoVagas" />
                    </Link>
                    <div id="ul_flex">
                        {Menu()}
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default Header;

