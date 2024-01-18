<template>
    <div class="road" :style="`background-position-y:${roadPosition}px`">
    <slot/>
    </div>
</template>

<style scoped>
.road {
    position: relative;
      width: 300px;
      max-width: 100%;
      height: 100vh;
      background-color: #808080;
      /* z-index: 0; */
      padding: 0rem 3rem;
      overflow: hidden;
}
</style>

<script lang="ts" setup>
import {  ref } from 'vue';

const roadPosition = ref(0);


</script>
