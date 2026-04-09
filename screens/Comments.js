placeholderTextColor="#999"
              style={styles.input} 
            />
            <Image source={require('../assets/img/tag.png')} style={styles.inputIcon} />
            <Image source={require('../assets/img/Emoji.png')} style={styles.inputIcon} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, justifyContent: 'flex-end' }, 
  topSpace: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)' }, 
  commentContainer: { 
    height: height * 0.7, 
    backgroundColor: 'white', 
    borderTopLeftRadius: 15, 
    borderTopRightRadius: 15,
  }, 
  header: { flexDirection: 'row', justifyContent: 'center', padding: 15, borderBottomWidth: 0.5, borderColor: '#eee' },
  title: { fontWeight: 'bold', fontSize: 13, color: 'black' },
  closeBtn: { position: 'absolute', right: 15, top: 12 },
  close: { fontSize: 22, color: '#333' },
  commentRow: { flexDirection: 'row', padding: 15, alignItems: 'flex-start' },
  avatar: { width: 35, height: 35, borderRadius: 20 },
  content: { flex: 1, marginLeft: 10 },
  userName: { color: '#888', fontWeight: 'bold', fontSize: 12 },
  text: { fontSize: 14, marginTop: 3, lineHeight: 18, color: 'black' },
  time: { color: '#aaa', fontSize: 12 },
  replies: { color: '#888', marginTop: 8, fontSize: 12, fontWeight: 'bold' },
  likeCol: { alignItems: 'center', width: 40 },
  smallHeart: { width: 18, height: 18, tintColor: '#ccc', resizeMode: 'contain' },
  likeText: { color: '#888', fontSize: 11 },
  inputRow: { 
    position: 'absolute', 
    bottom: 0, left: 0, right: 0,
    flexDirection: 'row', 
    padding: 10, 
    borderTopWidth: 0.5, 
    borderColor: '#eee', 
    alignItems: 'center', 
    backgroundColor: 'white', 
    paddingBottom: 25
  },
  input: { flex: 1, backgroundColor: '#f2f2f2', height: 40, borderRadius: 20, paddingHorizontal: 15, color: 'black' },
  inputIcon: { width: 22, height: 22, marginLeft: 15, resizeMode: 'contain' }
});