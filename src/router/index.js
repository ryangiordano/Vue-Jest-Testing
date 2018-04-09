import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestComponent from '@/components/TestComponent/TestComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      component: TestComponent
    },
    {
      path: '/',
      component: HelloWorld
    }

  ],
  mode:'history'
})
