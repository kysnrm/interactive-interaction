<template>
  <div class="controll-wrapper">
    <controll-pulldown
      pulldown-name="colorRed"
      :value-options="['static', 'xDistance', 'yDistance', 'sineWave']"
    />
    <div v-if="currentValue === 0">
      <controll-slider
        slider-name="staticValue"
        :min-value="0"
        :max-value="255"
        :value="127"
        unit-name=""
      />
    </div>
    <div v-if="currentValue === 1">
      <controll-slider
        slider-name="minValue"
        :min-value="0"
        :max-value="255"
        :value="0"
        unit-name=""
      />
      <controll-slider
        slider-name="maxValue"
        :min-value="0"
        :max-value="255"
        :value="255"
        unit-name=""
      />
    </div>
  </div>
</template>

<script>
import ControllPulldown from '../molecules/ControllPulldown'
import ControllSlider from '../molecules/ControllSlider'

export default {
  components: {
    ControllPulldown,
    ControllSlider
  },
  data: () => {
    return {
      currentValue: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.controll-wrapper {
  border-bottom: 1px solid $color-white;
}
</style>
