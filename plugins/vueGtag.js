import Vue from 'vue'
import VueGtag from 'vue-gtag'

import config from '../site.config'


export default ({ app }) => {
  const getGDPR = localStorage.getItem('GDPR:accepted');

  Vue.use(
    VueGtag, {
      config: {
        id: config.googleAnalyticsV4.id
      },
      bootstrap: getGDPR === 'true',
      appName: 'My portfolio',
      enabled: getGDPR === 'true',
      pageTrackerScreenviewEnabled: true

    }, app.router);
}
