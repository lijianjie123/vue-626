<template>
  <div>
    <input type="text"  v-bind = "$attrs">
  </div>
</template>

<script>
export default {
  name: "Input",
  data() {
    return {
      msg: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
