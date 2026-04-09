import React, { useState } from 'react'; 
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Comments from './Comments'; 

export default function Following({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false); 

  return (
    <ImageBackground source={require('../assets/img/Background.png')} style={styles.container}>
      <View style={styles.rightActions}>
        <View style={styles.avatarContainer}>
          <Image source={require('../assets/img/u6.png')} style={styles.avatar} />
          <View style={styles.followBtn}><Text style={styles.followText}>+</Text></View>
        </View>
        
        <TouchableOpacity style={styles.action}>
          <Image source={require('../assets/img/tym.png')} style={styles.iconTym} />
          <Text style={styles.count}>4445</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.action} onPress={() => setModalVisible(true)}>
          <Image source={require('../assets/img/Message.png')} style={styles.iconMsg} />
          <Text style={styles.count}>64</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.action}>
          <Image source={require('../assets/img/share.png')} style={styles.iconShare} />
          <Text style={styles.count}>Share</Text>
        </TouchableOpacity>
        
        <Image source={require('../assets/img/Disc.png')} style={styles.disc} />
      </View>

      <View style={styles.bottomInfo}>
        <Text style={styles.user}>@karennne · 1-28</Text>
        <Text style={styles.desc}>#avicii #wflove</Text>
        <View style={styles.musicRow}>
           <Image source={require('../assets/img/MusicIcon.png')} style={styles.musicIcon} />
           <Text style={styles.musicText} numberOfLines={1}>Avicii - Waiting For Love (ft.</Text>
        </View>
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
  rightActions: { position: 'absolute', right: 12, bottom: 15, alignItems: 'center' },
  action: { alignItems: 'center', marginBottom: 18 },
  iconTym: { width: 42, height: 38, resizeMode: 'contain' },
  iconMsg: { width: 36, height: 36, resizeMode: 'contain' },
  iconShare: { width: 34, height: 34, resizeMode: 'contain' },
  count: { color: 'white', fontSize: 13, marginTop: 2, fontWeight: 'bold' },
  avatarContainer: { marginBottom: 25 },
  avatar: { width: 48, height: 48, borderRadius: 24, borderWidth: 1, borderColor: 'white' },
  followBtn: { position: 'absolute', bottom: -8, alignSelf: 'center', backgroundColor: '#ff0050', borderRadius: 10, width: 20, height: 20, alignItems: 'center', justifyContent: 'center' },
  followText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  disc: { width: 45, height: 45, marginTop: 10 },bottomInfo: { position: 'absolute', left: 12, bottom: 15, width: '75%' },
  user: { color: 'white', fontWeight: 'bold', fontSize: 16, marginBottom: 5 },
  desc: { color: 'white', fontSize: 15, marginBottom: 10 },
  musicRow: { flexDirection: 'row', alignItems: 'center' },
  musicIcon: { width: 14, height: 14, marginRight: 8, tintColor: 'white' },
  musicText: { color: 'white', fontSize: 14, flex: 1 }
});