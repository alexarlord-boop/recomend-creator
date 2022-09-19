<template>
    <div class="login">
      <h1>Сейчас вы перейдете на новую страницу.</h1>
    </div>
  </template>
<script>

export default {
  name: 'LoginView',

  setup () {
    setTimeout(() => { window.location.href = 'http://localhost:8080/#/about' }, 3000)
  }
}
</script>
