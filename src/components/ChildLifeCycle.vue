<template>
  <h1>Child life cycle</h1>
</template>

<script>
export default {
  mounted() {
    this.hello = setInterval(() => {
      console.log("hello vuejs");
    }, 1000);
  },
  beforeUnmount() {
    console.log("beforeUnmount");
    clearInterval(this.hello);
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>

<style></style>
