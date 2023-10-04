import { createRouter, createWebHashHistory } from "vue-router";
const routes= [
    {
        name: "Welcome",
        path: "/",
        component : () => import ("../views/Welcome.vue")
    },
    {
        name:"ChatRoom",
        path: "/chatroom",
        component : () => import("../views/ChatRoom.vue")
    },
    {
        name:"SignUp",
        path: "/signup",
        component : () => import("../components/SignUp.vue")
    },
    {
        name:"Login",
        path: "/login",
        component : () => import("../components/Login.vue")
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

// router.beforeEach()

export default  router