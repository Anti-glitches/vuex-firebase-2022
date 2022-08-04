import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCzmNhlXsjsu_PrYfD5G86J5f7-WsDA2aQ",
    authDomain: "vuex-4-firebase-2022.firebaseapp.com",
    projectId: "vuex-4-firebase-2022",
    storageBucket: "vuex-4-firebase-2022.appspot.com",
    messagingSenderId: "25788400504",
    appId: "1:25788400504:web:48aa0e5355e52411343e8d",
};

//init firebase
initializeApp(firebaseConfig);

//init firebase auth
const auth = getAuth();

export { auth };
