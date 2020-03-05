<template>
  <div class="container">
    <div class="menu">
      <h1>Interactive Interaction Design</h1>
    </div>
    <div ref="main" class="main">
      <sketch-prism
        ref="canvas"
        :width="mainWidth"
        :height="mainHeight"
        :x-length="xLength"
        :y-length="yLength"
      />
    </div>
    <div class="controller">
      <div v-for="(value, name, index) in prismVariables" :key="index">
        <controll-wrapper
          :controll-type="value.type"
          :controll-name="name"
          :controll-options="value.options"
          :current-controller="value.currentOption"
        />
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-material-design-icons/styles.css'

// import BaseCanvas from '@/components/atoms/BaseCanvas'
import SketchPrism from '@/components/sketch/SketchPrism'
import ControllWrapper from '@/components/organisms/ControllWrapper'

export default {
  components: {
    // BaseCanvas,
    SketchPrism,
    ControllWrapper
  },
  data() {
    return {
      mainWidth: 0,
      mainHeight: 0,
      xLength: 0,
      yLength: 0
    }
  },
  computed: {
    rectVariables() {
      return this.$store.state.rectVariables
    },
    prismVariables() {
      return this.$store.state.prismVariables
    }
  },
  mounted() {
    // マウント後に canvas のサイズを決定する
    const mainArea = this.$refs.main
    this.mainWidth = mainArea.offsetWidth
    this.mainHeight = mainArea.offsetHeight
    this.xLength = Math.floor(this.mainWidth / 50) + 1
    this.yLength = Math.floor(this.mainHeight / 50) + 1
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
