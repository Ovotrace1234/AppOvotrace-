import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function RegisterFarm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Botón de Inicio */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.push('/home')}>
        <Text style={styles.backButtonText}>Inicio</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Registro Granja</Text>

        <Text style={styles.label}>Nombre de la Granja</Text>
        <TextInput
          placeholder="Paso la puerta"
          placeholderTextColor="#d3a679"
          style={styles.input}
        />

        <Text style={styles.label}>Responsable</Text>
        <TextInput
          placeholder="Cobos"
          placeholderTextColor="#d3a679"
          style={styles.input}
        />

        <Text style={styles.label}>Correo</Text>
        <TextInput
          placeholder="emailmu@mail.com"
          placeholderTextColor="#d3a679"
          style={styles.input}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Ubicación</Text>
        <TextInput
          placeholder="6+ karakter"
          placeholderTextColor="#d3a679"
          style={styles.input}
        />

        <Text style={styles.label}>Contraseña</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="6+ karakter"
            placeholderTextColor="#d3a679"
            secureTextEntry={!showPassword}
            style={styles.passwordInput}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? 'eye-off' : 'eye'}
              size={22}
              color="#666"
              style={{ marginLeft: 8 }}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Confirmar contraseña</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="6+ karakter"
            placeholderTextColor="#d3a679"
            secureTextEntry={!showConfirm}
            style={styles.passwordInput}
          />
          <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
            <Ionicons
              name={showConfirm ? 'eye-off' : 'eye'}
              size={22}
              color="#666"
              style={{ marginLeft: 8 }}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>

        <Text style={styles.note}>
          Tu cuenta será revisada por un administrador antes de poder acceder
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 48,
    left: 20,
    borderWidth: 1,
    borderColor: '#D68D3B',
    backgroundColor: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 4,
    zIndex: 1,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D68D3B',
    textAlign: 'center',
  },
  scroll: {
    paddingTop: 90,
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#b1762d',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 14,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#b1762d',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  passwordInput: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 12,
  },
  button: {
    backgroundColor: '#D68D3B',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  note: {
    textAlign: 'center',
    color: '#007bff',
    marginTop: 12,
    fontSize: 13,
  },
});
