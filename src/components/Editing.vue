<template>
    <div>
        <div v-if="isAuthorised">
            <h1>Страница добавления веса</h1>
            <h2>Введите ваш вес сегодня</h2>
            <input type="text" v-model="weight">
            <button @click="handleCreatedWeigth">Сохранить</button>
            <h2><a @click="toGraphPage">График изменения</a></h2>
        </div>
        <div v-else>
          <h2><a @click="toLoginPage">Необходимо войти или зарегистрироваться</a></h2>
        </div>
    </div>
</template>

<script>
import { weightRef } from '../firebase'

export default {
  name: 'editing',
  props: {
    isAuthorised: {
      type: Boolean,
      required: false,
      default: false
    }
  },
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
      this.weight = 'Вы заполнили вес на сегодня'
    },
    toGraphPage () {
      this.$router.push({ name: 'Graph', props: { isAuthorised: true } })
    },
    toLoginPage () {
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style scoped>
input {
  margin-bottom: 20px;
  width: 200px;
}
</style>
