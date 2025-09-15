import { 
    createWebHistory, 
    createRouter,
    type RouteRecordRaw 
  } from 'vue-router';
  // 路由配置数组？
  const rootRoutes: RouteRecordRaw[] = [
    {
      path: '/home',
      //懒加载
      component: () => import('@/views/Home/Home.vue'),
      name: "home"
    },
    {
      path: '/discount',
      component: () => import('@/views/Discount/Discount.vue'),
      name: "discount"
    },
    
    {
      path: '/collection',
      component: () => import('@/views/Collection/Collection.vue'),
      name: "collection"
    },
    
    {
      path: '/my',
      component: () => import('@/views/My/My.vue'),
      name: "my"
    },
    {
      path: '/trip',
      component: () => import('@/views/Trip/Trip.vue'),
      name: "trip"
    },
  ]
  const routes:RouteRecordRaw[] = [
    {
      path: '/',
      name:"App",
      component:()=>import('@/views/TheRoot/TheRoot.vue'),
      redirect:'/home',
      children:rootRoutes
    }
  ]

  
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router