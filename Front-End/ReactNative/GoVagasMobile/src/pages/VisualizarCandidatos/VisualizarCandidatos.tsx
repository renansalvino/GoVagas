import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, Image, View, ScrollView, Button } from 'react-native';
import Menu from '../../components/hamburguerzinho';
import styles from './style';



export default function VisualizarCandidatos({ match }: any) {

  const {
    params: { id },
  } = match;
  console.log(id)

  const [tipoContratoFiltro, setTipoContratoFiltro] = useState('');
  const [inscricaoFiltrada, setInscricaoFiltrada] = useState([]);
  const [inscricaos, setInscricaos] = useState([]);

  const ListarTodosContratados = () => {
    fetch("https://localhost:5001/api/Inscricao/Vaga/" + id, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(dados => {
        setInscricaos(dados);
        setInscricaoFiltrada(dados);
        console.log(dados)
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    ListarTodosContratados();
  }, []);

  const navigation = useNavigation()

  return (
    <ScrollView>
      <Menu navigation={navigation} />

      <View style={styles.container}>
        {/* <View style={styles.header}>
          <Image
            style={styles.img_logo}
            source={require('../../assets/images/logoGO.png')} />
          <Image
            style={styles.img_menu}
            source={require('../../assets/images/Botao_Menu.png')} />
        </View> */}
        <Text style={styles.text_Vagas}>Candidatos Cadastrados</Text>
        <View style={styles.main_Visualizar_Vaga1}>
          <View style={styles.Box_Vaga1}>
            <Image
              style={styles.Img_empresa}
              source={require('../../assets/images/joazinho.jpg')}
            />
            <Text style={styles.text_box1}> -Joãozinho{"\n"} -Programador full{"\n"} stack{"\n"} -Júnior {"\n"}
            </Text>
          </View>
          <View style={styles.Box_Vaga2}>
            <Image
              style={styles.Img_empresa}
              source={require('../../assets/images/Indiano.jpg')}
            />
            <Text style={styles.text_box2}> -Rhaj{"\n"} -Programador Java{"\n"} -Sênior
          </Text>
          </View>
          <View style={styles.Box_Vaga3}>
            <Image
              style={styles.Img_empresa}
              source={require('../../assets/images/filho_do_dono.jpg')}
            />
            <Text style={styles.text_box3}> -Filho do dono{"\n"} -Programador CSharp{"\n"} -Estagiário
          </Text>
          </View>
          <View style={styles.row_numbers}>
            <Text style={styles.text_numbers}>1</Text>
            <Text style={styles.text_numbers}>2</Text>
            <Text style={styles.text_numbers}>3</Text>
            <Text style={styles.text_numbers}>4</Text>
            <Text style={styles.text_numbers}>5</Text>
            <Text style={styles.text_numbers}>6</Text>
            <Text style={styles.text_numbers}>...</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}