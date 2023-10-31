import { createRouter, createWebHashHistory } from "vue-router";
import { projectAuth } from "../firebase/config";


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

router.beforeEach((to,_,next) => {
    const authRequiredRoutes = ["ChatRoom"];
    const authNotRequiredRoutes = ["Welcome","SignUp"];
    const _isAuthenticated = projectAuth.currentUser;

    if(authNotRequiredRoutes.indexOf(to.name) > -1 && _isAuthenticated) next(false);
    if(authRequiredRoutes.indexOf(to.name) > -1){
        if(_isAuthenticated) next()
        else next({name: "Welcome"})
    }
    else{
        next()
    }
})


export default  router