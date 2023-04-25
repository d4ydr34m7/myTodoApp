<template>
  <div>
    <h1>Todo List</h1>
    <form>
      <label for="todo-input">Add tasks: </label>
      <input
        id="todo-input"
        type="text"
        v-model="newTodoText"
        @keypress.enter="addTodo"
      />
    </form>

    <div v-for="(todo, index) in todos" :key="todo._id">
      <input
        type="checkbox"
        :id="`todo-${index}`"
        v-model="todo.isDone"
        @change="updateTodoStatus(todo)"
      />
      <label :for="`todo-${index}`" v-bind:class="{ done: todo.isDone }">{{
        todo.text
      }}</label>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      todos: [],
      newTodoText: '',
    };
  },
  created() {
    this.fetchTodos();
  },
  mounted() {
    this.$nextTick(() => {
      document.getElementById('todo-input').focus();
    });
  },
  methods: {
    async fetchTodos() {
      try {
        const response = await axios.get(
          'https://todoapp-fc5j.onrender.com/todos',
        );
        this.todos = response.data;
      } catch (error) {
        console.error(error);
      }
    },

    async updateTodoStatus(todo) {
      if (!todo) {
        console.error('Todo object is undefined.');
        return;
      }

      try {
        await axios.put(`https://todoapp-fc5j.onrender.com/todos/${todo._id}`, {
          isDone: todo.isDone,
        });
      } catch (error) {
        console.error(error);
      }
    },

    async addTodo() {
      const todo = {
        text: this.newTodoText,
        isDone: false,
      };
      try {
        const response = await axios.post(
          'https://todoapp-fc5j.onrender.com/todos',
          todo,
        );
        this.todos.push(response.data);
        this.newTodoText = '';
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
