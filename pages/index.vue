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
      <div v-for="(value, name, index) in rectVariables" :key="index">
        <controll-wrapper
          :controll-type="value.type"
          :controll-name="name"
          :controll-options="value.options"
          :current-controller="value.currentValue"
          @selectOption="updateCurrentValue({ name, value: $event })"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

import 'vue-material-design-icons/styles.css'

import BaseCanvas from '@/components/atoms/BaseCanvas'
import ControllWrapper from '@/components/organisms/ControllWrapper'

export default {
  components: {
    BaseCanvas,
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
    ...mapMutations(['updateValue', 'updateCurrentValue']),
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
</style>
