/**
 * Created by mengna on 2017/11/29.
 */
// import Vue from 'vue'
// import VueRouter from 'vue-router'
/* 1、创建组件 */

var Home = Vue.extend({
    template:'<div>{{msg}}</div>',
    data:function(){
        return {
            msg:"hello go home"
        }
    }
});

const About = Vue.extend({
    template: '<div>' +
    '<h1>About</h1>' +
    '<p>This is the tutorial about vue-router.</p>' +
    '</div>'
});

const Test = Vue.extend({
    template: '<div>' +
    '<h1>test</h1>' +
    '</div>'
});
// 2. 创建 router 实例，然后传 `routes`路由映射 配置
const router = new VueRouter({
    routes: [
        { path: '/home', component: Home },
        { path:'/test',component:Test},
        { path: '/about', component: About },
        { path: '/', component: Home } //设置默认路径
    ]
});

// 3. 创建和挂载根实例。记得要通过 router 配置参数注入路由，从而让整个应用都有路由功能
const vm = new Vue({
    router: router
}).$mount('#app');





