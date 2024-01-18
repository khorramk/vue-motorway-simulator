<template>
        <div class="car" :data-speed="carSpeed" :style="`bottom: ${carPositionY}%; background: ${carColor} `">
          <div class="wheel"></div>
          <div class="wheel" style="right: 0px;"></div>
          <div class="wheel" style="bottom: 0px;"></div>
          <div class="wheel" style="bottom: 0px; right: 0px;"></div>
        </div>
</template>

<script lang="ts" setup>
import {  onMounted, ref } from 'vue';
   const {speed, carColor} = defineProps(['speed', 'carColor'])
   const carPositionY = ref(0);
   const carSpeed = ref(speed)// 20mph;
  
   const updatePosition = () => {
     carPositionY.value += carSpeed.value;

     // Reset position when reaching the bottom
     if (carPositionY.value >= 100) {
          carPositionY.value = -20;
     }

     setTimeout(updatePosition, 60)
   }

  onMounted(() => {
    updatePosition();
  })
</script>

<style>
.car {
    position: absolute;
      width: 50px;
      height: 80px;
      /* background-color: #00ff00; Green color for other cars */
      /* z-index: 0; */
      left: 2rem;
      border-radius: 40px 40px 10px 10px;
}

.wheel {
  position: absolute;
  width: 6px;
  height: 7px;
  background-color: #000000;
  /* top: 1px; */
  /* left: 0px; */
}
</style>