// router.js

import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from "./components/LandingPage.vue"
import LoginComp from "./components/loginPage.vue"
import OrderDetail from "./components/orderDetailPage.vue"
import ThumbnailComp from "./components/ThumbnailComp.vue"
import CheckoutComp from "./components/checkoutComp.vue"
import ListComp from "./components/ListComp.vue"
import OrderConfirmationComp from './components/orderConfirmation.vue'
import CartComp from "./components/CartComp.vue"

const routes = [
    {
        path: '/',
        component: LandingPage,
    },
    {
        path : '/checkout',
        component:CheckoutComp,
    },
    {
      path : '/productList',
      component:ListComp,
  },

  {
    path: '/loginPage',
    component: LoginComp,
    
  },
  {
    path: '/orderdata',
    component: OrderDetail,
    meta: { requiresAuth: true },
  },
  {
    path: '/thumbnail/:id',
    name:"thumbnail",
    component: ThumbnailComp,
    props:true,
  },
  {
    path: '/OrderConfirmation',
    component: OrderConfirmationComp,
    name: 'OrderConfirmation',
  },
  {
    path: '/cart',
    component: CartComp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  });

//   router.beforeEach((to, from, next) => {
//     const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));

//     if (to.matched.some((record) => record.meta.requiresAuth) && !isLoggedIn) {
//         // Redirect to the login page if not logged in
//         next('/loginPage');
//     } else {
//         next();
//     }
// });

router.beforeEach((to, from, next) => {
  const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));

  // Check if the route requires authentication
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Redirect to the login page if not logged in
    if (!isLoggedIn) {
      next('/loginPage');
    } else {
      next(); // Continue with the normal navigation
    }
  } else if (to.path === '/loginPage' && isLoggedIn) {
    // Redirect to the home page instead of the login page if logged in and trying to access the login page
    next('/');
  } else {
    next(); // Continue with the normal navigation
  }
});





export default router;
