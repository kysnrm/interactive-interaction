<template>
  <div class="controll-slider">
    <div class="slider-header">
      <div class="slider-name">{{ sliderName }}</div>
      <div class="slider-value">
        {{ Math.round(rectSize.toString()) + unitName }}
      </div>
    </div>
    <base-slider
      :percentage="culcPercentage(rectSize, minValue, maxValue)"
      @clickBar="clickBar($event)"
      @dotMove="dotMove($event)"
    ></base-slider>
  </div>
</template>

<script>
import BaseSlider from '../atoms/BaseSlider'

export default {
  components: { BaseSlider },
  props: {
    sliderName: { type: String, required: true, default: 'sliderName' },
    minValue: { type: Number, required: true, default: 0 },
    maxValue: { type: Number, required: true, default: 100 },
    unitName: { type: String, required: false, default: '' }
  },
  data: () => {
    return {
      value: 30
    }
  },
  computed: {
    rectSize() {
      return this.$store.state.canvasVariables.rectSize
    }
  },
  methods: {
    culcPercentage(value, min, max) {
      const range = max - min
      return ((value - min) / range) * 100
    },
    dotMove(e) {
      const width = 208
      const range = this.maxValue - this.minValue
      const moveDistance = (e / width) * range
      let newValue = this.rectSize + moveDistance
      if (newValue < this.minValue) {
        newValue = this.minValue
      }
      if (newValue > this.maxValue) {
        newValue = this.maxValue
      }
      this.$store.commit('updateRectSize', newValue)
    },
    clickBar(e) {
      const width = 208
      const range = this.maxValue - this.minValue
      const clickPosition = e.offsetX
      const newValue = this.minValue + (clickPosition / width) * range
      this.$store.commit('updateRectSize', newValue)
    }
  }
}
</script>

<style lang="scss" scoped>
.slider-header {
  margin-bottom: 0.25rem;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
}
</style>
