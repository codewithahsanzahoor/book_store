# React + TypeScript + Vite package manager used is pnpm
this project includes React, TypeScript and Vite.
1. in it i am using axios for fetching data from an API and react-query for handling the data from the API. for further info you can read the documentation of axios and react-query.
2. i am using react-router-dom for routing.
3. i am using tailwindcss for styling the app.
4. i am using daisyui for styling the app.
5. remix icons for icons.
6. pagination for showing the books in pages.
7. i am using react-hook-form for handling the form.
8. full crud operations for books.

## Installation steps:
1. pnpm create vite@latest
2. setup and install tailwindcss - (https://tailwindcss.com/docs/guides/vite)
3. setup and install daisyui - (https://daisyui.com/docs/install/)
4. setup and install react-router-dom - (https://reactrouter.com/en/main/start/tutorial)
5. setup and install axios - (https://axios-http.com/docs/intro)
6. setup and install react-query - (https://react-query.tanstack.com/)

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
