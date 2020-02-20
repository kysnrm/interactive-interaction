<template>
  <div class="slider">
    <div class="bar">
      <div class="bar-left"></div>
    </div>
    <div class="dot"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.slider {
  padding: 5px 0;
  width: 13rem;
  height: 1rem;
}
.bar {
  width: 100%;
  height: 6px;
  background-color: $color-gray;
  border-radius: 3px;
}
.bar-left {
  width: 50%;
  height: 100%;
  background-color: $color-primary;
  border-radius: 3px 0 0 3px;
}
.dot {
  width: 1rem;
  height: 1rem;
  background-color: $color-white;
  border-radius: 0.5rem;
  position: relative;
  top: -10px;
}
</style>
