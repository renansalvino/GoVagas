import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DEDEDE',
    flex: 1,
    justifyContent:"center"
  },
  //Header
  header: {
    flexDirection: "row",
    backgroundColor: '#ffff',
  },
  img_logo: {
    width: 100,
    height: 75,
    marginTop: 15,
    marginLeft: 15,
    resizeMode: "contain",
  },
  img_menu: {
    marginLeft: 200,
    marginTop: 30,
  },
  //Principal
  main_Visualizar_Vaga1: {
    alignItems: "center",
  },
  text_Vagas: {
    fontSize: 30,
    marginLeft: 75,
    marginTop: 30,
    marginBottom: 30,
  },
  Box_Vaga1: {
    flexDirection: 'row',
    backgroundColor: "#fff",
    width: 330,
    height: 150,
    borderRadius: 7,
    marginBottom: 15
  },
  Img_empresa: {
    resizeMode: 'contain',
    width: 120,
    height: 120,
    marginLeft: 15,
    marginTop: 15,
  },
  text_box1: {
    marginTop: 15,
    lineHeight: 30,
    marginLeft: 5,
    fontSize: 17,
    textAlign: 'center',
  },
  Box_Vaga2: {
    flexDirection: 'row',
    backgroundColor: "#fff",
    width: 330,
    height: 150,
    borderRadius: 7,
    marginTop: 25,
    marginBottom: 15
  },
  text_box2: {
    marginTop: 15,
    lineHeight: 30,
    marginLeft: 5,
    fontSize: 17,
    textAlign: 'center',
  },
  Box_Vaga3: {
    flexDirection: 'row',
    backgroundColor: "#fff",
    width: 330,
    height: 150,
    borderRadius: 7,
    marginTop: 25,
    marginBottom: 15
  },
  text_box3: {
    marginTop: 15,
    lineHeight: 30,
    marginLeft: 5,
    fontSize: 17,
    textAlign: 'center',
  },
  row_numbers: {
    flexDirection: 'row',
  },
  text_numbers: {
    marginTop:25,
    marginLeft: 15,
    fontSize: 20,
    marginBottom: 15,
  },
  Button_Pages:{
    backgroundColor: '#DB324A'
  }
});
export default styles;