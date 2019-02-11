import Vue from 'vue'
import Router from 'vue-router'
import Tabla from '@/components/Tabla'
import Formulario from '@/components/Formulario'
import EditarFormulario from '@/components/FormularioEditar'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: "active",
  routes: [
    {
      path: '/Tabla',
      name: 'Tabla',
      component: Tabla
    },
    {
      path: '/formulario',
      name: 'formulario',
      component: Formulario
    },
    {
      path: '/EditarFormulario',
      name: 'EditarFormulario',
      component: EditarFormulario
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
