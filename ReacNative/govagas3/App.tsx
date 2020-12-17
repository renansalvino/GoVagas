import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import RedirecionarTeste from './src/pages/redirecionarTeste/index';
import Login from './src/pages/login/index';
import Cadastro from './src/pages/cadastro/index';
import Home from './src/pages/home/index';
import { AuthProvider } from './src/context/auth';
import Routes from './src/services/routes';
import { decode, encode } from 'base-64';


if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();

function Tabs(){
  return(
    <NavigationContainer initialRouteName='Login'>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Cadastro' component={Cadastro}/>
    <NavigationContainer/>
  );
// }

function DrawerMenu() {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name='Home' component={Home} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      
    </NavigationContainer>
  );
}