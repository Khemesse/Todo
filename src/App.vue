<template>
  <div class="home flex">
    <img alt="Vue logo" src="./assets/logo.png">
      <mySideBar v-on:change-list-id="changeListId($event)" />
      <TodoList />
    </div>
</template>

<script>

import mySideBar from './components/Sidebar'
import TodoList from './components/TodoList'
export default {
  name: 'App',
  components: {
    mySideBar,
    TodoList,

  },
  data() {
    return {
      listId: 1,
    };
  },
  methods: {
    changeListId(id) {
      this.listId = id;
    }
  }

}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
