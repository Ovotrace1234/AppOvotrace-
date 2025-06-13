<<<<<<< HEAD
import { View, Text } from "react-native";

export default function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Perfil</Text>
    </View>
  );
}
=======
// 📁 app/(tabs)/profile.tsx – actualizado
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Encabezado */}
      <Text style={styles.headerTitle}>Perfil</Text>

      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Avatar editable y datos básicos */}
        <View style={styles.profileBox}>
          <TouchableOpacity onPress={() => router.push('/edit-avatar')}>
            <Image source={{ uri: 'https://i.pravatar.cc/150' }} style={styles.avatar} />
            {/* Ícono de editar encima de la foto */}
            <View style={styles.cameraIcon}> 
              <Feather name="camera" size={16} color="#fff" />
            </View>
          </TouchableOpacity>
          <View style={styles.profileText}>
            <Text style={styles.name}>Carlitos Hidalgo</Text>
            <Text style={styles.email}>kukuhdesign.mlg@gmail.com</Text>
          </View>
        </View>

        {/* Separador */}
        <View style={styles.separator} />

        {/* Sección ajustes */}
        <Text style={styles.sectionLabel}>AJUSTES</Text>
        <MenuRow
          label="Información personal"
          icon={<Ionicons name="person-outline" size={20} color="#000" />}
          onPress={() => router.push('/personal-info')}
        />
        <MenuRow
          label="Cambiar contraseña"
          icon={<Feather name="lock" size={20} color="#000" />}
          onPress={() => router.push('/change-password')}
        />

        {/* Sección acerca de */}
        <Text style={[styles.sectionLabel, { marginTop: 24 }]}>ACERCA DE</Text>
        <MenuRow
          label="Sobre nosotros"
          icon={<Ionicons name="information-circle-outline" size={20} color="#000" />}
          onPress={() => router.push('/about-us')}
        />
        <MenuRow
          label="Acerca de OvoTrace"
          icon={<Ionicons name="help-circle-outline" size={20} color="#000" />}
          onPress={() => router.push('/about-app')}
        />

        {/* Sección legal */}
        <Text style={[styles.sectionLabel, { marginTop: 24 }]}>LEGAL</Text>
        <MenuRow
          label="Términos y condiciones"
          icon={<Feather name="file-text" size={20} color="#000" />}
          onPress={() => router.push('/terms')}
        />
        <MenuRow
          label="Aviso de privacidad"
          icon={<Ionicons name="shield-checkmark-outline" size={20} color="#000" />}
          onPress={() => router.push('/privacy')}
        />

        {/* Cerrar sesión */}
        <MenuRow
          label="Cerrar sesión"
          icon={<Feather name="log-out" size={20} color="#D68D3B" />}
          onPress={() => router.replace('/login')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

/* ------------------ Componente fila reutilizable ------------------ */
type RowProps = {
  label: string;
  icon: React.ReactNode;
  onPress: () => void;
};

const MenuRow = ({ label, icon, onPress }: RowProps) => (
  <TouchableOpacity style={styles.row} onPress={onPress}>
    <Text style={styles.rowLabel}>{label}</Text>
    <View style={styles.rowIcon}>{icon}</View>
  </TouchableOpacity>
);

/* ------------------------------ Estilos --------------------------- */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  headerTitle: { fontSize: 24, fontWeight: '700', marginTop: 10, marginLeft: 16 },
  scroll: { paddingHorizontal: 16, paddingBottom: 40 },
  profileBox: { flexDirection: 'row', alignItems: 'center', marginTop: 12, marginBottom: 12 },
  avatar: { width: 72, height: 72, borderRadius: 36 },
  cameraIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#D68D3B',
    borderRadius: 10,
    padding: 4,
  },
  profileText: { marginLeft: 12 },
  name: { fontSize: 18, fontWeight: '600' },
  email: { color: '#777', marginTop: 2 },
  separator: { height: 1, backgroundColor: '#b1762d', marginVertical: 8 },
  sectionLabel: { fontSize: 12, color: '#d3a679', marginBottom: 6, marginTop: 4 },
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  rowLabel: { flex: 1, fontSize: 15, color: '#000' },
  rowIcon: { width: 24, alignItems: 'flex-end' },
});
>>>>>>> 357f707c741474f4043cf66bae8d9c1ef7624b67
