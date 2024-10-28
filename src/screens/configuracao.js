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
import { View, Text, StyleSheet, TouchableOpacity, Image, Switch, Modal } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome' 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
const ConfigScreen = ({ navigation }) => {
const [appIsReady, setAppIsReady] = useState(false);
const [modalVisible, setModalVisible] = useState(false);

const handleExit = () => {
  // Aqui você pode adicionar a lógica de saída do app
  console.log("Saindo do app...");
  setModalVisible(false);
};
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
      <View style={styles.header}>
        <View style={styles.icon}>
   </View>
   </View>
     <View style={styles.section}>
        <Text style={styles.Title}>Acessibilidade</Text>
</View>

        <View style={styles.settingItem}>
        <FontAwesome name="text-height" size={30} color="#49070A" />
        <View style={styles.textContainer}>
          <Text style={styles.optionText}>Tamanho da fonte</Text>
          <Text style={styles.optionStatus}>Padrão</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('fontsize')}>
        <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.settingItem}>
      <MaterialCommunityIcons name="border-color" size={30} color="#49070A" />
        <View style={styles.textContainer}>
          <Text style={styles.optionText}>Correção de cor</Text>
          <Text style={styles.optionStatus}>Desativado</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('cor')}>
        <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.openButton}>
        <Text style={styles.openButtonText}>Sair do App</Text>
      </TouchableOpacity>

      {/* Modal de confirmação */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
        
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
          <Entypo name="log-out" size={40} color="#49070A" />
            <Text style={styles.title}>Deseja sair do Lipa's?</Text>

            <View style={styles.buttonGroup}>
              {/* Botão "Sim" */}
              <TouchableOpacity onPress={handleExit} style={styles.yesButton}>
                <Text style={styles.buttonSim}>Sim</Text>
              </TouchableOpacity>

              {/* Botão "Não" */}
              <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.noButton}>
                <Text style={styles.buttonNo}>Não</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5E8E0',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#631C1C',
  },
  Title: {
    fontSize: 30,
    fontFamily: 'Inter_600SemiBold',
    color: '#631C1C',
    textAlign: 'center',
    paddingVertical: 23,
    paddingTop: 1,
    borderBottomWidth: 1,
    borderColor: '#DDC2BB',
    },
  optionText: {
    fontSize: 16,
    color: '#631C1C',
    fontFamily:'Inter_500Medium',
    borderColor: '#DDC2BB',
    marginHorizontal: 6,
  },
  optionStatus: {
    marginHorizontal: 9,
    fontSize: 11,
    color: '#631C1C',
    fontFamily: 'Inter_500Medium',
  },
  exitButton: {
    backgroundColor: '#631C1C',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 250,
    marginHorizontal: 60,
  },
  exitButtonText: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    marginEnd: 10,
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    borderColor: '#DDC2BB',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  editIcon: {
    fontSize: 18,
    color: '#842C2A',
  },
  editableField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 5,
  },
icon: {
    height: 30,
    marginRight: 5,
  },
    settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#DDC2BB',
  },
    sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#800000',
    marginVertical: 20,
  },
   textContainer: {
    flex: 10,
  },
    settingTitle: {
    fontSize: 16,
    color: '#800000',
  },
   arrow: {
    fontSize: 40,
    color: '#49070A',
  },
  openButton: {
    backgroundColor: '#631C1C',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 250,
    marginHorizontal: 60,
  },
  openButtonText: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    marginEnd: 10,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#FAE9E4',
    borderRadius: 15,
    padding: 22,
    alignItems: 'center',
    elevation: 10,
    height: '31%',
  },
  title: {
    fontSize: 25,
    fontFamily: 'Inter_700Bold',
    color: '#49070A',
    marginBottom: 2,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: '#DDC2BB',
    paddingVertical: 20,
    alignItems: 'center',
    width: '115%',
  },
  buttonGroup: {
    width: '115%',
  },
  buttonSim: {
    color: '#631C1C',
    fontSize: 22,
    fontFamily: 'Inter_600SemiBold',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: '#DDC2BB',
    paddingVertical: 14,
  },
  buttonNo:{
    color: '#631C1C',
    fontSize: 22,
    fontFamily: 'Inter_600SemiBold',
    textAlign: 'center',
    paddingVertical: 8,
  },
});
export default ConfigScreen;