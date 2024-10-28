import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Slider from '@react-native-community/slider';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const FontSizeScreen = () => {
  const [fontSize, setFontSize] = useState(18);

  return (
    <View style={styles.container}>
        <View style={styles.navbar}>
        {/* Botão de menu à esquerda */}
        <TouchableOpacity onPress={() => navigation.navigate('Contato')}>
          <MaterialIcons name="arrow-back-ios" size={30} color="#FFEDE3" />
        </TouchableOpacity>

        {/* Título central */}
        <Text style={styles.title}>Tamanho da Fonte</Text>

        {/* Ícone de usuário à direita */}
        <Image source={require('../assets/borboleta.png')} style={styles.borboleta} />
      </View>

      <View style={styles.textContainer}>
        <Text style={[styles.sampleText, { fontSize }]}>
          Uma pesquisa realizada pelo site Violência Contra as Mulheres em Dados. Em março de 2023, o equivalente a 30 milhões de mulheres foram assediadas sexualmente no ano de 2022. Com base nesses dados, decidiu-se trazer uma proposta de uma aplicação Web para amenizar/solucionar a escassez de seguranças públicas voltadas para o público feminino. {"\n\n"}
          Observando o nosso cotidiano como mulheres, e vendo que na atual realidade brasileira, conclusões nos dizem que diversas complicações na segurança ditam as dificuldades que estas inseridas, assim identificamos a necessidade de interferência, que ateste a nossa liberdade, diante deste cenário o nosso aplicativo tem como objetivo trazer a automação para que nos gere feedbacks e fazendo aplicações que trazem a sensação de segurança imediata.
        </Text>
      </View>
     
      <Slider
        style={styles.slider}
        minimumValue={12}
        maximumValue={30}
        value={fontSize}
        onValueChange={(value) => setFontSize(value)}
        minimumTrackTintColor="#A52A2A"
        maximumTrackTintColor="#000000"
      />
      <View style={styles.sliderLabels}>
        <Text style={styles.sliderLabel}>-A</Text>
        <Text style={styles.previewText}>Pré-visualização</Text>
        <Text style={styles.sliderLabelLarge}>+A</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#49070A',
  },
  sampleText: {
    color: '#FFEDE3',
  },
  previewText: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    marginVertical: 30,
  },
  sliderLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#FAE9E4',
    borderRadius: 30,
    padding: 2,
    elevation: 10,
    height: '40%',
    marginVertical: 90,
  },
  sliderLabel: {
    fontSize: 18,
  },
  sliderLabelLarge: {
    fontSize: 24,
  },
  navbar: {
    width: '100%', // Faz a navbar ocupar toda a largura
    height: 75, // Ajuste a altura se necessário
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#640F14',
    paddingHorizontal: 9,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  title: {
    fontSize: 35,
    color: '#FFEDE3',
    fontFamily: 'DMSerifDisplay_400Regular', // Certifique-se de carregar a fonte correta
  },
   borboleta: {
    width: 55,
    height: 50,
    marginStart: 19,
    marginVertical: 13,
  },
});

export default FontSizeScreen;
