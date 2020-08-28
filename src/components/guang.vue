<template>
   <div>
      <div class="div1">

      </div>
      <div class="div2">
         <span v-for="(item,index) in list" class="span1" v-bind:class="{current:index==num}" v-on:click="view(index)">{{item}}</span>
      </div>
      <img src="src/images/guang1.jpg" class="img1"></img>
      <div class="div3" v-for="(item,index) in list1">
            <img :src="item.pic"></img>
            <p class="p1">被重新定义的Polo衫，了解它的多变与时髦</p>
            <p class="p2">POLO衫</p>
            <p class="p2"><span class="span2">搭配</span><span class="span3">123987人已阅读</span><span class="span4">165 <span class="iconfont">&#xe60c;</span></span></p>
            <div class="div6">
            <ul>
                <li v-for="(item,index) in item.list3" class="li3">
                    <img :src="item.pict" class="img4"></img>
                   <div>
                        <b>{{item.price}}</b><br>
                        <i>{{item.nump}}</i><br>
                        <u>{{item.visit}}</u>
                    </div>
                </li>
            </ul>
        </div>
      </div>
       <div class="div4">
      </div>
   </div>
</template>

<style scoped>
        *{
            margin: 0px;
            padding: 0px;
            list-style: none;
        }
         *{
               margin:0px;
               padding:0px;
               list-style:none;
            }
            @font-face {
            font-family: 'iconfont';
            src: url('../font/iconfont6.eot');
            src: url('../font/iconfont6.eot?#iefix') format('embedded-opentype'),
                url('../font/iconfont6.woff2') format('woff2'),
                url('../font/iconfont6.woff') format('woff'),
                url('../font/iconfont6.ttf') format('truetype'),
                url('../font/iconfont6.svg#iconfont') format('svg');
            }

      .iconfont {
                font-family: "iconfont" !important;
                font-size: 23px;
                font-style: normal;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
               
               
            }
        .span1{
                width:19.5%;
                display: inline-block; 
                text-align:center;
                color:rgba(204,204,204,1);
                font-size:12px;
                margin-bottom:6px;
                height:27px;
        }
        .div2{
               
                height:35px;
                line-height:35px;
              margin-top:6px;   
        }
      .current{
           color:black;
           border-bottom:2px solid black;
        }
        .img1{
           height:150px;
           width:100%;
        }
        .div3{
           padding:5px 11px 3px 11px;
        }
        .div3 img{
           width:100%;
        }
        .div3 .p1{
            width:97%;
            text-align:center;
            font-size:18px;
            padding:3px 4px;
            overflow : hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
        }
        .p2{
           height:33px;
           width:100%;
           font-size:10px;
           margin-left:10px;
        }
        .span2{
           float:left;
           padding-right:5px;
           border-right:1px solid rgba(176,176,176,1);
           height:12px;
           margin-top:6px;
             color:rgba(176,176,176,1)
        }
        .span3{
           float:left;
           padding-left:5px;
           margin-top:6px;
             color:rgba(176,176,176,1);
        }
        .span4{
           float:right;
           margin-bottom:10px;
           margin-right:10px;
           color:rgba(176,176,176,1)
        }
        .div4{
           width:100%;
           height:47px;
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
        float:left;
    }
    .div6 img{
        width:40%;
        float:left;
    }
    .div6 div{
        width:60%;
        float:right;
        background-color:rgba(240,240,240,1);
        height:54px;
    }
    b,u,i{
        color:red;
    }
    u,i{
        color:black;
         text-decoration:none; 
         font-size:10px;
    }
    </style>
    <script>
export default{
                data(){
                    return {
                        list:["最新","搭配","头条","上新","视频"],
                        list1:[
                           {
                              pic:"src/images/guang2.jpg",
                               list3:[
                            {
                                pict:"src/images/top7.jpg",
                                price:'￥199',
                                nump:'9885人',
                                visit:'正在观看'
                            },
                            {
                                pict:"src/images/top6.jpg",
                                price:'￥209',
                                nump:'7956人',
                                visit:'正在观看'
                            },
                            {
                                pict:"src/images/top4.jpg",
                                price:'￥389',
                                nump:'6899人',
                                visit:'正在观看'
                            },
                            {
                                pict:"src/images/top3.jpg",
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
                                pict:"src/images/top2.jpg",
                                price:'￥998',
                                nump:'2563人',
                                visit:'正在观看'
                            },
                            {
                                pict:"src/images/top1.jpg",
                                price:'￥799',
                                nump:'2547人',
                                visit:'正在观看'
                            }
                        ],
                           },
                           {
                              pic:"src/images/guang3.jpg",
                               list3:[
                            {
                                pict:"src/images/top5.jpg",
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
                           },
                           {
                              pic:"src/images/guang4.jpg",
                               list3:[
                            {
                                pict:"src/images/top6.jpg",
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
                           },
                           {
                              pic:"src/images/guang5.jpg",
                               list3:[
                            {
                                pict:"src/images/top2.jpg",
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
                           },
                           {
                              pic:"src/images/guang6.jpg",
                               list3:[
                            {
                                pict:"src/images/top3.jpg",
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
                           },
                           {
                              pic:"src/images/guang7.jpg",
                               list3:[
                            {
                                pict:"src/images/top2.jpg",
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
                           },
                           {
                              pic:"src/images/guang8.jpg",
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
                           },
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
                        num:0,
                    }
                },
                methods:{
                   view(a){
                          this.num=a; 
                          console.log(111);
                   },
                   change(b){
                    
                          console.log(111)
                     
                       
                   }
                }

            }
</script>