import React, { useEffect, useState } from 'react';
import './style.css';
import '../../../assets/styles/global.css'

import Header from '../../../components/header/index';
import Footer from '../../../components/footer/index';
import Sidebar from '../../../components/sidebar';
import { Link } from 'react-router-dom';
import { parseJwt } from '../../../auth';


function Dashboard() {

    const [usuario, setUsuario] = useState<any>();
    const [inscricaos, setInscricaos] = useState([]);
    const [vagas, setVagas] = useState([]);

    useEffect(() => {
        fetch("https://localhost:5001/api/Candidato/" + parseJwt().jti, {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('tokengovagas')
            }
        })
            .then(response => response.json())
            .then(dados => {
                console.log(dados)
                console.log(dados)
                setUsuario(dados)
            })
            .catch(err => console.error(err));
        ListarInscricaos();
        ListarVagas();
    }, []);

    const ListarInscricaos = () => {

        fetch("https://localhost:5001/api/Inscricao/" + parseJwt().jti, {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('tokengovagas')
            }
        })
            .then(response => response.json())
            .then(dados => {
                console.log(dados)
                setInscricaos(dados)
            })
            .catch(err => console.error(err));

    }

    const ListarVagas = () => {

        fetch("https://localhost:5001/api/Vaga", {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('tokengovagas')
            }
        })
            .then(response => response.json())
            .then(dados => {
                console.log(dados)
                setVagas(dados)
            })
            .catch(err => console.error(err));
    }

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
                                <h2>Bem vindo(a), {usuario?.idUsuarioNavigation.nome}!!</h2>

                                <div id="bar">
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped" >
                                            100%
                                    </div>
                                    </div>
                                </div>

                                <div className="h44">
                                    <h4>Atualize seu perfil: adicione skills, ajuste salário desejado, atualize seu último CV.</h4>
                                </div>
                            </div>
                        </div>


                        <div className="doubleBox">

                        <Link className="link" to="/vagas">
                            <div className="options-box22" >
                                <div className="flex-text">
                                    <p>Oportunidades ({vagas?.length})</p>

                                    <div className="row">
                                        <hr />
                                    </div>

                                    <div className="see">
                                        Ver
                                    </div>
                                </div>
                            </div>
                            </Link>

                            <Link className="link" to="/inscricoes">
                            <div className="options-box33">
                                <div className="flex-text">
                                    <p>Candidaturas ({inscricaos?.length})</p>

                                    <div className="row">
                                        <hr />
                                    </div>

                                    <div className="see">
                                        Ver
                                    </div>
                                </div>
                            </div>
                            </Link>


                        </div>

                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Dashboard;