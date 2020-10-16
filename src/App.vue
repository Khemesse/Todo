<template>
  <div class="home flex">
    <img alt="Vue logo" src="./assets/logo.png">
      <SideBar v-on:change-list-id="changeListId($event)" />
      <TodoList />
    </div>
</template>

<script>

import SideBar from './components/SideBar'
import TodoList from './components/TodoList.vue'
export default {
  name: 'App',
  components: {
    SideBar,
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
