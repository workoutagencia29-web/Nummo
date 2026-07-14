import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    // Prefetch dos chunks de rota ao passar o mouse (desktop) / tocar (mobile):
    // a página de destino chega antes do clique.
    defaultPreload: "intent",
  });

  return router;
};
