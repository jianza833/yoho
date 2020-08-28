<template>
  <div>
        <div class="div1">  
            <img src="../images/logo.png" class="logo"></img>
            <router-link to="/search">
                <span class="iconfont">&#xe652;</span>
            </router-link>
            
        </div>
        <div class="div25">
            <mt-swipe :auto="4000">
                
                    <mt-swipe-item><router-link to="/detail/detail1"><img src="../images/index100.jpg"></img></router-link></img></mt-swipe-item>
                
               
                    <mt-swipe-item> <router-link to="/detail/detail2"><img src="../images/index101.jpg"></img> </router-link></img></mt-swipe-item>
               
                
                    <mt-swipe-item><router-link to="/detail/detail3"><img src="../images/index102.jpg"></img> </router-link></mt-swipe-item>
               
               
                    <mt-swipe-item> <router-link to="/detail/detail4"><img src="../images/index103.jpg"></img> </router-link></mt-swipe-item>
               
            </mt-swipe>
        </div>
        <div>
            <ul class="ul1">
                    <li  class="li1">
                            <router-link to="/details/Tshirt" class="router11">
                                <img :src="list[0].src" class="img2"></img><br>
                                <span class="span2">{{list[0].con}}</span>
                            </router-link>
                    </li>
                    <li  class="li1">
                        <router-link to="/guang" class="router11">
                                <img :src="list[1].src" class="img2"></img><br>
                                <span class="span2">{{list[1].con}}</span>
                        </router-link>
                    </li>
                    <li  class="li1">
                        <router-link to="/details/Tshirt" class="router11">
                                <img :src="list[2].src" class="img2"></img><br>
                                <span class="span2">{{list[2].con}}</span>
                        </router-link>
                    </li>
                    <li  class="li1">
                        <router-link to="/details/Tshirt" class="router11">
                                <img :src="list[3].src" class="img2"></img><br>
                                <span class="span2">{{list[3].con}}</span>
                        </router-link>
                    </li>
                    <li  class="li1">
                    <router-link to="/type" class="router11">
                            <img :src="list[4].src" class="img2"></img><br>
                            <span class="span2">{{list[4].con}}</span>
                    </router-link>
                    </li>
            </ul>
        </div>
        <div class="div3">
             热门品类
        </div>
        <div>
             <ul class="ul2">
                <li v-for="(item,index) in list2" class="li2">
                    <router-link :to="'/details/'+item.id">
                        <img :src="item.pic" class="img3"></img>
                    </router-link>
                </li>
             </ul>
        </div>
        <div class="div3">
             热门品牌
        </div>
        <div class="div4">
                <span><img src="src/images/able jeans.jpg"></img></span><span><img src="src/images/a02.jpg"></img></span><span><img src="src/images/akop.jpg"></img></span><span><img src="src/images/mdns.jpg"></img></span>
                <span><img src="src/images/life.jpg"></img></span><span><img src="src/images/boy.jpg"></img></span><span><img src="src/images/1400more.png" class="special"></img></span>
                <span><img src="src/images/newpeople.jpg" class="newpeople"></img></span>
        </div>
        <div class="div5">
             人气推荐
        </div>
        <img src="src/images/top100.jpg" class="top100"></img>
        <div class="div6">
            <ul>
                <li v-for="(item,index) in list3" class="li3">
                    <img :src="item.pict" class="img4"></img>
                    <b>{{item.price}}</b>
                    <i>{{item.nump}}</i>
                    <u>{{item.visit}}</u>
                </li>
            </ul>
        </div>
        <p class="like">
            <img src="src/images/icon.png"></img><span>你可能喜欢</span>
        </p>
        <ul class="div7">
            <li v-for="(item,index) in list4">
                <img :src="item.picture"></img>
                <b>{{item.title}}</b>
                <span>{{item.prices}}</span>
                <i>{{item.oldprices}}</i>
            </li>
        </ul>
        <div class="div_final">
        </div>
  </div>
</template>
<style>
        .div25 img{
            width:100%;
        }
        .div25 .mint-swipe-items-wrap{
            padding-bottom:34.13%;
        }
        .div25 .mint-swipe-indicator{
            opacity:0.7;
        }
        .div25 .is-active{
            color:white;
        }
