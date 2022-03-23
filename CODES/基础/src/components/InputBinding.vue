<!--
 * @Author: Lee
 * @Date: 2022-01-04 20:41:31
 * @LastEditors: Lee
 * @LastEditTime: 2022-01-05 14:29:30
-->

<!-- input -->
<!-- <script setup lang="ts">
import { ref } from 'vue';
const msg1 = ref('');
const msg2 = ref('');
</script>


<template>
  <form action="" name="myForm">
    <div class="demo-1">
      <p>input：</p>
      <input type="text" v-model="msg1" placeholder="请输入内容" />
      <p>您输入的内容是：{{ msg1 }}</p>
    </div>
    <hr />
    <div class="demo-2">
      <p>textarea：</p>
      <textarea type="text" v-model="msg2" placeholder="请输入内容"></textarea>
      <p>您输入的内容是：{{ msg2 }}</p>
    </div>
  </form>
</template> -->

<!-- 单选 -->
<!-- <script setup lang="ts">
import { ref } from 'vue';
const checkVal = ref('');
</script>

<template>
  <form action="" name="myForm">
    <label>性别：</label>

    <label>男</label>
    <input type="radio" value="男" v-model="checkVal" />

    <label>女</label>
    <input type="radio" value="女" v-model="checkVal" />

    <label>保密</label>
    <input type="radio" value="保密" v-model="checkVal" />

    <p>您的选择是：{{ checkVal }}</p>
  </form>
</template> -->

<!-- 多选 -->
<!-- <script setup lang="ts">
import { ref } from 'vue';
// 该变量值类型为数组类型
const heros = ref<Array<string>>([]);
</script>

<template>
  <form action="" name="myForm">
    <p>下列英雄角色中定位为法师的是（多选）：</p>

    <label>诸葛亮</label>
    <input type="checkbox" value="诸葛亮" v-model="heros" />

    <label>露娜</label>
    <input type="checkbox" value="露娜" v-model="heros" />

    <label>虞姬</label>
    <input type="checkbox" value="虞姬" v-model="heros" />

    <label>貂蝉</label>
    <input type="checkbox" value="貂蝉" v-model="heros" />

    <label>吕布</label>
    <input type="checkbox" value="吕布" v-model="heros" />

    <p>您的选择是：{{ heros }}</p>
  </form>
</template> -->

<script setup lang="ts">
import { ref } from 'vue';
const selected = ref('');
</script>

<template>
  <form action="" name="myForm">
    <select name="mySel" v-model="selected">
      <option value="">-请选择您所在的城市-</option>
      <option value="成都">成都</option>
      <option value="上海">上海</option>
      <option value="北京">北京</option>
      <option value="深圳">深圳</option>
      <option value="杭州">杭州</option>
      <option value="昆明">昆明</option>
    </select>
  </form>
  <p>您所在的城市是：{{ selected }}</p>
</template>
