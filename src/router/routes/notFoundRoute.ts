import { Route } from "@/router/routes.enum";

export const notFoundRoute = {
  name: Route.NotFound,
  path: "/:catchAll(.*)",
  component: () => import("@/views/NotFoundView.vue"),
  meta: {
    title: "404",
    metaTags: [
      {
        name: "description",
        content: "Page not found.",
      },
    ],
  },
};

// Backward-compatible alias
export const notFound = notFoundRoute;
