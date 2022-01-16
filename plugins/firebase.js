import * as firebase from 'firebase/app'
import 'firebase/auth'

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
};
  
// Initialize Firebase
let app = null;

if(!firebase.app.length){
    app = initializeApp(firebaseConfig);
}

export default firebase