import { client } from "./oauth";

export const getUserData = async(email) => {
    const response = await client.get("/api/user", { params: { email: email } });
    return response.data;
};