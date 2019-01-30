import Vue from 'vue';
import { HTTP } from 'meteor/http'
// **************************
import { RouterFactory, nativeScrollBehavior } from 'meteor/akryum:vue-router2'
const routerFactory = new RouterFactory({
  mode: 'history',
  scrollBehavior: nativeScrollBehavior,
})
import '../imports/routes';
// **************************

import App from './App.vue';


import './main.html';
Meteor.startup(() => {
  const router = routerFactory.create();
  new Vue({
    el: '#app',
    router,
    ...App,
  });
});