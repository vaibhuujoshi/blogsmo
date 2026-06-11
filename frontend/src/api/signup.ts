import { BACKEND_URL } from "../lib/env";

export default async function SignupUser(email: string, password: string, name: string) {
    const response = await fetch(`${BACKEND_URL}/user/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name }),
        credentials: "include"
    });

    const data = await response.json();
    return data;
}