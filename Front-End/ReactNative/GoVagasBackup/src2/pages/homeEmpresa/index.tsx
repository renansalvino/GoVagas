import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, Switch } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Menu from '../../components/menu'

export default function Home({ navigation = useNavigation() }) {

    const [idVaga, setIdVaga] = useState(0);
    const [vaga, setVaga] = useState('');

    const [vagas, setVagas] = useState([]);

    React.useEffect(() => {
        listar();
    }, []);

    const listar = () => {
        fetch('https://localhost:5001/api/Vaga', {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + AsyncStorage.getItem('token-maisVagas')
            }
        })
            .then(response => response.json())
            .then(dados => {
                setVagas(dados);
                console.log('' + vagas)

            })
            .catch(err => console.error('Ocorreu um erro:', err));
    }

    const visualizarVaga = (id: number) => {

        fetch('https://localhost:5001/api/Vaga/' + id, {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + AsyncStorage.getItem('token-maisVagas')
            }
        })
            .then(resp => resp.json())
            .then(dados => {
                setIdVaga(dados.idVaga);
                console.log(id);
                // localStorage.setItem( 'IdVaga', String(idVaga))
                navigation.navigate(`/visualizarVaga?id=${id}`)
            })
            .catch(err => console.error(err));
    }

    return (
        <View>
            <Menu navigation={navigation}/>

            <Text>
                Tela empresa
            </Text>
            <Text style={{backgroundColor: '#EEEEEE'}}>
                {
                vagas.map((item: any) => {
                    return (
                        <View style={{
                            marginHorizontal: 50,
                            marginVertical: 30,
                            backgroundColor: 'white',
                            borderRadius: 20,
                            padding: 20,}}>
                            <Text style={styles.title}>Titulo</Text>
                            <Text>{item.nomeVaga}</Text>
                            <Text style={styles.title}>Descrição da Vaga</Text>
                            <Text>{item.descricaoVaga}</Text>
                            <Text style={styles.title}>SoftSkills</Text>
                            <Text>{item.softSkills}</Text>
                        </View>
                    );
                })}
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 15,
        marginVertical: 10,
        color: '#DA251C',
    }
})