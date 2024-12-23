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
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const EmergencyContactTypeScreen = ({ navigation }) => {
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
     <TouchableOpacity onPress={() => navigation.navigate('BotaoPanico')}>
        <MaterialIcons name="arrow-back-ios" size={30} color="#fff" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Qual usuário é o seu contato de emergência?</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('usucomum')}> 
          <Text style={styles.buttonText}>Usuário Comum</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('usuLipas')}> 
          <Text style={styles.buttonText}>Usuário Lipa’s</Text>
        </TouchableOpacity>

        <View style={styles.info}>
          <Text style={styles.infoText}>
            • <Text style={styles.bold}>Usuário Comum:</Text> É a pessoa que não tem cadastro em nosso aplicativo.
          </Text>
          <Text style={styles.infoText}>
            • <Text style={styles.bold}>Usuário Lipa’s:</Text> É a pessoa que tem o cadastro em nosso aplicativo.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4b000e',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 24,
  },
  content: {
    width: '100%',
    backgroundColor: '#FAE9E4',
    borderRadius: 16,
    padding: 22,
    elevation: 10,
    height: '55%',
    marginVertical: 157,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontFamily: 'Inter_600SemiBold',
    color: '#640F14',
    textAlign: 'center',
    marginBottom: 24,
    marginVertical: 30,
  },
  button: {
    backgroundColor: '#640F14',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 25,
    marginBottom: 16,
    alignItems: 'center',
  },
  button2: {
    backgroundColor: '#49070A',
    paddingVertical: 15,
    paddingHorizontal: 70,
    borderRadius: 25,
    marginBottom: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFEDE3',
    fontSize: 20,
    fontFamily: 'Inter_700Bold',
  },
  info: {
    marginTop: 20,
  },
  infoText: {
    fontSize: 15,
    marginBottom: 8,
    fontFamily: 'Inter_400Regular',
    color: '#49070A',
    textAlign: 'center',
  },
  bold: {
    fontFamily: 'Inter_700Bold',
    color: '49070A',
    
  },
});

export default EmergencyContactTypeScreen;
