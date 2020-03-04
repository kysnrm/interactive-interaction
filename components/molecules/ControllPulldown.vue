<template>
  <div class="controll-pulldown">
    <div class="pulldown-name">
      redControll
    </div>
    <base-pulldown />
  </div>
</template>

<script>
import BasePulldown from '../atoms/BasePulldown'

export default {
  components: {
    BasePulldown
  }
}
</script>

<style lang="scss" scoped>
.controll-pulldown {
  display: flex;
}
.pulldown-name {
  padding-top: 0.5rem;
  margin-right: 0.5rem;
}
.base-pulldown {
  flex: 1;
}
</style>
