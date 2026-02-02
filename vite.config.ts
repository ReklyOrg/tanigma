import eslintPlugin from '@nabla/vite-plugin-eslint';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';
import { checker } from 'vite-plugin-checker';
import tsConfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return {
    base: '/',
    build: {
      chunkSizeWarningLimit: 2500,
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
        },
      },
      sourcemap: false,
    },
    define: {
      APP_ENVIRONMENT: JSON.stringify(mode),
      APP_VERSION: JSON.stringify(process.env.npm_package_version),
      APP_VERSION_DATE: JSON.stringify(new Date().toISOString()),
    },
    esbuild: {
      drop: mode === 'development' ? [] : ['debugger'],
      pure: mode === 'development' ? [] : ['console.log'],
    },
    plugins: [
      react(),
      tailwindcss(),
      checker({
        overlay: false,
        terminal: true,
        typescript: true,
      }),
      eslintPlugin({
        eslintOptions: {
          fix: true,
          fixTypes: ['layout', 'suggestion'],
        },
      }),
      tsConfigPaths(),
      // TODO:
      // TanStackRouterVite({
      //   generatedRouteTree: "./src/app/routeTree.gen.ts",
      //   routesDirectory: "./src/app/routes",
      // }),
    ],
    resolve: {
      conditions: ['module', 'browser', 'development|production'],
    },
    server: {
      host: '127.0.0.1',
      open: mode === 'development',
    },
  };
});
