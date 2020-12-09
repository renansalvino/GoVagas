import React from 'react';
import { Text, Image, View, ScrollView, Button } from 'react-native';
import styles from './style';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Menu from '../../components/hamburguerzinho';


const Stack = createStackNavigator();

export default function VisualizarVaga4({ }) {

  const navigation = useNavigation()
  
  return (
    <ScrollView>
      <View style={styles.container}>
      {/* <Menu navigation={navigation} /> */}

        {/* <View style={styles.header}>

          <Image
            style={styles.img_logo}
            source={require('../../assets/images/logoGO.png')} />
          <Image
            style={styles.img_menu}
            source={require('../../assets/images/Botao_Menu.png')} />
        </View> */}
        <Text style={styles.text_Vagas}>Vagas publicadas</Text>
        <View style={styles.main_Visualizar_Vaga1}>
          <View style={styles.Box_Vaga1}>
            <Image
              style={styles.Img_empresa}
              source={require('../../assets/images/Logo_Microsoft.png')}
            />
            <Text style={styles.text_box1}> -Programador full{"\n"} stack{"\n"} -Júnior {"\n"}-R$ 3.000,00</Text>
          </View>
          <Button
            color="#DB324A"
            title="Visualizar Candidatos"
            onPress={() => navigation.navigate("VisualizarCandidatos")}
          />
          <View style={styles.Box_Vaga2}>
            <Image
              style={styles.Img_empresa}
              source={require('../../assets/images/Cisco_logo.png')}
            />
            <Text style={styles.text_box2}> -Programador Java{"\n"} -Sênior {"\n"}-R$ 6.000,00</Text>
          </View>
          <Button
            color="#DB324A"
            title="Visualizar Candidatos"
            onPress={() => navigation.navigate("VisualizarCandidatos")}
          />
          <View style={styles.Box_Vaga3}>
            <Image
              style={styles.Img_empresa}
              source={require('../../assets/images/Logo_Accenture.png')}
            />
            <Text style={styles.text_box3}> -Programador CSharp{"\n"} -Pleno {"\n"}-R$ 3.000,00</Text>
          </View>
          <Button
            color="#DB324A"
            title="Visualizar Candidatos"
            onPress={() => navigation.navigate("VisualizarCandidatos")}
          />
          <View style={styles.row_numbers}>
            <Text style={styles.text_numbers} onPress={() => navigation.navigate("VisualizarVaga")}>1</Text>
            <Text style={styles.text_numbers} onPress={() => navigation.navigate("VisualizarVaga2")}>2</Text>
            <Text style={styles.text_numbers} onPress={() => navigation.navigate("VisualizarVaga3")}>3</Text>
            <Text style={styles.text_numbers} onPress={() => navigation.navigate("VisualizarVaga4")}>4</Text>
            <Text style={styles.text_numbers} onPress={() => navigation.navigate("VisualizarVaga5")}>5</Text>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}