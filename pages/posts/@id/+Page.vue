<template>
  <div v-html="data.html"></div>
</template>
<script lang="ts" setup>
import { useData } from "vike-vue/useData";
import { type Data } from "./+data";

const data = useData<Data>();
</script>
<script lang="ts">
import { getPageRoutes } from "./+data";
export const onBefore = () => {
  return getPageRoutes();
};
</script>
