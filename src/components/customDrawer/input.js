import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { auth, db } from '../../services/firebase/conf';  // Certifique-se de importar corretamente seu módulo de firebase
import { doc, getDoc } from 'firebase/firestore';

const CustomDrawer = (props) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, 'Usuário', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const userData = docSnap.data();
          setUserName(userData.userName);
          setUserEmail(userData.userEmail);
        }
      }
    };
    fetchUserData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: '#FFEDE3' }}
      >
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
        >
          Menu
        </Text>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <View style={styles.settingItem}>
              <Image source={require('../../assets/imagem/juju-profile.jpeg')} style={styles.user} />
              <View style={styles.textContainer}>
                <Text style={styles.optionText}>{userName}</Text>
                <Text style={styles.optionStatus}>{userEmail}</Text>
              </View>
            </View>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity style={styles.exitButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.exitButtonText}>Sair</Text>
      </TouchableOpacity>
      <View>
        <Text></Text>
      </View>
    </View>
  );
};
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

