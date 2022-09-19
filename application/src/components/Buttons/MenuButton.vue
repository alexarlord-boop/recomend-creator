<template>
    <button class="Button" @click="onClick">
        <slot>Button</slot>
    </button>
</template>
<script>
export default {
  methods: {
    onClick (e) {
      this.$emit('menuBtnWasClicked', e)
    }
  }
}
</script>
<style lang="scss">
    .Button {
        width: 200px;
        height: 40px;
        padding: 5px;
        background-color: #fff;
        cursor: pointer;
        border-radius: 15px;
    }
    .Button:active {
        background-color: #000;
        color: #fff;
    }
</style>
