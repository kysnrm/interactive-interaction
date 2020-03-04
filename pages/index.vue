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
      />
    </div>
    <div class="controller">
      <controll-slider
        v-for="(value, name, index) in myStore"
        :key="index + 10"
        :slider-name="name"
        :min-value="value.minValue"
        :max-value="value.maxValue"
        :value="value.value"
        :unit-name="value.unitName"
        @updateValue="updateValue({ name, value: $event })"
      />
      <div v-for="(value, name, index) in rectVariables" :key="index">
        <controll-wrapper
          :controll-type="value.type"
          :controll-name="name"
          :slider-variables="value.options"
          :controll-options="value.options"
          :current-controller="currentController"
          @selectOption="selectOption"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

import 'vue-material-design-icons/styles.css'

import BaseCanvas from '@/components/atoms/BaseCanvas'
import ControllSlider from '@/components/molecules/ControllSlider'
import ControllWrapper from '@/components/organisms/ControllWrapper'

export default {
  components: {
    BaseCanvas,
    ControllSlider,
    ControllWrapper
  },
  data() {
    return {
      mainWidth: 0,
      mainHeight: 0,
      currentController: 0,
      controllType: 'pulldown'
    }
  },
  computed: {
    myStore() {
      return this.$store.state.canvasVariables
    },
    rectVariables() {
      return this.$store.state.rectVariables
    }
  },
  mounted() {
    // マウント後に canvas のサイズを決定する
    const mainArea = this.$refs.main
    this.mainWidth = mainArea.offsetWidth
    this.mainHeight = mainArea.offsetHeight
  },
  methods: {
    ...mapMutations(['updateValue']),
    selectOption(key) {
      this.currentController = key
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
  line-height: 1;
}
.menu {
  padding: 1.5rem;
  width: 12rem;
  background-color: $color-secondary;
  color: $color-white;
  h1 {
    font-size: 2.25rem;
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
.base-pulldown {
  margin-bottom: 0.75rem;
}
.controll-slider {
  margin-bottom: 0.75rem;
}
</style>
