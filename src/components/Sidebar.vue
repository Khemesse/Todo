<template>
  <nav class="flex flex-col w-48 p-4 bg-teal-500">

      <ul>
        <li
          class="flex items-center p-2"
          v-for="list in lists"
          :key="list.id"
        >
        <button @click="updateListId(list.id)" class="text-white">List{{list.id}}</button>
        </li>
      </ul>

    <router-link to="/"><p class="text-white">Home</p></router-link>
    <router-link to="/login"><p class="text-white">Login</p></router-link>
  </nav>
</template>

<script>
import { store } from "../store/index.js";

export default {
  name: "mySideBar",
  data() {
    return {
      lists: store.state.lists,
    };
  },
  methods: {
    updateListId(id) {
      this.$emit('change-list-id', id);
    },
  }
};
</script>
