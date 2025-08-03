import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Ecommerce-product-page/", 
  plugins: [react()],
});
