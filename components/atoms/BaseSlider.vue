<template>
  <div class="slider">
    <div class="bar" @mousedown="barTouchStart($event)">
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
      lastPosition: 0
    }
  },
  methods: {
    dotTouchStart(e) {
      this.lastPosition = e.clientX
      // スライダーの外側に出ても操作できるようにイベントリスナーを追加
      document.addEventListener('mousemove', this.dotMove)
      document.addEventListener('mouseup', this.dotTouchEnd)
      // ドラッグ中にテキストを選択しないように
      e.preventDefault()
    },
    dotMove(e) {
      // スライダーの幅内に収まっていなければ何もしない
      const clientRect = this.$el.getBoundingClientRect()
      if (e.clientX < clientRect.left - 8 || e.clientX > clientRect.right + 8) {
        return
      }
      // 動いた距離を算出
      const distance = e.clientX - this.lastPosition
      this.$emit('dotMove', distance)
      // lastPosition を更新する
      this.lastPosition = e.clientX
    },
    dotTouchEnd(e) {
      // スライダーの操作を終えてすべてのイベントリスナーを削除
      document.removeEventListener('mousemove', this.dotMove)
      document.removeEventListener('mouseup', this.dotTouchEnd)
    },
    barTouchStart(e) {
      // そのままドットのスライドも可能にする
      this.dotTouchStart(e)
      this.$emit('clickBar', e)
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
  &:hover {
    cursor: pointer;
  }
}
.bar-left {
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
  &:hover {
    cursor: pointer;
  }
}
</style>
