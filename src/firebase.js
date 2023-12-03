import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import "firebase/compat/auth";
import {getStorage} from 'firebase/storage';
import { getAuth } from 'firebase/auth';

  // const firebaseConfig = {
  //   apiKey: "AIzaSyDITprum3C_VYgFXYtpxza6v7t6ZNNGWK4",
  //   authDomain: "sberbankltd.firebaseapp.com",
  //   projectId: "sberbankltd",
  //   storageBucket: "sberbankltd.appspot.com",
  //   messagingSenderId: "491859107549",
  //   appId: "1:491859107549:web:1f3225a19b92904b4d8534",
  //   measurementId: "G-1YFSZP2DEY"
  // };

  const firebaseConfig = {
    apiKey: "AIzaSyCs3mq6BQlKKr3LLIj5uYo5yxy9dRT6XAY",
    authDomain: "broker-c7040.firebaseapp.com",
    projectId: "broker-c7040",
    storageBucket: "broker-c7040.appspot.com",
    messagingSenderId: "59292346490",
    appId: "1:59292346490:web:75dac619d9861cff50f3c3",
    measurementId: "G-5SJSHGFY5B"
  };

const app = firebase.initializeApp(firebaseConfig)

export const db = app.firestore()

export const dbauth = getAuth(app)

export  const auth = app.auth()

export const storage = getStorage(app)

export const Provider = new firebase.auth.GoogleAuthProvider()