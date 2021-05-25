import {
  createRouter,
  createWebHashHistory
} from "vue-router"
import Main from "../views/Main.vue"
const NotFound = () => import("../views/404.vue")
const Study = () => import("../views/study")

const routes = [{
    path: "/",
    name: "Main",
    component: Main
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound
  },
  {
    path: "/study",
    name: "NotFound",
    component: Study
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router