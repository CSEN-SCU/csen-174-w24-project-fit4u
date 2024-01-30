import axios from "axios";
import { client } from "./oauth";

export const getUserData = async (email) => {
  const response = await client.get("/api/user", {email: email});
  return response.data;
}
