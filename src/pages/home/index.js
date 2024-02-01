import { StatusBar } from 'expo-status-bar';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Home({pergunta, alternativa1, alternativa2}) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={require('../../../assets/assassinato.png')} 
        style={styles.imagemEstilo}
      />
      <View style={styles.pergunta_container}>

        <Text style={styles.pergunta}>{pergunta}</Text>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.alternativa}>{alternativa1}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.alternativa}>{alternativa2}</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
