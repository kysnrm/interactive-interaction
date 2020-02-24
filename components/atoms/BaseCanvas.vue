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
    }
  },
  mounted() {
    const ctx = this.$el.getContext('2d')
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'updateRectSize') {
        const rectSize = state.canvasVariables.rectSize
        ctx.clearRect(0, 0, 100, 100)
        ctx.fillRect(0, 0, rectSize, rectSize)
      }
    })
  }
}
</script>
