<template>
    <div>
        <div class="div1">
            <span class="iconfont" v-on:click="back()">&#xe623;</span>
            <b class="b1">商品列表</b>
            <span class="iconfont span1">&#xe733;</span>
        </div>
        <div class="divtop"></div>
        <div class="div2">
            <ul>
                <li v-on:click="change()" v-bind:class="{one:a!=b}">
                    <span class="span11">默认<i class="i1"></i></span>
                </li>
                <li>
                    <span>新品</span>
                </li>
                <li>
                    <span>人气</span>
                </li>
                <li>
                    <span>价格</span>
                </li>
                <li  v-on:click="change()">
                    <span class="span10">筛选<i class="i2"></i></span>
                </li>
            </ul>
                <div class="div3" v-show="a!=b">
                    <p class="two" v-on:click="approve()"><span>默认</span><i>√</i></p><br>
                    <p  v-on:click="increase()"><span>价格从高到底</span></p><br>
                    <p  v-on:click="reduce()"><span>价格从低到高</span></p>
                </div>
        </div>
        <ul class="ul1">
            <li v-for="(item,index) in listnum">
                <router-link :to="'/detail/'+item.id" class="router1">
                        <img :src="item.src1"></img>
                        <b>{{item.title}}</b>
                        <span>¥{{item.price}}</span>
                        <i>{{item.oldprice}}</i>
                </router-link>     
             </li> 
        </ul>

    </div>
