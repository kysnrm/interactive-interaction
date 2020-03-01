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
    }
  },
  mounted() {
    const ctx = this.$el.getContext('2d')
    this.$store.subscribe((mutation, state) => {
      if (
        mutation.type === 'updateRectSize' ||
        mutation.type === 'updateColorRed'
      ) {
        const rectSize = state.canvasVariables.rectSize
        const colorRed = state.canvasVariables.colorRed
        ctx.clearRect(0, 0, 100, 100)
        ctx.fillStyle = `rgb(${colorRed}, 0, 0)`
        ctx.fillRect(0, 0, rectSize, rectSize)
      }
    })
  }
}
</script>
