import Vue from 'vue';
import App from './views/App.vue';

/* * *    SETUP VUE APPLICATION   * * */
const elementID="application";
const config={
  el: `#${elementID}`,
  render:h=>h( App )
};


/* * *    VUE ROUTER    * * */
import VueRouter from 'vue-router';
import routes from './router/routes.js';
Vue.use( VueRouter );
config.router=new VueRouter({ mode: 'hash', routes })

/* * *    VUEX - STORE    * * */
import Vuex from "vuex";
import storeConfig from './store/store.js';
Vue.use( Vuex );
config.store=new Vuex.Store( storeConfig );



/* * *      INSTANTIATE THE COMPONENT    * * */
new Vue( config );
