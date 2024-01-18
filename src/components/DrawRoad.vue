<template>
  <RoadWay>
    <LaneMarker lane-type="solid" mark-position="1rem"></LaneMarker>
    <OtherCar :speed="2" :car-color="'black'" :car-position-horizontal="30" direction="bottom"></OtherCar>
    <OtherCar :speed="2" :car-color="'purple'" :car-position-horizontal="60" direction="bottom"></OtherCar>
    <OtherCar :speed="2" :car-color="'blue'" :car-position-horizontal="80" direction="bottom"></OtherCar>
    <LaneMarker lane-type="dashed" mark-position="30%"></LaneMarker>
    <LaneMarker lane-type="dashed" mark-position="70%"></LaneMarker>

  </RoadWay>
  <RoadWay>
    <LaneMarker lane-type="solid" mark-position="1rem"></LaneMarker>
    <OtherCar :speed="2" :car-color="'black'" :car-position-horizontal="30" direction="top" car-body="car-body"></OtherCar>
    <OtherCar :speed="2" :car-color="'purple'" :car-position-horizontal="60" direction="top" car-body="car-body"></OtherCar>
    <OtherCar :speed="2" :car-color="'blue'" :car-position-horizontal="80" direction="top" car-body="car-body"></OtherCar>
    <LaneMarker lane-type="dashed" mark-position="30%"></LaneMarker>
    <LaneMarker lane-type="dashed" mark-position="70%"></LaneMarker>

  </RoadWay>
</template>

<script lang="ts" setup>
import RoadWay from './RoadWay.vue'
import LaneMarker from './LaneMarker.vue'
import OtherCar from './OtherCar.vue'
</script>

<style>
.car-body {
     border-radius: 20px 20px 40px 40px;
}
</style>