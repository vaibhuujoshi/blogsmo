import { BACKEND_URL } from "../lib/env";

export default async function LoginUser(email: string, password: string) {
    const response = await fetch(`${BACKEND_URL}/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password}),
        credentials: "include"
    });

    const data = await response.json();
    return data;
}