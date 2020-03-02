export const state = () => ({
  canvasVariables: {
    rectSize: {
      value: 50,
      minValue: 10,
      maxValue: 100,
      unitName: 'px',
      mutation: 'updateRectSize'
    },
    colorRed: {
      value: 127,
      minValue: 0,
      maxValue: 255,
      unitName: '',
      mutation: 'updateColorRed'
    },
    colorGreen: {
      value: 127,
      minValue: 0,
      maxValue: 255,
      unitName: '',
      mutation: 'updateColorGreen'
    },
    blueSpeed: {
      value: 1,
      minValue: 1,
      maxValue: 10,
      unitName: '',
      mutation: 'updateBlueSpeed'
    }
  }
})

export const mutations = {
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
