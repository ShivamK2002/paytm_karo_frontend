import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

// rest of your Vite config...

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "import.meta.env.VITE_BASEURL": JSON.stringify(
      import.meta.env.VITE_BASEURL
    ),
  },
});