</template>
<script>
export default{
                data(){
                    return {
                        a:0,
                        b:0,
                        x:'',
                        listnum:'',
                        list:[
                            {
                                src1:"src/images/list1.jpg",
                                title:"THETHING 前胸绣花剪裁Tee",
                                price:550.00,
                                oldprice:"¥398.00",
                                id:"detail1"
                            },
                            {
                                src1:"src/images/list2.jpg",
                                title:"复仇者联盟3：无限战争 战争机器MARK Ⅳ 1:6比例合金珍藏人偶",
                                price:399.00,
                                oldprice:"¥398.00",
                                id:"detail2"
                            },
                            {
                                src1:"src/images/list3.jpg",
                                title:"HOT TOYS 复仇者联盟3：无限战争 战争机器MARK Ⅳ 1:6比例合金珍藏人偶",
                                price:10000.00,
                                oldprice:"¥398.00",
                                id:"detail3"
                            },
                            {
                                src1:"src/images/list4.jpg",
                                title:"THETHING 前胸绣花剪裁Tee",
                                price:259.00,
                                oldprice:"¥398.00",
                                id:"detail4"
                            },
                            {
                                src1:"src/images/list5.jpg",
                                title:"HOT TOYS 复仇者联盟3：无限战争 战争机器MARK Ⅳ 1:6比例合金珍藏人偶",
                                price:259.00,
                                oldprice:"¥398.00",
                                id:"detail1"
                            },
                            {
                                src1:"src/images/list6.jpg",
                                title:"THETHING 前胸绣花剪裁Tee",
                                price:259.00,
                                oldprice:"¥398.00",
                                id:"detail1"
                            },
                            {
                                src1:"src/images/list7.jpg",
                                title:"THETHING 前胸绣花剪裁Tee",
                                price:259.00,
                                oldprice:"¥398.00",
                                id:"detail1"
                            },
                            {
                                src1:"src/images/list8.jpg",
                                title:"THETHING 前胸绣花剪裁Tee",
                                price:259.00,
                                oldprice:"¥398.00",
                                id:"detail1"
                            },
                            {
                                src1:"src/images/list9.jpg",
                                title:"THETHING 前胸绣花剪裁Tee",
                                price:259.00,
                                oldprice:"¥398.00",
                                id:"detail1"
                            },
                            {
                                src1:"src/images/list10.jpg",
                                title:"THETHING 前胸绣花剪裁Tee",
                                price:259.00,
                                oldprice:"¥398.00",
                                id:"detail1"
                            },
                        ],
                        list2:[
                            {
                                src1:"src/images/list11.jpg",
                                title:"THETHING 前胸绣花剪裁Tee",
                                price:259.00,
                                oldprice:"¥398.00",
                                id:"detail1"
                            },
                            {
                                src1:"src/images/list12.jpg",
                                title:"复仇者联盟3：无限战争 战争机器MARK Ⅳ 1:6比例合金珍藏人偶",
                                price:259.00,
                                oldprice:"¥398.00",
                                id:"detail1"
                            },
                            {
                                src1:"src/images/list13.jpg",
                                title:"HOT TOYS 复仇者联盟3：无限战争 战争机器MARK Ⅳ 1:6比例合金珍藏人偶",
                                price:259.00,
                                oldprice:"¥398.00",
                                id:"detail1"
                            },
                            {
                                src1:"src/images/list14.jpg",
                                title:"THETHING 前胸绣花剪裁Tee",
                                price:259.00,
                                oldprice:"¥398.00",
                                id:"detail1"
                            },
                            {
                                src1:"src/images/list15.jpg",
                                title:"HOT TOYS 复仇者联盟3：无限战争 战争机器MARK Ⅳ 1:6比例合金珍藏人偶",
                                price:259.00,
                                oldprice:"¥398.00",
                                id:"detail1"
                            },
                            {
                                src1:"src/images/list16.jpg",
                                title:"THETHING 前胸绣花剪裁Tee",
                                price:259.00,
                                oldprice:"¥398.00",
                                id:"detail1"
                            },
                            {
                                src1:"src/images/list17.jpg",
                                title:"THETHING 前胸绣花剪裁Tee",
                                price:259.00,
                                oldprice:"¥398.00",
                                id:"detail1"
                            },
                            {
                                src1:"src/images/list18.jpg",
                                title:"THETHING 前胸绣花剪裁Tee",
                                price:259.00,
                                oldprice:"¥398.00",
                                id:"detail1"
                            },
                            {
                                src1:"src/images/list19.jpg",
                                title:"THETHING 前胸绣花剪裁Tee",
                                price:259.00,
                                oldprice:"¥398.00",
                                id:"detail1"
                            },
                            {
                                src1:"src/images/list20.jpg",
                                title:"THETHING 前胸绣花剪裁Tee",
                                price:1699.00,
                                oldprice:"¥398.00",
                                id:"detail1"
                            },
                        ],
                        list3:[
                            {
                                src1:"src/images/list21.jpg",
                                title:"THETHING 前胸绣花剪裁Tee",
                                price:259.00,
                                oldprice:"¥398.00",
                                id:"detail1"
                            },
                            {
                                src1:"src/images/list22.jpg",
                                title:"复仇者联盟3：无限战争 战争机器MARK Ⅳ 1:6比例合金珍藏人偶",
                                price:259.00,
                                oldprice:"¥398.00",
                                id:"detail1"
                            },
                            {
                                src1:"src/images/list23.jpg",
                                title:"HOT TOYS 复仇者联盟3：无限战争 战争机器MARK Ⅳ 1:6比例合金珍藏人偶",
                                price:259.00,
                                oldprice:"¥398.00",
                                id:"detail1"
                            },
                            {
                                src1:"src/images/list24.jpg",
                                title:"THETHING 前胸绣花剪裁Tee",
                                price:259.00,
                                oldprice:"¥398.00",
                                id:"detail1"
                            },
                            {
                                src1:"src/images/list25.jpg",
                                title:"HOT TOYS 复仇者联盟3：无限战争 战争机器MARK Ⅳ 1:6比例合金珍藏人偶",
                                price:59.00,
                                oldprice:"¥398.00",
                                id:"detail1"
                            },
                            {
                                src1:"src/images/list26.jpg",
                                title:"THETHING 前胸绣花剪裁Tee",
                                price:998.00,
                                oldprice:"¥398.00",
                                id:"detail1"
                            },
                            {
                                src1:"src/images/list27.jpg",
                                title:"THETHING 前胸绣花剪裁Tee",
                                price:259.00,
                                oldprice:"¥398.00",
                                id:"detail1"
                            },
                            {
                                src1:"src/images/list28.jpg",
                                title:"THETHING 前胸绣花剪裁Tee",
                                price:259.00,
                                oldprice:"¥398.00",
                                id:"detail1"
                            },
                            {
                                src1:"src/images/list29.jpg",
                                title:"THETHING 前胸绣花剪裁Tee",
                                price:259.00,
                                oldprice:"¥398.00",
                                id:"detail1"
                            },
                            {
                                src1:"src/images/list30.jpg",
                                title:"THETHING 前胸绣花剪裁Tee",
                                price:259.00,
                                oldprice:"¥398.00",
                                id:"detail1"
                            },
                        ]
                      
                    }
                },
                 mounted(){
                    // 接收路由参数
                    console.log(this.$route.params)
                        if(this.$route.params.sh=="Tshirt")
                        {
                        this.listnum=this.list;
                        }
                        if(this.$route.params.sh=="fleec")
                        {
                            this.listnum=this.list2;
                        }
                        if(this.$route.params.sh=="jacket")
                        {
                            this.listnum=this.list;
                        }
                        if(this.$route.params.sh=="shirt")
                        {
                            this.listnum=this.list;
                        }
                        if(this.$route.params.sh=="shose")
                        {
                            this.listnum=this.list3;
                        }
                        if(this.$route.params.sh=="pants")
                        {
                            this.listnum=this.list;
                        }
                        if(this.$route.params.sh=="jeans")
                        {
                            this.listnum=this.list;
                        }
                        if(this.$route.params.sh=="jams")
                        {
                            this.listnum=this.list;
                        }
                        if(this.$route.params.sh=="cap")
                        {
                            this.listnum=this.list;
                        }
                        if(this.$route.params.sh=="ACC")
                        {
                            this.listnum=this.list;
                        }
                        if(this.$route.params.sh=="backpack")
                        {
                            this.listnum=this.list;
                        }
                        if(this.$route.params.sh=="handbag")
                        {
                            this.listnum=this.list;
                        }     
                    
                        
                },
                
                methods:{
                  
                   change(){
                       if(this.b==0)
                       {
                           this.b=1;
                       }else{
                           this.b=0;
                       }
                   },
                   back(){
                    this.$router.go(-1);
                   },
                    asc(a,b){
                    return (a.price-b.price);
                },
                desc(a,b){
                    return (b.price-a.price);
                },
                increase(){
                    this.listnum.sort(this.asc);
                    },
                reduce(){
                     this.listnum.sort(this.desc);
                    },
                approve(){
                        this.listnum=this.list2;
                       
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
    .router1{
        text-decoration:none;
        color:black;
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
                font-size: 23px;
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
                position: fixed;
                top:0px;
                right:0px;
            }
        .i1{
                float:right;
        }
        .b1{
                font-weight: 500;
                font-size: 19px;;
                color:white;
        }
    .div1 .span1{
                float:right;
                margin-right:14px;
    }
    .div2{
       position: relative;
    }
    .div2 ul{
        overflow:hidden;
    }
    .span10{
        position: relative;
    }
    .span11{
        position: relative;
    }
    .div2 li{
        float:left;
        width:20%;
        height:33px;
        text-align:center;
        font-size:11px;
        border-bottom:1px solid rgba(230,230,230,1);
        margin-bottom:4px;
        line-height:33px;
        
        color:rgba(153,153,153,1)rgba(153,153,153,1);
    }
    .div2 .i1{
        width:7px;
        height:7px;
        background:url(../images/bigpic.png) no-repeat -411px -148px;
        position: absolute;
        top:5px;
        left:27px;
        margin-left:3px;
    }
    .div2 .i2{
        width:7px;
        height:7px;
        background:url(../images/bigpic.png) no-repeat -411px -148px;
        position: absolute;
        top:5px;
        left:27px;
        margin-left:3px; 
    }
    .div3{
      position: absolute;
      background-color:white;
    }
    .div3 .two{
      color:black
    }
    .div3 p{
        float:left;
        font-size:14px;
        height:39px;
        line-height:39px;
        border-bottom:1px solid rgba(153,153,153,1);
        color:rgba(153,153,153,1);
        margin-left:13px;
        width:95vw;
    }
    .div3 i{
        float:right;
        margin-right:20px;
    }
    .div2 .one{
        color:black;;
    }
    .divtop{
            width:100%;
            height:59px;
    }
    .ul1 li img{
        width:100%;
    }
    .ul1 li{
        float:left;
        width:39.5%;
        margin-left:7%;
        margin-bottom:25px;
        margin-top:20px;
      
    }
    .ul1 li :nth-of-type(2n){
        margin-right:5%;
        margin-left:5%;
    }
    .ul1 li b{
        font-size:13px;
        width:100%;
        margin-left:4px;
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        

    }
    .ul1 span{
        font-size:12px;
        color:red;
        display: inline-block;
        margin-left:10px;
    }
    .ul1 i{
        font-size:12px;
        text-decoration:line-through;
        display: inline-block;
    }
    
</style>