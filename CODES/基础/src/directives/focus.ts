import type { App } from 'vue';

export default function (app: App<Element>) {
  app.directive('focus', (el) => {
    el.focus();
  });
}
