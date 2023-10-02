import { createRouter, createWebHashHistory } from "vue-router";
const routes= [
    {
        name: "Welcome",
        path: "/",
        component : () => import ("../views/Welcome.vue")
    },
    {
        name:"Chatroom",
        path: "/chatroom",
        component : () => import("../views/ChatRoom.vue")
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

// router.beforeEach()

export default  router