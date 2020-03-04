<template>
  <canvas class="base-canvas">
    This browser doesn't support Canvas.
  </canvas>
</template>

<script>
export default {
  computed: {
    rectVariables() {
      return this.$store.state.rectVariables
    }
  },
  mounted() {
    this.ctx = this.$el.getContext('2d')
    this.startTime = Date.now()
    this.render()
  },
  methods: {
    sineWave(ellapsedTime, speed) {
      return Math.abs(Math.sin(ellapsedTime * speed) * 255)
    },
    switchColor(key, ellapsedTIme) {
      const color = this.rectVariables[key]
      if (color.currentOption === 0) {
        return color.options.static.value.value
      }
      if (color.currentOption === 1) {
        return this.sineWave(ellapsedTIme, color.options.sineWave.speed.value)
      }
    },
    render() {
      this.ctx.clearRect(0, 0, 100, 100)
      const nowTime = Date.now()
      const ellapsedTime = (nowTime - this.startTime) / 1000
      const red = this.switchColor('colorRed', ellapsedTime)
      const green = this.switchColor('colorGreen', ellapsedTime)
      const blue = this.switchColor('colorBlue', ellapsedTime)
      const rectSize = this.rectVariables.rectSize.options.value
      this.ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`
      this.ctx.fillRect(0, 0, rectSize, rectSize)
      requestAnimationFrame(this.render)
    }
  }
}
</script>
