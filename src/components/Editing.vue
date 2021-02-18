<template>
    <div>
        <div class="addWeight">
            <h1>{{ pageTitle }}</h1>
            <label>Вес сегодня</label>
            <input type="text" v-model="weight">
            <button @click="submitWeight">Добавить</button>
            <ul>
                <li v-for="weight of weightList" :key="weight['.key']">
                    <p>{{weight}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { weightRef } from '../firebase'

export default {
  name: 'Editing',
  data () {
    return {
      weight: '',
      weightList: [],
      pageTitle: 'Страница добавления веса'
    }
  },
  created () {
    weightRef.on('value', (s) => {
      this.weightList = s.val()
    })
  },
  methods: {
    submitWeight () {
      // this.weightList.some()
      weightRef.push({ weight: this.weight, edit: false, date: new Date() })
      this.weight = ''
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
