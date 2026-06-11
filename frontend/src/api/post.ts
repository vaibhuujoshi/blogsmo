import { BACKEND_URL } from "../lib/env";

export async function createPost(title: string, content: string, thumbnailUrl: string, tag: string) {
    const response = await fetch(`${BACKEND_URL}/blog`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content, thumbnailUrl, tag }),
        credentials: "include"
    });

    const data = await response.json();
    return data;
}

export async function updatePost(id: string, title: string, content: string, thumbnailUrl: string, tag: string) {
    const response = await fetch(`${BACKEND_URL}/blog`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, title, content, thumbnailUrl, tag }),
        credentials: "include"
    });

    const data = await response.json();
    return data;
}

export async function getAllPosts() {
    const response = await fetch(`${BACKEND_URL}/blog/bulk`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include"
    });

    if (!response.ok) {
        alert("Can't find posts");
    }

    const data = await response.json();

    if (!data) {
        alert("something went wrong with data");
    }

    return data.blogs;
}

export async function getPostById(id: string) {
    const response = await fetch(`${BACKEND_URL}/blog/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include"
    });

    if (!response.ok) {
        alert("Can't find post");
    }

    const data = await response.json();

    if (!data) {
        alert("something went wrong with data");
    }

    return data.blog;
}

export async function deletePost(id: string) {
    const response = await fetch(`${BACKEND_URL}/blog/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        credentials: "include"
    });

    const data = await response.json();

    return data;
}

