import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Private from "./views/Private.vue";
import SignUp from "./components/SignUp.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/private",
      name: "private",
      component: Private,
      meta: { requiresAuth: true },
    },
    {
      path: "/signUp",
      name: "signUp",
      component: SignUp,
    },
    {
      path: "/blog",
      name: "blog",
      component: () =>
        import(/* webpackChunkName: "blog" */ "./views/Blog.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () =>
        import(/* webpackChunkName: "login" */ "./views/Login.vue"),
    },
  ],
});

router.beforeResolve((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    let user;
    Vue.prototype.$Amplify.Auth.currentAuthenticatedUser()
      .then((data) => {
        if (data && data.signInUserSession) {
          user = data;
        }
        next();
      })
      .catch((e) => {
        console.log(e);
        next({ path: "/" });
      });
    if (!user) {
      next({ path: "/" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
