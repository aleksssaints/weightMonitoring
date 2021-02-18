<template>
    <div>
        <div class="addWeight">
            <h1>{{ pageTitle }}</h1>
            <label>Вес сегодня</label>
            <input type="text" v-model="weight">
            <button @click="submitWeight">Добавить</button>
            <ul>
                <li v-for="weight of weightList" v-bind:key="weight['.key']">
                    <p>{{weight.weight}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/database'

var firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: ''
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
  firebase: {
    weightList: weightRef
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
