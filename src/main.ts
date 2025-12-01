import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./assets/main.css";
import Markdown from 'vue3-markdown-it';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Markdown);

app.mount("#app");
