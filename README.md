# E-Book Store

This is a full-stack e-book store application built with a modern technology stack. The project is divided into two main parts: a backend server and a frontend client.

## Project Structure

The repository is organized into two main directories:

-   `backend/`: Contains the Node.js, Express, and MongoDB application that serves as the API.
-   `frontend/`: Contains the React and TypeScript client application that consumes the API.

Each directory has its own `README.md` with more specific details.

## Tech Stack

### Backend

-   **Framework:** Node.js with Express.js
-   **Language:** TypeScript
-   **Database:** MongoDB with Mongoose
-   **Authentication:** JWT (JSON Web Tokens)
-   **File Uploads:** Multer and Cloudinary
-   **Architecture:** MVC (Model-View-Controller)

### Frontend

-   **Framework:** React with Vite
-   **Language:** TypeScript
-   **Styling:** Tailwind CSS with DaisyUI
-   **API Communication:** Axios and React Query
-   **Routing:** React Router

## Prerequisites

Before you begin, ensure you have the following installed:

-   [Node.js](https://nodejs.org/en/) (v18 or later recommended)
-   [pnpm](https://pnpm.io/installation) (recommended, but `npm` will also work)
-   [MongoDB](https://www.mongodb.com/try/download/community) (or a MongoDB Atlas account)

## Getting Started

Follow these steps to get the application up and running on your local machine.

### 1. Clone the Repository

```bash
git clone <repository-url>
cd book_store
```

### 2. Backend Setup

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    # or npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the `backend` directory by copying the example file:
    ```bash
    cp .env.example .env
    ```
    Now, fill in the required variables in the `.env` file:
    ```
    DB_HOST=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    ```

4.  **Run the development server:**
    ```bash
    pnpm run dev
    # or npm run dev
    ```
    The backend server will be running on `http://localhost:8000`.

### 3. Frontend Setup

1.  **Navigate to the frontend directory (from the root):**
    ```bash
    cd frontend
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    # or npm install
    ```

3.  **Run the development server:**
    ```bash
    pnpm run dev
    # or npm run dev
    ```
    The frontend development server will be running on `http://localhost:5173`.

## Available Scripts

### Backend (`/backend`)

-   `pnpm run dev`: Starts the development server with hot-reloading.
-   `pnpm run build`: Compiles the TypeScript code to JavaScript for production.
-   `pnpm start`: Runs the production build.

### Frontend (`/frontend`)

-   `pnpm run dev`: Starts the Vite development server.
-   `pnpm run build`: Builds the application for production.
-   `pnpm run lint`: Lints the codebase using ESLint.
-   `pnpm run preview`: Serves the production build locally for preview.
