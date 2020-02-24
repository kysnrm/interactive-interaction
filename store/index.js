export const state = () => ({
  canvasVariables: {
    rectSize: 30
  }
})

export const mutations = {
  updateRectSize(state, value) {
    state.canvasVariables.rectSize = value
  }
}
