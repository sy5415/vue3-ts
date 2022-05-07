import { createApp } from "vue";
import App from "./App.vue";
//这里引入封装的请求函数
import hyhyRequest from "./test";

hyhyRequest.get({ url: "/contentlist" }).then((res) => {
  console.log(res);
});

createApp(App).mount("#app");
