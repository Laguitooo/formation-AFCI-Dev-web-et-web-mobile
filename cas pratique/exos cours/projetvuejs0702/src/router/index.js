import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/user-settings",
        name: "UserSettings",
        // route level code-splitting
        // this generates a separate chunk (user-settings.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "user-settings" */ "../views/UserSettings.vue"),
    },
    {
        path: "/wish-list",
        name: "Wish-list",
        // route level code-splitting
        // this generates a separate chunk (wish-list.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "wish-list" */ "../views/Wish-list.vue"),
    },
    {
        path: "/shopping-cart",
        name: "Shopping-cart",
        // route level code-splitting
        // this generates a separate chunk (shopping-cart.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "shopping-cart" */ "../views/Shopping-cart.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;