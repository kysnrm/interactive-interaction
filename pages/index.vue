<template>
  <div class="container">
    <div class="menu">
      <h1>Interactive Interaction Design</h1>
    </div>
    <div ref="main" class="main">
      <base-canvas
        ref="canvas"
        :rect-size="rectSize"
        :width="mainWidth"
        :height="mainHeight"
      ></base-canvas>
    </div>
    <div class="controller">
      <controll-slider
        slider-name="rectSize"
        :min-value="10"
        :max-value="100"
        :value="rectSize"
        unit-name="px"
        @updateValue="updateRectSize"
      ></controll-slider>
      <controll-slider
        slider-name="colorRed"
        :min-value="0"
        :max-value="255"
        :value="colorRed"
        @updateValue="updateColorRed"
      ></controll-slider>
      <controll-slider
        slider-name="colorGreen"
        :min-value="0"
        :max-value="255"
        :value="colorGreen"
        @updateValue="updateColorGreen"
      ></controll-slider>
      <controll-slider
        slider-name="colorBlue"
        :min-value="0"
        :max-value="255"
        :value="colorBlue"
        @updateValue="updateColorBlue"
      ></controll-slider>
    </div>
  </div>
</template>

<script>
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
    rectSize() {
      return this.$store.state.canvasVariables.rectSize
    },
    colorRed() {
      return this.$store.state.canvasVariables.colorRed
    },
    colorGreen() {
      return this.$store.state.canvasVariables.colorGreen
    },
    colorBlue() {
      return this.$store.state.canvasVariables.colorBlue
    }
  },
  mounted() {
    // マウント後に canvas のサイズを決定する
    const mainArea = this.$refs.main
    this.mainWidth = mainArea.offsetWidth
    this.mainHeight = mainArea.offsetHeight
  },
  methods: {
    updateRectSize(newValue) {
      this.$store.commit('updateRectSize', newValue)
    },
    updateColorRed(newValue) {
      this.$store.commit('updateColorRed', newValue)
    },
    updateColorGreen(newValue) {
      this.$store.commit('updateColorGreen', newValue)
    },
    updateColorBlue(newValue) {
      this.$store.commit('updateColorBlue', newValue)
    }
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
