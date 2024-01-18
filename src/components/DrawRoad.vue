<template>
  <RoadWay>
    <LaneMarker></LaneMarker>
    <OtherCar :speed="2" :car-color="'black'"></OtherCar>
    <OtherCar :speed="2" :car-color="'purple'"></OtherCar>
    <OtherCar :speed="2" :car-color="'blue'"></OtherCar>
  </RoadWay>
</template>

<script lang="ts" setup>
import RoadWay from './RoadWay.vue'
import LaneMarker from './LaneMarker.vue'
import OtherCar from './OtherCar.vue'
</script>
