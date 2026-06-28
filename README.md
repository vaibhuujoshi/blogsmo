# blogsmo - A Simple Blogging Platform

Blogsmo is a straightforward platform for creating and publishing articles. It's designed for users who want a clean and intuitive way to share their thoughts and ideas online.

### Core Features

*   **Article Creation:** Write and format your blog posts with a user-friendly editor.
*   **Publishing:** Easily publish your articles to make them visible to readers.
*   **Article Display:** View published articles with clear formatting and a dedicated sidebar.
*   **Navigation:** Browse articles and navigate to individual posts.

### Usage Scenarios

*   **Personal Blogging:** Share your experiences, hobbies, or expertise.
*   **Project Updates:** Keep your community informed about your project's progress.
*   **Content Sharing:** Publish articles on any topic you're passionate about.

## Local Setup

### Prerequisites

*   Node.js (v18 or higher recommended)
*   A PostgreSQL database (e.g., using Docker or a cloud provider)

### Install Dependencies

```bash

## Features

*   **Blog Post Management:**
    *   Create new blog posts with titles, content, and optional thumbnail URLs.
    *   Publish or unpublish posts.
    *   View existing blog posts.
*   **User Authentication:**
    *   Secure user registration and login.
*   **Author Profiles:**
    *   Associate blog posts with specific authors.
    *   View author details.

## Tech Stack

*   **Frontend:**
    *   [React](https://react.dev/)
    *   [Vite](https://vitejs.dev/)
    *   [TypeScript](https://www.typescriptlang.org/)
    *   [Tailwind CSS](https://tailwindcss.com/)
    *   [React Router DOM](https://reactrouter.com/)
*   **Backend:**
    *   [Node.js](https://nodejs.org/)
    *   [Prisma](https://www.prisma.io/)
    *   [PostgreSQL](https://www.postgresql.org/)

## Usage

### Reading Blog Posts

*   Navigate to the `/feed` route to see a list of recent blog posts.
*   Click on a post's title or content preview to read the full article.

### Writing a New Blog Post

1.  Go to the `/write` route.
2.  Enter your post's title, content, thumbnail URL, and tags.
3.  Click "Publish" to save and share your post.

### Navigating the Platform

*   **Home/Feed:** `/feed`
*   **Login:** `/login`
*   **Sign Up:** `/signup`
*   **Write Post:** `/write`
*   **View Post:** `/blog/:id` (where `:id` is the post's unique identifier)