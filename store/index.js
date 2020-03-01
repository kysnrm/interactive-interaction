export const state = () => ({
  canvasVariables: {
    rectSize: 50,
    colorRed: 127
  }
})

export const mutations = {
  updateRectSize(state, value) {
    state.canvasVariables.rectSize = value
  },
  updateColorRed(state, value) {
    state.canvasVariables.colorRed = value
  }
}
