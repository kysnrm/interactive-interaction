<template>
  <div>
    <div class="pulldown-main" @click="toggleShowOptions">
      {{ valueOptions[currentValue] }}
    </div>
    <div class="pulldown-options" :class="{ active: showOptions }">
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
export default {
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
.pulldown-options {
  display: none;
  &.active {
    display: block;
  }
}
</style>
