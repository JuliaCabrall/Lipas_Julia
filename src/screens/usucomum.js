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
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
const ContatoComum = ({ navigation }) => {
    
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [primaryPhone, setPrimaryPhone] = useState('');
  const [secondaryPhone, setSecondaryPhone] = useState('');

  const handleSubmit = () => {
    // Validação simples
    if (!name || !email || !primaryPhone) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    // Lógica para envio dos dados
    Alert.alert('Sucesso', 'Contato de emergência cadastrado!');
  };
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
      <Text style={styles.header}></Text>
      <Text style={styles.subheader}>
        Cadastre uma pessoa próxima e de confiança para ser seu contato de emergência.
      </Text>

      <View style={styles.inputContainer}>
        <FontAwesome name="user-o" size={24} color="#641919"/>
        <TextInput
          style={styles.input}
          placeholder="Nome*"
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="email-outline" size={24} color="#641919"/>
        <TextInput
          style={styles.input}
          placeholder="Email*"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <SimpleLineIcons name="phone" size={24} color="#641919"/>
        <TextInput
          style={styles.input}
          placeholder="Celular com DDD*"
          keyboardType="phone-pad"
          value={primaryPhone}
          onChangeText={setPrimaryPhone}
        />
      </View>

      <View style={styles.inputContainer}>
        <SimpleLineIcons name="phone" size={24} color="#641919"/>
        <TextInput
          style={styles.input}
          placeholder="Outro Celular"
          keyboardType="phone-pad"
          value={secondaryPhone}
          onChangeText={setSecondaryPhone}
        />
      </View>

      <View style={styles.instructionsContainer}>
        <Text style={styles.instructions}>
        •Para que esta pessoa se torne seu contato, é preciso que ela aceite o convite que será enviado no número ou e-mail do cadastro.
        </Text>
        <Text style={styles.instructions}>
        •Lembre-se de conversar com a pessoa antes de cadastrá-la. É importante que ela esteja ciente que receberá pedidos de socorro.
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAE9E4',
    padding: 20,
  },
  subheader: {
    fontSize: 18,
    color: '#641919',
    marginBottom: 2,
    fontFamily: 'Inter_400Regular',
    marginStart: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 15,
    marginBottom: 10,
    borderColor: '#641919',
    borderWidth: 1,
    padding: 20,
    marginTop: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    marginHorizontal: 6,
    fontFamily: 'Inter_400Regular',
    fontSize: 20,
    color: '#49070A',
  },
  instructionsContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  instructions: {
    fontSize: 16,
    color: '49070A',
    fontFamily: 'Inter_500Medium',
    color: '#49070A',
    marginStart: 5,
  },
  button: {
    backgroundColor: '#49070A',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 25,
    marginHorizontal: 65,
  },
  buttonText: {
    color: '#FFEDE3',
    fontSize: 20,
    fontFamily: 'Inter_700Bold',
    marginEnd: 10,
  },
});
export default ContatoComum;


