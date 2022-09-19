<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="frame f1"><h1>Главная</h1></div>
    <div class="frame-row">
      <div class="frame f2">
        <v-button  @menuBtnWasClicked='togleDescription(0)'>{{descriptionTitles[0]}}</v-button>
        <v-button  @menuBtnWasClicked='togleDescription(1)'>{{descriptionTitles[1]}}</v-button>
        <v-button  @menuBtnWasClicked='togleDescription(2)'>{{descriptionTitles[2]}}</v-button>
      </div>
      <div class="frame f3">
        <v-descr :shouldRender="descriptionToRender[0]" >
          <template v-slot:title>{{descriptionTitles[0]}}</template>
          <template v-slot:description>{{descriptions[0]}}</template>
        </v-descr>
        <v-descr :shouldRender="descriptionToRender[1]" >
          <template v-slot:title>{{descriptionTitles[1]}}</template>
          <template v-slot:description>{{descriptions[1]}}</template>

        </v-descr>
        <v-descr :shouldRender="descriptionToRender[2]" >
          <template v-slot:title>{{descriptionTitles[2]}}</template>
          <template v-slot:description>{{descriptions[2]}}</template>

        </v-descr>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import MenuButton from '@/components/Buttons/MenuButton.vue'
import MenuDescription from '@/components/Text/MenuDescription.vue'

export default {
  name: 'HomeView',
  components: {
    'v-button': MenuButton,
    'v-descr': MenuDescription
  },

  data () {
    return {
      descriptionToRender: [0, 0, 0],
      descriptionTitles: ['Личный кабинет', 'Рекомендации для Вас', 'Стать создателем'],
      descriptions: ['Настраивайте приложение под себя, следите за прогрессом и бонусами.',
        'Следите за своими рекомендациями и выполняйте задачи в срок за вознаграждения!',
        'Вы можете настроить приложение для своего бизнеса или повседневных задач. Создавайте, Делитесь, Развивайтесь!']
    }
  },

  methods: {
    testMethod (e) {
      console.log(e)
    },

    togleDescription (id) {
      this.descriptionToRender[id] = 1
      this.descriptionToRender[(id + 1) % 3] = 0
      this.descriptionToRender[(id + 2) % 3] = 0
    }
  }
}
</script>
<style lang="scss">
  .home{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 90vw;
    height: auto;
  }

  .f2, .f3{
    width: 400px;
    height: 60vh;
  }

  .frame-row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    // border: 5px dashed;
  }

  .f2 {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: auto;
    border: 5px dashed;
    border-radius: 15px;
  }

  .f3 {
    border: 5px dashed;
    border-radius: 15px;
  }
</style>
