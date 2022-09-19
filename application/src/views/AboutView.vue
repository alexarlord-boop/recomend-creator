<template>
  <div class="about">
    <h1>О приложении</h1>
    <p>Цифровизация // Удобство // Наглядность</p>
    <v-flip><img alt="Notion" class="image" src="../assets/notion_tips.png"></v-flip>
    <p>Это приложение будет генерировать привлекательные карточки рекомендаций.</p>
  </div>
</template>
<script>
import InfoCard from '@/components/FlipCards/InfoCard.vue'
export default {
  components: {
    'v-flip': InfoCard
  }
}
</script>
<style lang="scss">
  .about {
    display: flex;
        flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 90vw;
    height: auto;
  }

    .image {
      width: 310px;
      height: auto;
      // margin: 20px 0;
      border: 5px dashed;
      border-radius: 15px;
    }
</style>
