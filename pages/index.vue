<template>
  <div class="container">
    <div class="menu">
      <h1>Interactive Interaction Design</h1>
    </div>
    <div class="main">main</div>
    <div class="controller">
      <ControlSlider :name="rectSize" :min="10" :max="100"></ControlSlider>
    </div>
  </div>
</template>

<script>
import ControlSlider from '@/components/molecules/ControllSlider'

export default {
  components: { ControlSlider }
}
</script>

<style lang="scss">
.container {
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  font-family: 'Oswald', sans-serif;
}
.menu {
  padding: 1.5rem;
  width: 12rem;
  background-color: $color-secondary;
  color: $color-white;
  h1 {
    font-size: 2.25rem;
    line-height: 1;
  }
}
.main {
  flex-grow: 1;
}
.controller {
  padding: 1.5rem;
  width: 16rem;
  background-color: $color-secondary;
  color: $color-white;
}
</style>
