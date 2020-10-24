import React from 'react';
import './style.css';
import '../../assets/styles/global.css';
import Footer from '../../components/footer/index';
import Header from '../../components/header/index'
import Button from '../../components/button/index';
import Input from '../../components/input/index';
import Select from '../../components/select/index';

function Home() {
    return (
        <div className='principal'>
            <Header />
            <div className="centro-home">
                <h1>Exemplos de botões do figma</h1>
                <div className="Button_Figma">
                    <div className="davi">
                        <p>Botão primário</p>
                        <Button onClick="" name="btn1" value="Salvar" />
                    </div>
                    <div className="davi">
                        <p>Botão secundário</p>
                        <Button onClick="" value="Cancelar" name="btn2" />
                    </div>
                    <div className="davi">
                        <p>Terceiro botão</p>
                        <Button onClick="" value="Sair" name="btn3" />
                    </div>
                    <div className="Input">
                        <Input type="password" name="input" label="Input" placeholder="Máximo 8 linhas" minLength={8} maxLength={100} />
                    </div>
                    <br />
                    <label htmlFor="Exemplo de select"/>
                    <Select type="Select" name="Nao sei" id="nao_sei">
                        <option value="Erick"></option>
                        <option value="Renan"></option>
                        <option value="Gabi"></option>
                        <option value="Czar"></option>
                    </Select>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Home;