import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { projectAuth } from './firebase/config';

let app ;
projectAuth.onAuthStateChanged(() =>{
    if(!app){
        app = createApp(App)
        app.use(router)
        app.mount('#app')
    }
})


