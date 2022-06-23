import { createApp } from "vue";
import Die from "./components/Die.vue";
import Face from "./components/Face.vue";
import App from "./App.vue";

const app = createApp(App);

app.component("Die", Die);
app.component("Face", Face);
app.mount("#app");
