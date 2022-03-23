<script setup lang="ts">
  import Header from '@/components/Header/index.vue';
</script>

<template>
  <div class="global-layout">
    <Header></Header>
    <main class="page-main">
      <router-view></router-view>
    </main>
  </div>
</template>

<style lang="scss" scoped>
  .global-layout {
    display: flex;
    flex-direction: column;
    height: 100%;

    .page-main {
      flex: 1;
      overflow-y: auto;
      background-color: #f8f8f8;
    }
  }
</style>
