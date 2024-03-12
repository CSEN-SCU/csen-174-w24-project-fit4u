import { useQuery } from "react-query"; // Import from the appropriate library for React Native
import { getProfile } from "../api/oauth";

const useProfile = () =>
  useQuery(["profile"], getProfile);

export default useProfile;
