import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");

    return {
        base: env.VITE_BASENAME || "/",
        plugins: [react(), tailwindcss()],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
                "@/components": path.resolve(__dirname, "./src/components"),
                "@/lib": path.resolve(__dirname, "./src/lib"),
            },
        },
    };
});
