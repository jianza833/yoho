<template>
    <div class="div1">
        <div class="div2">
            <router-view></router-view>
        </div>
        <ul>
            <li v-for="(item,index) in list" v-on:click="change(item,index)" :class="{current:num==index}">
                <router-link :to="item.path" class="vertorTo">
                    <p class="vertortop">
                        <span class="iconfont" v-html="list[index].vertor"></span><br>
                        <span>{{item.con}}</span>
                    </p>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default{
               
                data(){
                    return {
                      
                        list:[
                            {
                                vertor:"&#xe610;",
                                con:'主页',
                                path:'/index'
                            },
                            {
                                vertor:"&#xe627;",
                                con:'分类',
                                path:'/type'
                            },
                             {
                                vertor:"&#xe61a;",
                                con:'逛',
                                path:'/guang'
                            },
                             {
                                vertor:"&#xe633;",
                                con:'购物车',
                                path:'/shop'
                            },
                             {
                                vertor:"&#xe60b;",
                                con:'我的',
                                path:'/my'
                            }
                            
                        ],
                        num:0,
                    }
                },
                methods:{
                    change(a,b){
                            this.num=b;
                    }
                }

            }
</script>
<style scoped>
  *{
       margin: 0px;
       padding: 0px;
       list-style: none;
           
    }
  .div1{
     width:100%;
     height:100vh;
     overflow:auto;
    }   
  ul li{
      width:20%;
      float:left;
      text-align:center;  
      font-size: 8px; 
  }

  ul{
      width:100%;
      height:50px;
      border-top:1px solid #b0b0b0;
      background-color:rgba(255,255,255,1);
      overflow: hidden;
      position: fixed;
      bottom:0px;
      left:0px;
       
  }

  @font-face {
            font-family: 'iconfont';
            src: url('../font/iconfont.eot');
            src: url('../font/iconfont.eot?#iefix') format('embedded-opentype'),
                url('../font/iconfont.woff2') format('woff2'),
                url('../font/iconfont.woff') format('woff'),
                url('../font/iconfont.ttf') format('truetype'),
                url('../font/iconfont.svg#iconfont') format('svg');
            }

 .iconfont {
                font-family: "iconfont" !important;
                font-size: 24px;
                font-style: normal;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
               
            }
  .vertortop{
               margin-top:8px
            }
  .vertorTo{
              
               text-decoration:none;
           }
    span{
        color:rgba(176,176,176,1);
    }
   .current span{
       color:rgba(65,65,65,1);
   }
   .div2{
       overflow:auto;
       width:100%;

   }

</style>