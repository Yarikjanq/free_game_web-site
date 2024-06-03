import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
<<<<<<< HEAD
  base: "/free_game_web-site/",
});
=======
  base: '' 
})
>>>>>>> 498a0e8 (asdadsa)
