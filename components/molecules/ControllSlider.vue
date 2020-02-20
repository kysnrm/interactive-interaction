<template>
  <div class="controll-slider">
    <div class="slider-header">
      <div class="slider-name">{{ sliderName }}</div>
      <div class="slider-value">{{ value.toString() + unitName }}</div>
    </div>
    <base-slider
      :percentage="culcPercentage(value, minNumber, maxNumber)"
    ></base-slider>
  </div>
</template>

<script>
import BaseSlider from '../atoms/BaseSlider'

export default {
  components: { BaseSlider },
  props: {
    sliderName: { type: String, required: true, default: 'sliderName' },
    minNumber: { type: Number, required: true, default: 0 },
    maxNumber: { type: Number, required: true, default: 100 },
    unitName: { type: String }
  },
  data: () => {
    return {
      value: 30
    }
  },
  methods: {
    culcPercentage(value, min, max) {
      const range = max - min
      return ((value - min) / range) * 100
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
