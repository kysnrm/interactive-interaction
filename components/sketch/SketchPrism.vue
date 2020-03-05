<template>
  <canvas class="base-canvas">
    This browser doesn't support Canvas.
  </canvas>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    xLength: { type: Number, required: true, default: 10 },
    yLength: { type: Number, required: true, default: 10 }
  },
  data: () => {
    return {
      startTime: 0,
      mousePosition: { x: 0, y: 0 },
      canvasSize: { width: 500, height: 500 },
      prismRects: []
    }
  },
  computed: {
    rectVariables() {
      return this.$store.state.rectVariables
    },
    prismVariables() {
      return this.$store.state.prismVariables
    }
  },
  mounted() {
    this.ctx = this.$el.getContext('2d')
    // マウント時のタイムスタンプを取得
    this.startTime = Date.now()
    // マウスの位置を取得するイベントを付与
    this.$el.addEventListener(
      'mousemove',
      (evt) => {
        const rect = this.$el.getBoundingClientRect()
        this.mousePosition.x = evt.clientX - rect.left
        this.mousePosition.y = evt.clientY - rect.top
      },
      false
    )
    // prismRects に rect を追加
    setTimeout(() => {
      for (let i = 0; i < this.xLength * this.yLength; i++) {
        const x = (i % this.xLength) * 50
        const y = Math.floor(i / this.xLength) * 50
        const rect = {
          position: { x, y },
          color: {
            colorRed: 0,
            colorGreen: 0,
            colorBlue: 0
          }
        }
        this.prismRects[i] = rect
      }
    })
    this.render()
  },
  methods: {
    ...mapMutations(['updateRect']),
    sineWave(ellapsedTime, speed, minValue) {
      // 経過時間と速度とサイン波を元にして色を決める
      const color =
        ((Math.sin(ellapsedTime * speed) + 1) / 2) * (255 - minValue) + minValue
      return color
    },
    culcTargetX(rectX, minValue) {
      // マウスとの x 座標の差とキャンバスのサイズを元に最終的な色を算出
      const xDistance = this.mousePosition.x - rectX - 25
      // キャンバスの幅と高さのうち長い方を基準にする
      const longer = Math.max(this.canvasSize.width, this.canvasSize.height)
      const targetColor =
        255 - (Math.abs(xDistance) / longer) * (255 - minValue)
      return targetColor
    },
    culcTargetY(rectY, minValue) {
      // マウスとの y 座標の差とキャンバスのサイズを元に最終的な色を算出
      const yDistance = this.mousePosition.y - rectY - 25
      // キャンバスの幅と高さのうち長い方を基準にする
      const longer = Math.max(this.canvasSize.width, this.canvasSize.height)
      const targetColor =
        255 - (Math.abs(yDistance) / longer) * (255 - minValue)
      return targetColor
    },
    changeColor(position, current, target, speed) {
      // x 座標の差と y 座標の差を元にしてマウスとの距離を算出
      const xDistance = this.mousePosition.x - position.x - 25
      const yDistance = this.mousePosition.y - position.y - 25
      const distance = Math.sqrt(xDistance ** 2 + yDistance ** 2)
      // 現在の色と最終的な色の差分と距離を元に今回変化する量を算出
      const colorGap = target - current
      const changeValue = Math.abs(
        (colorGap /
          (distance + this.prismVariables.spreadingDelay.options.value)) *
          speed
      )
      // 色の差が 1 以内なら何もしない
      if (Math.abs(colorGap) < 1) {
        return current
      }
      // 色を変化させる
      if (colorGap > 0) {
        return current + changeValue
      } else {
        return current - changeValue
      }
    },
    switchColor(key, index, ellapsedTIme) {
      // 対象となる色を指定する
      const color = this.prismVariables[key]
      // 対象となる Rect
      const rect = this.prismRects[index]
      // static が選ばれている場合
      if (color.currentOption === 0) {
        return color.options.static.value.value
      }
      // xDistance が選ばれている場合
      if (color.currentOption === 1) {
        const target = this.culcTargetX(
          rect.position.x,
          color.options.xDistance.minValue.value
        )
        return this.changeColor(
          rect.position,
          rect.color[key],
          target,
          this.prismVariables.spreadingSpeed.options.value
        )
      }
      // yDistance が選ばれている場合
      if (color.currentOption === 2) {
        const target = this.culcTargetY(
          rect.position.y,
          color.options.yDistance.minValue.value
        )
        return this.changeColor(
          rect.position,
          rect.color[key],
          target,
          this.prismVariables.spreadingSpeed.options.value
        )
      }
      // sineWave が選ばれている場合
      if (color.currentOption === 3) {
        return this.sineWave(
          ellapsedTIme,
          color.options.sineWave.speed.value,
          color.options.sineWave.minValue.value
        )
      }
    },
    updateColor(key, index, ellapsedTime) {
      const color = this.switchColor(key, index, ellapsedTime)
      this.prismRects[index].color[key] = color
      return color
    },
    render() {
      // Canvas のサイズを取得する
      const clientRect = this.$el.getBoundingClientRect()
      const width = clientRect.width
      const height = clientRect.height
      // 直前のフレームをクリアする
      this.ctx.clearRect(0, 0, width, height)
      // 現在までの経過時間を取得する
      const nowTime = Date.now()
      const ellapsedTime = (nowTime - this.startTime) / 1000

      for (let i = 0; i < this.prismRects.length; i++) {
        const rect = this.prismRects[i]
        // 各色を指定する
        const red = this.updateColor('colorRed', i, ellapsedTime)
        const green = this.updateColor('colorGreen', i, ellapsedTime)
        const blue = this.updateColor('colorBlue', i, ellapsedTime)
        this.ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`
        this.ctx.fillRect(rect.position.x, rect.position.y, 50, 50)
      }
      requestAnimationFrame(this.render)
    }
  }
}
</script>
