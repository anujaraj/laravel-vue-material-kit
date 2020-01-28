import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Polls from "./views/Polls.vue";
import ViewBucket from "./views/ViewBucket.vue";
import FillBucket from "./views/FillBucket.vue";
import Edit from "./views/Edit.vue";
import Profile from "./views/Profile.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "index",
            components: {
                default: Index,
                header: MainNavbar,
                footer: MainFooter
            },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: "black" }
            }
        },
        {
            path: "/landing",
            name: "landing",
            components: {
                default: Landing,
                header: MainNavbar,
                footer: MainFooter
            },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: "black" }
            }
        },
        {
            path: "/login",
            name: "login",
            components: {
                default: Login,
            
                
            },
            props: {
                header: { colorOnScroll: 400 }
            }
        },
    
        
        {
            path: "/fillbucket",
            name: "fillbucket",
            components: {
                default: FillBucket,
                header: MainNavbar,
                footer: MainFooter
            
                
            },
            props: {
                header: { colorOnScroll: 400 }
            }
        },
        {
            path: "/edit",
            name: "edit",
            components: {
                default: Edit,
                header: MainNavbar,
                footer: MainFooter
            
                
            },
            props: {
                header: { colorOnScroll: 400 }
            }
        },
        {
            path: "/profile",
            name: "profile",
            components: {
                default: Profile,
                header: MainNavbar,
                footer: MainFooter
            },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: "black" }
            }
        }
    ],
    scrollBehavior: to => {
        if (to.hash) {
            return { selector: to.hash };
        } else {
            return { x: 0, y: 0 };
        }
    }
});
