<template>
    <div class="card">
    <div class="card-inner">
      <div class="card-front">
        <slot></slot>
      </div>
      <div class="card-back">
        <p>Рекомендация может быть от кого угодно: вашего врача, механика, учителя.</p>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style lang="scss">
.card {
      background-color: transparent;
      width: 310px;
      height: 200px;
      perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.card-inner {
  position: relative;
  width: 310px;;
  height: 200px;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.card:hover .card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.card-front, .card-back {
  position: absolute;
  width: 100%;
   height: 200px;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;

}

/* Style the back side */
.card-back {
  width: 310px;
  height: 168px;
//   margin: 20px 0;
  border: 5px dashed;
  border-radius: 15px;
  transform: rotateY(180deg);
}
</style>
