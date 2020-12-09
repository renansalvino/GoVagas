import React, { useContext, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, View, Alert, Image, TextInput, Button, TouchableOpacity, Switch } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
// import ImgSenaiGoVagas from '../../assets/images/senaiGoVagas.png';
import { Input } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Menu from '../../components/hamburguerzinho/index';
import { useHistory } from 'react-router-native';
import AuthContext from '../../context/auth';
import LoginProps from '../../interfaces/login';

// splash2
// "image": "./src/assets/images/Logo_SENAI_BRANCO_NEGATIVO.png",
// "resizeMode": "contain",
// "backgroundColor": "#DB324A"

export default function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    

    // const Redirect = () => {
    //     const token = AsyncStorage.getItem('tokengovagas')
    //     if (token === undefined || token === null) {
    //         alert('...')
    //     } else {   
    //     if (parseJwt().Role == "2") {
    //         navigation.replace('RedirecionarTeste')
    //     }
    //     if (parseJwt().Role == "2") {
    //         navigation.replace('Home')
    //     }
    // }
    // }


    const { SignIn } = useContext(AuthContext);

    const login = async () => {
        const form: LoginProps = {
            email: email,
            senha: senha,
        };

        if (form.email.length === 0 || form.senha.length === 0) {
            return Alert.alert('Preencha os campos de email e senha corretamente.');
        }

        // Função do context que irá fazer a autenticação e retornar erro (na própria função) caso precise
        SignIn(form);
    };

    // fetch('http://192.168.15.99:5000/api/Login', {
    //     method: 'POST',
    //     body: JSON.stringify(form),
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    // })
    //     .then(resp => resp.json())
    //     .then(data => {
    //         if (data.token !== undefined) {
    //             AsyncStorage.setItem('tokengovagas', data.token);
    //             console.log(data.token)
    //             // navigation.navigate('Home')
    //             // AsyncStorage.getItem('tokengovagas')
    //             // if (parseJwt().Role === "3") {
    //             //     navigation.replace('RedirecionarTeste')
    //             // }
    //             // console.log(parseJwt().Role)
    //             // if (parseJwt().Role === "2") {
    //             //     navigation.replace('Home')
    //             // }
    //             // console.log(parseJwt().Role)



    //             // {Redirect()}

    //         }
    //         else {
    //             Alert.alert('Email ou senha inválidos', data);
    //         }

    //     })
    //     // .then(teste => {
    //     //     const token = AsyncStorage.getItem('tokengovagas')
    //     //         if (token === undefined || token === null) {
    //     //             alert('...')
    //     //         } else {
    //     //             try{
    //     //                 if (parseJwt().Role == "2") {
    //     //                     navigation.replace('RedirecionarTeste')
    //     //                 }
    //     //                 if (parseJwt().Role == "3") {
    //     //                     navigation.replace('Home')
    //     //                 }
    //     //             }  catch (exeption) {
    //     //                alert('deu ruim')
    //     //             }

    //     //     }
    //     // })
    //     .catch(erro => console.log('deu erro', erro));

    return (
        <View style={styles.container}>

            <Image style={styles.imgLogo} source={require('../../assets/images/logoGO.png')} />

            <View style={styles.inputs}>
                <TextInput style={styles.inputsLogin} placeholder="EMAIL" onChangeText={(e: any) => setEmail(e)} />

                <TextInput style={styles.inputsLogin} secureTextEntry={true} placeholder=" SENHA " onChangeText={(e: any) => setSenha(e)} />

            </View>

            <TouchableOpacity>
                <Text style={styles.txtSenha}>Esqueceu sua senha?</Text>
            </TouchableOpacity>

            <View>

                <TouchableOpacity>
                    <Text style={styles.btnEntrar} onPress={event => {
                        event.preventDefault();
                        login();
                    }}>ENTRAR</Text>
                </TouchableOpacity>

            </View>

            {/* <View>
        
                <TouchableOpacity>
                  <Text style={styles.txtEmpresa}>Entrar como empresa</Text>
                </TouchableOpacity>
        
              </View> */}
            {/* <View style={styles.Senai}>
                <Text style={styles.txtLogin}>Com o apoio do </Text>
        
                <Image style={styles.imgLogoSenai} source={require('../GoVagas/assets/imagens/Logo_PRETO_POSITIVO.png')} />
              </View> */}

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50

    },
    btnEntrar: {
        backgroundColor: '#DB324A',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        width: 300,
        height: 50,
        marginTop: 60,
        borderRadius: 7,
        color: 'white',
        marginBottom: 35
    },
    inputs: {
        paddingTop: 55
    },
    imgLogo: {
        resizeMode: "stretch",
        width: 210,
        height: 150,
        backgroundColor: '#868686',

    },
    imgLogoSenai: {
        resizeMode: "stretch",
        width: 140,
        height: 40,
        //backgroundColor: '#868686'
    },
    txtEmpresa: {
        // marginTop: 80

    },
    inputsLogin: {
        width: 300,
        height: 50,
        borderBottomWidth: 2,
        borderBottomColor: '#868686',
        margin: 15
    },
    txtSenha: {
        // marginTop: 30,
        paddingLeft: 150
    },
    txtLogin: {
        textAlign: 'center'
    },
    Senai: {
        margin: 50
    },
});
