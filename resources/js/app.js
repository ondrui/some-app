import "./bootstrap";

import "../sass/app.scss";

import * as bootstrap from "bootstrap";

import { createApp } from "vue";
import App from "./App.vue";
import router from './router';

let app = createApp(App).use(router);
app.mount("#app");
