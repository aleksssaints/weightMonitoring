import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

var firebaseConfig = {
}
firebase.initializeApp(firebaseConfig)
const database = firebase.database()
export const authRef = firebase.auth()
export const weightRef = database.ref('weight')
