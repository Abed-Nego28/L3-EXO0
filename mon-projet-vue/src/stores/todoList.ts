import { defineStore } from "pinia";

interface TodoList {
    name: string,
    desc: string
}

interface TodoListWithId extends TodoList {
    id: number
}

export const useTodoListStore = defineStore('todoList', {
    state: () => ({
        todoLists: [] as TodoListWithId[],
    }),
    getters: {
        getTodoLists: (state) => state.todoLists,
    },
    actions: {
        addTodoList(todoList: TodoList) {
            this.todoLists.push({
                ...todoList,
                id: this.todoLists.length + 1
            })
        },
        removeTodoList(id: number) {
            return this.todoLists = this.todoLists.filter((todo) => todo.id !== id);
        },
    }
})