import { cartRoute } from "@/router/routes/cartRoute";
import { homeRoute } from "@/router/routes/homeRoute";
import { notFoundRoute } from "@/router/routes/notFoundRoute";
import { productsRoute } from "@/router/routes/productsRoute";
import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  homeRoute,
  productsRoute,
  cartRoute,
  notFoundRoute,
];
