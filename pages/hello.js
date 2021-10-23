// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDFogmmdMvgBNDsO-K1yYjkZg5bIbt6BJw',
  authDomain: 'todo-ninja-4718c.firebaseapp.com',
  databaseURL: 'https://todo-ninja-4718c-default-rtdb.firebaseio.com',
  projectId: 'todo-ninja-4718c',
  storageBucket: 'todo-ninja-4718c.appspot.com',
  messagingSenderId: '554342449417',
  appId: '1:554342449417:web:7ef37675ced6aef16fd3d8',
  measurementId: 'G-QGS8LPVWR8',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
