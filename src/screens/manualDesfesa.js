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
import { View, StyleSheet, Image, Dimensions, ScrollView, TouchableWithoutFeedback, TouchableOpacity, Text } from 'react-native';


const ManualDefesaScreen = ({ navigation }) => {
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
      <Text style={styles.Title}>Manuais Lipa´s</Text>
      <Image source = {require('../assets/linha.png')} style={styles.linha} />

      <ScrollView>
        <View style={styles.combo}>
        <TouchableOpacity onPress={() => navigation.navigate('Direito')}>
          <Image source = {require('../assets/cards/direito.png')} style={styles.image1} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Autodefesa')}>
          <Image source = {require('../assets/cards/autodefesa.png')} style={styles.image1} />
        </TouchableOpacity>
        </View>

        <View style={styles.combo}>
        <TouchableOpacity onPress={() => navigation.navigate('Socorros')}>
        <Image source = {require('../assets/cards/socorros.png')} style={styles.image2} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Numeros')}>
        <Image source = {require('../assets/cards/numero.png')} style={styles.image2} />
        </TouchableOpacity>
        </View>

        <View style={styles.combo}>
        <TouchableOpacity onPress={() => navigation.navigate('Digital')}>
        <Image source = {require('../assets/cards/digital.png')} style={styles.image2} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Encontro')}>
        <Image source = {require('../assets/cards/encontro.png')} style={styles.image2} />
        </TouchableOpacity>
        </View>

        <View style={styles.combo}>
        <TouchableOpacity onPress={() => navigation.navigate('Cyber')}>
        <Image source = {require('../assets/cards/cyber.png')} style={styles.image2} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Furto')}>
        <Image source = {require('../assets/cards/furto.png')} style={styles.image2} />
        </TouchableOpacity>
        </View>

        <View style={styles.combo}>
          <Text style={styles.espaco}> </Text>
        </View>

      </ScrollView>
      
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FFEDE3',
    width: '100%',
    height: '100%',
  },
  cabecalho: {
    backgroundColor: '#49070A',
    width: '100%',
    height: 100,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  borboleta: {
    width: 60,
    height: 60,
  },
  titulo: {
    marginTop: height * 0.04,
    width: width * 0.8,
    height: width * 0.06,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  linha:{
    marginTop: height * 0.01,
  },
  combo: {
    flexDirection: 'row', // Alinha os itens na horizontal
    justifyContent: 'space-between', // Espaça os itens uniformemente
    padding: 15,
  },
  image1:{
    width: width * 0.43,
    height: width * 0.585,
    marginTop: height * 0.035,
    marginLeft: height * 0.001,
  },
  image2:{
    width: width * 0.43,
    height: width * 0.585,
    marginLeft: height * 0.001,
  },
  espaco: {
    width: '100%',
    height: 100,
  },
  Title: {
    fontSize: 48,
    fontFamily: 'DMSerifDisplay_400Regular',
    color: '#631C1C',
    textAlign: 'center',
    paddingTop: 12,
  },
});

export default ManualDefesaScreen;