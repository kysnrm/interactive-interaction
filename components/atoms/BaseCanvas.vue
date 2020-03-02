<template>
  <canvas class="base-canvas">
    This browser doesn't support Canvas.
  </canvas>
</template>

<script>
export default {
  computed: {
    rectSize() {
      return this.$store.state.canvasVariables.rectSize
    },
    colorRed() {
      return this.$store.state.canvasVariables.colorRed
    },
    colorGreen() {
      return this.$store.state.canvasVariables.colorGreen
    },
    colorBlue() {
      return this.$store.state.canvasVariables.colorBlue
    }
  },
  mounted() {
    this.ctx = this.$el.getContext('2d')
    this.startTime = Date.now()
    this.render()
  },
  methods: {
    render() {
      this.ctx.clearRect(0, 0, 100, 100)
      const nowTime = Date.now()
      const ellapsedTime = (nowTime - this.startTime) / 1000
      const blue = Math.abs(Math.sin(ellapsedTime) * 255)
      this.ctx.fillStyle = `rgb(${this.colorRed}, ${this.colorGreen}, ${blue})`
      this.ctx.fillRect(0, 0, this.rectSize, this.rectSize)
      requestAnimationFrame(this.render)
    }
  }
}
</script>
