import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
  routes: [
    ...Vue.udock('plugins.auto-router.routes')
  ]
})
export default router
