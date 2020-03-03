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
        :rect-size="myStore.rectSize.value"
        :color-red="myStore.colorRed.value"
        :color-green="myStore.colorGreen.value"
        :blue-speed="myStore.blueSpeed.value"
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
        @updateValue="updateValue({ name, value: $event })"
      ></controll-slider>
      <base-pulldown></base-pulldown>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

import BaseCanvas from '@/components/atoms/BaseCanvas'
import ControllSlider from '@/components/molecules/ControllSlider'
import BasePulldown from '@/components/atoms/BasePulldown'

export default {
  components: {
    BaseCanvas,
    ControllSlider,
    BasePulldown
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
    }
  },
  mounted() {
    // マウント後に canvas のサイズを決定する
    const mainArea = this.$refs.main
    this.mainWidth = mainArea.offsetWidth
    this.mainHeight = mainArea.offsetHeight
  },
  methods: {
    ...mapMutations(['updateValue'])
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
