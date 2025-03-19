import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/css/style.css";
import App from "./App.vue";
import router from "./router/router";
const app = createApp(App);
const pinia = createPinia();
app.use(router).use(pinia).mount("#app");
