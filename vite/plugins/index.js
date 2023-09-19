import vue from '@vitejs/plugin-vue'

import createAutoImport from './auto-import'
import Cesium from './vue-vite-cesium'
export default function createVitePlugins(viteEnv, isBuild = false) {
    let vitePlugins = [vue()]
    vitePlugins.push(createAutoImport())
    vitePlugins.push(Cesium())
    // vitePlugins.push(createSetupExtend())
//     vitePlugins.push(createSvgIcon(isBuild))
//     isBuild && vitePlugins.push(...createCompression(viteEnv))
    return vitePlugins
}
