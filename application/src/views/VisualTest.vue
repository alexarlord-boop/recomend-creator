<template>
    <div class="visual">
      <h1>Цели</h1>
      <div class="content">
        <!-- <v-flip :goalId="1" @goalWasPressed="handleGoalShow">
          <template v-slot:title>A</template>
          <template v-slot:description>sample text sample text sample text sample text sample text</template>
        </v-flip> -->
        <v-flip v-for="goal in goals" :key="goal.id" >
          <template v-slot:title>{{goal.title}}</template>
          <template v-slot:description>{{goal.description}}</template>
        </v-flip>
      </div>

    </div>
  </template>
<script>
import uniqueId from 'lodash.uniqueid'
import InfoCard from '@/components/FlipCards/TestFlip.vue'
export default {
  data () {
    return {
      lastPressed: -1,

      goals: [{ id: uniqueId('goal-'), title: 'A', description: 'sample' },
        { id: uniqueId('goal-'), title: 'B', description: 'sample text' },
        { id: uniqueId('goal-'), title: 'C', description: 'sample text sample' },
        { id: uniqueId('goal-'), title: 'D', description: 'sample text sample text sample text sample text sample text' },
        { id: uniqueId('goal-'), title: 'E', description: 'sample text sample text sample text sample text sample text' },
        { id: uniqueId('goal-'), title: 'F', description: 'sample text sample text sample text sample text sample text' },
        { id: uniqueId('goal-'), title: 'G', description: 'sample text sample text sample text sample text sample text' }],

      pressed: [1, 0, 0, 0, 0, 0, 0]
    }
  },
  methods: {
    handlePressing (e) {
      console.log(e)
    }
  },
  components: {
    'v-flip': InfoCard
  }
}
</script>
  <style lang="scss">
    .visual {
      display: flex;
      flex-direction: column;
      justify-content:center;
      align-items: center;
      text-align: center;
    }

    .content {
      margin: 40px;
      flex-wrap: wrap;
      display: flex;
      flex-direction: row;
      // justify-content:center;
      align-items: flex-start;
      text-align: center;
    }

      .image {
        width: 30px;
        height: 30px;

        border: 5px dashed;
        border-radius: 15px;
      }
  </style>
