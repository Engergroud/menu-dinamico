import { defineConfig } from "vite"; 
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: "/menu-dinamico",
    plugins: [react()],
})