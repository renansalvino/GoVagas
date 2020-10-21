import React from 'react'
import './Style.css';


function Home() {
    return (
        <div className='Principal'>
            <h1>Exemplos de botões com Bootstrap</h1>
            <div>
                <button type="button" className="btn btn-info">Botão_de_teste</button>
            </div>
            <h1>Exemplos de botões do figma</h1>
            <div className="Button_Figma">
                <button className="figma1" >Botão_de_teste</button>
                <button className="figma2">Salvar</button>
            </div>
        </div>
    )
}
export default Home;