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
      currentOption: 0
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
      currentOption: 0
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
      currentOption: 0
    }
  },
  prismRects: [],
  prismVariables: {
    spreadingSpeed: {
      type: 'slider',
      options: {
        value: 8,
        minValue: 1,
        maxValue: 32,
        unitName: ''
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
        xDistance: {
          minValue: {
            value: 127,
            minValue: 0,
            maxValue: 255,
            unitName: ''
          }
        },
        yDistance: {
          minValue: {
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
          },
          minValue: {
            value: 127,
            minValue: 0,
            maxValue: 255,
            unitName: ''
          }
        }
      },
      currentOption: 1
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
        xDistance: {
          minValue: {
            value: 127,
            minValue: 0,
            maxValue: 255,
            unitName: ''
          }
        },
        yDistance: {
          minValue: {
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
          },
          minValue: {
            value: 127,
            minValue: 0,
            maxValue: 255,
            unitName: ''
          }
        }
      },
      currentOption: 2
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
        xDistance: {
          minValue: {
            value: 127,
            minValue: 0,
            maxValue: 255,
            unitName: ''
          }
        },
        yDistance: {
          minValue: {
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
          },
          minValue: {
            value: 127,
            minValue: 0,
            maxValue: 255,
            unitName: ''
          }
        }
      },
      currentOption: 3
    }
  }
})

export const mutations = {
  addRect(state, payload) {
    state.prismRects[payload.index] = payload.rect
  },
  updateRect(state, payload) {
    state.prismRects[payload.index].color[payload.key] = payload.value
  },
  updateSliderValue(state, payload) {
    state.prismVariables[payload.name].options.value = payload.value
  },
  updatePulldownSliderValue(state, payload) {
    state.prismVariables[payload.controllName].options[payload.optionName][
      payload.sliderName
    ].value = payload.value
  },
  updateOption(state, payload) {
    state.prismVariables[payload.name].currentOption = payload.value
  }
}
