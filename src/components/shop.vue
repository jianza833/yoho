<template>
 <div>
       <div class="div1">
            <span class="iconfont span10" v-on:click="back()">&#xe603;</span>
            <b class="b1">购物车</b>
        </div>
        <div class="divtop">

        </div>
        <div class="div2">
            <p>！请您下<button> <router-link to="/myshop">登录 </router-link></button>可以同步手机和电脑上的商品</p>
        </div>
        <div class="div3">
           <span class="iconfont span1">&#xe638;</span><br>
           <span class="span2">您的购物车暂无商品</span><br>
           <span class="span3">随便逛逛</span>
        </div>
        <p class="ptop">为你优选新品</p>
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
                float:right;
                margin-right:44%;
        }
         .div1 .span1{
                float:right;
                margin-right:14px;
                color:white;
        }
        .div2{
           padding:8px 2px;
           background:rgba(240,240,240,1);
        }
        .div2 p{
            color:rgba(36,172,186,1);
            text-align:center;
            font-size:13px;
        }
        .div2 button{
           background:red;
           color:white;
           border:0px;
           padding:2px 6px;
           font-size:13px;
        }
        .div3{
           text-align:center;
            background:rgba(240,240,240,1);
            padding:30px 0px;
        }
        .div3 .span1{
           width:100%;
           padding:30px 0px;
           font-size:54px;
           display: inline-block;
           opacity:0.6;
        }
        .div3 .span2{
           width:100%;
           font-size:10px;
           display: inline-block;
           padding:8px 0px;
        }
        .div3 .span3{
           
           font-size:10px;
           display: inline-block;
           padding:6px 37px;
           background:black;
           color:white;
           border-radius:5px;
        }
        .ptop{
           padding:20px 0px;
           text-align:center;
        }
          .div10{
        overflow:hidden;
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