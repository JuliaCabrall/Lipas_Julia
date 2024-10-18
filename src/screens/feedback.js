import React, { useState, useEffect} from 'react';
import {
  Inter_700Bold,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import {
  DMSerifDisplay_400Regular,
  DMSerifDisplay_400Regular_Italic,
  DMSerifDisplay_700Bold,
} from '@expo-google-fonts/dm-serif-display';
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

SplashScreen.preventAutoHideAsync();

import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Para os ícones no rodapé e avaliação

const FeedbackScreen = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [appIsReady, setAppIsReady] = useState(false);
  const handleRating = (value) => {
    setRating(value);
  };
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Inter_700Bold,
          Inter_500Medium,
          Inter_600SemiBold,
          Inter_400Regular,
          DMSerifDisplay_400Regular,
          DMSerifDisplay_400Regular_Italic,
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);
  return (
    <View style={styles.container}>
      {/* Texto explicativo */}
      <Text style={styles.instructions}>
        Escreva na caixa abaixo sua experiência, problemas, sugestões de melhoria ou qualquer informação que considerar relevante para melhorar nossos serviços e tornar o Lipa's melhor.
      </Text>

      {/* Caixa de texto para o feedback */}
      <TextInput
        style={styles.textInput}
        placeholder="Digite aqui..."
        value={feedback}
        onChangeText={(text) => setFeedback(text)}
        multiline
        numberOfLines={4}
      />

      {/* Seção de Avaliação */}
      <Text style={styles.ratingTitle}>NOS AVALIE!</Text>
      <Text style={styles.ratingSubtitle}>Deixe a sua avaliação da sua experiência no Lipa's</Text>
      
      {/* Estrelas de Avaliação */}
      <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => handleRating(star)}>
            <Ionicons
              name={star <= rating ? 'star' : 'star-outline'}
              size={32}
              color={star <= rating ? '#7C1C1C' : 'gray'}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Botão de Enviar */}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Enviar</Text>
      </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5E4E1',
    padding: 20,
  },
  instructions: {
    marginTop: 15,
    fontSize: 20,
    textAlign: 'center',
    color: '#7C1C1C',
    fontFamily: 'Inter_500Medium',
  },
  textInput: {
    marginTop: 20,
    borderColor: '#7C1C1C',
    borderWidth: 2,
    borderRadius: 13,
    padding: 20,
    backgroundColor: 'white',
    fontSize: 16,
    textAlignVertical: 'top',
  },
  ratingTitle: {
    marginTop: 33,
    fontSize: 24,
    fontFamily: 'DMSerifDisplay_400Regular',
    textAlign: 'center',
    color: '#7C1C1C',
    marginVertical: 1,
  },
  ratingSubtitle: {
    fontSize: 21,
    textAlign: 'center',
    marginVertical: 1,
    marginBottom: 13,
    color: '#7C1C1C',
    fontWeight: 'light',
    fontFamily: 'Inter_500Medium',
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  submitButton: {
    backgroundColor: '#631C1C',
    paddingVertical: 11,
    borderRadius: 30,
    alignItems: 'center',
    marginHorizontal: 105,
    marginTop: 45,
    },
      submitButtonText: {
      color: '#fff',
      fontSize: 16,
      fontFamily: 'Inter_700Bold',
      textAlign: 'center',
    },
    container2: {
      backgroundColor: '#FFEDE3',
      width: '100%',
      height: 450,
      borderWidth: 2,
      borderColor: '#640F1480',
      marginTop: 420,
      borderRadius: 50,
      position: 'absolute',
    },
});
export default FeedbackScreen;
