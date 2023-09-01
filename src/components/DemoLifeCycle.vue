<template>
  <div>
    <h1>Demo Lifecycle Component</h1>
    <input ref="myInput" type="text" />
    <p>{{ count }}</p>
    <button @click="handleIncrease" class="btn btn-success">Increase</button>
    <child-life-cycle v-if="count % 2 === 0"></child-life-cycle>
  </div>
</template>

<script>
import ChildLifeCycle from "./ChildLifeCycle.vue";
export default {
  components: { ChildLifeCycle },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleIncrease() {
      this.count++;
    },
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
    this.count = 2;
  },
  beforeMount() {
    console.log("beforeMount", this.$refs.myInput);
  },
  mounted() {
    console.log("mount", this.$refs.myInput); //document.getelementbyID : not use
    this.$refs.myInput.focus();
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
};
</script>

<style></style>
