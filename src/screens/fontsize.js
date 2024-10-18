import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const FontSizeScreen = ({ navigation }) => {
  const [fontSize, setFontSize] = useState(14);

  const increaseFontSize = () => {
    if (fontSize < 30) {
      setFontSize(fontSize + 2);
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 10) {
      setFontSize(fontSize - 2);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      </View>

      <View style={styles.sampleTextContainer}>
        <Text style={[styles.sampleText, { fontSize }]}>
          Uma pesquisa realizada pelo site Violência Contra as Mulheres em Dados. Em março de 2023, o equivalente a 30 milhões de mulheres foram assediadas sexualmente no ano de 2022.
        </Text>
      </View>

      <View style={styles.previewContainer}>
        <Text style={styles.previewText}>Pré-visualização</Text>
        <Text style={styles.preview}>Padrão</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={decreaseFontSize}>
          <Text style={styles.buttonText}>A-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={increaseFontSize}>
          <Text style={styles.buttonText}>A+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.instructionText}>Tornar o texto na tela menor ou maior</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#49070A',
    padding: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#832A25',
    paddingVertical: 1,
  },
  sampleTextContainer: {
    backgroundColor: '#631C1C',
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,
  },
  sampleText: {
    color: '#FFF',
    textAlign: 'justify',
  },
  previewContainer: {
    flex: 1, 
    backgroundColor: '#FFEDE3',
    width: '112%',
    height: 4000,
    marginVertical: 659,
    borderWidth:1,
    borderColor: '#640F1480',
    borderRadius: 50,
    position: 'absolute',
  },
  text: {
    fontSize: 190,
    color: '#631C1C',
    marginBottom: 16,
  },
  previewText: {
    marginVertical: 15,
    marginHorizontal: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#631C1C',
  },
  preview: {
    marginVertical: 3,
    marginHorizontal: 175,
    fontSize: 16,
    fontWeight: 'light',
    color: '#631C1C',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#800000',
    padding: 10,
    borderRadius: 5,
    width: 60,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 19,
    fontWeight: 'bold',
  },
  instructionText: {
    textAlign: 'center',
    color: '#631C1C',
    fontSize: 14,
    marginTop: 10,
  },
  icon: {
    marginVertical: 32,
    marginHorizontal: 10,
  },
});

export default FontSizeScreen;
    