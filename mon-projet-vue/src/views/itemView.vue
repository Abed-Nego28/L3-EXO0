<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import TodoListView from "@/App.vue";
import {useTodoListStore} from "@/stores/todoList";
import {getCurrentInstance, onBeforeMount, ref} from "vue";

const toDoListStore = useTodoListStore();
const instance = getCurrentInstance();

const todoList = ref({ name: '', desc: '' })

onBeforeMount(() => {
    const params = instance?.proxy?.$route.params || '{}'
  if (params === '{}'){
    return
  }
  console.log(typeof params.id)
    const todoListItem = toDoListStore.getTodoLists.find(item => item.id === parseInt( params.id as string))
    if (todoListItem) {
      todoList.value = { ...todoListItem };
    }

})
</script>

<template>
    <div class="todolist-item">
      <h2>To Do Details</h2>
      <div v-if="todoList">
        <h1>Name: {{ todoList.name }}</h1>
        <h2>Description: {{ todoList.desc }}</h2>
      </div>
      <router-link to="/todolist">Back to ToDoList</router-link>
    </div>


</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>