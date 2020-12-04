import React, { useState, useContext } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, Alert, Image, TextInput, Button, TouchableOpacity, Switch } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Input } from 'react-native-elements';

//import de imagens
import ImgMaisVagas from '../../assets/images/maisvagas.png';

//import de paginas
import Cadastro from '../cadastro/index';

//import do context
import AuthContext from '../../context/auth';

// import das Interfaces
import LoginProps from '../../interfaces/login';



export default function Login (){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

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
    


    return (
        <View style={styles.containerAlign}>
            <View style={styles.backgroundImage}>
                <Image style={styles.img} source={ImgMaisVagas}></Image>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.titleText}>Login</Text>
                <TextInput style={styles.inputElement} placeholder='Email' onChangeText={(e: any) => setEmail(e)} />
                <TextInput style={styles.inputElement} placeholder='Senha' secureTextEntry={true} onChangeText={(e: any) => setSenha(e)} />
                <TouchableOpacity style={{
                    borderRadius: 10,
                    height: 40,
                    width: 300,
                    // box-shadow: 0px 4px 10px #0000002a,
                    marginTop: 30,
                    marginBottom: 20,
                    backgroundColor: '#DA251C',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                    onPress={event => {
                        event.preventDefault();
                        login();
                    }}
                // onPress={ () => navigation.navigate('Home')}
                >
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                    }}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={{ color: '#DA251C' }}>Não Possui Cadastro?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    containerAlign: {
        flex: 1,
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImage: {
        backgroundColor: '#DA251C',
        width: 1242,
        flex: 1,
        alignItems: 'center',
        position: 'relative',
        bottom: 80,
    },
    img: {
        resizeMode: 'contain',
        top: 160,
        width: 300,
        height: 100,
        position: 'relative',
    },
    inputContainer: {
        height: 390,
        width: '90%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 70,
    },
    inputElement: {
        backgroundColor: 'white',
        borderRadius: 15,
        height: 45,
        width: 300,
        shadowColor: 'black',
        paddingLeft: 15,
        marginTop: 15,
        borderBottomWidth: 0,
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'normal',
        color: '#DA251C',
        marginTop: 30,
    }
});
