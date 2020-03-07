<template>
  <div class="controll-slider">
    <div class="slider-header">
      <div class="slider-name">{{ sliderName }}</div>
      <div class="slider-value">
        {{ Math.round(value.toString()) + unitName }}
      </div>
    </div>
    <base-slider
      :percentage="culcPercentage(value, minValue, maxValue)"
      @clickBar="clickBar($event)"
      @dotMove="dotMove($event)"
    />
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
    value: { type: Number, required: true, default: 50 },
    unitName: { type: String, required: false, default: '' }
  },
  methods: {
    culcPercentage(value, min, max) {
      const range = max - min
      return ((value - min) / range) * 100
    },
    dotMove(e) {
      // 横幅と数値の範囲と今回動いた距離を元に新しい値を算出
      const width = this.$el.clientWidth
      const range = this.maxValue - this.minValue
      const moveDistance = (e / width) * range
      let newValue = this.value + moveDistance
      // 新しい値が範囲外にある場合は範囲内に変更
      if (newValue < this.minValue) {
        newValue = this.minValue
      }
      if (newValue > this.maxValue) {
        newValue = this.maxValue
      }
      this.$emit('updateValue', newValue)
    },
    clickBar(e) {
      const width = this.$el.clientWidth
      const range = this.maxValue - this.minValue
      const clickPosition = e.offsetX
      const newValue = this.minValue + (clickPosition / width) * range
      this.$emit('updateValue', newValue)
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
