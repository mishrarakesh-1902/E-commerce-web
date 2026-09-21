import { Route } from "@/router/routes.enum";
import ProductsView from "@/views/ProductsView.vue";

export const productsRoute = {
  name: Route.Products,
  path: "/products",
  component: ProductsView,
  meta: {
    title: "Products",
    metaTags: [
      {
        name: "description",
        content: "Browse our e-commerce product catalog.",
      },
    ],
  },
};
