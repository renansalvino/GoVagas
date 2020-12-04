import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, Switch } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import parseJwt from '../../services/tokenDecoder';
import Menu from '../../components/hamburguerzinho';


export default function Home({ navigation = useNavigation() }) {

    const [idInscricao, setIdInscricao] = useState(0);
    const [inscricao, setInscricao] = useState('');

    const [inscricaos, setInscricaos] = useState([]);

    React.useEffect(() => {
        GetTokenUser().then(id => {
            visualizarVagaPorId(id!);
        })
    }, []);

    const GetTokenUser = async () => {
        const response = await AsyncStorage.getItem('tokengovagas')
        return (parseJwt(response!)?.jti)
    }
    // React.useEffect(() => {
    //     listar();
    // }, []);

    // const listar = () => {
    //     fetch('https://localhost:5001/api/Vaga', {
    //         method: 'GET',
    //         headers: {
    //             authorization: 'Bearer ' + AsyncStorage.getItem('tokengovagas')
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(dados => {
    //             setVagas(dados);
    //             console.log('' + vagas)

    //         })
    //         .catch(err => console.error('Ocorreu um erro:', err));
    // }

    // const visualizarVaga = (id: number) => {

    //     fetch('https://localhost:5001/api/Vaga/' + id, {
    //         method: 'GET',
    //         headers: {
    //             authorization: 'Bearer ' + AsyncStorage.getItem('tokengovagas')
    //         }
    //     })
    //         .then(resp => resp.json())
    //         .then(dados => {
    //             setIdVaga(dados.idVaga);
    //             console.log(id);
    //             // localStorage.setItem( 'IdVaga', String(idVaga))
    //             navigation.navigate(`/visualizarVaga?id=${id}`)
    //         })
    //         .catch(err => console.error(err));

    // }
    const visualizarVagaPorId = (id: number) => {

        // fetch('https://localhost:5001/api/Vaga/Vaga/' + id, {
        fetch('https://localhost:5001/api/Inscricao/Candidato/' + id, {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + AsyncStorage.getItem('tokengovagas')
            }
        })
            .then(resp => resp.json())
            .then(dados => {
                setInscricaos(dados);
                console.log(inscricaos);
            })
            .catch(err => console.error(err));
    }
    return (
        <View>
            <Menu navigation={navigation} />
            <Text style={{ backgroundColor: '#EEEEEE' }}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: 30, marginTop: 30, marginLeft:115 ,marginBottom: 30,}}>Candidaturas</Text>
                </View>

                {
                    inscricaos.map((item: any) => {
                        return (
                            <View style={{
                                marginHorizontal: 50,
                                marginVertical: 30,
                                backgroundColor: 'white',
                                width: 320,
                                borderRadius: 20,
                                padding: 20,
                            }}>
                                <View style={{
                                    flex: 1, alignItems: 'center'
                                }}>
                                    <Text style={{ marginVertical: 1, fontSize: 30, fontWeight: 'bold' }}>Avanade</Text>
                                    <Text style={{ marginVertical: 10, fontSize: 20, }}> {item.idVagaNavigation.tituloVaga} </Text>

                                </View>
                                <View style={{
                                    flex: 1,
                                    marginLeft: 10,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}>
                                    <View style={{
                                        flex: 1,
                                        flexDirection: 'column',
                                        justifyContent: 'space-between'

                                    }}>
                                        {/* <View style={{
                                    }}></View> */}
                                        {/* <Text style={styles.title}>Descrição</Text> */}

                                        {/* <Text style={{ marginVertical: 10}}>{item.idVagaNavigation.idCandidatoNavigation.focoCarreira}</Text> */}
                                        <Text style={{ marginVertical: 10, marginTop: 20 }}>Full Stack</Text>
                                        <Text style={{ marginVertical: 10 }}>Estágio</Text>
                                        <Text style={{ marginVertical: 10 }}>{item.idVagaNavigation.habNecessaria}</Text>
                                    </View>

                                    <View style={{
                                        flex: 1,
                                        marginLeft: 20,
                                        flexDirection: 'column',
                                        justifyContent: 'space-between'
                                    }}>
                                        {/* <Text style={{ marginVertical: 10}}>{item.idVagaNavigation.descAtivFuncoes}</Text> */}
                                        {/* <Text style={styles.title}>Requisitos</Text> */}
                                        {/* <View style={{
                                            flex: 1,
                                            flexDirection: 'row',
                                        }}> */}
                                        {/* <Image style={{ width: 20, height: 20, borderRadius: 1000 }} source={require('../../assets/images/SpectroVagas1.png')} /> */}
                                        <Text style={{ marginVertical: 10, marginTop: 20 }}>R$ 5000,00</Text>
                                        {/* </View> */}


                                        <Text style={{ marginVertical: 10 }}>Júnior</Text>
                                        <Text style={{ marginVertical: 10 }}>Trabalho Presencial</Text>

                                    </View>
                                </View>


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