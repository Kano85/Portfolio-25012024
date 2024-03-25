
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

import KuguDashboard from "./pages/KuguDashboard.vue";
import TrainerinManagement from "./pages/TrainerinManagement.vue";
import Designsystem from "./pages/Designsystem.vue";
import Kursplannung from "./pages/Kursplannung.vue";
import Kurskonfigurator from "./pages/Kurskonfigurator.vue";
import Trainspot from "./pages/Trainspot.vue";
import LandingPage from "./pages/LandingPage.vue";
import "./global.css";

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/kuguDashboard25012024",
    name: "KuguDashboard",
    component: KuguDashboard,
  },
  {
    path: "/trainerinmanagement25012024",
    name: "TrainerinManagement",
    component: TrainerinManagement,
  },
  {
    path: "/designsystem25012024",
    name: "Designsystem",
    component: Designsystem,
  },
  {
    path: "/kursplannung25012024",
    name: "Kursplannung",
    component: Kursplannung,
  },
  {
    path: "/kurskonfigurator25012024",
    name: "Kurskonfigurator",
    component: Kurskonfigurator,
  },
  {
    path: "/trainspot25012024",
    name: "Trainspot",
    component: Trainspot,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Siempre desplazar al inicio de la página para todas las navegaciones de rutas  
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((toRoute, fromRoute, next) => {
  const documentTitle =
    toRoute?.meta && toRoute?.meta?.title ? toRoute?.meta?.title : "25012024";
  window.document.title = documentTitle;
  if (toRoute?.meta?.description) {
    addMetaTag(toRoute?.meta?.description);
  }
  next();
});

const addMetaTag = (value) => {
  let element = document.querySelector(`meta[name='description']`);

  if (element) {
    element.setAttribute("content", value);
  } else {
    element = `<meta name="description" content="${value}" />`;
    document.head.insertAdjacentHTML("beforeend", element);
  }
};

createApp(App).use(router).mount("#app");


