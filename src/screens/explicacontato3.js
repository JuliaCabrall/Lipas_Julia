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
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
const Cont3Screen = ({navigation}) => {
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

      <Ionicons name="volume-high-outline" size={300} color="#F8E9E0" />
      
     
      <Text style={styles.text}>
      Em situações de emergência aperte duas vezes o botão de desligar do seu celular ou aperte duas vezes no ícone de som no menu inferior para acionar o botão pânico.
      </Text>

      {/* Paginação (barras indicativas) */}
      <View style={styles.pagination}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.activeDot} />
      </View>

      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Contato')}>
        <Text style={styles.buttonText}>Entendi</Text>
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
    height: 234,
    marginHorizontal: 239,
  },
  text: {
    color: 'white',
    fontSize: 20,
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
export default Cont3Screen;
