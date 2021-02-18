<template>
    <div>
        <h1>График изменения веса</h1>
        <ul>
            <li v-for="weight of weightList" :key="weight['.key']">
                <p>{{weight}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import { weightRef } from '../firebase'

export default {
  data () {
    return {
      weightList: []
    }
  },
  created () {
    weightRef.on('value', (s) => {
      this.weightList = s.val()
    })
  }
}
</script>
