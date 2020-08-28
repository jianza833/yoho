<template>
   <div>
         <div class="div1">
            <span class="iconfont span10" v-on:click="back()">&#xe603;</span>
            <b class="b1">个人中心</b>
            <span class="iconfont span1">&#xe641;</span>
        </div>
        <div class="divtop">

        </div>
        <div class="div2">
            <router-link to="/login">               
                <p>注册/登录</p>
             </router-link>
        </div>
        <div class="div3">
            <span class="span1">默认购物频道</span>
            <span class="span2">男士MEN ></span></span>
        </div>
        <div class="div3 div4">
            <span class="span1">我的订单</span>
            <span class="span2">全部订单 ></span></span>
        </div>
        <div class="div5">
            <ul>
                  <li>
                        <span class="iconfont span3">&#xe63f;</span>
                        <p>待付款</p>
                  </li>
                   <li>
                        <span class="iconfont span3">&#xe706;</span>
                        <p>代发货</p>
                  </li>
                   <li>
                        <span class="iconfont span3">&#xe638;</span>
                        <p>待收货</p>
                  </li>
            </ul>
        </div>
        <div class="div5 div6">
            <ul>
                  <li>
                         <p>0</p>
                        <span class="iconfont span4">商品收藏</span>
                       
                  </li>
                   <li>
                         <p>0</p>
                        <span class="iconfont span4">品牌收藏</span>
                     
                  </li>
                   <li>
                        <p>0</p>
                        <span class="iconfont span4">浏览记录</span>
                  </li>
            </ul>
        </div>
        <div class="div7">
               <ul>
                  <li>
                        <span class="iconfont span11">&#xe692;</span>
                        <span class="span12">优惠券</span>
                  </li>
                  <li>
                        <span class="iconfont span13">&#xe601;</span>
                        <span class="span14">有货币</span>
                  </li>
               </ul>
        </div>
        <div class="div7">
               <ul>
                  <li>
                        <span class="iconfont span11">&#xe642;</span>
                        <span class="span12">消息</span>
                  </li>
                  <li>
                        <span class="iconfont span13">&#xe605;</span>
                        <span class="span14">服务与反馈</span>
                  </li>
               </ul>
        </div>
       <div class="div8">
        <p>
            <img src="src/images/mypic.jpg"></img>
        </p>
        <p>
            <img src="src/images/mypic1.jpg"></img>
        </p>
       </div>
       <div class="div9">
            <p class="p10">为你优选</p>
       </div>
        <ul class="div10">
            <li v-for="(item,index) in list1">
                <img :src="item.picture"></img>
                <b>{{item.title}}</b>
                <span>{{item.prices}}</span>
                <i>{{item.oldprices}}</i>
            </li>
        </ul>
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
        }
         .div1 .span1{
                float:right;
                margin-right:14px;
                color:white;
        }
        .div2{
               height:65px;
               padding-top:20px;
               background:url("../images/mybackground.jpg") no-repeat;
               background-size:cover;

        }
        .div2 p{
           height:30px;
           width:30%;
           margin-left:auto;
           margin-right:auto;
           border:1.5px solid white;
           text-align:center;
           line-height:30px;
           color:white;
           font-size:12px;
        }
        .div3{
           border-bottom:7px solid rgba(211,211,211,1);
           overflow:hidden;
           padding:8px 10px;
        }
        .div3 .span1{
           float:left;
           font-size:13px;
        }
         .div3 .span2{
           float:right;
           font-size:11px;
        }
       .div4{
           border-bottom:1px solid rgba(211,211,211,1);
           overflow:hidden;
           padding:8px 10px;
        }
        .div5 .span3{
           color:black;
           display:block;
        }
        .div5 .span4{
           color:black;
           display:block;
           font-size:13px;
        }
        .div5 ul{
           overflow:hidden;
          padding-top:10px;
          
           border-bottom:1px solid rgba(211,211,211,1);
          
        }
        .div5 li{
           float:left;
           width:28%;
           margin-right:5%;
           text-align:center;
           height:55px;
        }
        .div5 li:nth-of-type(3)
        {
            margin-right:0%;
           
        }
        .div5 p{
           font-size:12px;
        }
        .div6{
           border-bottom:6px solid rgba(211,211,211,1);
        }
        .div7 .span11{
           font-size:24px;
           display: inline-block;
           margin-left:10px;
           height:23;
           width:23px;
           margin-top:5px;
        }
         .div7 .span13{
           font-size:24px;
           display: inline-block;
           margin-left:10px;
           height:23;
           width:23px;
           margin-top:5px;

        }
        .div7 .span12{
           height:25px;
           display: inline-block;
           font-size:12px;
           border-bottom:1px solid rgba(211,211,211,1);
           width:87%;
        }
        .div7 .span14{
           height:25px;
           display: inline-block;
           font-size:12px;
           
           width:87%;
        }
        .div7 ul{
           border-bottom:7px solid rgba(211,211,211,1);
        }
        .div8 img{
            width:100%;
        }
        .div8 p{
            width:100%;
            border-bottom:6px solid rgba(211,211,211,1);
        }
       .div9{
          border-bottom:1px solid rgba(211,211,211,1);
          padding:4px 0px;
       }
       .div9 p{
            margin-left:20px;
            padding-left:8px;
            border-left:2px solid black;
            font-size:14px;
       }
       .div10{
        overflow:hidden;
        margin-top:18px;
    }
    .div10 img{
        width:100%;
    }
    .div10 b{
         font-size:12px;
        width:100%;
        margin-left:4px;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .div10 span{
        font-size:12px;
        color:red;
        display: inline-block;
        margin-left:10px;
    }
    .div10 i{
        font-size:12px;
        text-decoration:line-through;
        display: inline-block;
       
    }
    .div10 li{
        float:left;
        margin-left:5%;
        width:42.5%;
    }
    .div10 li :nth-of-type(2n){
        margin-right:5%;
    }
</style>
<script>
      export default{     
                     data(){
                        return {
                               list1:[
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
                         back(){
                    this.$router.go(-1);
                           },
                      }

                  }
</script>