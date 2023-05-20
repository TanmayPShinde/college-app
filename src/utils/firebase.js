import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB34jTsPQwJ6MWId18QzI2GggSTW2hgzWc",
  authDomain: "sinhgad-9ab08.firebaseapp.com",
  databaseURL: "https://sinhgad-9ab08-default-rtdb.firebaseio.com",
  projectId: "sinhgad-9ab08",
  storageBucket: "sinhgad-9ab08.appspot.com",
  messagingSenderId: "665284120779",
  appId: "1:665284120779:web:1c562f640c62b1c52f8b4e",
  measurementId: "G-52VW66N9KS",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
