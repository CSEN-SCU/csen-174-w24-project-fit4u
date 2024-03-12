import axios from "axios";
import { camelizeKeys } from "humps";

import AsyncStorage from '@react-native-async-storage/async-storage';


export type { OAuthCredential, OAuthUrl } from "./oauthTypes";

const TOKEN_KEY = "token";

const BASE_URL = "http://127.0.0.1:8000";

export const client = axios.create({
  baseURL: BASE_URL,
});

client.interceptors.response.use((response) => {
  if (response.data) {
    response.data = camelizeKeys(response.data);
  }
  return response;
});

client.interceptors.request.use(async (config) => {
  // You might want to use AsyncStorage for storing token in React Native.
  // This is an example, but you should adjust it according to your needs.
  const token = await AsyncStorage.getItem(TOKEN_KEY);
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  return config;
});

export const getGoogleAuthLink = async () => {
  const response = await client.get("/auth/o/google-oauth2/", {
    params: {
      redirect_uri: "http://localhost:5173/login",
    },
    withCredentials: true,
  });
  return response.data;
};

export const getGoogleAuthToken = async (credential: OAuthCredential) => {
  const response = await client.post("/auth/o/google-oauth2/", credential, {
    headers: { "content-type": "application/x-www-form-urlencoded" },
    withCredentials: true,
  });
  console.log(response);
  return response.data;
};

export const getProfile = async () => {
  // For fetching user profile, you can use similar approach as other requests.
  // You need to adjust it according to your backend API.
  // const response = await client.get<Profile>("/auth/users/me/");
  // return response.data;
};
