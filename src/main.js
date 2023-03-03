import { createApp } from 'vue'
import App from './App.vue'
import { router } from "./router";

import "@fontsource/mulish/index.css";
import "@fontsource/black-han-sans/index.css";


createApp(App).use(router).mount('#app')