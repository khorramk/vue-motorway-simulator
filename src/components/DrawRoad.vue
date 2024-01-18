<template>
  <RoadWay>
    <LaneMarker></LaneMarker>
    <OtherCar :speed="2" :car-color="'black'" :car-position-horizontal="30"></OtherCar>
    <OtherCar :speed="2" :car-color="'purple'" :car-position-horizontal="60" ></OtherCar>
    <OtherCar :speed="2" :car-color="'blue'" :car-position-horizontal="80"></OtherCar>
  </RoadWay>
</template>

<script lang="ts" setup>
import RoadWay from './RoadWay.vue'
import LaneMarker from './LaneMarker.vue'
import OtherCar from './OtherCar.vue'
</script>
