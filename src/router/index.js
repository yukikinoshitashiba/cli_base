import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/clock',
    name: 'Clock',
    component: () => import('../views/Clock.vue')
  },
  {
    path: '/webapi',
    name: 'WebApi',
    component: () => import('../views/WebApi.vue')
  },
  {
    path: '/webapi-img',
    name: 'WebApiImg',
    component: () => import('../views/WebApiImg.vue')
  },
  {
    path: '/vuex',
    name: 'VuexComp',
    component: () => import('../views/VuexComp.vue')
  },
  {
    path: '/dynamic',
    name: 'DynamicComp',
    component: () => import('../views/DynamicComp.vue')
  },
  {
    path: '/cssanim1',
    name: 'CssAnim1',
    component: () => import('../views/CssAnim1.vue')
  },
  {
    path: '/cssanim2',
    name: 'CssAnim2',
    component: () => import('../views/CssAnim2.vue')
  },
  {
    path: '/transition',
    name: 'VueAnim',
    component: () => import('../views/VueAnim.vue')
  },
  {
    path: '/setting-menu',
    name: 'SettingMenu',
    component: () => import('../views/SettingMenu.vue')
  },
  {
    path: '/stop-watch',
    name: 'StopWatch',
    component: () => import('../views/StopWatch.vue')
  },
  {
    path: '/gmaps',
    name: 'Gmaps',
    component: () => import('../views/Gmaps.vue')
  },
  {
    path: '/link',
    name: 'Link',
    component: () => import('../views/Link.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  //別ページコンポーネントへのページ内リンク設定
  scrollBehavior (to) {
    if (to.hash) {
      return {
          selector: to.hash,
          offset: { x: 0, y: 0 }
      }
    }
    return { x: 0, y: 0 }
  }
})

export default router
