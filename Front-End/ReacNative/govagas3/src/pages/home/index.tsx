import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, Switch } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import parseJwt from '../../services/tokenDecoder';
import Menu from '../../components/hamburguerzinho';


export default function Home({ navigation = useNavigation() }) {

    const [idVaga, setIdVaga] = useState(0);
    const [vaga, setVaga] = useState('');

    const [vagas, setVagas] = useState([]);

    // React.useEffect(() => {
    //     GetTokenUser().then(id => {
    //         visualizarVagaPorId(id!);
    //     })
    // }, []);

    // const GetTokenUser = async () => {
    //     const response = await AsyncStorage.getItem('tokengovagas')
    //     return (parseJwt(response!)?.jti)
    // }
    React.useEffect(() => {
        listar();
    }, []);

    const listar = () => {
        fetch('https://localhost:5001/api/Vaga', {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + AsyncStorage.getItem('tokengovagas')
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
                authorization: 'Bearer ' + AsyncStorage.getItem('tokengovagas')
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
    const visualizarVagaPorId = (id: number) => {

        fetch('https://localhost:5001/api/Vaga/' + id, {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + AsyncStorage.getItem('tokengovagas')
            }
        })
            .then(resp => resp.json())
            .then(dados => {
                setIdVaga(dados.idVaga);
                console.log(id);
            })
            .catch(err => console.error(err));
        }
    return (
        <View>
            <Menu navigation={navigation} />
            <Text style={{ backgroundColor: '#EEEEEE' }}>
                {
                    vagas.map((item: any) => {
                        return (
                            <View style={{
                                marginHorizontal: 50,
                                marginVertical: 30,
                                backgroundColor: 'white',
                                width: 350,
                                borderRadius: 20,
                                padding: 20,
                            }}>
                                <Text style={{ marginVertical: 10 }}>{item.tituloVaga}</Text>
                                <Text style={styles.title}>Descrição</Text>
                                <Text>{item.descAtivFuncoes}</Text>
                                <Text style={styles.title}>Requisitos</Text>
                                <Text>{item.habNecessaria}</Text>
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