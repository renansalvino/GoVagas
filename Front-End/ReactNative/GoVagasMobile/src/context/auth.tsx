  
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt from '../services/tokenDecoder';
import LoginProps from '../interfaces/login';
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

export const AuthProvider: React.FC = ({ children }: any) => {
    const [isLogged, setIsLogged] = useState(false);
    const [isEmpresa, setIsEmpresa] = useState(false);
    const [isCandidato, setIsCandidato] = useState(false);
    const [tokenDecoded, setTokenDecoded] = useState<object | null>(null);

    const [isloadng, setIsLoading] = useState(true);

    useEffect(() => {
        GetTokenUser();
    }, []);

    const GetTokenUser = async () => {
        const response = await AsyncStorage.getItem('tokengovagas');

        checkUserLogged(response);
    }

    const checkUserLogged = (response: any) => {
        if (!response) {
            setIsLogged(false)
            setIsCandidato(false)
            setIsEmpresa(false)
            setIsLoading(false);
        }
        else {
            setIsLogged(true)
            
            let tokenDecoded = jwt(response);
            tokenDecoded?.Role === "3" ? (setIsCandidato(true), setIsEmpresa(false)) : (setIsCandidato(false), setIsEmpresa(true));

            setTokenDecoded(tokenDecoded);
            setIsLoading(false);
        }
    }

    const SignIn = async (form: LoginProps) => {
        const init = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        };
        
        await fetch('http://192.168.15.99:5000/api/Login', init)
            .then(resp => resp.json())
            .then(data => {
                if (data.token !== undefined) {
                    AsyncStorage.setItem('tokengovagas', data.token);
                    checkUserLogged(data.token);
                }
                else {
                    setIsLogged(false);
                    setIsCandidato(false);
                    setIsEmpresa(false);

                    Alert.alert(data);
                }
            })
            .catch(error => {
                console.log(error.message);
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