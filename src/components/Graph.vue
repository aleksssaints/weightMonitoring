<template>
    <div>
        <h1>График изменения веса</h1>
        <ul>
            <li v-for="weight of weightList" :key="weight['.key']">
                <p>{{weight}}</p>
            </li>
        </ul>
        <h2><router-link to="/editing">Добавить вес</router-link></h2>
    </div>
</template>

<script>
import { weightRef } from '../firebase'

export default {
  name: 'graph',
  data () {
    return {
      weightList: [],
      isNotAuth: true
    }
  },
  created () {
    // const TWO_WEEK = date from component
    // для задания интервала считать его в таймстемпе
    // weightRef.on('value', (s) => {
    //   if (Array.isArray(s.val())) {
    //     this.weigthList = s.val().filter((item) => item.date - TWO_WEEK > Date.now())
    //     return
    //   }
    //   this.weigthList = []
    // })

    // получение всего списка
    weightRef.on('value', (s) => {
      this.weightList = s.val()
    })
  }
}
</script>
