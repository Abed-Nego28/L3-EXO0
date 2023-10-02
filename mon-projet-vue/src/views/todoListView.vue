<script setup lang="ts">
import text from "vue-component-type-helpers";

</script>

<template>
  <div class="todolist">
    <h1>TodoList</h1>
    <input type="text" v-model="text" placeholder="TodoList">
    <br>
    You typed: <b>{{ text }}</b>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>