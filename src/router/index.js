import {createRouter, createWebHashHistory} from 'vue-router'
import MemberCreate from "@/views/MemberCreate.vue"
const routes = [
    {
        path : '/member/create',
        name : 'MemberCreate',
        component : MemberCreate                   
        
    }
]
const router = createRouter({
    history : createWebHashHistory(),
    routes
})
export default router;
// index.js에 router라이브러리를 쓸거고, 