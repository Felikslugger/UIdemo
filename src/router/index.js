import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
// import AboutView from '../views/AboutView.vue';
import ListTwo from '../views/ListTwo.vue';
import ListOne from '../views/ListOne.vue';
import IntroduceView from '../views/IntroduceView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/ListTwo',
    name: 'listtwo',
    // component: () => import('../views/ListTwo.vue'),
    component: ListTwo,
  },
  {
    path: '/ListOne',
    name: 'listone',
    // component: () => import('../views/ListTwo.vue'),
    component: ListOne,
  },
  {
    path: '/IntroduceView',
    name: 'introduceview',
    // component: () => import('../views/ListTwo.vue'),
    component: IntroduceView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
