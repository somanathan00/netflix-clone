# Netflix Clone

This is a Netflix clone project developed using React and Firebase. The application allows users to sign up, log in, and store their details using Firebase. The project is deployed on Netlify.

## Features

- User Authentication: Sign up and log in using Firebase Authentication.
- User Data Storage: Store user details in Firebase Firestore.
- Responsive Design: A responsive design that works on both desktop and mobile devices.

## Live Demo

Check out the live demo of the application [here](https://netfixxxx-clone1.netlify.app).

## Technologies Used

- React
- Firebase (Authentication and Firestore)
- CSS (for styling)
- Netlify (for deployment)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/netflix-clone.git
    ```
2. Navigate to the project directory:
    ```bash
    cd netflix-clone
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

### Firebase Setup

1. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
2. Set up Firebase Authentication (Email/Password).
3. Set up Firestore Database.
4. Add your Firebase project configuration to the project. Create a file named `firebaseConfig.js` in the `src` directory and add the following code:

    ```javascript
    // src/firebaseConfig.js
    const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID"
    };

    export default firebaseConfig;
    ```

### Running the Application

1. Start the development server:
    ```bash
    npm run dev
    ```
2. Open your browser and go to `http://localhost:5173` to see the application running.

