<template>
  <div class="controll-wrapper">
    <div v-if="controllType === 'slider'">
      <controll-slider
        slider-name="rectSize"
        :min-value="10"
        :max-value="100"
        :value="50"
        unit-name="px"
      />
    </div>
    <div v-if="controllType === 'pulldown'">
      <controll-pulldown
        pulldown-name="colorRed"
        :current-value="currentController"
        :value-options="controllOptionKeys"
        @selectOption="selectOption"
      />
      <div
        v-for="(option, optionName, optionIndex) in controllOptions"
        :key="optionIndex"
      >
        <div v-if="currentController === optionIndex">
          <controll-slider
            v-for="(value, name, index) in option"
            :key="index"
            :slider-name="name"
            :min-value="value.minValue"
            :max-value="value.maxValue"
            :value="value.value"
            :unit-name="value.unitName"
          />
        </div>
      </div>
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
  props: {
    controllType: { type: String, required: true, default: 'slider' },
    controllOptions: {
      type: Object,
      required: false,
      default: () => {}
    },
    currentController: { type: Number, required: false, default: 0 }
  },
  computed: {
    controllOptionKeys() {
      if (this.controllType === 'slider') {
        return
      }
      return Object.keys(this.controllOptions)
    }
  },
  methods: {
    selectOption(key) {
      this.$emit('selectOption', key)
    }
  }
}
</script>

<style lang="scss" scoped>
.controll-wrapper {
  border-bottom: 1px solid $color-white;
}
</style>
