import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      redirect: 'home',
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('./views/login.vue'),

    },
    // admin
    {
      path: '/admin',
      name: 'admin',
      component: () => import('./components/dashboard.vue'),
      children: [
        {
          path: 'products',
          name: 'products',
          component: () => import('./views/products.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'order',
          name: 'Order',
          component: () => import('./views/order.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'coupon',
          name: 'coupon',
          component: () => import('./views/coupon.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'simulate_order',
          name: 'simulateOrder',
          component: () => import('./views/simulateOrder.vue'),
        },
        {
          path: 'simulate_orderout/:orderId',
          name: 'simulateOrderout',
          component: () => import('./views/simulateOrderout.vue'),
        },
      ],
    },
    //
    {
      path: '*',
      name: 'Homedashboard',
      component: () => import('./views/Homedashboard.vue'),
      children: [
        {
          path: '/home',
          name: 'Home',
          component: () => import('./views/Home.vue'),
        },
        {
          path: 'productOrder',
          name: 'productOrder',
          component: () => import('./views/productOrder.vue'),
        },
        {
          path: 'product/:id',
          name: 'product',
          component: () => import('./views/product.vue'),
        },
        {
          path: 'customerorder',
          name: 'CustomerOrder',
          component: () => import('./views/CustomerOrder.vue'),
        },
        {
          path: 'orderout/:orderId',
          name: 'orderout',
          component: () => import('./views/OrderOut.vue'),
        },
      ],
    },
  ],
});
