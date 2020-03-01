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
    const ctx = this.$el.getContext('2d')
    this.$store.subscribe((mutation, state) => {
      if (
        mutation.type === 'updateRectSize' ||
        mutation.type === 'updateColorRed' ||
        mutation.type === 'updateColorGreen' ||
        mutation.type === 'updateColorBlue'
      ) {
        const rectSize = state.canvasVariables.rectSize
        const colorRed = state.canvasVariables.colorRed
        const colorGreen = state.canvasVariables.colorGreen
        const colorBlue = state.canvasVariables.colorBlue
        ctx.clearRect(0, 0, 100, 100)
        ctx.fillStyle = `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`
        ctx.fillRect(0, 0, rectSize, rectSize)
      }
    })
  }
}
</script>
