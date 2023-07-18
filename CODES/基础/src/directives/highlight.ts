import type { App } from 'vue';

export default function (app: App<Element>) {
  app.directive('highlight', (el) => {
    el.style.backgroundColor = 'yellow';
  });
}
