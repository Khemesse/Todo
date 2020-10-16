import { createWebHistory, createRouter } from "vue-router";
import Login from "../components/Login";
import TodoList from "../components/TodoList";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    name: "TodoList",
    component: TodoList,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
