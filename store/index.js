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
  },
  rectVariables: {
    rectSize: {
      type: 'slider',
      options: {
        value: 50,
        minValue: 10,
        maxValue: 100,
        unitName: 'px'
      }
    },
    colorRed: {
      type: 'pulldown',
      options: {
        static: {
          staticValue: {
            value: 127,
            minValue: 0,
            maxValue: 255,
            unitName: ''
          }
        },
        sineWave: {
          sineSpeed: {
            value: 1,
            minValue: 1,
            maxValue: 10,
            unitName: ''
          }
        }
      },
      currentValue: 0
    },
    colorGreen: {
      type: 'pulldown',
      options: {
        static: {
          staticValue: {
            value: 127,
            minValue: 0,
            maxValue: 255,
            unitName: ''
          }
        },
        sineWave: {
          sineSpeed: {
            value: 1,
            minValue: 1,
            maxValue: 10,
            unitName: ''
          }
        }
      },
      currentValue: 0
    },
    colorBlue: {
      type: 'pulldown',
      options: {
        static: {
          staticValue: {
            value: 127,
            minValue: 0,
            maxValue: 255,
            unitName: ''
          }
        },
        sineWave: {
          sineSpeed: {
            value: 1,
            minValue: 1,
            maxValue: 10,
            unitName: ''
          }
        }
      },
      currentValue: 0
    }
  }
})

export const mutations = {
  updateValue(state, payload) {
    state.canvasVariables[payload.name].value = payload.value
  },
  updateRectValue(state, payload) {
    state.rectVariables[payload.controllName].options[
      payload.sliderName
    ].value = payload.value
  },
  updateCurrentValue(state, payload) {
    state.rectVariables[payload.name].currentValue = payload.value
  }
}
