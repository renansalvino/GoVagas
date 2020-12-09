import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/login';
import Home from '../pages/home';
import VisualizarCandidatos from '../pages/VisualizarCandidatos/VisualizarCandidatos';
import VisualizarVaga from '../pages/VisualizarVaga/VisualizarVaga';
import VisualizarVaga2 from '../pages/VisualizarVaga/VisualizarVaga2';
import VisualizarVaga3 from '../pages/VisualizarVaga/VisualizarVaga3';
import VisualizarVaga4 from '../pages/VisualizarVaga/VisualizarVaga4';
import VisualizarVaga5 from '../pages/VisualizarVaga/VisualizarVaga5';
import AuthContext from '../context/auth';
import { Entypo } from '@expo/vector-icons';
import RedirecionarTeste from '../pages/redirecionarTeste';
// import HomeEmpresa from '../pages/homeEmpresa';
import { ActivityIndicator, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

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

  // const Vizualizar = () => {
  //   return (

  //   );
  // }

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

  const EmpresaMenu = () => {
    return (
      <Drawer.Navigator initialRouteName="VisualizarVaga">
        <Drawer.Screen
          name="Vagas Publicadas"
          component={VagasEmprega}
        />
        <Drawer.Screen
          name="Sair"
          component={Login}
        />
      </Drawer.Navigator>
    );
  }
  const VagasEmprega = () => {
    
    const options={
      headerStyle: { backgroundColor: '#DB324A' }, headerTintColor: '#fff',
      headerLeft: ({navigation }: any) => (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Entypo name="menu" style={{ marginLeft: 25 }} size={46} color='white' />
        </TouchableOpacity>
      )
    }
    return (
      <Stack.Navigator>
        <Stack.Screen name="VizualizarVaga" component={VisualizarVaga} options={options}/>
        <Stack.Screen name="VisualizarVaga2" component={VisualizarVaga2} options={options}/>
        <Stack.Screen name="VisualizarVaga3" component={VisualizarVaga3} options={options}/>
        <Stack.Screen name="VisualizarVaga4" component={VisualizarVaga4} options={options}/>
        <Stack.Screen name="VisualizarVaga5" component={VisualizarVaga5} options={options}/>
        <Stack.Screen name="VisualizarCandidatos" component={VisualizarCandidatos} options={options}/>
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator>
      {logged ? IsAdmin ?
        (<Stack.Screen
          name="Candidato"
          component={Candidato}
          options={{
            headerShown: false
          }}
        />) :

        (<Stack.Screen
          name="Empresa"
          component={EmpresaMenu}
          options={{
            headerShown: false
          }}
        />) :

        (< Stack.Screen
          name="Guest"
          component={Login}
          options={{
            headerShown: false
          }}
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