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

    function renderChart(data, labels) {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart =  ChartJSImage()(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'This week',
                data: data,
            }]
          },
      });
    }

  $("#renderBtn").click(
    function () {
        data = [20000, 14000, 12000, 15000, 18000, 19000, 22000];
        labels =  ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        renderChart(data, labels);
    }
  );

  }
}
</script>
