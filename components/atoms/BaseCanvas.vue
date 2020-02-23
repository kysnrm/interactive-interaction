<template>
  <canvas class="base-canvas">
    This browser doesn't support Canvas.
  </canvas>
</template>

<script>
export default {
  props: {
    rectSize: { type: Number, required: true, default: 50 }
  },
  mounted() {
    const ctx = this.$el.getContext('2d')
    ctx.fillRect(0, 0, this.rectSize, this.rectSize)
  },
  watch: {
    rectSize: () => {
      const ctx = this.$el.getContext('2d')
      ctx.fillRect(0, 0, this.rectSize, this.rectSize)
    }
  }
}
</script>
