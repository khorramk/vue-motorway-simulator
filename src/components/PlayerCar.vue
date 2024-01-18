<template>
  <div
    class="car"
    :data-speed="carSpeed"
    :style="`${direction}: ${carPositionY}%; background: ${carColor}`"
    :class="carBody"
  >
    <span class="label">ME</span>
    <div class="wheel"></div>
    <div class="wheel" style="right: 0px"></div>
    <div class="wheel" style="bottom: 0px"></div>
    <div class="wheel" style="bottom: 0px; right: 0px"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const { speed, carColor, carPositionHorizontal, direction, carBody } = defineProps([
  'speed',
  'carColor',
  'carPositionHorizontal',
  'direction',
  'carBody'
])
const carPositionY = ref(carPositionHorizontal)
const carSpeed = ref(speed) // 20mph;
</script>

<style scoped>
.car {
  position: absolute;
  width: 50px;
  height: 80px;
  left: 2rem;
  border-radius: 40px 40px 10px 10px;
  bottom: 10%;
  left: 40%;
  width: 50px;
  height: 80px;
  background-color: #ff0000;
  z-index: 3; /* Increased z-index for the main car */
}

.wheel {
  position: absolute;
  width: 6px;
  height: 8px;
  background-color: #000000;
  border-radius: 10px;
}

.label {
  /* text-align: center; */
  position: absolute;
  left: 20%;
  /* right: 50%; */
  top: 2px;
  font-size: 1.5rem;
}
</style>
