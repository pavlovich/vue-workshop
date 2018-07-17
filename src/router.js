import Vue from 'vue';
import Router from 'vue-router';
import Blank from './views/Blank.vue';
import About from './views/About.vue';
import TasksView from './views/TasksView.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Blank
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: TasksView
    }
  ],
  mode: 'history'
})
