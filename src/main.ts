import Vue from 'vue';
import VuePlyr from 'vue-plyr';
import { App } from './app';
import vuetify from './app/vuetify';
import i18n from './app/i18n';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'vue-plyr/dist/vue-plyr.css';
import './app/assets/styles/main.scss';

Vue.config.productionTip = false;

Vue.use(VuePlyr, {
  plyr: {},
});

new Vue({
  i18n,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
