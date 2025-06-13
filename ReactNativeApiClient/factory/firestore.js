import Constants from 'expo-constants';
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = Constants.expoConfig.extra['firebase']

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const todoCollection = collection(db, 'todos');