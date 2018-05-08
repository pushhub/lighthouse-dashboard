import Vue from 'vue';
import App from './App';
import VueResorce from 'vue-resource';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';
import VueCookie from 'vue-cookie';
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';

import AuthPlugin from './plugins/AuthPlugin';
import APIPlugin from './plugins/APIPlugin';
import ToastPlugin from './plugins/ToastPlugin';

import router from './router';
import store from './store';

import Loader from './components/loader';
import translations from './translations';

import '@/assets/scss/main.scss';

import {
    refreshInterval,
    dateFormat,
    layout,
    defaultBranch,
    selectableBranches,
    buildStatusInterval,
    apiEndpoint,
    dateShortFormat,
    chartColors,
    reportCategories,
    versionUpdateInterval,
    whitepageAlerts,
    diffAlerts,
} from './config';

Vue.config.productionTip = false;

Vue.config.refreshInterval = refreshInterval;
Vue.config.dateFormat = dateFormat;
Vue.config.layout = layout; // list | grid
Vue.config.defaultBranch = defaultBranch;
Vue.config.selectableBranches = selectableBranches;
Vue.config.buildStatusInterval = buildStatusInterval;
Vue.config.apiEndpoint = apiEndpoint;
Vue.config.dateShortFormat = dateShortFormat;
Vue.config.chartColors = chartColors;
Vue.config.reportCategories = reportCategories;
Vue.config.versionUpdateInterval = versionUpdateInterval;
Vue.config.whitepageAlerts = whitepageAlerts;
Vue.config.diffAlerts = diffAlerts;

Vue.component('loader', Loader);

if (process.env.RAVEN_DSN) {
    Raven
        .config(process.env.RAVEN_DSN)
        .addPlugin(RavenVue, Vue)
        .install();
}

Vue.use(VueResorce);
Vue.use(VueRouter);
Vue.use(VueI18n);
Vue.use(VueCookie);

Vue.use(APIPlugin, {
    api: Vue.config.apiEndpoint,
    branch: Vue.config.defaultBranch,
});
Vue.use(ToastPlugin);
Vue.use(AuthPlugin);

Vue.http.interceptors.push((request) => {
    if (Vue.auth.isAuthenticated()) {
        request.headers.set('Authorization', `Bearer ${Vue.auth.token}`);
    }
});

const i18n = new VueI18n({
    locale: 'en', // set locale
    messages: translations,
});

M.AutoInit();

new Vue({
    el: '#app',
    router,
    i18n,
    store,
    components: { App },
    template: '<App/>',
});
