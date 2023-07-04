import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Carousel3d from './components/ProjectCarousel.vue'

createApp(App).use(Carousel3d).use(store).use(router).mount('#app')



