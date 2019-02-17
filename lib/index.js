import Vue from "vue";
import XTest from "./components/XTest";

export default {
  install(Vue) {
    Vue.component("XTest", XTest);
  }
};

export { XTest };
