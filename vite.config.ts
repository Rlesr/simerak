import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default defineConfig({
    plugins: [
        vue(),
        VueI18nPlugin({
            include: path.resolve(__dirname, './src/locales/**'),
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    optimizeDeps: {
        include: ['quill'],
    },
    // server: {
    //     proxy: {
    //         '': {

    //             target:'http://192.168.0.10:8080',
    //             changeOrigin:  true,
    //             secure: false,
    //         }
    //     }
    // }
});
