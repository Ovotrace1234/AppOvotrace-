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

<<<<<<< HEAD
export default function RegisterClient() {
=======
export default function RegisterFarm() {
>>>>>>> 357f707c741474f4043cf66bae8d9c1ef7624b67
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
<<<<<<< HEAD
      {/* Flechita suelta arriba */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={22} color="#D68D3B" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Título centrado */}
        <View style={styles.header}>
          <Text style={styles.title}>Registro Cliente</Text>
          <Text style={styles.subtitle}>Crea tu cuenta para continuar</Text>
        </View>

        {/* Campos */}
        <View style={styles.form}>
          <Text style={styles.label}>Nombre</Text>
          <TextInput
            placeholder="Castro"
            placeholderTextColor="#d3a679"
            style={styles.input}
          />

          <Text style={styles.label}>Correo</Text>
          <TextInput
            placeholder="emailmu@mail.com"
            placeholderTextColor="#d3a679"
            keyboardType="email-address"
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

          {/* Botón */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>¿Ya tienes cuenta? </Text>
          <TouchableOpacity onPress={() => router.push('/login')}>
            <Text style={styles.link}>Iniciar sesión</Text>
          </TouchableOpacity>
        </View>
=======
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
>>>>>>> 357f707c741474f4043cf66bae8d9c1ef7624b67
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
<<<<<<< HEAD
    padding: 8,
    zIndex: 1,
  },
  scroll: {
    paddingHorizontal: 24,
    paddingTop: 80,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 32,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#888',
    marginTop: 8,
  },
  form: {
=======
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
>>>>>>> 357f707c741474f4043cf66bae8d9c1ef7624b67
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
<<<<<<< HEAD
    paddingHorizontal: 50,
    borderRadius: 30,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    minWidth: 280,
    alignItems: 'center',
    alignSelf: 'center',
=======
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
>>>>>>> 357f707c741474f4043cf66bae8d9c1ef7624b67
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
<<<<<<< HEAD
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  footerText: {
    color: '#000',
    fontSize: 14,
  },
  link: {
    color: '#007bff',
    fontWeight: 'bold',
    fontSize: 14,
=======
  note: {
    textAlign: 'center',
    color: '#007bff',
    marginTop: 12,
    fontSize: 13,
>>>>>>> 357f707c741474f4043cf66bae8d9c1ef7624b67
  },
});
