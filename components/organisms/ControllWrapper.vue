<template>
  <div class="controll-wrapper">
    <div v-if="controllType === 'slider'" class="wrapper-slider">
      <controll-slider
        :slider-name="controllName"
        :min-value="controllOptions.minValue"
        :max-value="controllOptions.maxValue"
        :value="controllOptions.value"
        :unit-name="controllOptions.unitName"
        @updateValue="updateSliderValue({ name: controllName, value: $event })"
      />
    </div>
    <div v-if="controllType === 'pulldown'" class="wrapper-pulldown">
      <controll-pulldown
        :pulldown-name="controllName"
        :current-option="currentController"
        :value-options="controllOptionKeys"
        @selectOption="updateOption({ name: controllName, value: $event })"
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
            @updateValue="
              updatePulldownSliderValue({
                controllName: controllName,
                optionName: optionName,
                sliderName: name,
                value: $event
              })
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

import ControllPulldown from '../molecules/ControllPulldown'
import ControllSlider from '../molecules/ControllSlider'

export default {
  components: {
    ControllPulldown,
    ControllSlider
  },
  props: {
    controllType: { type: String, required: true, default: 'slider' },
    controllName: { type: String, required: false, default: 'sliderName' },
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
    ...mapMutations([
      'updateOption',
      'updateSliderValue',
      'updatePulldownSliderValue'
    ]),
    selectOption(key) {
      this.$emit('selectOption', key)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper-pulldown {
  padding-top: 0.5rem;
  border-top: 1px solid $color-white;
  .controll-slider {
    margin-bottom: 1rem;
  }
}
.controll-pulldown {
  margin-bottom: 1rem;
}
</style>
