import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, View, Alert, Image, TextInput, Button, TouchableOpacity, Switch } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
// import ImgSenaiGoVagas from '../../assets/images/senaiGoVagas.png';
import { Input } from 'react-native-elements';
import Cadastro from '../cadastro/index';
import Menu from '../../components/hamburguerzinho/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RedirecionarTeste({ navigation = useNavigation() }) {

    return (
        <View>
            <Menu navigation={navigation} />

            <View style={styles.container}>


                <TouchableOpacity>
                    <Text>Seja Bem-Vindo, Corno!</Text>
                </TouchableOpacity>

                <View>


                    {/* <TouchableOpacity>
                    <Text onPress={event => {
                        event.preventDefault();
                        login();
                    }}>ENTRAR</Text>
                </TouchableOpacity> */}

                </View>

            </View>
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

    }
});