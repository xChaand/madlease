import { authRouter } from "./auth-router";
import { publicProcedure, router } from "./trpc";
/*
 *  Contains all API routes
 */
export const appRouter = router({
  // auth router
  auth: authRouter,
});

export type AppRouter = typeof appRouter;
