import { parse } from 'path';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import './app.css';

function App() {
    // Objetos que serão preenchidos com dados de cada gráfico
    const [line, setChartLine] = useState({});
    const [inscricaos, setInscricaos] = useState([]);
    const [inscricao, setInscricao] =useState()
    
    const ListarTaxaDeCandidaturas = () =>{
        fetch("https://localhost:5001/api/Inscricao", {
            method: 'GET'
        })
            .then(response => response.json())
            .then(dados => {
                setInscricaos(dados);
                console.log('Seus dados ' + dados)
            })
            .catch(err => console.error(err))
    }

    const LineChart = () => {
        setChartLine({
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            datasets: [
                {
                    label: 'Taxa de candidaturas',
                    data: [inscricaos.forEach],
                    backgroundColor: [
                        '#DB324A'
                    ],
                    borderWidth: 4,
                },
            ]
        })
    }

    // UseEffect para preencher os gráficos com dados
    useEffect(() => {
        ListarTaxaDeCandidaturas();
        LineChart(
        );
    }, [])


    return (
        <div className="App">
            <div className="content">
                <div className="charts">
                    <div className="chart">
                        <Line
                            data={line}
                            options={{
                                responsive: true,
                                title: { text: 'Taxa de Candidaturas no mês', display: true }
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App;