</style>
<style scoped>
   *{
       margin:0px;
       padding:0px;
       list-style:none;
      
   }
    .div1{
        text-align:center;
        width:100%;
        height:53px;
        line-height:53px;  
        background-color:rgba(56,56,56,1);
        
    }
    .logo{
        width:134px;
        margin-top:8px;
        margin-right:-42px;
    }
    @font-face {
        font-family: 'iconfont';
        src: url('../font/iconfont2.eot');
        src: url('../font/iconfont2.eot?#iefix') format('embedded-opentype'),
             url('../font/iconfont2.woff2') format('woff2'),
             url('../font/iconfont2.woff') format('woff'),
             url('../font/iconfont2.ttf') format('truetype'),
             url('../font/iconfont2.svg#iconfont') format('svg');
}

.iconfont {
        font-family: "iconfont" !important;
        font-size: 22px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color:white;
        float:right;
        margin-right:15px;
    }
.indexshow{
        width:100%;
    }

   .ul1{
        overflow:hidden;
        margin-left:10px;
    }
    .ul1 .router11{
       text-decoration:none;
       color:black;
    }
    .li1{
        text-align:center;
        float:left;
        width:20%;
       

    }
    .img2{
       width:30px;
       margin-top:8px;
       margin-bottom:-6px;
    }
    .span2{
        font-size:9px;

    }
    .div3{
        width:100%;
        height:50px;
        text-align:center;
        background-color:rgba(240,240,240,1);
        line-height:53px;
        margin-top:20px;
        font-size:14px;
    }
    .img3{
        width:100%;
        
    }
    .li2{
        float:left;
        width:25%;
        
    }
    .ul2{
       overflow:hidden
    }
    .div4 img{
        width:25%;
        display: inline-block;
    }
    .div_final{
        height:73px;
        width:100%;
    }
    .div4 .special{
        width:50%;
    }
    .div4 .newpeople{
        width:100%;
    }
    .div5{
        width:100%;
        height:57px;
        text-align:center;
        background-color:rgba(240,240,240,1);
        line-height:57px;  
        font-size:14px;
    }
    .top100{
        width:100%;
       
    }
    .li3{
        float:left;
    }
    .img4{

    }
    .div6{
        width:100%;
        overflow:auto;
    }
    .div6 ul{
        width:200%;
        overflow:auto;
        padding:7px 12px 4px 12px;
    }
    .div6 li{
        width:14.285%;
        text-align:center;
        font-size:12px;
    }
    .div6 img{
        width:100%;
    }
    b,u,i{
        display:block;
    }
    u,i{
        color:rgba(188,188,188,1);
         text-decoration:none; 
    
    }
    .like{
        height:67px;
        width:100%;
        text-align:center;
        line-height:67px;
        font-size:25px;
        color:rgba(220,220,220,1);
        border-top:25px solid #F0F0F0;
    }
    .like span{
                margin-left:9px;
    }
    .like img{
        height:20px;
    }
    .div7{
        overflow:hidden;
    }
    .div7 img{
        width:100%;
    }
    .div7 b{
         font-size:12px;
        width:100%;
        margin-left:4px;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .div7 span{
        font-size:12px;
        color:red;
        display: inline-block;
        margin-left:10px;
    }
    .div7 i{
        font-size:12px;
        text-decoration:line-through;
        display: inline-block;
       
    }
    .div7 li{
        float:left;
        margin-left:5%;
        width:42.5%;
    }
    .div7 li :nth-of-type(2n){
        margin-right:5%;
    }
    
</style>

<script>
export default{
                data(){
                    return {
                        list:[
                            {
                                con:'新品到着',
                                src:"src/images/index-new.png"
                            },
                            {
                                con:'人气搭配',
                                src:"src/images/index-cloths.png"
                            },
                            {
                                con:'折扣专区',
                                src:"src/images/index-discount.png"
                            },
                            {
                                con:'有货拼团',
                                src:"src/images/index-ping.png"
                            },
                            {
                                con:'全部分类',
                                src:"src/images/index-type.png"
                            }
                        ],
                        list2:[
                            {
                                pic:"src/images/T-shirt.jpg",
                                id:"Tshirt"
                                
                            },
                            {
                                pic:"src/images/fleec.jpg",
                                id:"fleec"
                            },
                            {
                                pic:"src/images/jacket.jpg",
                                id:"jacket"
                            },
                            {
                                pic:"src/images/shirt.jpg",
                                id:"shirt"
                            },
                            {
                                pic:"src/images/shose.jpg",
                                id:"shose"
                            },
                            {
                                pic:"src/images/pants.jpg",
                                id:"pants"
                            },
                            {
                                pic:"src/images/jeans.jpg",
                                id:"jeans"
                            },
                            {
                                pic:"src/images/jams.jpg",
                                id:"jams"
                            },
                            {
                                pic:"src/images/cap.jpg",
                                id:"cap"
                            },
                            {
                                pic:"src/images/ACC.jpg",
                                id:"ACC"
                            },
                            {
                                pic:"src/images/backpack.jpg",
                                id:"backpack"
                            },
                            {
                                pic:"src/images/handbag.jpg",
                                id:"handbag"
                            }
                        ],
                        list3:[
                            {
                                pict:"src/images/top1.jpg",
                                price:'￥199',
                                nump:'9885人',
                                visit:'正在观看'
                            },
                            {
                                pict:"src/images/top2.jpg",
                                price:'￥209',
                                nump:'7956人',
                                visit:'正在观看'
                            },
                            {
                                pict:"src/images/top3.jpg",
                                price:'￥389',
                                nump:'6899人',
                                visit:'正在观看'
                            },
                            {
                                pict:"src/images/top4.jpg",
                                price:'￥699',
                                nump:'4569人',
                                visit:'正在观看'
                            },
                            {
                                pict:"src/images/top5.jpg",
                                price:'￥299',
                                nump:'4456人',
                                visit:'正在观看'
                            },
                            {
                                pict:"src/images/top6.jpg",
                                price:'￥998',
                                nump:'2563人',
                                visit:'正在观看'
                            },
                            {
                                pict:"src/images/top7.jpg",
                                price:'￥799',
                                nump:'2547人',
                                visit:'正在观看'
                            }
                        ],
                        list4:[
                            {
                                picture:"src/images/like1.jpg",
                                title:"【有货独家】COMBACK 迷彩单肩手提包",
                                prices:"¥909.00",
                                oldprices:"¥1299.00"
                            },
                            {
                                picture:"src/images/like2.jpg",
                                title:"88rising X SANKUANZ 迷彩连帽PU夹克",
                                prices:"¥799.00"
                               
                            },
                            {
                                picture:"src/images/like3.jpg",
                                title:"R39   (独家首发) Letme x R39 合作款T恤",
                                prices:"¥399.00",
                                oldprices:"¥1299.00"
                            },
                            {
                                picture:"src/images/like4.jpg",
                                title:"Ron English x APPortfolio x made by monsters Melty Ronnnie Rabbbit 粉蓝版",
                                prices:"¥189.00"
                            },
                            {
                                picture:"src/images/like5.jpg",
                                title:"FOOT INDUSTRY 足下工业 织带拼接运动鞋",
                                prices:"¥1299.00",
                                oldprices:"¥1299.00"
                            },
                            {
                                picture:"src/images/like6.jpg",
                                title:"HOT TOYS 复仇者联盟3：无限战争 战争机器MARK Ⅳ 1:6比例合金珍藏人偶",
                                prices:"¥888.00",
                                oldprices:"¥1299.00"
                            },
                            {
                                picture:"src/images/like7.jpg",
                                title:"88rising X SANKUANZ 迷彩连帽PU夹克",
                                prices:"¥369.00"      
                            },
                            {
                                picture:"src/images/like8.jpg",
                                title:"【有货独家】THE HUNDREDS X COMBACK 迷彩单肩手提包",
                                prices:"¥169.00"
                            },
                            {
                                picture:"src/images/like9.jpg",
                                title:"HOT TOYS 复仇者联盟3：无限战争 战争机器MARK Ⅳ 1:6比例合金珍藏人偶",
                                prices:"¥909.00",
                                oldprices:"¥1299.00"
                            },
                            {
                                picture:"src/images/like10.jpg",
                                title:"【有货独家】THE HUNDREDS X COMBACK 迷彩单肩手提包",
                                prices:"¥269.00"
                            }
                        ]
                    }
                },
                methods:{
                   
                }

            }
</script>