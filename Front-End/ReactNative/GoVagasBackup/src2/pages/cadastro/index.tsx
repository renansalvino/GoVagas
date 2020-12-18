import * as React from 'react';
import { Animated, StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Input } from 'react-native-elements';
import Container from '../../components/container/index';

export default function Cadastro({ navigation = useNavigation() }) {
    return (

        <View style={styles.containerAlign}>
            <View style={styles.backgroundImage}>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.titleText}>Cadastro</Text>
                <Input label='Nome Completo' />
                <Input label='Data de Nascimento' />
                <Input label='Gênero' />
                <Input label='Número de Matrícula' />
                <Input label='CPF' />
                <Input label='Situação de Empregabilidade' />
                <Input label='Curso' />
                <Input label='Email Para Contato' />
                <Input label='Endereço' />
                <Input label='Telefone' />
                <Input label='Celular' />
                <Input label='Email' />
                <Input label='Senha' />
                <Input label='Confirmar Senha' />
                <TouchableOpacity style={{
                    borderRadius: 10,
                    height: 40,
                    width: 300,
                    // box-shadow: 0px 4px 10px #0000002a,
                    marginTop: 30,
                    marginBottom: 20,
                    backgroundColor: '#df2f2f',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                    }}
                        onPress={() => navigation.navigate('Home')}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={{ color: '#df2f2f' }} onPress={() => navigation.navigate('Cadastro')}>Não Possui Cadastro?</Text>
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
        backgroundColor: '#df2f2f',
        width: 1242,
        height: 180,
        alignItems: 'center',
        position: 'relative',
        bottom: 80,
    },
    img: {
        resizeMode: 'contain',
        top: 80,
        width: 300,
        height: 100,
        position: 'relative',
    },
    inputContainer: {
        height: 390,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        top: 290,
    },

    titleText: {
        fontSize: 30,
        fontWeight: 'normal',
        color: '#df2f2f',
    }
})