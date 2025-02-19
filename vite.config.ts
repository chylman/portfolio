import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';
import svgr from "vite-plugin-svgr";

export default defineConfig({
    base: '/portfolio/',
    plugins: [
        svgr(),
        react({
            babel: {
                plugins: ["babel-plugin-styled-components"],
            },
        }),
        createSvgSpritePlugin({
            exportType: 'react',
            include: '**/icons/*.svg',
            symbolId: 'icon-[name]-[hash]',
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
