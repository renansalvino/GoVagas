  
import React, { createContext, useState, useEffect } from 'react';

// AsyncStorage ("localStorage" do react native)
import AsyncStorage from '@react-native-async-storage/async-storage';

// Token Decoder Service
import jwt from '../services/tokenDecoder';

// Interfaces
import LoginProps from '../interfaces/login';

// Outras bibliotecas
import { Alert } from 'react-native';

interface AuthContextData {
    logged: boolean,
    IsComum: boolean,
    IsAdmin: boolean,
    tokenDecoded: object | null,
    isLoading: boolean,
    SignIn(form: LoginProps): Promise<void>,
    SignOut(): Promise<void>,
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// Exportando AuthProvider para se rusado no routes
export const AuthProvider: React.FC = ({ children }: any) => {
    const [isLogged, setIsLogged] = useState(false);
    const [isEmpresa, setIsEmpresa] = useState(false);
    const [isCandidato, setIsCandidato] = useState(false);
    const [tokenDecoded, setTokenDecoded] = useState<object | null>(null);

    // Prop para a telinha de "loading" antes de carregar completamente o carregamento da página
    const [isloadng, setIsLoading] = useState(true);

    useEffect(() => {
        GetTokenUser();
    }, []);

    // Função assíncrona para adquirir atributo que esta guardado no "AsyncStorage"
    const GetTokenUser = async () => {
        const response = await AsyncStorage.getItem('token-maisVagas');

        // Verifica se há algo no token e muda as props caso usuario estiver ou não autenticado
        checkUserLogged(response);
    }

    const checkUserLogged = (response: any) => {
        // Muda o estado de 'isLogged' caso usuário esteja ou não autenticado
        if (!response) {
            setIsLogged(false)
            setIsCandidato(false)
            setIsEmpresa(false)
            setIsLoading(false);
        }
        else {
            setIsLogged(true)
            
            // Token Decoder
            let tokenDecoded = jwt(response);
            
            // Muda o estado dos tipos de usuario (boolean) dependendo da 'role' do usuário
            tokenDecoded?.Role === "3" ? (setIsCandidato(true), setIsEmpresa(false)) : (setIsCandidato(false), setIsEmpresa(true));

            setTokenDecoded(tokenDecoded);
            setIsLoading(false);
        }
    }

    const SignIn = async (form: LoginProps) => {
        const init = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        };

        // Se você estiver executando o servidor e o emulador em seu computador, 127.0.0.1:(port) fará referência ao emulador em si e não ao servidor.
        // O 10.0.2.2 é a solução para esse problema 
        // (atualmente utilizando o IP da maquina para aplicação mobile com EXPO)
        await fetch('https://localhost:5001/api/Login', init)
            .then(resp => resp.json())
            .then(data => {
                // Verifica se a propriedade token é diferente de indefinida (se a propriedade existe no retorno do json)
                if (data.token !== undefined) {
                    AsyncStorage.setItem('token-maisVagas', data.token);
                    checkUserLogged(data.token);
                }
                else {
                    // Erro caso email ou senha sejam inválidos
                    setIsLogged(false);
                    setIsCandidato(false);
                    setIsEmpresa(false);

                    // Retorna para a tela de Login o erro do backend
                    Alert.alert(data);
                }
            })
            .catch(error => {
                console.log('ERROR in SignIn: ' + error.message);
            });
    }

    const SignOut = async () => {
        await AsyncStorage.clear()
            .then(() => {
                setIsLogged(false);
                setIsCandidato(false);
                setIsEmpresa(false);
                setTokenDecoded(null);
            })
    }

    return (
        <AuthContext.Provider value={{ logged: isLogged, IsAdmin: isCandidato, IsComum: isEmpresa, tokenDecoded: tokenDecoded, isLoading: isloadng, SignIn, SignOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext