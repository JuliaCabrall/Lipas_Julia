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
} from '@expo-google-fonts/dm-serif-display';
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

SplashScreen.preventAutoHideAsync();
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const InfoScreen = ({navigation}) => {
  const [appIsReady, setAppIsReady] = useState(false);

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
      {/* Botão de Fechar */}
      <TouchableOpacity onPress={() => navigation.goBack()}></TouchableOpacity>
      <TouchableOpacity style={styles.closeButton}>
      <AntDesign name="closecircle" size={30} color="#F8E9E0" />
      </TouchableOpacity>

      {/* Ícone de escudo */}
      <MaterialCommunityIcons name="phone-message-outline" size={300} color="#F8E9E0" />

      {/* Texto de instrução */}
      <Text style={styles.text}>
      Não precisa ser usuário do Lipa’s. pode ser qualquer pessoa desde que ela aceite o convite que será disparado para o número de telefone dela.
      </Text>

      {/* Paginação (barras indicativas) */}
      <View style={styles.pagination}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.activeDot} />
      </View>

      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ExplicaContato3')}>
        <Text style={styles.buttonText}>Próximo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4b000e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 30,
    left: 12,
  },
  closeText: {
    color: 'white',
    fontSize: 25,
  },
  icon: {
    marginBottom: 12,
    height: 330,
    width: 230,
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
    fontFamily: 'Inter_500Medium',
  },
  pagination: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#4b000e',
    fontSize: 18,
  },
});
export default InfoScreen;
