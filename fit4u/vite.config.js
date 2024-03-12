import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
    server: {
        cors: false,
        proxy: {
            "/auth": {
                target: "http://localhost:8000",
                changeOrigin: true,
                secure: false,
            },
        },
    },
    plugins: [react()],
});