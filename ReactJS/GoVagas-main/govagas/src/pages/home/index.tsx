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
                        <Input type="text" name="input" label="Input Padrão(Ex: Localização)" placeholder="Ex: Rua Dr. Alberto de Oliveira, n75 - São Paulo - Brasil" minLength={8} maxLength={100} />
                        <Button onClick="" name="btn1" value="Salvar" />
                    </div>
                    <div className="Input">
                        <Input type="email" name="input2" label="Input Peq. (Ex: Email)" placeholder="email@email.com" />
                    </div>
                    <div className="Input">
                        <Input type="date" name="input3" label="Input 1/3 (Ex: Data Ex)" placeholder="20/12/1980" />
                    </div>
                    <br />
                    <label htmlFor="Nao sei">Exemplo de Select</label>
                    <Select type="Select" name="Nao sei" id="nao_sei"/>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Home;