<template>
  <div class="container">
    <div class="menu">
      <h1>Interactive Interaction Design</h1>
    </div>
    <div class="main">main</div>
    <div class="controller">
      <controll-slider
        slider-name="rectSize"
        :min-value="10"
        :max-value="100"
        unit-name="px"
      ></controll-slider>
      <controll-slider
        slider-name="spreadSpeed"
        :min-value="10"
        :max-value="30"
        unit-name=""
      ></controll-slider>
    </div>
  </div>
</template>

<script>
import ControllSlider from '@/components/molecules/ControllSlider'

export default {
  components: { ControllSlider }
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
.controll-slider {
  margin-bottom: 0.75rem;
}
</style>
