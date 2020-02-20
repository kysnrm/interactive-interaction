<template>
  <div class="controll-slider">
    <div class="slider-header">
      <div class="slider-name">{{ name }}</div>
      <div class="slider-value">30</div>
    </div>
    <BaseSlider :percentage="culcPercentage(value, min, max)"></BaseSlider>
  </div>
</template>

<script>
import BaseSlider from '../atoms/BaseSlider'

export default {
  components: { BaseSlider },
  props: {
    name: { type: String, required: true, default: 'sliderName' },
    min: { type: Number, required: true, default: 0 },
    max: { type: Number, required: true, default: 100 }
  },
  data: () => {
    return {
      value: 30
    }
  },
  methods: {
    culcPercentage(value, min, max) {
      const range = max - min
      return (value / range) * 100
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
