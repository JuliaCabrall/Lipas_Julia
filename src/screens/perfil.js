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
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'  
export default function ProfileScreen() {
  const [name, setName] = useState('Julia Cabral');
  const [email, setEmail] = useState('julia.cabral@gmail.com');
  const [phone, setPhone] = useState('(11) 99090-9090');
  const [password, setPassword] = useState('********');

  const handleEditPhoto = () => {
    Alert.alert('Editar Foto', 'Opção de edição de foto clicada.');
  };

  const handleEditField = (field) => {
    Alert.alert('Editar Campo', `Edição de ${field} clicada.`);
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
      <Text style={styles.header}>Sua conta</Text>

      <View style={styles.profileContainer}>
        <FontAwesome name="user-circle" size={80} color="#49070A" />
        <TouchableOpacity style={styles.editPhotoButton} onPress={handleEditPhoto}>
          <Text style={styles.editPhotoText}>Editar foto</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoTextContainer}>
          <Text style={styles.label}>Nome</Text>
          <Text style={styles.value}>{name}</Text>
        </View>
        <TouchableOpacity onPress={() => handleEditField('Nome')}>
          <FontAwesome5 name="edit" size={27} color="#641919" />
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoTextContainer}>
          <Text style={styles.label}>Endereço de e-mail</Text>
          <Text style={styles.value}>{email}</Text>
        </View>
        <TouchableOpacity onPress={() => handleEditField('E-mail')}>
          <FontAwesome5 name="edit" size={27} color="#641919" />
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoTextContainer}>
          <Text style={styles.label}>Telefone</Text>
          <Text style={styles.value}>{phone}</Text>
        </View>
        <TouchableOpacity onPress={() => handleEditField('Telefone')}>
          <FontAwesome5 name="edit" size={27} color="#641919" />
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoTextContainer}>
          <Text style={styles.label}>Senha</Text>
          <Text style={styles.value}>{password}</Text>
        </View>
        <TouchableOpacity onPress={() => handleEditField('Senha')}>
          <FontAwesome5 name="edit" size={27} color="#641919" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAE9E4',
    padding: 20,
  },
  header: {
    fontSize: 25,
    fontFamily: 'Inter_600SemiBold',
    color: '#641919',
    marginBottom: 10,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  editPhotoButton: {
    backgroundColor: '#49070A',
    borderWidth: 2,
    padding: 17,
    marginHorizontal: 5,
    marginVertical: 14,
    alignItems: 'center',
    paddingVertical: 6,
    borderRadius: 12,
  },
  editPhotoText: {
    color: '#FFEDE3',
    fontFamily: 'Inter_600SemiBold',
    fontSize: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#DDC2BB',
  },
  infoTextContainer: {
    flex: 1,
  },
  label: {
    fontSize: 23,
    color: '#49070A',
    fontFamily: 'Inter_600SemiBold',
  },
  value: {
    fontSize: 20,
    color: '#641919',
    fontFamily: 'Inter_400Regular',
  },
});
