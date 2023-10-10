import { createRouter, createWebHashHistory } from "vue-router";
import { projectAuth } from "../firebase/config";

const requireAuth = (to,from,next) =>{
    let user  = projectAuth.currentUser

    if(!user){
        next({name: 'Welcome'})
    }
    else{
        next()
    }
}

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