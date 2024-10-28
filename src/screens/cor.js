import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch, Image, Modal} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ColorCorrectionScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false); // Switch para ativar/desativar correção de cor
  const [selectedMode, setSelectedMode] = useState('Modo monocromático'); // Modo selecionado
  const [modalVisible, setModalVisible] = useState(false); // Modal de seleção de modo

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const modes = [
    'Modo monocromático',
    'Deuteranomalia (vermelho-verde)',
    'Protanomalia (vermelho-verde)',
    'Tritanomalia (azul-amarelo)',
  ];
  return (
    <View style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Correção de Cor</Text>
        <Image source={require('../assets/borboleta.png')} style={styles.borboleta} />
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>Usar correção de cor</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#8B0000" }}
          thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>

      {/* Modo de correção de cor */}
      <TouchableOpacity style={styles.correctionModeContainer} onPress={() => setModalVisible(true)}>
        <FontAwesome name="eye" size={30} color="#49070A" />
        <View style={styles.correctionModeTextContainer}>
          <Text style={styles.correctionModeText}>Modo de correção</Text>
          <Text style={styles.selectedModeText}>{selectedMode}</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={35} color="#49070A" />
      </TouchableOpacity>

    <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => setModalVisible(false)}
  >
    <View style={styles.modalContainer}>
      <View style={styles.modalView}>
        <Text style={styles.modalTitle}>Modo de correção</Text>
        {modes.map((mode, index) => (
          <TouchableOpacity
            key={index}
            style={styles.radioButton}
            onPress={() => {
              setSelectedMode(mode);
              setModalVisible(false);
            }}
          >
            <View style={styles.radioCircle}>
              {selectedMode === mode && <View style={styles.selectedRadioCircle} />}
            </View>
            <Text style={styles.radioText}>{mode}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEDE3',
  },
  navbar: {
    width: '100%', // Faz a navbar ocupar toda a largura
    height: 75, // Ajuste a altura se necessário
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#49070A',
    paddingHorizontal: 9,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  title: {
    fontSize: 30,
    color: '#FFEDE3',
    fontFamily: 'DMSerifDisplay_400Regular', // Certifique-se de carregar a fonte correta
    marginRight: 60,
    marginStart: 1,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#DAB8A9',
  },
  switchText: {
    fontSize: 18,
    color: '#49070A',
    fontFamily: 'Inter_500Medium',
  },
  correctionModeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  correctionModeTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  correctionModeText: {
    fontSize: 18,
    color: '#49070A',
    fontFamily: 'Inter_700Bold',
  },
  selectedModeText: {
    fontSize: 14,
    color: '#49070A',
    fontFamily: 'Inter_500Medium',
  },
  borboleta: {
    width: 55,
    height: 55,
    marginStart: 17,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: '#FFEDE3',
    borderRadius: 35,
    padding: 25,
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: 'Inter_600SemiBold',
    marginBottom: 11,
    color: '#49070A',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioCircle: {
    height: 29,
    width: 29,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#49070A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selectedRadioCircle: {
    width: 20,
    height: 20,
    borderRadius: 15,
    backgroundColor: '#791227',
  },
  radioText: {
    fontSize: 15,
    fontFamily: 'Inter_500Medium',
    color: '#49070A',
  },
  cancelButton: {
    marginTop: 15,
    padding: 6,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: '#49070A',
    alignItems: 'center',
    marginStart: 145,
  },
  cancelButtonText: {
    fontSize: 16,
    color: '#49070A',
    fontFamily: 'Inter_500Medium',
  },
});

export default ColorCorrectionScreen;