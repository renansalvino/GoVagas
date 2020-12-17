import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import './app.css';

function App() {
    // Objetos que serão preenchidos com dados de cada gráfico
    const [line, setChartLine] = useState({});



    const LineChart = () => {
        setChartLine({
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            datasets: [
                {
                    label: 'Taxa de vezes que senti saudade dela em 2019',
                    data: [50, 40, 50, 22, 24, 25, 32, 45, 20, 30, 60, 58],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.6)'
                    ],
                    borderWidth: 4,
                },
                {
                    label: 'Taxa de vezes que senti saudade dela em 2020',
                    data: [50, 28, 32, 27, 30, 21, 37, 39, 15, 40, 50, 68],
                    backgroundColor: [
                        '#DB324A'
                    ],  
                    borderWidth: 4,
                }
            ]
        })
    }

    // UseEffect para preencher os gráficos com dados
    useEffect(() => {
        LineChart();
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
                                title: { text: 'Taxa de "Saudade Dela" [Line]', display: true }
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App;
