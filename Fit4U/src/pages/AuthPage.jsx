import React, {useEffect} from "react";
import { useOutlet, useNavigate } from "react-router";
import { useSearchParams, useLocation } from "react-router-dom";

import useGoogleAuthLink from "../hooks/useGoogleAuthLink";
import useGoogleAuthToken from "../hooks/useGoogleAuthToken";
import useProfile from "../hooks/useProfile";

const AuthPage = () => {
  //const {user} = useAuth();
  const outlet = useOutlet();

  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  useEffect(() => {
    if(searchParams.get("token")){
      localStorage.setItem("token", searchParams.get("token"));
    }
  }, [searchParams])

  useEffect(() => {
    if(localStorage.getItem("token") != null){
      if(location.pathname !== "/")
        navigate(location.pathname)
      else
        navigate('/app')
    }else{
      navigate('/login')
    }
  }, [localStorage.getItem("token")])


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
        console.log("Success!")
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


    /*
    useEffect(() => {
      if(profile){
        navigate('/app')
      }else{
        navigate('/login')
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
