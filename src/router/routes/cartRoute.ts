import { Route } from "@/router/routes.enum";
import CartView from "@/views/CartView.vue";

export const cartRoute = {
  name: Route.Cart,
  path: "/cart",
  component: CartView,
  meta: {
    title: "Cart",
    metaTags: [
      {
        name: "description",
        content: "View your shopping cart.",
      },
    ],
  },
};
