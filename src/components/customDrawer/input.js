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
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { View, navigation, style, Text, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
const CustomDrawer = props => {
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
   return(
    <View style={{flex: 1}}>
      <DrawerContentScrollView
      {...props}
      contentContainerStyle={{backgroundColor: '#FFEDE3'}}>
      <Text
      style={{
        fontSize: 32,
        textAlign: 'center',
        marginVertical: 1,
        fontFamily: 'DMSerifDisplay_400Regular',
        color: "#49070A",
        borderBottomWidth: 1,
        borderColor: '#DDC2BB',
      }}
      >Menu</Text>
      <View style={styles.container}>
      <View style={styles.textContainer}>
      <View style={styles.settingItem}>
        <Image source={require('../../assets/imagem/juju-profile.jpeg')} style={styles.user} />
        <View style={styles.textContainer}>
          <Text style={styles.optionText}>Julia Cabral</Text>
          <Text style={styles.optionStatus}>juliacabral@gmail.com</Text>
        </View>
</View>
</View>
</View>
        <DrawerItemList {...props} 
        />
      </DrawerContentScrollView>
      <TouchableOpacity style={styles.exitButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.exitButtonText}>Sair</Text>
      </TouchableOpacity>
      <View>
      <Text></Text>
      
      </View>

    </View>
   );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
userArea:{
 marginTop: 1,
 marginLeft: 10,
 marginBottom: 10,
},
user:{
  width: 55,
  height: 55,
  borderRadius: 30,
  
  marginRight: 5,
},
settingItem: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 12,
  borderBottomWidth: 1,
  borderColor: '#DDC2BB',
},
textContainer: {
  flex: 10,
},
optionText: {
  fontSize: 22,
  color: '#631C1C',
  fontFamily:'Inter_600SemiBold',
  borderColor: '#DDC2BB',
},
optionStatus: {
  marginHorizontal: 2,
  fontSize: 14,
  color: '#631C1C',
  fontFamily: 'Inter_400Regular',
},
exitButton: {
  borderColor: '#631C1C',
  borderWidth: 2,
  padding: 1,
  marginHorizontal: 2,
  borderRadius: 5,
  alignItems: 'center',
  marginTop: 55,
  marginHorizontal: 55,
  paddingVertical: 10,
  borderRadius: 30,
},
exitButtonText: {
  fontFamily: 'Inter_700Bold',
  color: '#631C1C',
  fontSize: 24,
  textAlign: 'center'
},
});
export default CustomDrawer;