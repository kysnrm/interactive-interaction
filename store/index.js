export const state = () => ({
  canvasVariables: {
    rectSize: 50,
    colorRed: 127,
    colorGreen: 127,
    blueSpeed: 1
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
  updateBlueSpeed(state, value) {
    state.canvasVariables.blueSpeed = value
  }
}
