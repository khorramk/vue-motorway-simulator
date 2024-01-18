<template>
    <div class="lane-marker" :style="`border-style: ${laneType}; left: ${markPosition}`"></div>
</template>


<script lang="ts" setup>
const {laneType, markPosition} = defineProps(['laneType', 'markPosition'])
</script>

<style scoped>
.lane-marker {
    left: 1rem;
    position: absolute;
      height: 100vh;
      border-color: #fff;
      border-width: 2px;
      
       /* border: 1px solid white; */
      /* left: 50%; */
      /* transform: translateX(-50%); */
}
</style>