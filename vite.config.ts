import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';

export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: ["babel-plugin-styled-components"],
            },
        }),
        createSvgSpritePlugin({
            exportType: 'react',
            include: '**/icons/*.svg'
        }),
    ],
    resolve: {
        alias: {
            "@": "/src",
        },
    },
    build: {
        outDir: "build",
    },
});
