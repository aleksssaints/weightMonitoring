<template>
    <div>
      <div v-if="isAuthorised">
        <h1>График изменения веса</h1>

        <select v-model="selectedDateInterval">
          <option v-for="option in options" v-bind:value="option.value" v-bind:key="option.value">
            {{ option.text }}
          </option>
        </select>

        <canvas id="weightChart" style="width:100%; height:60% !important" ></canvas>

        <h2><a @click="toEdditiongPage">Добавить вес</a></h2>
      </div>
      <div v-else>
        <h2><a @click="toLoginPage">Необходимо войти или зарегистрироваться</a></h2>
      </div>
    </div>
</template>

<script>
import { weightRef } from '../firebase'

export default {
  name: 'graph',
  props: {
    isAuthorised: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      weightList: [],
      chartLabelsList: [],
      chartWeightList: [],
      selectedDateInterval: 604800000,
      options: [
        { text: 'Неделя', value: 604800000 },
        { text: '2 Недели', value: 1209600000 },
        { text: 'Месяц', value: 2629743000 },
        { text: 'Пол года', value: 15778463000 },
        { text: 'Год', value: 31556926000 }
      ]
    }
  },
  created () {
    weightRef.on('value', (s) => {
      if (Array.isArray(s.val())) {
        this.weigthList = s.val().filter((item) => item.date - this.selectedDateInterval > Date.now())
        return
      }
      this.weigthList = []
    })
    for (var item in this.weightList) {
      this.chartLabelsList.append(new Date(item.date))
      this.chartWeightList.append(item.weight)
    }
  },
  mounted () {
    var ctx = document.getElementById('weightChart').getContext('2d')
    var barChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.chartLabelsList,
        datasets: [{
          label: 'Weight',
          data: this.chartWeightList,
          backgroundColor: [
            'rgba(54, 162, 235, 0.6)'
          ]
        }]
      }
    })
  },
  methods: {
    toEdditiongPage () {
      this.$router.push({ name: 'Editing', props: { isAuthorised: true } })
    },
    toLoginPage () {
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>
