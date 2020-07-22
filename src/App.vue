<template>
  <div id="app">
    <div class="map-wrapper">
      <world-map />
    </div>
  </div>
</template>

<script>
import WorldMap from './components/WorldMap'

export default {
  name: 'App',
  components: { WorldMap,  }
}
</script>

<style>
.map-wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>