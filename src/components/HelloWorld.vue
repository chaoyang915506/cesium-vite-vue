

<template>
  <div id="cesiumContainer">
    <layer-contral :viewer="viewer"></layer-contral>

  </div>
</template>
<script setup>
import LayerContral from './layerContral.vue'
import * as Cesium from 'cesium'
defineProps({
  msg: String,
})
import { GdTilingScheme } from './createMap'
const tileMatrixLabels = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
]
const count = ref(0)
let viewer = null
let cesiumAsset =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjMDI3NjQwNC1iYzAwLTRiODMtYTYwOC02NTE2YmYyNmNlNWMiLCJpZCI6MTE5NTU5LCJpYXQiOjE2NzIxMTc2Nzd9.4c03aPTEQ1unOgOcPtRUhCxpnWinfxY32yun41FZj0A'
Cesium.Ion.defaultAccessToken = cesiumAsset
function initMap() {
  Cesium.Camera.DEFAULT_VIEW_RECTANGLE = Cesium.Rectangle.fromDegrees(90, -20, 110, 90);
  let viewer = new Cesium.Viewer('cesiumContainer', {
    animation: false, //动画
    homeButton: false, //home键
    geocoder: false, //地址编码
    baseLayerPicker: false, //图层选择控件
    timeline: false, //时间轴
    fullscreenButton: false, //全屏显示
    infoBox: false, //点击要素之后浮窗
    sceneModePicker: false, //投影方式  三维/二维
    navigationInstructionsInitiallyVisible: false, //导航指令
    navigationHelpButton: false, //帮助信息
    selectionIndicator: false, // 选择
  })

  viewer._cesiumWidget._creditContainer.style.display = 'none' // 隐藏cesium ion
  viewer.imageryLayers.get(0).show = false;
  // let shadedRelief1= new Cesium.WebMapTileServiceImageryProvider({
  //   url:'http://t0.tianditu.gov.cn/vec_c/wmts?tk=0956454bbd03a756943479aaa3d01c5a',
  //   layer:'地名',
  //   style:'default',
  //   tileMatrixSetID: 'EGSP:3857',
  // })

  let xyzLayer = new Cesium.UrlTemplateImageryProvider({
    url: 'http://t4.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=0956454bbd03a756943479aaa3d01c5a',
    layer: 'ceshi'
  })
  let xyzLayer1 = new Cesium.WebMapTileServiceImageryProvider({
    // url: 'http://t0.tianditu.gov.cn/cva_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={TileMatrix}&TILEROW={TileRow}&TILECOL={TileCol}&tk=0956454bbd03a756943479aaa3d01c5a',
    url: "http://{s}.tianditu.gov.cn/cva_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cva&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg&tk=0956454bbd03a756943479aaa3d01c5a",
    layer: "cia_w",
    style: "default",
    format: "tiles",
    tileMatrixSetID: "GoogleMapsCompatible",
    subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],//天地图8个服务器
    minimumLevel: 0,
    maximumLevel: 18,
  })
  viewer.imageryLayers.addImageryProvider(xyzLayer)
  viewer.imageryLayers.addImageryProvider(xyzLayer1)
  let shadedRelief2 = new Cesium.WebMapTileServiceImageryProvider({
    url: 'https://lydsj.lyj.hunan.gov.cn:8380/hnlydsj/dms/shareApi/1633653957714788354/?token=' + encodeURIComponent('TSfwJR+XG+ePbKQHy8PT8Z3tYvyjczyZDxKtxHYolVnkt1aZB0RaVFLA/BVwZHMw'),
    layer: '2020_2M_05',
    style: 'default',
    format: 'image/webp',
    tileMatrixSetID: 'EGSP:3857',
    tileWidth: 256,
    tileHeight: 256,
    // tilingScheme: new GdTilingScheme(),
    tileMatrixLabels: tileMatrixLabels,
  })
  shadedRelief2.layerId = 'layerId'
  // viewer.imageryLayers.addImageryProvider(shadedRelief1);
  viewer.imageryLayers.addImageryProvider(shadedRelief2);

}


onMounted(() => {
  initMap()
})

</script>

<style scoped>
#cesiumContainer {
  /* position: relative; */
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin: 0px;
  padding: 0px;
}
</style>
