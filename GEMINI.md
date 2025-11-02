## Project Overview

This is a full-stack ebook store application with a separate frontend and backend.

**Backend:**

*   **Framework:** Node.js with Express.js
*   **Language:** TypeScript
*   **Database:** MongoDB with Mongoose
*   **Authentication:** JWT
*   **File Uploads:** Multer and Cloudinary
*   **Architecture:** MVC (Model-View-Controller)

**Frontend:**

*   **Framework:** React with Vite
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS with DaisyUI
*   **API Communication:** Axios and React Query
*   **Routing:** React Router

## Building and Running

### Backend

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Set up environment variables:**
    Create a `.env` file in the `backend` directory with the following variables:
    ```
    DB_HOST=
    DB_USER=
    DB_PASSWORD=
    DB_NAME=
    JWT_SECRET=
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```
4.  **Build for production:**
    ```bash
    npm run build
    ```

### Frontend

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Run the development server:**
    ```bash
    npm run dev
    ```
3.  **Build for production:**
    ```bash
    npm run build
    ```
4.  **Lint the code:**
    ```bash
    npm run lint
    ```
5.  **Preview the production build:**
    ```bash
    npm run preview
    ```

## Development Conventions

*   The project follows a standard MVC pattern on the backend.
*   The frontend uses functional components with hooks.
*   Both frontend and backend use TypeScript for type safety.
*   ESLint is used for linting in both projects.
*   The frontend uses `pnpm` as the package manager, but the scripts in `package.json` use `npm`. It is recommended to use `pnpm` for consistency.
