import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       "/api": {
//         target: "http://localhost:5252",
//         changeOrigin: true,
//       },
//     },
//   },
// });

// import react from "vite-preset-react";

export default {
  plugins: [react()],
};
