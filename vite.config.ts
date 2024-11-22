import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'
import path from "node:path";

export default defineConfig({
    plugins: [react()],
    server: {
        port: 10010,
        proxy: {
            "/api": {
                target: 'http://192.168.50.250:14001',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
            "@comps": resolve(__dirname, "src/components"),
            "@api": resolve(__dirname, "src/api"),
            "@assets": resolve(__dirname, "src/assets"),
            "@pages": resolve(__dirname, "src/pages"),
            "@store": resolve(__dirname, "src/store"),
            "@slice": resolve(__dirname, "src/store/slice"),
            "@type": resolve(__dirname, "src/types"),
            "@router": resolve(__dirname, "src/router"),
            "@handle": resolve(__dirname, "src/handle"),
            "@hooks": resolve(__dirname, "src/hooks"),
            "@utils": resolve(__dirname, "src/utils"),
        },
    },
    css: {
        // css预处理器
        preprocessorOptions: {
            less: {
                math: "always",
                charset: false,
                additionalData: '@import "@/styles/global.less";',
                modifyVars: {
                    hack: `true; @import (reference) "${path.resolve(
                        __dirname,
                        "src/styles/global.less"
                    )}"; `,
                },
                javascriptEnabled: true,
            },
        },
        //* css模块化
        modules: {
            // css模块化 文件以.module.[css|less|scss]结尾
            generateScopedName: "[name]__[local]___[hash:base64:5]",
            hashPrefix: "prefix",
        },
    },
})
