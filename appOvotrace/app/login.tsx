import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Botón de regreso con estilo café y cuadrado */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={22} color="#D68D3B" />
      </TouchableOpacity>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.inner}
      >
        {/* Encabezado */}
        <View style={styles.header}>
          <Text style={styles.title}>Bienvenido a Ovotrace </Text>
          <Text style={styles.subtitle}>Inicia sesión para comenzar</Text>
        </View>

        {/* Formulario */}
        <View style={styles.form}>
          <Text style={styles.label}>Correo</Text>
          <TextInput
            style={[
              styles.input,
              { borderColor: emailFocused ? '#b1762d' : '#ccc' },
            ]}
            placeholder="emailmu@mail.com"
            placeholderTextColor="#d3a679"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
          />

          <Text style={styles.label}>Contraseña</Text>
          <View
            style={[
              styles.passwordContainer,
              { borderColor: passwordFocused ? '#b1762d' : '#ccc' },
            ]}
          >
            <TextInput
              style={styles.passwordInput}
              placeholder="6+ C"
              placeholderTextColor="#d3a679"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? 'eye-off' : 'eye'}
                size={22}
                color="#666"
                style={{ paddingLeft: 8 }}
              />
            </TouchableOpacity>
          </View>

          {/* Botón de iniciar sesión */}
          <TouchableOpacity style={styles.boton} onPress={() => router.push('/(tabs)')}>
            <Text style={styles.botonTexto}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.textoSecundario}>No tienes cuenta? </Text>
            <TouchableOpacity onPress={() => router.push('/register')}>
              <Text style={styles.link}>Registrate</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => router.push('/forgot-password')}>
            <Text style={styles.forgotText}>¿Olvidaste la contraseña ?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inner: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  backButton: {
  position: 'absolute',
  top: 48,
  left: 20,
  padding: 8,
  zIndex: 1,
},

  header: {
    marginTop: 80,
    marginBottom: 32,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
  },
  form: {
    marginBottom: 24,
  },
  label: {
    fontSize: 15,
    marginBottom: 4,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    marginBottom: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 24,
  },
  passwordInput: {
    flex: 1,
    fontSize: 15,
    paddingVertical: 10,
  },
  boton: {
    backgroundColor: '#D68D3B',
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 30,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    minWidth: 280,
    alignItems: 'center',
    alignSelf: 'center',
  },
  botonTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
    gap: 8,
  },
  textoSecundario: {
    fontSize: 15,
    color: '#333',
    textAlign: 'center',
  },
  link: {
    color: '#007bff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  forgotText: {
    textAlign: 'center',
    fontWeight: '600',
    color: '#000',
    fontSize: 15,
    marginTop: 6,
  },
});