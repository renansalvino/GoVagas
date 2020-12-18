import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, Switch } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({ navigation = useNavigation() }) {

    const [idVaga, setIdVaga] = useState(0);
    const [vaga, setVaga] = useState('');

    const [vagas, setVagas] = useState([]);

    React.useEffect(() => {
        listar();
    }, []);

    const listar = () => {
        fetch('http://localhost:5000/api/Vaga', {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + AsyncStorage.getItem('token-inova')
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

        fetch('http://localhost:5000/api/Vaga/' + id, {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + AsyncStorage.getItem('token-inova')
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
                            <Text style={{marginVertical: 10}}>{item.nomeVaga}</Text>
                            <Text style={styles.title}>Descrição</Text>
                            <Text>{item.descricao}</Text>
                            <Text style={styles.title}>Requisitos</Text>
                            <Text>{item.requisitos}</Text>
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
        fontSize: 15
    }
})