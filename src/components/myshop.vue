<template>
   <div>
         <div class="div1">
            <span class="iconfont span10" v-on:click="back()">&#xe603;</span>
            <b class="b1">购物车</b>
            <span class="span1">编辑</span>
        </div>
        <div class="divtop">

        </div>
        <div class="div2">
            <span>普通商品(3)</span>
        </div>
        <div class="div3">
           <span class="span2">再买￥170即可免运费</span>
           <span class="span3">去凑单 ></span>
        </div>
        <ul class="ul1">
            <li v-for="(item,index) in list">
                <p v-on:click="change(index,$event)" class="p10">
                    <img v-model="show" src="src/images/yuanxing.png" :class="{current:show[index]}"></img>
                </p>
                <div class="div4">
                    <img :src="item.pic"></img>
                    <div class="div5">
                        <p class="p11">
                            <span class="span4">THETHING 局部印花高领打底TEE</span>
                            <span class="span5">x1</span>
                        </p>
                        <span class="span6">颜色:卡其色&nbsp&nbsp尺码:M</span><br>
                        <span class="span7">¥259.00</span>
                    </div>
                </div>
            </li>
        </ul>
        <p class="p13">总计¥229.00=商品金额¥229.00</p>
        <div class="div6">
            <p class="p14">
                 <p v-on:click="allcelect()" class="p10">
                  <img v-model="show" src="src/images/yuanxing.png" :class="{current:d==0}"></img>
                     <span>全选</span>
                </p>
            </p>
            <p class="p15">
                <span class="span23">总计:¥0&nbsp(0件)</span><br>
                <span>不含运费</span>
            </p>
            <p class="p16">结算</p>
        </div>
        <b v-show="false">{{aa}}</b>
         <p class="ptop">为你优选新品</p>
        <ul class="div10">
            <li v-for="(item,index) in list1">
                <img :src="item.picture"></img>
                <b>{{item.title}}</b>
                <span>{{item.prices}}</span>
                <i>{{item.oldprices}}</i>
            </li>
        </ul>
        <div class="div8"></div>
   </div>
</template>

<script>
      export default{     
                     data(){
                        return {
                            aa:0,
                            show:[],
                            a:1,
                            b:1,
                            c:0,
                            d:1,
                            num:0,
                            msg:0,
                            list:[
                                {
                                    pic:"src/images/myshop10.jpg",
                                },
                                {
                                    pic:"src/images/myshop11.jpg",
                                },
                                {
                                    pic:"src/images/myshop12.jpg",
                                },
                                {
                                    pic:"src/images/myshop10.jpg",
                                },
                                {
                                    pic:"src/images/myshop12.jpg",
                                },
                                {
                                    pic:"src/images/myshop12.jpg",
                                },
                            ],
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
                      mounted(){
                    // 扩展show的长度
                            for(var i=0;i<this.list.length;i++){
                                this.show.push(0)
                            }
                            console.log(this.show)
                        },
                     methods:{
                         back(){
                                this.$router.go(-1);
                           },
                            change(s,x){
                                this.aa++;
                                if(this.show[s]==1)
                              this.show[s]=0;
                              else
                              this.show[s]=1;
                              console.log(x.target);
                              console.log(this.show);
                            },
                            allcelect(){
                                console.log(111);
                            if(this.a==this.b){
                                this.aa++;
                                for(var i=0;i<this.show.length;i++){
                                    this.aa++;
                                    this.show[i]=false;                        
                                }
                                this.b=0;
                                this.d=1;
                            }else{
                                for(var i=0;i<this.show.length;i++){
                                
                                this.aa++;
                                // 单纯的数组或者对象变化，不会渲染页面。可以定义一个数据去触发
                                this.show[i]=true;
                                }
                                this.b=1;
                                this.d=0;
                            
                            }
                            }
                      }

                  }
</script>


<style scoped>
      *{
         margin:0px;
         padding:0px;
         list-style:none;
      }
    .current{
          background:url("../images/xuanzhong.png");
          color:red;
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
                font-size:12px;
        }
        .div2{
            text-align:center;
            padding:10px 0px;
        }
        .div3{
            padding:5px 10px;
            background-color:rgba(255,127,129,1);
            font-size:10px;
        }
        .div3 .span2{
            width:78%;
             display: inline-block;
             color:white;
        }
         .div3 .span3{
            width:20%;
             display: inline-block;
             text-align:center;
             color:white;
        }
         .ul1 .p10{        
            width:20%;
            text-align:center;
            line-height:123px;
            float:left;
        }
        .ul1 li{
            height:123px;
        }
        .div4{
            float:right;
            width:80%;
            overflow:hidden;
            padding:8px 0px;
            border-bottom:1px solid rgba(240,240,240,1);
        }
        .div4 img{
            width:25%;
             display:block;
             float:left;
        }
        .div5 .p11{
            font-size:10px;
            float:right;
            overflow:hidden;

         }
         .p11 .span4{
             width:80%;
              display: inline-block;
              float:left;
              font-size:12px;
         }
         .p11 .span5{
             width:19%;
              display: inline-block;
             float:right;
             text-align:center;
             margin-top:2px;
             font-size:12px;
         }
         .div4 .div5{
             width:66%;
             overflow:hidden;
             padding-top:4px;
             padding-left:10px;
         }
          .div4 .span6{
            margin-left:5px;
             font-size:12px;
             color:rgba(182,182,182,1)
         }
           .div4 .span7{
            margin-left:5px;
             font-size:12px;
             color:red;
         }
         .p13{
             font-size:12px;
             padding:5px 23px;
             border-top:10px solid rgba(240,240,240,1);
             border-bottom:10px solid rgba(240,240,240,1)
         }
         .div6{
             text-align:center;
             font-size:12px;
             height:54px;
               overflow:hidden;
            position: fixed;
            bottom:0px;
            width:100%;
            background-color:white;
            border-top:1px solid rgba(238,238,238,1);
         }
         .div6 .p10{
             width:20%;
              float:left;
              margin-top:10px;
         }
        .div6 .p15{
             width:50%;
              float:left;
                margin-top:10px;
         }
         .div6 .p16{
             width:26%;
              float:left;
              margin:3px 6px;
              height:40px;
              line-height:40px;
              background-color:red;
              border-radius:5px;
         }
       .p15 .span23{
           color:red;
       }
       .div8{
           height:54px;
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