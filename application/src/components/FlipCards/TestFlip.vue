<template>
    <div class="flip-card" @click="toggle" v-bind:class="{active: isActive}">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <slot name="title"></slot>
      </div>
      <div class="flip-card-back">
      </div>
    </div>
  </div>
  <div class="descr" v-bind:class="{active: isActive}">
    <slot name="description" ></slot>
  </div>

</template>
<script>
export default {
  props: ['goalId', 'active'],

  data () {
    return {
      isActive: false,
      id: this.goalId
    }
  },

  methods: {
    toggle: function () {
      this.isActive = !this.isActive
      this.$emit('goalWasPressed', this)
    },
    activate: function (e) {
      this.isActive = true
      this.$emit('goalWasPressed', this)
    },
    disable: function () {
      this.isActive = false
      this.$emit('goalWasPressed', this)
    }
  }
}
</script>
<style lang="scss">
.flip-card {
  cursor: pointer;
      background-color: transparent;
      margin: 20px;
      width: 100px;
      height: 100px;
      perspective: 250px; /* Remove this if you don't want the 3D effect */
}

.flip-card:hover {
  transform: scale(1.03);
}

.flip-card-inner::before {
  // background-color: rgb(64, 64, 64);
   background: repeating-radial-gradient(
  circle,
  rgb(64, 64, 64),
  rgb(64, 64, 64), 10px,
  #fff 10px,
  #fff 20px
);
  border-radius: 100%;
  content: '';
  height: 100px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100px;
  transform: translateZ(-5px);
}
// .flip-card-inner::after {
//   background-color: rgb(255, 255, 255);
//   border-radius: 100%;
//   content: '';
//   height: 90px;
//   left: 5px;
//   position: absolute;
//   top: 5px;
//   width: 90px;
//   transform: translateZ(-2px);
// }
.flip-card-inner::after {
  background-color: rgb(64, 64, 64);
  background-image: linear-gradient(hsla(0,0%,100%,.25), hsla(0,0%,0%,.25));
  bottom: 0;
  content: '';
  left: 45px;
  position: absolute;
  top: 0;
  width: 5px;
  height: 100px;
  z-index: -10;
  transform: rotateY(-90deg);
  transform-origin: 100% 50%;
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100px;
  height: 100px;
  text-align: center;
  transition: transform 1s;
  transform-style: preserve-3d;
}

.flip-card-inner {
  transform: rotateY(180deg);

}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card.active .flip-card-inner {
  transform: rotateY(0deg) scale(1.7);
  transition: transform 0.5s;
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: 4px solid;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

.flip-card-front {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  // background: radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
  //               radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);
  // background-clip: text;
  // -webkit-text-fill-color: transparent;
  text-align: center;
  font-size: 3em;
  font-weight: 700;
  overflow: hidden;

  }

/* Style the back side */
.flip-card-back {
    width: 100px;
    height: 100px;
    transform: rotateY(180deg);
}

.descr {
  position: absolute;
  top: 400px;
  left: 0;
  right: 0;

  margin-left: auto;
  margin-right: auto;
  text-align: center;
  opacity: 0;

  width: 500px;
  height: 100px;
  background-color: antiquewhite;

}

.descr.active {
  opacity: 1;
}

</style>
