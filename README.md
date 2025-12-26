# Firebase Authentication REST API Demo

This project demonstrates how to use Firebase Authentication via its REST API with a simple HTML/JavaScript frontend.

## Features
- Register new users
- Login existing users
- Logout
- Light/Dark mode toggle

## Setup Instructions

1. **Create a Firebase Project:**
   - Go to [Firebase Console](https://console.firebase.google.com/).
   - Click "Add project" and follow the steps.

2. **Enable Email/Password Authentication:**
   - In your Firebase project, go to "Authentication" > "Sign-in method".
   - Enable "Email/Password".

3. **Get Your Web API Key:**
   - In the Firebase Console, go to "Project settings" (gear icon).
   - Under "General", find your "Web API Key".

4. **Configure the App:**
   - Open `script.js` and replace `YOUR_FIREBASE_WEB_API_KEY` with your actual API key.

5. **Run the App:**
   - Open `index.html` in your browser.

## Notes
- This demo uses only the Firebase Authentication REST API (no Firebase SDK).
- For production, always use HTTPS and follow security best practices.

## Useful Links
- [Firebase Auth REST API Docs](https://firebase.google.com/docs/reference/rest/auth)
- [Firebase Console](https://console.firebase.google.com/)
  Member: Joreval Orpilla
          Wilson Abalos
          Jerome Benaso
          Yousef Ravancho
