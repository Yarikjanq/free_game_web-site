import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import MyId from "@/components/game_id/id.vue";
const routes = [
{
    path: '/',
    component: Home
},
{
    path: '/:id',
    component: MyId
},

]
const router = createRouter({
    routes,
    history: createWebHistory()
})
export default router;