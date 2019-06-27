import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import index from "@/components/form/index"; //引入

import tree from "@/components/tree/tree";
Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: "/",
    //   name: "index",
    //   component: index
    // }
    {
      path: "/",
      name: "tree",
      component: tree
    }
  ]
});
