import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';


export default function PerfilScreen(){
  const [name, setName] = useState('Julia Cabral');
  const [email, setEmail] = useState('julia.cabral@gmail.com');
  const [phone, setPhone] = useState('(11) 99090-9090');
  const [password, setPassword] = useState('****');

  const handleEdit = (field) => {
    // Função para edição (pode abrir um modal para edição ou redirecionar para outra tela)
  };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>PERFIL</Text>
        <View style={styles.profileContainer}>
          <TouchableOpacity onPress={() => handleEdit('photo')}>
            <View style={styles.avatar}>
              {/* Placeholder para imagem do usuário */}
              <Text style={styles.avatarIcon}>🧑‍💼</Text>
            </View>
            <Text style={styles.editPhotoText}>Editar foto</Text>
          </TouchableOpacity>
        </View>
  
        <View style={styles.infoContainer}>
          <Text style={styles.label}>ID #0001</Text>
  
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Nome</Text>
            <View style={styles.editableField}>
              <Text>{name}</Text>
              <TouchableOpacity onPress={() => handleEdit('name')}>
                <Text style={styles.editIcon}>✏️</Text>
              </TouchableOpacity>
            </View>
          </View>
  
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Endereço de e-mail</Text>
            <View style={styles.editableField}>
              <Text>{email}</Text>
              <TouchableOpacity onPress={() => handleEdit('email')}>
                <Text style={styles.editIcon}>✏️</Text>
              </TouchableOpacity>
            </View>
          </View>
  
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Telefone</Text>
            <View style={styles.editableField}>
              <Text>{phone}</Text>
              <TouchableOpacity onPress={() => handleEdit('phone')}>
                <Text style={styles.editIcon}>✏️</Text>
              </TouchableOpacity>
            </View>
          </View>
  
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Senha</Text>
            <View style={styles.editableField}>
              <Text>{password}</Text>
              <TouchableOpacity onPress={() => handleEdit('password')}>
                <Text style={styles.editIcon}>✏️</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#F8E9E5',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#842C2A',
      textAlign: 'center',
      marginBottom: 20,
    },
    profileContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    avatar: {
      backgroundColor: '#E5CAC8',
      width: 80,
      height: 80,
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    avatarIcon: {
      fontSize: 40,
    },
    editPhotoText: {
      color: '#842C2A',
      marginTop: 10,
    },
    infoContainer: {
      marginTop: 20,
    },
    fieldContainer: {
      marginBottom: 20,
    },
    label: {
      fontSize: 16,
      color: '#842C2A',
      marginBottom: 5,
    },
    editableField: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#FFF',
      padding: 10,
      borderRadius: 5,
    },
    editIcon: {
      fontSize: 18,
      color: '#842C2A',
    },
  });
