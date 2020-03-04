export const state = () => ({
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
          value: {
            value: 127,
            minValue: 0,
            maxValue: 255,
            unitName: ''
          }
        },
        sineWave: {
          speed: {
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
          value: {
            value: 127,
            minValue: 0,
            maxValue: 255,
            unitName: ''
          }
        },
        sineWave: {
          speed: {
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
          value: {
            value: 127,
            minValue: 0,
            maxValue: 255,
            unitName: ''
          }
        },
        sineWave: {
          speed: {
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
  updateSliderValue(state, payload) {
    state.rectVariables[payload.name].options.value = payload.value
  },
  updatePulldownSliderValue(state, payload) {
    state.rectVariables[payload.controllName].options[payload.optionName][
      payload.sliderName
    ].value = payload.value
  },
  updateCurrentValue(state, payload) {
    state.rectVariables[payload.name].currentValue = payload.value
  }
}
