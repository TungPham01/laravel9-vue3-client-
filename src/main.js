import { createApp } from "vue";
import router from "./routers/index";
import App from "./App.vue";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap-utilities.min.css';

const app = createApp(App);
app.use(router);
app.mount("#app");
