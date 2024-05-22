# BlazeKart

BlazeKart is a full-featured e-commerce platform built using the MERN stack (MongoDB, Express, React, Node.js). This README provides an overview of the project, setup instructions, and details about the various technologies used.

## Table of Contents

- [BlazeKart](#blazekart)
  - [Table of Contents](#table-of-contents)
  - [Technologies Used](#technologies-used)
  - [Setup Instructions](#setup-instructions)
    - [Frontend](#frontend)
    - [Backend](#backend)
  - [Scripts](#scripts)
  - [Project Structure](#project-structure)
  - [License](#license)

## Technologies Used

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: A predictable state container for JavaScript apps.
- **Axios**: Promise-based HTTP client for the browser and Node.js.
- **React Router**: Declarative routing for React.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Flowbite**: Components built on Tailwind CSS.
- **ESLint**: A pluggable linting utility for JavaScript and JSX.
- **Vite**: A fast build tool for modern web projects.

### Backend

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: NoSQL database for modern applications.
- **Mongoose**: Elegant MongoDB object modeling for Node.js.
- **JWT (jsonwebtoken)**: For securely transmitting information between parties as a JSON object.
- **Bcrypt**: Library to help you hash passwords.
- **Multer**: Middleware for handling `multipart/form-data`, used for file uploads.
- **Cloudinary**: Cloud service for image and video management.
- **Dotenv**: Loads environment variables from a `.env` file into `process.env`.
- **Cors**: For enabling Cross-Origin Resource Sharing.
- **Morgan**: HTTP request logger middleware for Node.js.
- **Validator**: String validation and sanitization.

## Setup Instructions

### Frontend

1. **Navigate to the frontend directory**:

   ```sh
   cd frontend
   ```

2. **Install the dependencies**:

   ```sh
   npm install
   ```

3. **Run the development server**:
   ```sh
   npm run dev
   ```

### Backend

1. **Navigate to the backend directory**:

   ```sh
   cd backend
   ```

2. **Install the dependencies**:

   ```sh
   npm install
   ```

3. **Create a `.env` file** in the backend directory with the following environment variables:

   ```env
   PORT=5000
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
   CLOUDINARY_API_KEY=<your_cloudinary_api_key>
   CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
   ```

4. **Run the development server**:
   ```sh
   npm run dev
   ```

## Scripts

### Frontend Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Lints the codebase.
- `npm run preview`: Previews the production build locally.

### Backend Scripts

- `npm run dev`: Starts the backend server with nodemon for development.

## Project Structure

### Frontend

```
frontend/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

### Backend

```
backend/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── utils/
│   └── index.js
├── .env
├── package.json
└── server.js
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to contribute to BlazeKart by opening issues or submitting pull requests. We appreciate your feedback and suggestions!
