/**
 * This is the base config for vite.
 * When building, the adapter config is used which loads this file and extends it.
 */
import { defineConfig, type UserConfig } from "vite";
import { qwikVite } from "@qwik.dev/core/optimizer";
import { qwikRouter } from "@qwik.dev/router/vite";

/**
 * Note that Vite normally starts from `index.html` but the qwikRouter plugin makes start at `src/entry.ssr.tsx` instead.
 */
export default defineConfig((): UserConfig => {
  return {
    plugins: [qwikRouter(), qwikVite()],
    resolve: {
      // Resolve the `paths` from tsconfig.json, such as `~/*`.
      tsconfigPaths: true,
    },
    // This tells Vite which dependencies to pre-build in dev mode.
    optimizeDeps: {
      // Put problematic deps that break bundling here, mostly those with binaries.
      // For example ['better-sqlite3'] if you use that in server functions.
      exclude: [],
    },

    /**
     * Libraries built for Qwik v1 import `@builder.io/qwik`, which only the bundler
     * resolves, so they must stay bundled. Add them to `noExternal`, which reaches
     * every server environment:
     *
     * resolve: {
     *   noExternal: ['some-v1-qwik-library'],
     * },
     */

    server: {
      headers: {
        // Don't cache the server response in dev mode
        "Cache-Control": "public, max-age=0",
      },
    },
    preview: {
      headers: {
        // Do cache the server response in preview (non-adapter production build)
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});
