<template>
        <div class="btn_layer" @click="controlBox = !controlBox"></div>
        <div class="control_box" :style="{ left: controlBox ? '5px' : '-320px' }">

                <h3 class="title">图层 <el-button type="primary" size="default" @click="">按钮</el-button>
                </h3>

                <ul class="layer_list">

                        <li class="item " v-for="i in mapLayerList" :key="i">
                                <img class="img active_img" :src="i.img" />
                                <div class="label">{{ i.layer }}</div>
                        </li>

                </ul>

        </div>
</template>

<script setup>
import { mapLayerList } from '@/api/map.js'
const props = defineProps({
        viewer: {
                type: Object,
                default: null
        }
})

let controlBox = ref(true)

</script>

<style lang="scss" scoped>
.btn_layer {
        display: flex;
        width: 35px;
        height: 35px;
        background-color: red;
        position: absolute;
        top: 9px;
        z-index: 3;
        border-radius: 5px;
        left: 5px;
        border: 1px solid black
}

.btn_layer:hover {
        border: 1px solid #fff;
        box-shadow: 0 0 8px #fff;
        transition: border-color 0.25s;
}

.control_box {
        padding: 5px;
        width: 300px;
        background-color: #3c4152cc;
        position: absolute;
        top: 60px;
        z-index: 3;
        border-radius: 5px;
        transition: 0.25s;

        .title {
                padding: 0;
                margin: 3px;
                font-size: 14px;
                font-weight: 300;
                color: #fff;
        }

        .layer_list {
                list-style: none;
                border-radius: 5px;
                padding: 5px 0;
                border: 1px solid #888;
                margin: 0;

                .item {
                        display: inline-block;
                        vertical-align: top;
                        margin: 2px 5px;
                        width: 64px;
                        text-align: center;
                        cursor: pointer;


                        .img {
                                border: 1px solid red;
                                border-radius: 5px;
                                display: inline-block;
                                position: relative;
                                width: inherit;
                                height: auto;
                                background-size: 100% 100%;
                                box-sizing: border-box;

                                &:hover {
                                        border: 1px solid #fff;
                                }
                        }

                        .active_img {
                                border: double 4px rgb(189, 236, 248);
                        }

                        .label {
                                display: block;
                                font-family: sans-serif;
                                font-size: 8pt;
                                text-align: center;
                                vertical-align: middle;
                                color: #edffff;
                                cursor: pointer;
                                word-wrap: break-word;
                        }
                }
        }
}
</style>