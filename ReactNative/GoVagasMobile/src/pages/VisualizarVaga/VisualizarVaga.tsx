import React from 'react';
import { Text, Image, View, ScrollView, Button } from 'react-native';
import styles from './style';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react';
import parseJwt from '../../services/tokenDecoder';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Menu from '../../components/hamburguerzinho';

const Stack = createStackNavigator();

export default function VisualizarVaga({ }) {



  const [idInscricao, setIdInscricao] = useState(0);
  const [vaga, setVagas] = useState('');

  const [vagas, setInscricaos] = useState([]);

  const navigation = useNavigation()

  React.useEffect(() => {
    GetTokenUser().then(id => {
      visualizarInscricoesPorId(id!);
    })
  }, []);

  const GetTokenUser = async () => {
    const response = await AsyncStorage.getItem('tokengovagas')
    return (parseJwt(response!)?.jti)
  }

  const visualizarInscricoesPorId = (id: number) => {

    fetch('http://192.168.15.99:5000/api/Vaga/Vaga/' + id, {
      method: 'GET',
      headers: {
        authorization: 'Bearer ' + AsyncStorage.getItem('tokengovagas')
      }
    })
      .then(resp => resp.json())
      .then(dados => {
        setInscricaos(dados);
        console.log(vagas);
      })
      .catch(err => console.error(err));
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text_Vagas}>Vagas publicadas</Text>
        <View style={styles.main_Visualizar_Vaga1}>

          <Text style={{ backgroundColor: '#EEEEEE' }}>
            {
              vagas.map((item: any) => {
                return (
                  <View style={{
                    marginHorizontal: 50,
                    marginVertical: 30,
                    backgroundColor: 'white',
                    width: 320,
                    borderRadius: 20,
                    padding: 20,
                  }}>
                    <View style={{
                      flex: 1, alignItems: 'center'
                    }}>
                      <Text style={{ marginVertical: 1, fontSize: 30, fontWeight: 'bold', textAlign: 'center' }}>{item.idEmpresaNavigation.nomeEmpresa}</Text>
                      <Text style={{ marginVertical: 10, fontSize: 20, }}> {item.tituloVaga} </Text>

                    </View>
                    <View style={{
                      flex: 1,
                      marginLeft: 10,
                      flexDirection: 'row',
                      justifyContent: 'space-between'
                    }}>
                      <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'space-between'

                      }}>
                        <Text style={{ marginVertical: 10, marginTop: 20 }}>Tempo Exp: {item.tempoExp}</Text>
                        <Text style={{ marginVertical: 10 }}>{
                          !item.tipoContrato && 'Estágio' ||
                          item.tipoContrato && 'Jovem Aprendiz'}
                        </Text>
                        <Text style={{ marginVertical: 10 }}>{item.habNecessaria}</Text>
                      </View>

                      <View style={{
                        flex: 1,
                        marginLeft: 20,
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}>
                        <Text style={{ marginVertical: 10, marginTop: 20 }}>{item.valorSalario &&
                          'R$' + item.valorSalario || "Valor à Negociar"}</Text>

                        <Text style={{ marginVertical: 10 }}>{item.expertiseVaga} </Text>
                        <Text style={{ marginVertical: 10 }}>{
                          !item.trabalhoRemoto && 'Trabalho Presencial' ||
                          item.trabalhoRemoto && 'Trabalho Remoto'}</Text>

                      </View>
                    </View>


                  </View>
                );
              })}
          </Text>
          {/* <View style={{
            marginHorizontal: 50,
            marginVertical: 30,
            backgroundColor: 'white',
            width: 320,
            borderRadius: 20,
            padding: 20,
          }}>
            <View style={{
              flex: 1, alignItems: 'center'
            }}>
              <Text style={{ marginVertical: 1, fontSize: 30, fontWeight: 'bold' }}>Avanade</Text>
              <Text style={{ marginVertical: 10, fontSize: 20, }}> Desenvolvedor Web</Text>

            </View>
            <View style={{
              flex: 1,
              marginLeft: 10,
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
              <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between'

              }}>
                <Text style={{ marginVertical: 10, marginTop: 20 }}>Full Stack</Text>
                <Text style={{ marginVertical: 10 }}>Estágio</Text>
                <Text style={{ marginVertical: 10 }}>Python, C#, Javascript</Text>
              </View>

              <View style={{
                flex: 1,
                marginLeft: 20,
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <Text style={{ marginVertical: 10, marginTop: 20 }}>R$ 5000,00</Text>
                <Text style={{ marginVertical: 10 }}>Júnior</Text>
                <Text style={{ marginVertical: 10 }}>Trabalho Remoto</Text>

              </View>
            </View>


          </View>
          <Button
            color="#DB324A"
            title="Visualizar Candidatos"
            onPress={() => navigation.navigate("VisualizarCandidatos")}
          />
          <View style={styles.Box_Vaga2}>
            <Image
              style={styles.Img_empresa}
              source={require('../../assets/images/SpectroVagas1.png')}
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
              source={require('../../assets/images/SpectroVagas1.png')}
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
              source={require('../../assets/images/SpectroVagas1.png')}
            />
            <Text style={styles.text_box3}> -Programador CSharp{"\n"} -Pleno {"\n"}-R$ 3.000,00</Text>
          </View> */}
          <Button
            color="#DB324A"
            title="Visualizar Candidatos"
            onPress={() => navigation.navigate("VisualizarCandidatos")}
          />
          <View style={styles.row_numbers}>
            <Text style={styles.text_numbers} onPress={() => navigation.navigate('VisualizarVaga')}>1</Text>
            <Text style={styles.text_numbers} onPress={() => navigation.navigate('VisualizarVaga2')}>2</Text>
            <Text style={styles.text_numbers} onPress={() => navigation.navigate('VisualizarVaga3')}>3</Text>
            <Text style={styles.text_numbers} onPress={() => navigation.navigate('VisualizarVaga4')}>4</Text>
            <Text style={styles.text_numbers} onPress={() => navigation.navigate('VisualizarVaga5')}>5</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}