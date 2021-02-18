<template>
    <div>
        <div>
            <h1>Страница добавления веса</h1>
            <h2>Введите ваш вес сегодня</h2>
            <input type="text" v-model="weight">
            <button @click="handleCreatedWeigth">Сохранить</button>
            <h2><router-link to="/graph">Открыть график измнения веса</router-link></h2>
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
      this.weight = 'Сегодня вес уже заполнен'
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
  border: 1px solid silver;
  border-radius: 3px;
  width: 100px;
  height: 25px;
  margin-bottom: 20px;
}
input {
  margin-bottom: 20px;
  width: 200px;
}
</style>
