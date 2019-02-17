import Vue from "vue";
import * as components from "./components";
const XPlugin = {
  install: function(Vue) {
    // Register component plugins
    for (let plugin in components) {
      Vue.use(components[plugin]);
    }
  }
};

vueUse(XPlugin);

export default XPlugin;
