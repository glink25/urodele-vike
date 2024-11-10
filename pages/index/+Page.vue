<template>
  <h1>My Vike app</h1>
  This page is:
  <ul>
    <a v-for="item in pages" :href="`/posts/${item.id}`">{{ item.title }}</a>
  </ul>
</template>

<script lang="ts" setup>
import { useData } from "vike-vue/useData";
// import type { Data } from "./+data.js";

const { data: pages } = useData<any>();
</script>
