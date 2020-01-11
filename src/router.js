import Vue from 'vue'
import Router from 'vue-router'

//auth routes components
import Login from './views/auth/Login.vue'
import Register from './views/auth/Register.vue'
import Auth from './views/auth/Auth'
import Cliente from './views/auth/Cliente'
import Empresa from './views/auth/Empresa'

//routes home page
import Busqueda from './views/home/Busqueda'
import Home from './views/home/Home.vue'

//routes Account
import Profile from './views/Account/Profile'
import Account from './views/Account/Account'
import CreditCard from './views/Account/CreditCard'

import Aliados from './views/Aliados'
import Productos from './views/Productos'

//error 404
import NotFound from './views/NotFound'
import ModalProducto from '@/views/ModalProducto'

import Admin from './views/admin/Admin'
import Dashboard from './views/admin/Dashboard';
import Usuarios from './views/admin/Usuarios';
import Notificaciones2 from './views/admin/Notificaciones';
import Aliados2 from './views/admin/Aliados';
import Ventas from './views/admin/Ventas';
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    //ruta home page
    {
      path: '/',
      name: 'home',
      component: Home,
    },


    //admin
    {
      path: '/admin',
      name:'admin',
      component: Admin,

      children:[
        {
          path:'dashboard',
          name:'Dashboard',
          component:Dashboard
        },
        {
          path:'usuarios',
          name:'Usuarios',
          component:Usuarios,
        },
        {
          path:'aliados',
          name:'Aliados',
          component:Aliados2
        },
        {
          path:'notificaciones',
          name:'Notificaciones',
          component:Notificaciones2
        },
        {
          path:'ventas',
          name:'Ventas',
          component:Ventas
        }
      ]
    },
    {
      path:'/search',
      name:'busqueda',
      component:Busqueda
    },
    {
      path:'/aliados/:id',
      name:'aliados',
      component:Aliados,
      

      
      
    }, 
  
    {
      path:'/account',
      name:'account',
      component:Account,


      children:[
        {
          path:'profile',
          name:'profile',
          component:Profile
        },
        {
          path:'credit-card',
          name:'credit-card',
          component:CreditCard
        }
      ]
    },
    //rutas de autenticacion (login , registro)
    {
      path: '/auth',
      name: 'auth',
      component:Auth,

      //middleware de proteccion de rutas si esta autenticado
      beforeEnter: (to, from, next) => {
        let isAuthenticated;
        try {
          isAuthenticated = JSON.parse(window.localStorage.auth);
          if(isAuthenticated.logeado){
            return next({ path: '/' });
          }else{
            return next();
          }
        } catch (error) {
          return next({ path: '/' });
        }
      },
      //rutas anidadas
      children:[
        {
          path: 'login',
          name: 'login',
          component:Login
        },
        {
          path: 'register',
          name: 'register',
          component:Register,

          children:[
            {
              path:'cliente',
              name:'cliente',
              component:Cliente
            },
            {
              path:'empresa',
              name:'empresa',
              component:Empresa
            }
          ]
        }
      ]
    },
    //ruta no encontrada
    {
      path: '*',
      name:"notFound",
      component:NotFound
    },
    {
      path:'/modal',
      name:"modal",
      component: ModalProducto

    },
    {
      path:'/producto/:ID_PRODUCTO',
      name: 'producto',
      component:Productos,
    },
  ],

  //configuracion para poder volver a rutas anteriores 
  //y guardar posicion de la ruta actual actual
  
  base: '/', // The base URL of the app
  linkActiveClass: 'router-link-active', // <router-link> default active class
  linkExactActiveClass: 'router-link-exact-active', // <router-link> default active class for exact matches
  scrollBehavior (to, from, savedPosition) {
    // native-like behavior when navigating with back/forward buttons
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  parseQuery: q => q, // custom query string parse
  fallback: true, // whether the router should fallback to hash mode
});
