import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/login';
import Home from '../pages/home';
import AuthContext from '../context/auth';
import RedirecionarTeste from '../pages/redirecionarTeste';
// import HomeEmpresa from '../pages/homeEmpresa';
import { ActivityIndicator, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Routes() {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  const { logged, IsAdmin, isLoading, tokenDecoded, IsComum } = useContext(AuthContext);

  console.log(tokenDecoded)

  const logout = () => {
    AsyncStorage.removeItem('tokengovagas');
  }

  AsyncStorage.getItem('tokengovagas')

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  const Candidato = () => {
    return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={RedirecionarTeste}
        />
        <Drawer.Screen
          name="Sair"
          component={Login}
        />
      </Drawer.Navigator>
    );
  }
  const Empresa = () => {
    return (
      <Drawer.Navigator initialRouteName="HomeEmpresa">
        <Drawer.Screen
          name="Home Empresa"
          component={Home}
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

  // if (parseJwt().Role === "3") {
  //   return (
  //     <Stack.Navigator>

  //       (<Stack.Screen
  //         name="Home"
  //         component={Home}
  //       />)
  //     </Stack.Navigator>
  //   );
  // }
  // if (parseJwt().Role === "2") {
  //   return (
  //     <Stack.Navigator>

  //       (<Stack.Screen
  //         name="Empresa"
  //         component={RedirecionarTeste}
  //       />)
  //     </Stack.Navigator>
  //   );
  // }
}

export default Routes;