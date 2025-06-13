import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Register() {
  const router = useRouter();

  return (
    <View style={styles.container}>
<<<<<<< HEAD
      {/* Botón de regreso con estilo café y cuadrado */}
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={22} color="#D68D3B" />
        </TouchableOpacity>
=======
      {/* Botón estilo café de "Inicio" */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.push('/home')}>
        <Text style={styles.backButtonText}>Inicio</Text>
      </TouchableOpacity>
>>>>>>> 357f707c741474f4043cf66bae8d9c1ef7624b67

      {/* Título */}
      <Text style={styles.header}>¿Cómo deseas registrarte?</Text>

      {/* Opciones centradas */}
      <View style={styles.optionsWrapper}>
        <View style={styles.optionsContainer}>
          {/* Opción Granja */}
          <TouchableOpacity
            style={styles.optionCard}
            onPress={() => router.push('/register_granja')}
          >
            <Ionicons name="home" size={64} color="#000" />
            <Text style={styles.optionText}>Granja</Text>
          </TouchableOpacity>

          {/* Opción Cliente */}
          <TouchableOpacity
            style={styles.optionCard}
            onPress={() => router.push('/register_cliente')}
          >
            <Ionicons name="person" size={64} color="#000" />
            <Text style={styles.optionText}>Cliente</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 24,
    position: 'relative',
  },
<<<<<<< HEAD
   backButton: {
  position: 'absolute',
  top: 48,
  left: 20,
  padding: 8,
  zIndex: 1,
},
=======
  backButton: {
    position: 'absolute',
    top: 44,
    left: 24,
    borderWidth: 1,
    borderColor: '#D68D3B',
    backgroundColor: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 4, // cuadrado, no redondo
  },
>>>>>>> 357f707c741474f4043cf66bae8d9c1ef7624b67
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D68D3B',
    textAlign: 'center',
  },
  
<<<<<<< HEAD
=======


>>>>>>> 357f707c741474f4043cf66bae8d9c1ef7624b67
  header: {
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 120,
    marginBottom: -190,
  },
  optionsWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsContainer: {
    flexDirection: 'row',
    gap: 32,
  },
  optionCard: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 16,
    padding: 30,
    alignItems: 'center',
    width: 140,
  },
  optionText: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: '500',
  },
<<<<<<< HEAD
});
=======
});
>>>>>>> 357f707c741474f4043cf66bae8d9c1ef7624b67
