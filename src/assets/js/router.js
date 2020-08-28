import VueRouter from 'vue-router'


import shop from '../../components/shop.vue'
import index from '../../components/index.vue'
import type from '../../components/type.vue'
import guang from '../../components/guang.vue'
import my from '../../components/my.vue'
import details from '../../components/details.vue'
import first from '../../components/first.vue'
import detail from '../../components/detail.vue'
import login from '../../components/login.vue'
import pwdlogin from '../../components/pwdlogin.vue'
import register from '../../components/register.vue'
import mypage from '../../components/mypage.vue'
import myshop from '../../components/myshop.vue'
import search from '../../components/search.vue'



export default new VueRouter({
    routes:[
        {
            path:'/',
            component:first,
            children:[
                {
                    path:'/index',
                    component:index
                },
                {
                    path:'/type',
                    component:type
                },
                {
                    path:'/guang',
                    component:guang
                }
            ],
            redirect:'/index'
        },
        {
            path:'/shop',
            component:shop
        },
        {
            path:'/myshop',
            component:myshop
        },
       
        {
            path:'/details/:sh',
            component:details
        },
        {
            path:'/search',
            component:search
        },
        {
            path:'/login',
            component:login
        },
        {
            path:'/pwdlogin',
            component:pwdlogin
        },
        {
            path:'/register',
            component:register
        },
        {
            path:'/detail/:id',
            component:detail
        },
        {
            path:'/shop',
            component:shop
        },
        {
            path:'/mypage',
            component:mypage
        },
        {
            path:'/my',
            component:my
        },
        {
            path:'/*',
            redirect:'/'
        }
        
    ]
})

