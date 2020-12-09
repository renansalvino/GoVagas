import React, { useContext } from 'react';

// Menu lateral e navegação por pilha
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Auth Context
import AuthContext from '../context/auth';

// Pages
import Login from '../pages/login';
import Home from '../pages/home';
import HomeEmpresa from '../pages/homeEmpresa';
//import VagasEmpresa from '../pages/VagasEmpresa';
import Cadastro from '../pages/cadastro';
import { ActivityIndicator, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Routes() {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  // const Tab = createBottomTabNavigator();

  // Adquirindo propriedades do authContext
  const { logged, IsAdmin, isLoading, tokenDecoded, IsComum } = useContext(AuthContext);

  // Para adquirir o tokenDecoded, apenas use o contexto como neste exemplo
  console.log(tokenDecoded)

  const logout = () => {
    AsyncStorage.removeItem('token');
}

  // Caso estiver carregando irá mostrar um ícone de carregamento
  if(isLoading){
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  // Stack de Guest (telas de usuário que não está autenticado)
  // const Guest = () => {
  //   return (
  //     <Tab.Navigator initialRouteName="Login">
  //       <Tab.Screen
  //         name="Login"
  //         component={Login}
  //       />

  //       <Tab.Screen
  //         name="Cadastro"
  //         component={Cadastro}
  //       />
  //     </Tab.Navigator>
  //   );
  // }

  // Stack de Candidato (telas de candidato)
  const Candidato = () => {
    return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={Home}
        />
        <Drawer.Screen
          name="Sair"
          component={Login}
        /> 
      </Drawer.Navigator>
    );
  }

  // Stack de empresa (telas de empresa)
  const Empresa = () => {
    return (
      <Drawer.Navigator initialRouteName="HomeEmpresa">
        <Drawer.Screen
          name="Home Empresa"
          component={HomeEmpresa}
        />
        <Drawer.Screen
          name="Sair"
          component={Login}
        /> 
      </Drawer.Navigator>
    );
  }

  return (
    <Stack.Navigator>
      {/* 
        Está logado? Se sim, é Admin? Se sim retorna stack de Adm. 
        Se não, retorna Stack de Comum.
        Se não estiver logado, retorna stack Guest
      */}

      {logged ? IsAdmin ?
        (<Stack.Screen
          name="Candidato"
          component={Candidato}
        />) :

        (<Stack.Screen
          name="Empresa"
          component={Empresa}
        />) :

        (< Stack.Screen
          name="Guest"
          component={Login}
        />)
      }

    </Stack.Navigator>
  );
}

export default Routes;