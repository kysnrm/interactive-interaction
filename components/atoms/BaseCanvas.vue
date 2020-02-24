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
    const rectSize = this.$store.state.canvasVariables.rectSize
    ctx.fillRect(0, 0, rectSize, rectSize)
  }
}
</script>
