import React, { useState } from 'react';
import Slider from '@react-native-community/slider';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

const TamanhoExibicaoScreen = ({ navigation }) => {
  const [sliderValue, setSliderValue] = useState(1);

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
      </View>

      {/* Corpo com informações */}
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.infoText}>
            O Lipa's tem como objetivo assegurar a segurança feminina, que busca reduzir os índices de assédios e abusos, tornando o mundo um lugar mais seguro para todos.
          </Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.infoText}>
            Botão pânico para acionar até três pessoas de sua confiança para que receba uma mensagem quando você estiver em perigo, além de um botão para ligar para a polícia.
          </Text>
        </View>
      </View>

      {/* Slider de Pré-visualização */}
      <View style={styles.previewContainer}>
        <Text style={styles.previewTitle}>Pré-visualização</Text>
        <Text style={styles.previewSubtitle}>Padrão</Text>

        {/* Slider */}
        <Slider
          style={styles.slider}
          minimumValue={0.5}
          maximumValue={1.5}
          value={sliderValue}
          onValueChange={value => setSliderValue(value)}
          minimumTrackTintColor="#8b0000"
          maximumTrackTintColor="#aaa"
        />

        <Text style={styles.sliderDescription}>
          Aumente ou diminua os itens na tela.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#49070A',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
  },
  backButton: {
    padding: 10,
  },
  backText: {
    fontSize: 24,
    color: '#fff',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  icon: {
    width: 30,
    height: 30,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: '#FAE9E4',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  infoText: {
    color: '#49070A',
    fontSize: 16,
    textAlign: 'center',
  },
  previewContainer: {
        flex: 1, 
        backgroundColor: '#FFEDE3',
        width: '100%',
        height: 4000,
        marginVertical: 650,
        borderWidth:1,
        borderColor: '#640F1480',
        borderRadius: 50,
        position: 'absolute',
  },
  previewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#49070A',
    marginBottom: 5,
  },
  previewSubtitle: {
    fontSize: 16,
    color: '#49070A',
    marginBottom: 15,
  },
  slider: {
    width: '100%',
    height: 45,
  },
  sliderDescription: {
    fontSize: 14,
    color: '#49070A',
    marginTop: 12,
  },
});
export default TamanhoExibicaoScreen;