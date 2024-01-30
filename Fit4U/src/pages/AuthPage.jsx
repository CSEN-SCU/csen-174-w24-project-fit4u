import React, {useEffect} from "react";
import { useOutlet, useNavigate } from "react-router";

import useGoogleAuthLink from "../hooks/useGoogleAuthLink";
import useGoogleAuthToken from "../hooks/useGoogleAuthToken";
import useProfile from "../hooks/useProfile";

const AuthPage = () => {
  //const {user} = useAuth();
  const outlet = useOutlet();

  const navigate = useNavigate();

    const { data: profile, refetch: fetchProfile } = useProfile();
    const { data: googleAuth, refetch: fetchGoogleAuth } = useGoogleAuthLink();
    const { mutate, isSuccess } = useGoogleAuthToken();

    useEffect(() => {
      if (googleAuth) {
        window.location.replace(googleAuth.authorizationUrl);
      }
    }, [googleAuth]);

    useEffect(() => {
      const searchParams = new URLSearchParams(document.location.search);

      const code = searchParams.get("code");
      const state = searchParams.get("state");

      if (code && state) {
        mutate({ code, state });
      }
    }, [mutate]);

    useEffect(() => {
      if (isSuccess) {
        fetchProfile();
      }
    }, [isSuccess, fetchProfile]);

    useEffect(() => {
      if (googleAuth) {
        window.location.replace(googleAuth.authorizationUrl);
      }
    }, [googleAuth]);

    const handleGoogleLogin = () => {
      fetchGoogleAuth();
    };

    /*useEffect(() => {
      if(profile){
        navigate('/app');
      }else{
        navigate('/login');
      }
    }, [])
    */





  return (
    <div>
      {outlet}
    </div>
  );
};

export default AuthPage;
