import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
import { Input } from "react-native-elements";

import { auth } from '../services/firebase/conf';
import { signInWithEmailAndPassword } from 'firebase/auth';


export default function Login({ navigation }) {
  const [userEmail, setEmail] = useState("");
  const [userSenha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, userEmail, userSenha)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log({user})
    if (user){
      navigation.replace("Home")
    }

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  };


  return (
    <View style={styles.container}>
      <Image source={require("../assets/borboleta.png")} style={styles.borboleta} />
      <View style={styles.container2}>
      <Text style={styles.Title}>Login</Text>
        <View style={styles.email}>
          <Input
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#49070A98"
            leftIcon={{ type: "font-awesome", name: "user", color: "#49070A98" }}
            onChangeText={(value) => setEmail(value)}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.senha}>
          <Input
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#49070A98"
            leftIcon={{ type: "font-awesome", name: "lock", color: "#49070A98" }}
            onChangeText={(value) => setSenha(value)}
            secureTextEntry={true}
          />
        </View>
        <Text onPress={() => navigation.navigate("Cadastro")} style={styles.cadastre}>
          Não tem uma conta? Cadastre-se
        </Text>
        <TouchableOpacity onPress={handleLogin} style={styles.bottonentrar}>
          <Text style={styles.entrar}>Entrar</Text>
        </TouchableOpacity>
        <Image source={require("../assets/ou.png")} style={styles.ou} />
        <TouchableOpacity>
          <Image source={require("../assets/google.png")} style={styles.google} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#49070A",
    width: "100%",
    height: "100%",
  },
  borboleta: {
    width: width * 0.4,
    height: width * 0.4,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: height * 0.05,
  },
  container2: {
    position: "absolute",
    top: height * 0.28,
    width: "100%",
    height: height,
    backgroundColor: "#FFEDE3",
    borderRadius: 30,
    alignItems: "center",
  },
  Title: {
    fontSize: 65,
    fontFamily: 'DMSerifDisplay_400Regular',
    color: '#631C1C',
    textAlign: 'center',
    paddingTop: 12,
   
  },
  email: {
    backgroundColor: "#FFFFFF",
    width: width * 0.9,
    height: height * 0.1,
    marginTop: height * 0.02,
    borderWidth: 1,
    borderColor: "#49070A",
    borderRadius: 20,
    padding: 10,
  },
  input: {
    fontSize: width * 0.05,
    fontFamily: "Inter_500Medium",
  },
  senha: {
    backgroundColor: "#FFFFFF",
    width: width * 0.9,
    height: height * 0.1,
    marginTop: height * 0.03,
    borderWidth: 1,
    borderColor: "#49070A",
    borderRadius: 20,
    padding: 10,
  },
  cadastre: {
    fontSize: width * 0.04,
    fontFamily: "Inter_700Bold",
    color: "#112947",
    textDecorationLine: "underline",
    marginTop: height * 0.01,
  },
  bottonentrar: {
    marginTop: height * 0.04,
    width: width * 0.6,
    height: height * 0.08,
    backgroundColor: "#49070A",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  entrar: {
    color: "#FFEDE3",
    textAlign: "center",
    fontSize: width * 0.06,
    fontFamily: "Inter_600SemiBold",
  },
  esqueceu: {
    fontSize: width * 0.04,
    fontFamily: "Inter_700Bold",
    color: "#112947",
    textDecorationLine: "underline",
    marginTop: height * 0.01,
  },
  ou: {
    width: width,
    height: height * 0.03,
    marginTop: height * 0.04,
  },
  google: {
    width: width * 0.15,
    height: width * 0.15,
    marginTop: height * 0.02,
  },
});
