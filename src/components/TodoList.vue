<template>
  <img alt="Vue logo" src="../assets/logo.png">
  <div class="centre">
  <h2>Ma journée</h2>
  <h2 class="text-gray-600">{{ new Date().toLocaleDateString() }}</h2>

  <input v-model= "newTask" type="text" placeholder="Ajouter nouvelle tâche" @keydown.enter="AddTask"/>
  <div>
  <ul>
  <li v-for="task in filterTodo" :key="task">
  <input type="checkbox" id="first" name="first" v-model= "task.completed">
    <label for="first">{{task.name}}</label>
    <button @click="removeTask(task)">delete</button>

  </li >
  </ul>
  </div>
  <div>
  <ul>
    <li><button @click.prevent="filter='all'">All</button></li>
       <li><button @click="filter='notCompleted'">Not Completed</button></li>
       <li><button @click="filter='completed'">Completed</button></li>
  </ul>
  </div>
  </div>
</template>

<script>

import {store} from "../store";

export default {
  name: "TodoList",
  store,
  data() {
    return {
      newTodo: "",
      filter: "all",
      listId: this.$parent.listId,
      listTask: store.state.lists[this.$parent.listId-1].todos,
    };
  },
  methods:{
    AddTask(){
      this.listId = this.$parent.listId-1;
        this.listTask = store.state.lists[this.$parent.listId-1].todos;
        if (this.newTodo) {
          this.listTask.push({ name: this.newTodo, completed: false });
          this.newTodo = "";
        }
    },
    removeTask(todo){
      var index= this.listTask.indexOf(todo);
      this.listTask.splice(index,1);
        this.newTodo="";
    },

  },
  computed: {
      filterTodo() {
        let listTask = store.state.lists[this.$parent.listId-1].todos;
        if (this.filter === "completed")
          return listTask.filter(todo => todo.completed);
        else if (this.filter === "notCompleted")
          return listTask.filter(todo => !todo.completed);
        else return listTask;
      },

  }
}

</script>
<style>
li{
  list-style-type:none;
}

</style>
