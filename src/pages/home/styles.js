import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    imagemEstilo: {
      marginBottom: 40,
      width: 250,
      height: 250

    },
    pergunta_container: {
      backgroundColor: 'rgb(255, 114, 94)',
      width: "100%",
      height: 450,
      padding: 50,
      alignItems: 'center',
      justifyContent: 'top'
    },
    pergunta: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 20,
      textAlign: 'center',    
    },
    alternativa: {
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    botao: {
      backgroundColor: '#fff',
      padding: 10,
      margin: 10,
      width: 300,
      height: 80,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
  });
export default styles;