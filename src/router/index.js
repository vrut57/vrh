import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Homepage from '@/components/Homepage';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Resources from '@/components/Resources';
import NewsEvents from '@/components/Newsevents';
import Donate from '@/components/Donate';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'About',
      component: About,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery,
    },
    {
      path: '/resources',
      name: 'Resources',
      component: Resources,
    },
    {
      path: '/newsandevents',
      name: 'Newsandevents',
      component: NewsEvents ,
    },
    {
      path: '/donate',
      name: 'Donate',
      component: Donate,
    },
  ],
});
