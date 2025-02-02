import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';

export default defineConfig({
    base: '/portfolio/',
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
        outDir: "dist",
    },
});
