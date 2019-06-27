<template>
  <!-- <li>
    <a></a>
    <ul>
      <li>
        <a></a>
        <ul></ul>
      </li>
    </ul>
  </li> -->
  <li>
    <a @click = "toggle">{{list.title}}
      <span></span>
    </a>
    <ul v-show = "open">
      <treeMenu v-for = "list in list.children" :key = "list.title" :list = "list"></treeMenu>
    </ul>
  </li>
</template>

  

<script>
export default {
  name: "treeMenu",
  data() {
    return {
      open: false //默认不显示
    };
  },
  props: ["list"],
  methods: {
    toggle() {
      if (this.list.children) {
        console.log(this.list.children);
        this.open = true;
      } else {
        this.open = false;
      }
    }
  }
};
</script>


<style scoped>
</style>
