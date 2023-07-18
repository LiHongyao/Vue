<script setup lang="ts">
import { useMouse, useFetch } from './hooks';
const { x, y } = useMouse();
const url = 'https://api.github.com/users';
interface UserProps {
  id: number;
  login: string;
  avatar_url: string;
}
const { loading, error, data, fetchData } = useFetch<UserProps>(url);
</script>

<template>
  <p>Mouse position is at: {{ x }}, {{ y }}</p>
  <div>
    <button @click="fetchData">Fetch Data</button>
    <div v-if="loading">Loading...</div>
    <div v-if="error">Error: {{ error }}</div>
    <ul v-if="data">
      <li v-for="item in data" :key="item.id">
        <img :src="item.avatar_url" width="30" />
        <span style="margin-left: 6px">{{ item.login }}</span>
      </li>
    </ul>
  </div>
</template>
