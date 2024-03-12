import { useQuery } from "react-query";
import { getGoogleAuthLink } from "../api/oauth";

const useGoogleAuthLink = () =>
  useQuery(["google_oauth"], 
  getGoogleAuthLink, 
  { enabled: false,}
  );

export default useGoogleAuthLink;
