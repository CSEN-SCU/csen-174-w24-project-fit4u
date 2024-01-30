import { useMutation } from "@tanstack/react-query";
import { getGoogleAuthToken, OAuthCredential, TOKEN_KEY } from "../api/oauth";

const useGoogleAuthToken = () =>
  useMutation({
    mutationKey: ["google_auth_token"],
    mutationFn: (credential: OAuthCredential) => getGoogleAuthToken(credential),
    onSuccess: (data) => {
      const { access } = data;
      localStorage.setItem("token", access);
    },
  });

export default useGoogleAuthToken;
