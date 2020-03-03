export const state = () => ({
  canvasVariables: {
    rectSize: {
      value: 50,
      minValue: 10,
      maxValue: 100,
      unitName: 'px'
    },
    colorRed: {
      value: 127,
      minValue: 0,
      maxValue: 255,
      unitName: ''
    },
    colorGreen: {
      value: 127,
      minValue: 0,
      maxValue: 255,
      unitName: ''
    },
    blueSpeed: {
      value: 1,
      minValue: 1,
      maxValue: 10,
      unitName: ''
    }
  }
})

export const mutations = {
  updateValue(state, payload) {
    state.canvasVariables[payload.name].value = payload.value
  },
  updateRectSize(state, value) {
    state.canvasVariables.rectSize.value = value
  },
  updateColorRed(state, value) {
    state.canvasVariables.colorRed.value = value
  },
  updateColorGreen(state, value) {
    state.canvasVariables.colorGreen.value = value
  },
  updateBlueSpeed(state, value) {
    state.canvasVariables.blueSpeed.value = value
  }
}
