<template>
    <div>
        <h1>График изменения веса</h1>

        <ul>
            <li v-for="weight of weightList" :key="weight['.key']">
                <p>{{weight}}</p>
            </li>
        </ul>

        <button id="renderBtn">
          Render
        </button>

        <div class="container">
          <canvas id="myChart" width="600" height="400"></canvas>
        </div>

        <h2><router-link to="/editing">Добавить вес</router-link></h2>
    </div>
</template>

<script>
import { weightRef } from '../firebase'
import ChartJSImage from 'chart.js-image';

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

  var lineChart = new Chart(myChart, {
    type: 'line',
    data: speedData,
    options: chartOptions
  });

  var speedData = {
  labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
  datasets: [{
      label: "Car Speed",
      data: [0, 59, 75, 20, 20, 55, 40],
    }]
  };
 
  var chartOptions = {
    legend: {
      display: true,
      position: 'top',
      labels: {
        boxWidth: 80,
        fontColor: 'black'
      }
    }
  };



  }
}
</script>
