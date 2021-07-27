import {defineConfig} from 'vite';
import checker from 'vite-plugin-checker';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        checker({
            typescript: true,
            vueTsc: true,
            eslint: {
                files: ['./src'],
                extensions: ['.ts', '.vue']
            }
        })
    ],
    base: '/vite/',
    resolve: {
        alias: {
            '@': '/src'
        }
    }
});
