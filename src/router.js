import Vue from "vue";
import VueRouter from "vue-router";

import Iot from "@/views/Iot.vue";
import Automemo from "@/views/Automemo.vue";
import MeetingOwl from "@/views/MeetingOwl.vue";
import Mimi from "@/views/Mimi.vue";
import Molekule from "@/views/Molekule.vue";
import Theragun from "@/views/Theragun.vue";
//import Test from "@/views/Test.vue";
//import Filter from "@/views/Filter.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: Iot,
    component: Iot
  },

  {
    path: "/automemo",
    name: Automemo,
    component: Automemo
  },
  {
    path: "/meetingowl",
    name: MeetingOwl,
    component: MeetingOwl
  },
  {
    path: "/mimi",
    name: Mimi,
    component: Mimi
  },
  {
    path: "/molekule",
    name: Molekule,
    component: Molekule
  },
  {
    path: "/theragun",
    name: Theragun,
    component: Theragun,
  },
  // {
  //   path: "/posts",
  //   name: Posts,
  //   component: Posts
  // },  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

