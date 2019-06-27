import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import form from "@/components/form/form"  //引入
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'form',
      component: form
    }
  ]
})
