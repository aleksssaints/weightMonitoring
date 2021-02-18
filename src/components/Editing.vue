<template>
    <div>
        <div>
            <h1>Страница добавления веса</h1>
            <div class="addWeight">
              <label>Вес сегодня</label>
              <input type="text" v-model="weight">
              <button @click="handleCreatedWeigth">Добавить</button>
            </div>
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
  data () {
    return {
      weight: '',
      weightList: []
    }
  },
  created () {
    weightRef.on('value', (s) => {
      this.weightList = s.val()
    })
  },
  methods: {
    handleCreatedWeigth () {
      if (this.weightList === null) {
        this.submitWeight()
        return
      }
      const list = Object.values(this.weightList)
      const lastItem = list[list.length - 1]
      const currentDay = new Date().getDay()
      if (lastItem == null || (lastItem !== null && new Date(lastItem.date).getDay() !== currentDay)) {
        this.submitWeight()
        return
      }
      this.weight = 'Сегодня уже было введено значение веса'
    },
    submitWeight () {
      weightRef.push({ weight: this.weight, date: Date.now() })
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
