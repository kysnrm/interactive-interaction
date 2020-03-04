<template>
  <div class="base-pulldown">
    <div
      class="pulldown-main"
      :class="{ open: showOptions }"
      @click="toggleShowOptions"
    >
      <div class="pulldown-current_value">
        {{ valueOptions[currentValue] }}
      </div>
      <menu-down-icon class="pulldown-icon" />
    </div>
    <div class="pulldown-options" :class="{ open: showOptions }">
      <div
        v-for="(option, index) in valueOptions"
        :key="index"
        class="pulldown-options-item"
        :class="{ active: index === currentValue }"
        @click="selectOption(index)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
import MenuDownIcon from 'vue-material-design-icons/MenuDown.vue'

export default {
  components: {
    MenuDownIcon
  },
  data: () => {
    return {
      currentValue: 0,
      valueOptions: ['hoge', 'fuga', 'piyo'],
      showOptions: false
    }
  },
  methods: {
    toggleShowOptions() {
      this.showOptions = !this.showOptions
    },
    selectOption(key) {
      this.currentValue = key
      this.showOptions = false
    }
  }
}
</script>

<style lang="scss" scoped>
// main
.base-pulldown {
  position: relative;
}
.pulldown-main {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid $color-white;
  border-radius: 0.25rem 0.25rem 0 0;
  &:hover {
    background-color: $color-gray;
    cursor: pointer;
  }
  &.open {
    background-color: $color-gray;
  }
}
.pulldown-current_value {
  padding: 0.5rem 0.25rem;
}
.pulldown-icon {
  font-size: 1.5rem;
  margin: 0 0.25rem 0.375rem 0;
}

// options
.pulldown-options {
  width: 100%;
  padding: 0.5rem 0;
  display: none;
  position: absolute;
  background-color: $color-gray;
  box-shadow: 0 0.375rem 0.375rem rgba(0, 0, 0, 0.3);
  border-radius: 0 0 0.25rem 0.25rem;
  z-index: 9999;
  &.open {
    display: block;
  }
}
.pulldown-options-item {
  padding: 0.5rem 0.25rem;
  &:hover {
    background-color: lighten($color-gray, $amount: 16%);
    cursor: pointer;
  }
  &.active {
    background-color: $color-primary;
    color: $color-secondary;
  }
}
</style>

<style lang="scss">
.pulldown-main {
  .pulldown-icon .material-design-icon__svg {
    transition: 0.3s;
  }
  &.open .pulldown-icon .material-design-icon__svg {
    transform: rotate(-180deg);
  }
}
</style>
