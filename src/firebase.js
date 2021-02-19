import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: 'AIzaSyCeSmkaeRa5IgWWLMbDpVzt4Qr8UCzTiN0',
  authDomain: 'weightmonitoring-80981.firebaseapp.com',
  databaseURL: 'https://weightmonitoring-80981-default-rtdb.firebaseio.com',
  projectId: 'weightmonitoring-80981',
  storageBucket: 'weightmonitoring-80981.appspot.com',
  messagingSenderId: '621739309399',
  appId: '1:621739309399:web:690a64317a28a39bed6612'
}
firebase.initializeApp(firebaseConfig)
const database = firebase.database()
export const authRef = firebase.auth()
export const weightRef = database.ref('weight')
