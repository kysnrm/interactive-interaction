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
      valueOptions: ['hoge', 'fuga'],
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
.pulldown-main {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid $color-white;
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
  margin-bottom: 0.375rem;
}
.pulldown-options {
  display: none;
  &.open {
    display: block;
  }
}
</style>

<style lang="scss">
.pulldown-main {
  .pulldown-icon .material-design-icon__svg {
    transition: 0.2s;
  }
  &.open .pulldown-icon .material-design-icon__svg {
    transform: rotate(-180deg);
  }
}
</style>
