import { check } from "../utils/auth";

function install(Vue, options = {}) {

  Vue.directive(options.name || "auth", {
    // 指令定义对象的钩子函数inserted
    inserted(el, binding) {
      if (!check(binding.value)) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    }
  });

}

export default { install };
