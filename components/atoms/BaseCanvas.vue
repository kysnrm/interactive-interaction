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
    setTimeout(() => {
      this.render()
    })
    // this.$store.subscribe((mutation, state) => {
    //   if (
    //     mutation.type === 'updateRectSize' ||
    //     mutation.type === 'updateColorRed' ||
    //     mutation.type === 'updateColorGreen' ||
    //     mutation.type === 'updateColorBlue'
    //   ) {
    //     const rectSize = state.canvasVariables.rectSize
    //     const colorRed = state.canvasVariables.colorRed
    //     const colorGreen = state.canvasVariables.colorGreen
    //     const colorBlue = state.canvasVariables.colorBlue
    //     this.render(rectSize, colorRed, colorGreen, colorBlue)
    //   }
    // })
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
