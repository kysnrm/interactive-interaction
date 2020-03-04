<template>
  <div class="controll-pulldown">
    <div class="pulldown-name">
      {{ pulldownName }}
    </div>
    <base-pulldown
      :current-option="currentOption"
      :value-options="valueOptions"
      @selectOption="selectOption"
    />
  </div>
</template>

<script>
import BasePulldown from '../atoms/BasePulldown'

export default {
  components: {
    BasePulldown
  },
  props: {
    pulldownName: { type: String, required: true, default: 'sliderName' },
    currentOption: { type: Number, required: true, default: 0 },
    valueOptions: {
      type: Array,
      required: true,
      default: () => []
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
.controll-pulldown {
  display: flex;
}
.pulldown-name {
  padding-top: 0.5rem;
  margin-right: 0.5rem;
}
.base-pulldown {
  flex: 1;
}
</style>
