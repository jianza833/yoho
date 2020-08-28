<template>
    <div>
         <div class="div1">
            <span class="iconfont span10" v-on:click="back()">&#xe603;</span>
            <b class="b1">搜索</b>
        </div>
        <div class="divtop">
        </div>
        <div>
            <mt-search v-model="value" cancel-text="取消" placeholder="搜索商品/品牌">
            <mt-cell
                v-for="item in result"
                :title="item.title"
                :value="item.value">
            </mt-cell>
            </mt-search>
        </div>
    </div>
</template>
<style scoped>
            *{
               margin:0px;
               padding:0px;
               list-style:none;
            }
            @font-face {
            font-family: 'iconfont';
            src: url('../font/iconfont5.eot');
            src: url('../font/iconfont5.eot?#iefix') format('embedded-opentype'),
                url('../font/iconfont5.woff2') format('woff2'),
                url('../font/iconfont5.woff') format('woff'),
                url('../font/iconfont5.ttf') format('truetype'),
                url('../font/iconfont5.svg#iconfont') format('svg');
            }

      .iconfont {
                font-family: "iconfont" !important;
                font-size: 23px;
                font-style: normal;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
               
               
            }
            .divtop{
               height:44px;
               width:100%;
            }
      .div1 {
                width:100%;
                height:44px;
                background-color:rgba(58,58,58,1);
                text-align:center;
                line-height:44px;
                position: fixed;
                top:0px;
                right:0px;
            }
            .div1 .span10{
               float:left;
               color:white;
            }
         .b1{
                font-weight: 500;
                font-size: 16px;;
                color:white;
                float:right;
                margin-right:44%;
        }
         .div1 .span1{
                float:right;
                margin-right:14px;
                color:white;
        }
         .divtop{
               height:44px;
               width:100%;
            }
</style>
<script>
      export default{     
                     data(){
                        return {
                            result:[
                                {
                                    title:"衬衫",
                                    value:""
                                },
                                {
                                    title:"Tshirt",
                                    value:""
                                },
                                {
                                    title:"卫衣",
                                    value:""
                                },
                                {
                                    title:"圆领T恤",
                                    value:""
                                },
                                {
                                    title:"外套",
                                    value:""
                                },
                                 {
                                    title:"西装",
                                    value:""
                                },
                            ]
                        }
                     },
                     methods:{
                         back(){
                                this.$router.go(-1);
                           },
                      }

                  }
</script>