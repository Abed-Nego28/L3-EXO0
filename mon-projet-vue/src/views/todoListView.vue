<script setup lang="ts">
import {reactive, ref} from "vue";
import { useTodoListStore } from '@/stores/todoList'

const toDoList = useTodoListStore();
const listToDo = toDoList.getTodoLists;

let listToDoList = ref(listToDo)
const todolist = reactive({
  name: "",
  desc: "",
})

const handleSubmit = () => {
  toDoList.addTodoList(todolist)
  console.log(todolist);
}

const handleDelete = (id: number) => {

    console.log(id)
    listToDoList.value = toDoList.removeTodoList(id);
}
</script>

<template>
  <div class="todolist">
    <h1>TodoList</h1>
    <br>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="name" >Name : </label>
        <input type="text" v-model="todolist.name">
      </div>
      <div>
        <label for="desc">Desc : </label>
        <input type="text" v-model="todolist.desc">
      </div>
      <button>Submit</button>

    </form>
    <ol>
      <li v-for="item in listToDoList" :key="item.id">
        <router-link :to="{ name: 'todolist-item', params: { id: item.id }}">
          {{ item.name }} {{ item.desc }}
        </router-link>
        <button @click="handleDelete(item.id)">Delete</button>
      </li>
    </ol>
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