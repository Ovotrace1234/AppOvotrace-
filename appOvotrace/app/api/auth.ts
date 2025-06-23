import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API = "http://192.168.210.1:4000/api";


export const loginRequest = async (email: string, password: string) => {
  const res = await axios.post(`${API}/login`, { email, password });
  const token = res.data.token;

  if (token) {
    await AsyncStorage.setItem("token", token);
  }

  return res.data;
};

export const registerRequest = async (
  username: string,
  email: string,
  password: string
) => {
  const res = await axios.post(`${API}/register`, {
    username,
    email,
    password,
  });
  const token = res.data.token;

  if (token) {
    await AsyncStorage.setItem("token", token);
  }

  return res.data;
};

export const getProfile = async () => {
  const token = await AsyncStorage.getItem("token");
  if (!token) throw new Error("Token no encontrado");

  const res = await axios.get(`${API}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

export const logoutRequest = async () => {
  await AsyncStorage.removeItem("token");
  // Puedes hacer también un POST al backend si quieres:
  await axios.post(`${API}/logout`);
};
