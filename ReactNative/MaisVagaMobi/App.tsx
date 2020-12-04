import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import { decode, encode } from 'base-64';

import Routes from './src/services/routes';

// Auth Context
import { AuthProvider } from './src/context/auth';

//pages
import Login from './src/pages/login/index';
import Cadastro from './src/pages/cadastro/index';
import Home from './src/pages/home/index';
import MenuOptions from './src/components/menuOptions'

// Importação global de atob para decodificar token
if (! global.btoa) {global.btoa = encode}
if (! global.atob) {global.atob = decode}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();

// function Tabs(){
//   return(
//     <Tab.Navigator initialRouteName='Login'>
//       <Tab.Screen name='Login' component={Login}/>
//       <Tab.Screen name='Cadastro' component={Cadastro}/>
//     </Tab.Navigator>
//   );
// }

// function DrawerMenu() {
//   return (
//     <Drawer.Navigator initialRouteName='Home'>
//       <Drawer.Screen name='Home' component={Home} />
//     </Drawer.Navigator>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName='Login'>
        <Login /> 
        <Stack.Screen name='Login' component={Login} options={{
          title: '',
          headerStyle: {
            backgroundColor: 'none',
            height: 0,
          }
        }} />
        <Stack.Screen name='Cadastro' component={Cadastro} options={{
          title: '', headerStyle: {
            backgroundColor: '#df2f2f',
            elevation: 0,
          }, headerTintColor: '#fff'
        }} />
        <Stack.Screen name='Home' component={DrawerMenu}options={{
          title: '', headerStyle: {
            backgroundColor: '#df2f2f',
          }
        }} />
      </Stack.Navigator> */}

      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}