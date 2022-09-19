<template >
    <div class="description" v-if="shouldRender">
        <h4><slot name="title"></slot></h4>
        <p><slot name="description"></slot></p>

    </div>
</template>
<script>
export default {
  props: ['shouldRender']
}
</script>
<style lang="scss">
  .description {
    padding: 20px;
  }
</style>
