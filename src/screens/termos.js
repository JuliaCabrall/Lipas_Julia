import React, { useState, useEffect } from 'react';
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

import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

const TermosCondicoesScreen = ({ navigation }) => {
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
    <ScrollView>
              <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={require('../assets/icons/borb-icon.png')} style={styles.borb} />
              </TouchableOpacity>
      <View style={styles.container2}>
      </View>

      <View style={styles.section}>
        <Text style={styles.Title}>Termos e Condições</Text>
</View>
      <Text style={styles.instructions}>
        Bem-vinda ao aplicativo “Lipa’s”! Ao utilizar nosso aplicativo, você concorda em cumprir os seguintes termos e condições. Por favor, leia atentamente antes de usar o aplicativo.
      </Text>

        {/* Botões de navegação para "Termos de Condições" e "Política de Privacidade" */}
      <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Termos e Condições</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Politica')}>
            <Text style={styles.buttonText}>Política de Privacidade</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>1. Aceitação dos Termos</Text>
        <Text style={styles.paragraph}>
        Ao fazer o download, instalar ou usar o aplicativo “Lipa’s”, você concorda em cumprir estes termos e condições. Se você não concorda com eles, por favor, não use o aplicativo.
        </Text>

        <Text style={styles.sectionTitle}>2. Uso Responsável</Text>
        <Text style={styles.paragraph}>
        O aplicativo “Lipa’s” destina-se a ser utilizado por mulheres e seus cuidadores para garantir a segurança pessoal. Você concorda em utilizar o aplicativo de maneira responsável, respeitando os direitos e a privacidade de outros usuários.
        </Text>

        <Text style={styles.sectionTitle}>3. Conteúdo gerado pelo usuário</Text>
        <Text style={styles.paragraph}>
        O “Lipa’s” oferece os seguintes recursos:{'\n'}{'\n'}
      
      <Text style={styles.paragraph}>•Botão de Pânico: Permite que você envie alertas de emergência para contatos predefinidos.</Text>{'\n'}
      <Text style={styles.paragraph}>•Geolocalização em Tempo Real: Rastreia sua localização para fornecer assistência em caso de necessidade.</Text>{'\n'}
      <Text style={styles.paragraph}>•Manual de Defesa: Fornece informações sobre autodefesa e segurança pessoal.</Text>{'\n'}
      <Text style={styles.paragraph}>•Contatos de Emergência: Armazena informações de contato para uso em situações de emergência.</Text>
</Text>

        <Text style={styles.sectionTitle}>4. Uso de Geolocalização</Text>
        <Text style={styles.paragraph}>
          O aplicativo pode utilizar serviços de geolocalização para fornecer melhores funcionalidades.
        </Text>

        <Text style={styles.sectionTitle}>5. Propriedade Intelectual</Text>
        <Text style={styles.paragraph}>
          Todos os direitos de propriedade intelectual relacionados ao aplicativo “Lipa’s” são de nossa propriedade ou licenciados para nós. Você concorda em não copiar, modificar, distribuir ou reproduzir qualquer conteúdo do aplicativo sem nossa autorização prévia por escrito.
        </Text>

        <Text style={styles.sectionTitle}>6. Responsabilidade Limitada</Text>
        <Text style={styles.paragraph}>
        O aplicativo “Lipa’s” é fornecido “como está”, sem garantias de qualquer tipo. Não nos responsabilizamos por quaisquer danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso do aplicativo.
        </Text>

        <Text style={styles.sectionTitle}>7. Modificações dos Termos e Condições</Text>
        <Text style={styles.paragraph}>
        Podemos modificar estes termos e condições a qualquer momento, sem aviso prévio. É responsabilidade do usuário verificar periodicamente se houve alterações. O uso contínuo do aplicativo após as modificações indica que você concorda com os termos atualizados.
        </Text>

        <Text style={styles.sectionTitle}>8. Encerramento do Acesso</Text>
        <Text style={styles.paragraph}>
        Reservamo-nos o direito de encerrar ou suspender seu acesso ao aplicativo “Lipa’s”, a nosso critério, sem aviso prévio, caso você viole estes termos e condições.
        </Text>
        <View style={styles.combo}>
       </View>
    </ScrollView>
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#49070A',
    width: '100%',
    height: '100%',
  },
  container2: {
      flex: 1, 
      backgroundColor: '#FFEDE3',
      width: '100%',
      height: 4000,
      marginVertical: 100,
      borderWidth:1,
      borderColor: '#640F1480',
      borderRadius: 50,
      position: 'absolute',
  },
  backButton: {
    color: '#FFFFFF',
    fontSize: 30,
  },
  scrollViewContent: {
    padding: 20,
    marginBottom: 23,
  },
  paragraph: {
    fontSize: 16,
    color: '#791227',
    textAlign: 'auto',
    marginVertical: 10,
    marginLeft: 20,
    marginVertical: 1,
    marginBottom: 35,
    fontFamily: 'Inter_400Regular',
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
    color: '#49070A',
    marginHorizontal: 20,
    textAlign: 'auto',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  button: {
    borderColor: '#631C1C',
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 130,
    paddingVertical: 22,
    paddingHorizontal: 17,
    borderRadius: 19,
  },
  buttonText: {
  color: '#631C1C',
  fontSize: 18,
  textAlign: 'center',
  fontFamily: 'Inter_600SemiBold',
  },
  instructions: {
    marginTop: 15,
    fontSize: 16,
    marginHorizontal: 20,
    color: '#7C1C1C',
    fontFamily: 'Inter_400Regular',
  },
  Title: {
    fontSize: 45,
    color: '#631C1C',
    textAlign: 'center',
    borderColor: '#DDC2BB',
    fontFamily: 'Inter_700Bold',
    },
    borb: {
      width: 70,
      height: 70,
      marginStart: 170,
      marginVertical: 26,
    },
    combo: {
      flexDirection: 'row', // Alinha os itens na horizontal
      justifyContent: 'space-evenly', // Espaça os itens uniformemente
      padding: 10,
    },
});

export default TermosCondicoesScreen;
