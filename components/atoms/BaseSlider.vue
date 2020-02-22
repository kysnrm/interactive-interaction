<template>
  <div class="slider">
    <div class="bar" @click="$emit('clickBar', $event)">
      <div class="bar-left" :style="{ width: percentage + '%' }"></div>
    </div>
    <div
      class="dot"
      :style="{ left: percentage + '%' }"
      @mousedown="dotTouchStart($event)"
      @mousemove="dotMove($event)"
      @mouseup="dotTouchEnd($event)"
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
    },
    dotMove(e) {
      if (this.isMousedown !== true) {
        return
      }
      const distance = e.clientX - this.lastPosition
      this.$emit('incrementValue', distance)
      this.lastPosition = e.clientX
    },
    dotTouchEnd(e) {
      this.isMousedown = false
      this.lastPosition = 0
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
