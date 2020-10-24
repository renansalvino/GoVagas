import React from 'react';
import './style.css';
import Header from '../../components/header/index';
import Footer from '../../components/footer/index';
import imgNomeEmpresa from '../../assets/images/empresa/NomeEmpresa.png';
import Img1 from '../../assets/images/empresa/sidebar-img-1.png';
import Img2 from '../../assets/images/empresa/sidebar-img-2.png';
import Imgiconmais from '../../assets/images/empresa/iconmais.png';
import ImgJoinha from '../../assets/images/empresa/joia.png';
import ImgCandidatos from '../../assets/images/empresa/candidatos.png';



function Empresa() {
    return (
        <div className="principal">
            <Header />
            <div className="centro-empresa">
                <div className="centro-empresa2">
                    <div id="sidebar">
                        <img src={imgNomeEmpresa} id="imgNomeEmpresa" />
                        <h2>Coda para mim</h2>
                        <p id="p">Empresa de médio porte</p>
                        <div id="cinza-component">
                            <h3>Principal</h3>
                        </div>
                        <section className="options-sidebar">
                            <div className="optionsInOptions">
                                <img src={Img1} />
                                <p>Dashboard</p>
                            </div>
                            <div className="optionsInOptions">
                                <img src={Img2} />
                                <p>Pendências</p>
                            </div>
                            <div className="optionsInOptions">
                                <img src={Img1} />
                                <p>Publicar vagas</p>
                            </div>
                            <div className="optionsInOptions">
                                <img src={Img1} />
                                <p>Ver vagas</p>
                            </div>
                        </section>
                    </div>
                    <section className="options">
                        <h1>Dashboard</h1>
                        <div id="options-2">
                            <div className="options-box1">
                                <img src={Imgiconmais} id="Icon" />
                                <p>Publicar Vagas</p>
                            </div>
                            <div className="options-box2" >
                                <img src={ImgJoinha} id="joinha" />
                                
                                    <p id="num3">3</p>
                                    <p>Vagas Publicadas</p>
                            </div>
                            <div className="options-box3">
                                <img src={ImgCandidatos} id="candidatos" />
                                    <p id="num3">3</p>
                                    <p>Novos candidatos</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Empresa;