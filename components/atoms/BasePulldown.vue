<template>
  <div>
    <div class="pulldown-main">
      {{ valueOptions[currentValue] }}
    </div>
    <div class="pulldown-options">
      <div v-for="(option, index) in valueOptions" :key="index">
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
      valueOptions: ['hoge', 'fuga']
    }
  }
}
</script>
