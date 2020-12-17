import React, { useState } from 'react';
import './style.css';
import '../../../assets/styles/global.css'

import Header from '../../../components/header/index';
import Footer from '../../../components/footer/index';

import Sidebar from '../../../components/sidebar';
import imgAVA from '../../../assets/images/candidato/AVA.svg'
import imgmoney from '../../../assets/images/candidato/money.svg'
import imgtranslation from '../../../assets/images/candidato/translation.svg'
import imgcasestudy from '../../../assets/images/candidato/case-study.svg'
import imgnotes from '../../../assets/images/candidato/notes.svg'
import imgdiploma from '../../../assets/images/candidato/diploma.svg'
import imgofficeblock from '../../../assets/images/candidato/office-block.svg'

const [usuarios, setUsuarios] = useState([]);
    const [dados, setDados] = useState([]);
    const [cpf1, setCpf1] = useState('');
    const [senha, setSenha] = useState('');
    const [matricula, setMatricula] = useState('');
    
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');
    const [sexo, setSexo] = useState('');
    const [estado, setEstado] = useState('');
    const [url, setUrl] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [escola, setEscola] = useState('');

    const [dadosSenha, setDadosSenha] = useState('');
    const [dadosCpf, setDadosCpf] = useState('');
    
const Atualizar = () => {
    //fazer um if ternario para manter o valor caso nào seja alterado
    console.log(url)

    const DadosUsuario = {
        "nome": nome == Object.values(usuarios)[1] || nome == "" ? Object.values(usuarios)[1] : nome,
        "dataNascimento": data == Object.values(usuarios)[2] || data == "" ? Object.values(usuarios)[2] : data,
        "sexo": sexo == Object.values(usuarios)[3] || sexo == "" ? Object.values(usuarios)[3] : sexo,
        "escola": escola == Object.values(usuarios)[4] || escola == "" ? Object.values(usuarios)[4] : escola,
        "email": email == Object.values(usuarios)[5] || email == "" ? Object.values(usuarios)[5] : email,
        "telefone": telefone == Object.values(usuarios)[6] || telefone == "" ? Object.values(usuarios)[6] : telefone,
        "estadoCivil": estado == Object.values(usuarios)[7] || estado == "" ? Object.values(usuarios)[7] : estado,
        "UrlCurriculo": url == Object.values(usuarios)[8] || url == "" ? Object.values(usuarios)[8] : url,
        "nivel": Object.values(usuarios)[9] as any,
        "tipoCurso": Object.values(usuarios)[10] as any,
        "curso": Object.values(usuarios)[11] as any,
        "turma": Object.values(usuarios)[12] as any,
        "turno": Object.values(usuarios)[13] as any,
        "termo": Object.values(usuarios)[14] as any,
    };

    var idUsuario = localStorage.getItem("Real-Vagas-Id-Usuario") as any;
    var idUrl = parseInt(idUsuario);

    fetch('http://localhost:5000/api/Usuarios/' + idUrl, {
        method: 'PUT',
        body: JSON.stringify(DadosUsuario),
        headers: {
            //Bearer é o token authentication, um Schema paraautenticação HTTP
            //Ele indentifica recursos protegidos por um OAuth2
            authorization: 'Bearer ' + localStorage.getItem('Real-Vagas-Token'),
            'Content-Type': 'application/json'
        }
    })
        .then(() => {
            window.location.reload();
        })

        .catch(Erro => console.error(Erro));
}

function Editar() {
    return (
        <div>
            <Header />
            {/* todo em linhas */}
            <div className="areaDash">
                <Sidebar />
                {/* colunas d */}
                <div className="centro-box">
                    <section className="box-centro3">
                        <h1>Candidaturas</h1>
                        <div className="options-box01">
                            <div className="textd">
                                <h6>Programador CSharp</h6>
                                {/* icones */}
                                <div className="text03">
                                    <div className="textinf3">

                                        {/* logo */}
                                        <div className="logo">
                                            <img src={imgAVA} alt="Ava" title="Ava" width="auto" height="60px" />
                                        </div>
                                        <div className="bre01">
                                            <div className="item02">
                                                <img src={imgofficeblock} alt="officeblock" title="officeblock" width="30px" height="30px" />
                                                <p>Em busca do primeiro emprego</p>
                                            </div>
                                            <div className="item02">
                                                <img src={imgmoney} alt="Money" title="Money" width="30px" height="30px" />
                                                <p>R$ 6969,69</p>
                                            </div>
                                            <div className="item02">
                                                <img src={imgtranslation} alt="Translation" title="Translation" width="30px" height="30px" />
                                                <p>Ingles</p>
                                            </div>
                                        </div>

                                        <div className="bre02">

                                            <div className="item02">
                                                <img src={imgcasestudy} alt="Casestudy" title="Casestudy" width="25px" height="25px" />
                                                <p>Full Stack</p>
                                            </div>

                                            <div className="item02">
                                                <img src={imgnotes} alt="Notes" title="Notes" width="25px" height="25px" />
                                                <p>Contratação CLT</p>
                                            </div>

                                            <div className="item02">
                                                <img src={imgdiploma} alt="Diploma" title="Diploma" width="25px" height="25px" />
                                                <p>Desenvolvimento de Sistema</p>
                                            </div>

                                        </div>
                                        {/* TAG */}

                                        <div className="status">
                                            <p>Candidatura enviada </p>
                                        </div>

                                    </div>
                                </div>

                                <div className="texthab2">

                                    <div className="item"><p>C#</p></div>
                                    <div className="item"><p>Java</p></div>
                                    <div className="item"><p>SQL</p></div>
                                    <div className="item"><p>PHP</p></div>
                                    <div className="item"><p>HTML</p></div>
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
export default Editar;