import React from 'react';
import './style.css';
import '../../assets/styles/global.css';
import ImgLogoSenai from '../../assets/images/LogoSENAI_Branco.png';

function Footer() {
    return (
        <div className="principal">
            <div className="centro-footer">

                <footer>
                    <div id="rodape">

                        <img src={ImgLogoSenai} alt="logo senai são paulo" title="SENAI" />

                        <div className="conteudo_rodape">

                            <h2>Institucional</h2>
                            <p>Sobre nós </p>
                            <p>Para empresa</p>
                            <p>Para desenvolvedores</p>

                        </div>

                        <div className="conteudo_rodape">

                            <h2>Informações</h2>
                            <p>Para empresas</p>
                            <p>Perguntas frequentes</p>
                            <p>Para desenvolvedores</p>

                        </div>

                        <div className="conteudo_rodape">

                            <h2>Vagas</h2>
                            <p>Desenvolvedor C#</p>
                            <p>Desenvolvedor JAVA</p>
                            <p>Desenvolvedor C++</p>

                        </div>


                    </div>

                </footer>

            </div>
        </div>
    )
}
export default Footer;