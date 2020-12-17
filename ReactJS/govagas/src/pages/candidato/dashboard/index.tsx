import React from 'react';
import './style.css';
import '../../../assets/styles/global.css'

import Header from '../../../components/header/index';
import Footer from '../../../components/footer/index';
import Sidebar from '../../../components/sidebar';
import { Link } from 'react-router-dom';


function Dashboard() {


    return (
        <div>
            <Header />
            <div className="areaDash">
                <Sidebar />
                <div className="centro-box">
                    <section className="box-centro">           

                        <h1>Dashboard</h1>

                        <div className="options-box1">
                            <div className="text">
                                <h2>Bem vindo(a), Lapis</h2>

                                <div id="bar">
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped" >
                                            80%
                                    </div>
                                    </div>
                                </div>

                                <div className="h44">
                                    <h4>Atualize seu perfil: adicione skills, ajuste salário desejado, atualize seu último CV.</h4>
                                </div>
                            </div>
                        </div>


                        <div className="doubleBox">   


                            <div className="options-box2" >
                                <div className="flex-text">
                                    <p>Oportunidades (2)</p>

                                    <div className="row">
                                        <hr />
                                    </div>

                                    <div className="see">
                                        <Link className="link" to="/">Ver</Link>
                                    </div>
                                </div>
                            </div>


                            <div className="options-box3">
                                <div className="flex-text">
                                    <p>Candidaturas (3)</p>

                                    <div className="row">
                                        <hr />
                                    </div>

                                    <div className="see">
                                        <Link className="link" to="/">Ver</Link>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Dashboard;