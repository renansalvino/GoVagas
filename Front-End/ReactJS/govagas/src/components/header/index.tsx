import React from 'react';
import './style.css'
import ImgLogo from '../../assets/images/logoGO.png'
import Button from '../../components/button/index'


function Header() {
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

