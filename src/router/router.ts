import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import MyId from "@/components/game_id/id.vue";
import Popular from "@/components/popular_games/popular_games.vue"
const routes = [
    {
        path: '/',
        component: Home,
      },
      {
        path: '/popular',
        component: Popular,
      },
      {
        path: '/:title/:id',
        component: MyId,
      },

]
const router = createRouter({
    routes,
    history: createWebHistory()
})
export default router;