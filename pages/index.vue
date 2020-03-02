<template>
  <div class="container">
    <div class="menu">
      <h1>Interactive Interaction Design</h1>
    </div>
    <div ref="main" class="main">
      <base-canvas
        ref="canvas"
        :width="mainWidth"
        :height="mainHeight"
        :rect-size="rectSize.value"
        :color-red="colorRed.value"
        :color-green="colorGreen.value"
        :blue-speed="blueSpeed.value"
      ></base-canvas>
    </div>
    <div class="controller">
      <controll-slider
        v-for="(value, name, index) in myStore"
        :key="index"
        :slider-name="name"
        :min-value="value.minValue"
        :max-value="value.maxValue"
        :value="value.value"
        :unit-name="value.unitName"
        @updateValue="controllers[value.mutation]"
      ></controll-slider>
      <controll-slider
        slider-name="rectSize"
        :min-value="rectSize.minValue"
        :max-value="rectSize.maxValue"
        :value="rectSize.value"
        :unit-name="rectSize.unitName"
        @updateValue="updateRectSize"
      ></controll-slider>
      <controll-slider
        slider-name="colorRed"
        :min-value="colorRed.minValue"
        :max-value="colorRed.maxValue"
        :value="colorRed.value"
        :unit-name="colorRed.unitName"
        @updateValue="updateColorRed"
      ></controll-slider>
      <controll-slider
        slider-name="colorGreen"
        :min-value="colorGreen.minValue"
        :max-value="colorGreen.maxValue"
        :value="colorGreen.value"
        :unit-name="colorGreen.unitName"
        @updateValue="updateColorGreen"
      ></controll-slider>
      <controll-slider
        slider-name="blueSpeed"
        :min-value="blueSpeed.minValue"
        :max-value="blueSpeed.maxValue"
        :value="blueSpeed.value"
        :unit-name="blueSpeed.unitName"
        @updateValue="updateBlueSpeed"
      ></controll-slider>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

import BaseCanvas from '@/components/atoms/BaseCanvas'
import ControllSlider from '@/components/molecules/ControllSlider'

export default {
  components: {
    BaseCanvas,
    ControllSlider
  },
  data() {
    return {
      mainWidth: 0,
      mainHeight: 0
    }
  },
  computed: {
    myStore() {
      return this.$store.state.canvasVariables
    },
    rectSize() {
      return this.$store.state.canvasVariables.rectSize
    },
    colorRed() {
      return this.$store.state.canvasVariables.colorRed
    },
    colorGreen() {
      return this.$store.state.canvasVariables.colorGreen
    },
    blueSpeed() {
      return this.$store.state.canvasVariables.blueSpeed
    }
  },
  mounted() {
    // マウント後に canvas のサイズを決定する
    const mainArea = this.$refs.main
    this.mainWidth = mainArea.offsetWidth
    this.mainHeight = mainArea.offsetHeight
  },
  methods: {
    ...mapMutations([
      'updateRectSize',
      'updateColorRed',
      'updateColorGreen',
      'updateBlueSpeed'
    ])
  }
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
