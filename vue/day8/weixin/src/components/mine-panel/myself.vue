<template>
    <div>
    <div class="weui-panel weui-panel_access">
        <div class="weui-panel__bd">
            <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                <div class="weui-media-box__hd">
                    <img class="weui-media-box__thumb" src="" alt="">
                </div>
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">标题一</h4>
                    <p class="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
                </div>
            </a>
        </div>
    </div>

    <div class="weui-panel">
        <div class="weui-panel__bd">
            <div class="weui-media-box weui-media-box_small-appmsg">
                <div v-for="(item,index) in array" :key="index" class="weui-cells">
                    <a class="weui-cell weui-cell_access weui-cell_example" href="javascript:;">
                        <div class="weui-cell__hd"><img src="" alt=""
                                style="width:20px;margin-right:16px;display:block">
                        </div>
                        <div class="weui-cell__bd weui-cell_primary">
                            <p v-text="item.title"></p>
                        </div>
                        <span class="weui-cell__ft"></span>
                    </a>

                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
       data() {
        return {
            array: [{
                    title: "支付"
                },
                {
                    title: "收藏"
                }, {
                    title: "相册"
                }, {
                    title: "卡包"
                }, {
                    title: "表情"
                }, {
                    title: "设置"
                }
            ]
        }
    },
}
</script>