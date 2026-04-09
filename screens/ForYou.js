import React, { useState } from 'react'; 
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Comments from './Comments'; 

export default function ForYou({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false); 

  return (
    <ImageBackground source={require('../assets/img/Background2.png')} style={styles.container}>
      <View style={styles.rightActions}>
        <View style={styles.avatarContainer}>
          <Image source={require('../assets/img/User2.png')} style={styles.avatar} />
          <View style={styles.followBtn}><Text style={styles.followText}>+</Text></View>
        </View>
        
        <TouchableOpacity style={styles.action}>
          <Image source={require('../assets/img/tym.png')} style={styles.iconTym} />
          <Text style={styles.count}>328.7K</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.action} onPress={() => setModalVisible(true)}>
          <Image source={require('../assets/img/Message.png')} style={styles.iconMsg} />
          <Text style={styles.count}>578</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.action}>
          <Image source={require('../assets/img/share.png')} style={styles.iconShare} />
          <Text style={styles.count}>Share</Text>
        </TouchableOpacity>
        
        <Image source={require('../assets/img/Disc2.png')} style={styles.disc} />
      </View>

      <View style={styles.bottomInfo}>
        <Text style={styles.user}>@craig_love</Text>
        <Text style={styles.desc}>The most satisfying job #fyp #satisfying #roadmarking</Text>
      </View>

      <Comments 
        visible={modalVisible} 
        onClose={() => setModalVisible(false)} 
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black' },
  rightActions: { position: 'absolute', right: 12, bottom: 20, alignItems: 'center' },
  action: { alignItems: 'center', marginBottom: 20 },
  iconTym: { width: 44, height: 40, resizeMode: 'contain' },
  iconMsg: { width: 38, height: 38, resizeMode: 'contain' },
  iconShare: { width: 34, height: 34, resizeMode: 'contain' },
  count: { color: 'white', fontSize: 13, marginTop: 2, fontWeight: 'bold' },
  avatarContainer: { marginBottom: 25 },
  avatar: { width: 50, height: 50, borderRadius: 25, borderWidth: 1, borderColor: 'white' },
  followBtn: { position: 'absolute', bottom: -8, alignSelf: 'center', backgroundColor: '#ff0050', borderRadius: 10, width: 22, height: 22, alignItems: 'center', justifyContent: 'center' },
  followText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  disc: { width: 48, height: 48, marginTop: 5 },
  bottomInfo: { position: 'absolute', left: 12, bottom: 20, width: '80%' },
  user: { color: 'white', fontWeight: 'bold', fontSize: 17, marginBottom: 5 },
  desc: { color: 'white', fontSize: 15 },
});