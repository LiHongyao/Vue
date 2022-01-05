<!--
 * @Author: Lee
 * @Date: 2022-01-05 06:46:03
 * @LastEditors: Lee
 * @LastEditTime: 2022-01-05 22:26:03
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
<!-- <script setup lang="ts">
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
</template> -->

<!-- 过渡模式 -->
<!-- <script setup lang="ts">
import { ref, computed } from 'vue';

// -- 定义 buttonState 形状（TS语法）
type ButtonStateType = 'disable' | 'enable';
// -- 定义 buttonState 变量，其类型为 ButtonStateType
const buttonState = ref<ButtonStateType>('disable');
</script>

<template>
  <transition mode="out-in">
    <button type="button" v-if="buttonState === 'enable'" @click="buttonState = 'disable'">禁用</button>
    <button type="button" v-else @click="buttonState = 'enable'">启用</button>
  </transition>
</template>

<style scoped>

@keyframes move-in {
  from {
    transform: translateX(100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

button {
  
  position: absolute;
  top: 50px;
  left: 50px;
}
.v-enter-active {
  animation: move-in 1s linear;
}
.v-leave-active {
  animation: move-in 1s linear reverse;
}
</style> -->

<!-- 列表进入&离开过渡 -->
<!-- <script setup lang="ts">
import { reactive } from 'vue';

const list = reactive<number[]>([1, 2, 3, 4, 5, 6]);
let nextNum = 7;

// methods
const randomIndex = () => Math.floor(Math.random() * list.length);
// events
const onInsert = () => {
  list.splice(randomIndex(), 0, ++nextNum);
};
const onRemove = () => {
  list.splice(randomIndex(), 1);
};
</script>

<template>
  <button type="button" @click="onInsert">INSERT</button>
  <button type="button" @click="onRemove">REMOVE</button>
  <transition-group name="list" tag="div" class="list">
    <div class="item" v-for="item in list" :key="item">
      {{ item }}
    </div>
  </transition-group>
</template>

<style scoped>
button {
  margin-right: 10px;
  margin-bottom: 16px;
  cursor: pointer;
}
.item {
  display: inline-block;
  margin-right: 10px;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style> -->

<!-- gsap -->
<script setup lang="ts">
import { reactive } from 'vue';
import gsap from 'gsap';

const state = reactive({
  count: 100,
});

const onPlus = () => {
  gsap.to(state, {
    duration: 0.75 /** 持续时间 */,
    count: state.count + Math.random() * 100 /** 变更key-value */,
    ease: 'sine' /** 速度曲线 */,
  });
};
</script>

<template>
  <button type="button" style="cursor: pointer" @click="onPlus">增加数额</button>
  <p>&yen;&nbsp;{{ state.count.toFixed(2) }}</p>
</template>
