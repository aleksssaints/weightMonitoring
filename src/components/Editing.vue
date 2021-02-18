<template>
    <div>
        <h1>{{ pageTitle }}</h1>
        <label>Вес сегодня</label>
        <input type="text" v-model="weight">
        <button @click="submitWeight">Добавить</button>
    </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/database'

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
const weightRef = database.ref('weight')

export default {
  name: 'Editing',
  data () {
    return {
      pageTitle: 'Страница добавления веса'
    }
  },
  methods: {
    submitWeight () {
      weightRef.push({ weight: this.weight, edit: false })
    }
  }
}
</script>

<style scoped>
button {
  border: 2px solid black;
  border-radius: 10px;
  width: 100px;
}
</style>
