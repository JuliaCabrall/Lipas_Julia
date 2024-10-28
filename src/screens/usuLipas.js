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
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const ContatoLipas = ({ navigation }) => {
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [primaryPhone, setPrimaryPhone] = useState('');

  const handleSubmit = () => {
    // Validação simples
    if (!userId || !name || !email || !primaryPhone) {
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
    {/* Header Navbar */}
    <View style={styles.navbar}>
      {/* Botão de menu à esquerda */}
      <TouchableOpacity onPress={() => navigation.navigate('Contato')}>
        <MaterialIcons name="arrow-back-ios" size={30} color="#FFEDE3" />
      </TouchableOpacity>

      {/* Título central */}
      <Text style={styles.title}>Contato</Text>

      {/* Ícone de usuário à direita */}
      <Image source={require('../assets/borboleta.png')} style={styles.borboleta} />
    </View>
 <ScrollView>
 <View style={styles.iconContainerRight}>
 <EvilIcons name="question" size={40} color="#641919"/>
 </View>
      <Text style={styles.subheader}>
        
        O usuário Lipa’s tem um ID (Código do Usuário), onde cada pessoa tem o seu ID próprio. 
        Peça para seu contato te mandar esse código e o insira abaixo:
      </Text>

     
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="ID*"
          value={userId}
          onChangeText={setUserId}
        />
      </View>

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

      <View style={styles.instructionsContainer}>
        <Text style={styles.instructions}>
        • Para que esta pessoa se torne seu contato, é preciso que ela aceite o convite que será enviado pelo aplicativo dela.
        </Text>
        <Text style={styles.instructions}>
        • Lembre-se de conversar com a pessoa antes de cadastrá-la. É importante que ela esteja ciente que receberá pedidos de socorro.
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAE9E4',
  },
  navbar: {
    width: '100%', // Faz a navbar ocupar toda a largura
    height: 70, // Ajuste a altura se necessário
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#49070A',
    paddingHorizontal: 9,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  title: {
    fontSize: 36,
    color: '#FFEDE3',
    fontFamily: 'DMSerifDisplay_400Regular', // Certifique-se de carregar a fonte correta
  },
  subheader: {
    fontSize: 20,
    color: '#641919',
    marginBottom: 3,
    fontFamily: 'Inter_400Regular',
    marginStart: 32,
    marginVertical: 1,
    marginEnd: 23,
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
    marginHorizontal: 23,
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
    color: '#641919',
    marginBottom: 2,
    fontFamily: 'Inter_500Medium',
    marginStart: 35,
    marginVertical: 5,
    marginEnd: 28,
  },
  button: {
    backgroundColor: '#49070A',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 90,
  },
  buttonText: {
    color: '#FFEDE3',
    fontSize: 20,
    fontFamily: 'Inter_700Bold',
  },
  borboleta: {
    width: 55,
    height: 55,
    marginStart: 175,
    marginVertical: 2,
  },
  iconContainerRight: {
    marginLeft: 350, 
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    width: 37,
  },
});
export default ContatoLipas;

