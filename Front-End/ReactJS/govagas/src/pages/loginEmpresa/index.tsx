import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/index';
import Header from '../../components/header/index';
import Button from '../../components/button/index';
import ImgBahia from '../../assets/images/empresa/joia.png';
function loginEmpresa(

) {
  return (
    <div className="loginCandidato">
      <Header />
      <div>
        <h1>Login como Empresa</h1>
        <div className="slide-carrossel-login">
          <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={ImgBahia} className="d-block w-200" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Empresa 01</h5>
                  <p>“Praesent commodo cursus magna, vel scelerisque nisl consectetur....’’</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={ImgBahia} className="d-block w-200" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Empresa 02</h5>
                  <p>“’Praesent commodo cursus magna, vel scelerisque nisl consectetur.’</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={ImgBahia} className="d-block w-200" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Empresa 03</h5>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="login">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="nav-home-tab" data-toggle="tab"  href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="nav-profile-tab" data-toggle="tab"  href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Cadastrar-se</a>
            </li>
          </ul>
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

              <div className="login-login">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" >
                  <div className="login-inputs">
                    <input type="text" name="input2" placeholder="E-mail / CNPJ" minLength={8} maxLength={100} />
                    <tr />
                  </div>
                  <div className="login-inputs">
                    <input type="password" name="input2" placeholder="Senha" minLength={8} maxLength={100} />
                    <tr />
                    <p>Esqueceu sua senha?</p>
                  </div>
                  <div className="btn-criarconta">
                    <Button onClick="" name="btn1" value="Criar Conta" />
                  </div>
                  <div className="login-inputs">
                    <tr className="tr-empresa" />
                    <h1 className="h1-empresa1">Eu sou um aluno</h1>
                  </div>
                </div>
              </div>




            </div>
            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">


              <div className="login-login">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" >
                  <div className="login-inputs">
                    <input type="text" name="input2" placeholder="E-mail" minLength={8} maxLength={100} />
                    <tr />
                  </div>
                  <div className="login-inputs">
                    <input type="text" name="input2" placeholder="CNPJ" minLength={8} maxLength={100} />
                    <tr />
                  </div>
                  <div className="login-inputs">
                    <input type="password" name="input2" placeholder="Senha" minLength={8} maxLength={100} />
                    <tr />
                  </div>
                  <div className="login-inputs">
                    <input type="password" name="input2" placeholder="Confirmar Senha" minLength={8} maxLength={100} />
                    <tr />
                  </div>
                  <div className="btn-criarconta">
                  <Link to="/cadastroEmpresa"> <Button onClick="" name="btn1" value="Criar Conta" /> </Link>
                    
                  </div>
                  <div className="login-inputs">
                    <tr className="tr-empresa" />
                    <h1 className="h1-empresa2">Eu sou um aluno</h1>
                  </div>
                </div>
              </div>


            </div>
            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">.jjjjjjjjjjjjjjjj..</div>
          </div>






        </div>
      </div>
      <Footer />
    </div>
  )
}
export default loginEmpresa;
