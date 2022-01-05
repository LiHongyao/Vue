<!--
 * @Author: Lee
 * @Date: 2022-01-05 06:46:03
 * @LastEditors: Lee
 * @LastEditTime: 2022-01-05 08:40:08
-->

<!-- css 过渡 -->
<!-- <script setup lang="ts">
import { reactive } from 'vue';

const classNames = reactive({
  transition: false,
});

const onButtonTap = () => {
  classNames.transition = !classNames.transition;
};
</script>
<template>
  <div class="box" :class="classNames"></div>
  <button type="button" @click="onButtonTap">切换</button>
</template>
<style scoped>
.box {
  width: 100px;
  height: 100px;
  margin-bottom: 16px;
  background-color: red;
  transition: 0.5s background-color linear;
}
.transition {
  background-color: blue;
}
</style> -->

<!-- animation in css -->
<!-- <script setup lang="ts">
import { reactive } from 'vue';

const classNames = reactive({
  ani: false,
});

const onButtonTap = () => {
  classNames.ani = true;
};
</script>
<template>
  <div class="box" :class="classNames"></div>
  <button type="button" @click="onButtonTap">启用动画</button>
</template>
<style scoped>
@keyframes ani {
  to {
    transform: translateX(300px);
    background-color: blue;
  }
}
.box {
  width: 100px;
  height: 100px;
  margin-bottom: 16px;
  background-color: red;
}
.ani {
  animation: ani 2s linear 1 forwards;
}
</style> -->

<!-- transition in vue -->

<!-- <script setup lang="ts">
import { ref } from 'vue';
const visible = ref(true);
</script>

<template>
  <button type="button" @click="visible = !visible">Toggle</button>
  <transition name="slide-fade">
    <div v-show="visible" class="box"></div>
  </transition>
</template>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  margin-top: 16px;
  background-color: red;
}
/* 可以为进入和离开动画设置不同的持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 0.75s ease-out;
}

.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(300px);
  opacity: 0;
}
</style> -->

<!-- animation in css -->
<!-- <script setup lang="ts">
import { ref } from 'vue';
const visible = ref(true);
</script>

<template>
  <button type="button" @click="visible = !visible">Toggle</button>
  <transition name="bounce">
    <div v-show="visible" class="box"></div>
  </transition>
</template>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  margin-top: 16px;
  background-color: red;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style> -->

<!-- animate.css -->
<script setup lang="ts">
import { ref } from 'vue';
const visible = ref(true);
</script>

<template>
  <button type="button" @click="visible = !visible">Toggle</button>
  <transition
    enter-active-class="animate__animated animate__bounceIn"
    leave-active-class="animate__animated animate__slideOutRight"
  >
    <h1 v-show="visible">Animate.css</h1>
  </transition>
</template>
