import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import createVitePlugins from './vite/plugins/index'
import autoprefixer from 'autoprefixer'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig((mode, command) => {
    // console.log(process.cwd,'cwd')
    const env = loadEnv(mode, process.cwd())
    return {
        plugins: [createVitePlugins()],
        resolve: {
            alias: {
                '@': path.resolve(__dirname + '/src'),
            },
        },
        css: {
            postcss: {
                // ⚠️关键代码
                plugins: [
                    autoprefixer({
                        // 自动添加前缀
                        overrideBrowserslist: [
                            'Android 4.1',
                            'iOS 7.1',
                            'Chrome > 31',
                            'ff > 31',
                            'ie >= 8',
                            //'last 2 versions', // 所有主流浏览器最近2个版本
                        ],
                        grid: true,
                    }),
                ],
            },
        },
    }
})
