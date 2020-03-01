export const state = () => ({
  canvasVariables: {
    rectSize: 50,
    colorRed: 127,
    colorGreen: 127,
    colorBlue: 127
  }
})

export const mutations = {
  updateRectSize(state, value) {
    state.canvasVariables.rectSize = value
  },
  updateColorRed(state, value) {
    state.canvasVariables.colorRed = value
  },
  updateColorGreen(state, value) {
    state.canvasVariables.colorGreen = value
  },
  updateColorBlue(state, value) {
    state.canvasVariables.colorBlue = value
  }
}
