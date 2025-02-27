import { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  // Placeholder recent activity
  const recentItems = [
    { id: '1', type: 'chat', text: 'You: How can I improve my focus?' },
    { id: '2', type: 'emotion', text: 'Block 3: Managing stress' },
  ];

  return (
    <View style={styles.container}>
      {/* Profile Button */}
      <TouchableOpacity style={styles.profileButton} onPress={() => setModalVisible(true)}>
        <Image source={require('@/assets/images/partial-react-logo.png')} style={styles.profileImage} />
      </TouchableOpacity>

      {/* Greeting */}
      <Text style={styles.greeting}>Welcome Back! 👋</Text>
      <Text style={styles.subText}>Let's check in on your progress.</Text>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionButton} onPress={() => router.push('/chat')}>
          <Text style={styles.buttonText}>Open Chat 💬</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => router.push('/emotion')}>
          <Text style={styles.buttonText}>Emotion Report 📊</Text>
        </TouchableOpacity>
      </View>

      {/* Recent Activity */}
      <Text style={styles.sectionTitle}>Recent Activity</Text>
      <FlatList
        data={recentItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.recentItem} onPress={() => router.push(`/${item.type}`)}>
            <Text style={styles.recentText}>{item.text}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Account Modal */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Account Settings</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F5F7FA' },
  profileButton: { position: 'absolute', top: 50, left: 20 },
  profileImage: { width: 40, height: 40, borderRadius: 20 },
  greeting: { fontSize: 26, fontWeight: 'bold', marginTop: 100 },
  subText: { fontSize: 16, color: '#666', marginBottom: 20 },
  quickActions: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  actionButton: { flex: 1, backgroundColor: '#0a7ea4', padding: 15, borderRadius: 10, marginHorizontal: 5, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  recentItem: { backgroundColor: '#EAEAEA', padding: 15, marginBottom: 10, borderRadius: 10 },
  recentText: { fontSize: 16 },
  modalBackground: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center' },
  modalContent: { backgroundColor: 'white', padding: 20, margin: 20, borderRadius: 10, alignItems: 'center' },
  modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  closeText: { color: 'blue', marginTop: 10 },
});


