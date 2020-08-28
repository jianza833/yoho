<template>
    <div>
        <div class="div1">
            <span class="iconfont" v-on:click="back()">&#xe623;</span>
            <b class="b1">商品详情</b>
            <span class="iconfont span1">&#xe733;</span>
        </div>
        <div>
            <img :src="this.x" class="img1"></img>
            <p class="p1">YO!GALLERY Antoine TAVA 下午茶 限量签名版画</p>
            <p><span class="p2">¥1280</span><span class="p10">¥2399</span></p>
        </div>
        <ul class="ul1">
                <li class="li1">
                    <p>商品评价(0)</p>
                </li>
                <li>
                    <p>常见问题</p>
                </li>
        </ul>
        
           
        <div class="div2">
            <p class="p11"> 
                <span class="img10"><img src="src/images/A.png"></img></span>
                <span>商品是正品吗?</span><br>
                <img src="src/images/D.png" class="img10"></img>
                <span class="span38">有货www.yohobuy正品授权。请放心购买</span><br>
                <span class="img10"><img src="src/images/A.png"></img></span>
                <span>尺码表上的尺寸标准吗?</span><br>
                <img src="src/images/D.png" class="img10"></img>
                <span class="span38">人工测量，可能会存在1-2cm的误差</span>
             </p>
        </div>
        <div class="div3">
            查看更多 >
        </div>
        <div class="div4">
            <img src="src/images/shop1.jpg"></img> <span class="span1">THETHING</span> <span class="span2">进入店铺 ></span>
        </div>
        <div class="div5">
            商品信息  <span class="span9">PRODUCT INFO</span>
        </div>
        <div class="div6">
            <ul>
                <li>
                    编号：52292462
                </li>
                <li>
                    颜色：军绿
                </li>
                <li>
                    性别：男款
                </li>
                <li>
                    领型：圆领
                </li>
                <li>
                    衣长：适中
                </li>
                <li>
                    袖长：长袖
                </li>
                <li>
                    版型：正常
                </li>
                <li>
                    厚度：适中
                </li>
                <li>
                    经典款型：图案T恤<br>
                </li>
            </ul>
            <p class="li13">
                    THETHING 前胸绣花剪裁Tee，作为简单的单品可不是闹着玩的，搭配一件衬衫搭配一条牛仔裤就非常简单实用。脚踩一双休闲范十足的运动鞋可以轻松凹出学生范，青春活力。
            </p>
        </div>
        <div class="div5">
            测量方法  <span class="span9">PRODMEASUREMENT METHODUCT</span>
        </div>
        <div class="div6">
            <img src="src/images/textf.jpg"></img>
        </div>
        <div class="div5">
            商品详情  <span class="span9">DETAILS</span>
        </div>
        <div class="div6">
            <img src="src/images/detl1.jpg"></img>
        </div>
        <div class="div6">
            <img src="src/images/detl2.jpg"></img>
        </div>
        <div class="div8">
            <div class="div7">
                <p class="p201">
                    <img src="src/images/shoping.png"></img><br>
                    <span>购物车</span>
                </p>
                <p class="p202">
                    <img src="src/images/dianpu.png"></img><br>
                    <span>品牌店铺</span>
                </p>
                <p class="p203"> 
                    <img src="src/images/collect.png"></img><br>
                    <span>收藏</span>
                </p>
                <p class="p204">
                    <span>加入购物车</span>
                </p>
                
            </div>
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
            src: url('../font/iconfont3.eot');
            src: url('../font/iconfont3.eot?#iefix') format('embedded-opentype'),
                url('../font/iconfont3.woff2') format('woff2'),
                url('../font/iconfont3.woff') format('woff'),
                url('../font/iconfont3.ttf') format('truetype'),
                url('../font/iconfont3.svg#iconfont') format('svg');
            }

 .iconfont {
                font-family: "iconfont" !important;
                font-size: 19px;
                font-style: normal;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                color:white;
                float:left;
                margin-left:4px;
               
            }
     .div1 {
                width:100%;
                height:59px;
                background-color:rgba(58,58,58,1);
                text-align:center;
                line-height:59px;
                top:0px;
                right:0px;
            }
        .b1{
                font-weight: 500;
                font-size: 21px;;
                color:white;
        }
    .div1 .span1{
                float:right;
                margin-right:11px;
    }
    .img1{
        margin-top:18px;
        margin-bottom:18px;
        width:75%;
        margin-left:12.5%;
        margin-right:12.5%;
    }
    .p1{
        background-color:rgba(81,81,80,1);
        margin-top:-5px;
        padding:8px 55px;
        font-size:14px;
        color:white;
    }
    .p2{
        color:red;
        font-size:17px;
        margin-left:14px;
        height:50px;
        line-height:49px; 
        display: inline-block; 
    }
    .p10{
        font-size:20px;
        height:50px;
        line-height:49px;
        font-size:13px;
        color:black;
        text-decoration:line-through;  
        display: inline-block;
        color:rgba(176,176,176,1);
        margin-left:5%;
        margin-left:10px;
    }
    .ul1{
        border-top:14px solid rgba(219,222,217,1);
        border-bottom:1px solid rgba(219,222,217,1);
        height:55px;
        overflow:hidden;
    }
    .ul1 li{
        width:50%;
        float:left;
        text-align:center;
        height:41px;
        line-height:41px;
        margin-top:5px;
        
    }
    .ul1 .li1{
        width:49%;
        border-right:1px solid rgba(219,222,217,1);
    }
   .p11 span{
       font-size:14px;
   }
    .img10{
        width:23px;
        position: relative;
        top:4px;
        font-size:8px;
    }
    .p11{
        margin-left:20px;
    }
    .div2{
         border-bottom:1px solid rgba(219,222,217,1);
    }
    .div3{
        font-size:18px;
        text-align:center;
        color:black;
        opacity: 0.4;
        padding:10px 10px;
    }
    .span38{
        opacity: 0.4;
    }
    .div4{
        overflow:hidden;
        border-top:13px solid rgba(219,222,217,1);
        border-bottom:13px solid rgba(219,222,217,1);
    }
    .div4 img{
        float:left;
        margin-left:12px;
    }
    .div4 .span1{
        float:left;
        margin-left:10px;
        display: inline-block;
        height:30px;
        line-height:45px;
    }
    .div4 .span2{
        float:right;
        display: inline-block;
         height:30px;
        line-height:45px;
         opacity: 0.4;
         margin-right:5px;
    }
    .div5{
        padding:20px 20px;
        font-size:16px;
    }
    .div5 span{
        font-size:8px;
    }
    .div6{
        margin-left:5%;
        margin-right:5%;
        border-top:1px solid rgba(219,222,217,1);
        padding-top:10px;
    }
    .div6 ul{
         overflow:hidden;
         width:100%;
    }
    .div6 li{
        width:49%;
        float:left;
        background-color:rgba(238,238,238,1);
        margin-right:1%;
        margin-bottom:2px;
        height:28px;
        line-height:28px;
        font-size:14px;
    }
    .li13{
        width:100%;
        background-color:rgba(238,238,238,1);
        font-size:14px;
        border-top:10px solid rgba(238,238,238,1);
    }
    .div6 img{
        width:100%;
    }
    .div7{
        overflow:hidden;
         position: fixed;
         bottom:0px;
        width:100%;
        background-color:white;
        height:64px;
        border-top:1px solid rgba(238,238,238,1);
    }
    .div7 p{
        float:left;
        width:17%;
        text-align:center;
        font-size:10px;
        margin-top:11px;
    }
    .div7 .p204{
        font-size:16px;
        background-color:red;
        width:40%;
        height:38px;
        border-radius:14px;
        line-height:38px;
        margin-left:6%;
    }
</style>
<script>
export default{
               
                data(){
                    return {
                        num:"0",
                        x:'',
                        list:[
                            {
                                pic:"src/images/list1.jpg",
                                con:""
                            },
                             {
                                pic:"src/images/list2.jpg",
                                con:""
                            },
                             {
                                pic:"src/images/list3.jpg",
                                con:""
                            },
                             {
                                pic:"src/images/list4.jpg",
                                con:""
                            }
                        ]
                    }
                },
                 mounted(){
                    // 接收路由参数
                    console.log(this.$route.params)
                    if(this.$route.params.id=="detail1")
                    {
                        this.x=this.list[0].pic;
                    }
                    if(this.$route.params.id=="detail2")
                    {
                        this.x=this.list[1].pic;
                    }
                    if(this.$route.params.id=="detail3")
                    {
                        this.x=this.list[2].pic;
                    }
                    if(this.$route.params.id=="detail4")
                    {
                        this.x=this.list[3].pic;
                    }  
                    if(this.$route.params==='')
                    {
                         this.x=this.list[0].pic;
                    }
                },
                methods:{
                    back(){
                    this.$router.go(-1);
                   }
                }

            }
</script>