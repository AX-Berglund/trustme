import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const reports = Array.from({ length: 5 }, (_, i) => `Block ${i + 1}`);

export default function EmotionScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <FlatList
        data={reports}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.block} onPress={() => router.push(`/emotion/${item}`)}>
            <Text style={styles.blockText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  block: { padding: 15, marginVertical: 10, backgroundColor: '#D1E8FF', borderRadius: 10 },
  blockText: { fontSize: 18, fontWeight: 'bold' },
});
