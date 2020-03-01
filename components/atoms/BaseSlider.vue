<template>
  <div class="slider" @mousedown="barTouchStart($event)">
    <div class="bar">
      <div class="bar-left" :style="{ width: percentage + '%' }"></div>
    </div>
    <div
      class="dot"
      :style="{ left: percentage + '%' }"
      @mousedown="dotTouchStart($event)"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    percentage: { type: Number, requred: true, default: 50 }
  },
  data: () => {
    return {
      isMousedown: false,
      lastPosition: 0
    }
  },
  methods: {
    dotTouchStart(e) {
      this.isMousedown = true
      this.lastPosition = e.clientX
      document.addEventListener('mousemove', this.dotMove)
      document.addEventListener('mouseup', this.dotTouchEnd)
      e.preventDefault()
    },
    dotMove(e) {
      if (this.isMousedown !== true) {
        return
      }
      const distance = e.clientX - this.lastPosition
      this.$emit('dotMove', distance)
      this.lastPosition = e.clientX
    },
    dotTouchEnd(e) {
      this.isMousedown = false
      this.lastPosition = 0
      document.removeEventListener('mousemove', this.dotMove)
      document.removeEventListener('mouseup', this.dotTouchEnd)
    },
    barTouchStart(e) {
      this.dotTouchStart(e)
      this.$emit('clickBar', e)
      e.preventDefault()
    }
  }
}
</script>

<style lang="scss" scoped>
.slider {
  padding: 5px 0;
  height: 1rem;
}
.bar {
  width: 100%;
  height: 6px;
  background-color: $color-gray;
  border-radius: 3px;
}
.bar-left {
  width: 50%;
  height: 100%;
  background-color: $color-primary;
  border-radius: 3px 0 0 3px;
}
.dot {
  margin-left: -8px;
  width: 1rem;
  height: 1rem;
  background-color: $color-white;
  border-radius: 0.5rem;
  position: relative;
  top: -11px;
  box-shadow: 0 0 0.375rem rgba(0, 0, 0, 0.3);
}
</style>
