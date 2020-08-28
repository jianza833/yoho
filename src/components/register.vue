<template>
    <div class="div2">
        <div class="div1">
            <span class="iconfont span1" v-on:click="back()">&#xe63e;</span>
            <router-link to="/register">               
                <span class="span2">注册</span>
            </router-link>
        </div>
        <form>
            <p class="p1">
                <span class="iconfont span5">&#xe72f;</span>&nbsp
                <span class="span4">中国&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="iconfont span6">&#xe611;&nbsp |</span></span>
                <input type="text" placeholder="请输入手机号">
            </p>
            <p class="p6">
                <span class="iconfont span8">&#xe60d;</span>&nbsp
                <input class="input2" type="text" placeholder="请输入验证码">
                <span class="span7">忘记密码</span>
            </p>
            <p class="p7">
                <span class="iconfont span15">&#xe60f;</span>&nbsp
              
                <input type="text" placeholder="请输入密码">
            </p>
            <p class="p7">
                <span class="iconfont span15">&#xe552;</span>&nbsp
              
                <input type="text" placeholder="好友潮流口令(非必填)">
            </p>
            <p class="p3">
                <span class="span9">请将下列图片点击翻转至正向朝上</span>
                <span class="span10">换一批</span>
            </p>
            <ul class="ul3">
                <li>
                    <img src="../images/login2.jpg"></img>
                </li>   
                <li>
                    <img src="../images/login3.jpg"></img>
                </li>    
                <li>
                    <img src="../images/login4.jpg"></img>
                </li>    
                <li>
                    <img src="../images/login5.jpg"></img>
                </li>                
            </ul>
             <p class="p5">注册</p>
        </form>
        <div class="div3">
            <span>注册即表示您已阅读并同意</span><br>
            <i>有货用户服务协议</i>
            <i>有货隐私条款</i>
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
                src: url('../font/iconfont8.eot');
                src: url('../font/iconfont8.eot?#iefix') format('embedded-opentype'),
                    url('../font/iconfont8.woff2') format('woff2'),
                    url('../font/iconfont8.woff') format('woff'),
                    url('../font/iconfont8.ttf') format('truetype'),
                    url('../font/iconfont8.svg#iconfont') format('svg');
        }

        .iconfont {
        font-family: "iconfont" !important;
        font-size: 11px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        }
        .div1{
            margin-top:10px;
        }
        .div1 .span1{
                display: inline-block;
                font-size:22px;
                color:black;
                margin-left:5%;
            }
           
            .div1 .span2{
                width:69%;
                text-align:center;
                display: inline-block;
                font-size:14px;

            }
             form{
        padding-top:5vh;
        padding-right:9vw;
        padding-left:9vw;
    }
    form .span4{
        font-size:13px;
    }
    form .span5{
        font-size:14px;
    }
    form .span6{
        font-size:13px;
    }
    form input{
        border:none;
        outline:none;
        
    }
    form .p1{
        border-bottom:1px solid rgba(211,211,211,1);
        padding-bottom:5px;
    }
    .p2 .span8{
        font-size:12px;
    }
    .p1 input{
        font-size:12px;
    }
    .p2 .input2{
        width:68%;
        font-size:12px;
    }
    .p2 .span7{
        font-size:12px;
        padding:3px 6px;
        background-color:rgba(176,176,176,1);
        border-radius:50px;
        color:white;
    }
    .p2{
       border-bottom:1px solid rgba(211,211,211,1);
       margin-top:24px;
       padding-bottom:5px;
    }
    form .span9{
        font-size:8px;
        float:left;
    }
    form .span10{
        font-size:8px;
        color:red;
        float:right;
    }
    form .p3{
        padding:11px 10px;
        overflow:hidden;
    }
    .ul3 img{
        width:100%;
    }
    .ul3 li{
        width:22%;
        height:57px;
        float:left;
        background-color:rgba(231,231,231,1);
        margin-right:3%;
    }
    .ul3 li:nth-of-type(4){
        margin-right:0px;
    }
    .ul3{
        overflow:hidden;
    }
     form{
        padding-top:5vh;
        padding-right:7vw;
        padding-left:7vw;
    }
    form .span4{
        font-size:13px;
    }
    form .span5{
        font-size:17px;
    }
    form .span6{
        font-size:13px;
    }
    form input{
        border:none;
        outline:none;
        font-size:12px;
        
    }
    form .p1{
        border-bottom:1px solid rgba(211,211,211,1);
        padding-bottom:5px;
    }
    .p2 .span8{
        font-size:12px;
    }
    .p1 input{
        font-size:12px;
    }
    .p2 .input2{
        width:68%;
        font-size:12px;
    }
    .p2 .span7{
        font-size:12px;
        padding:3px 6px;
        background-color:rgba(176,176,176,1);
        border-radius:50px;
    }
    .p2{
       border-bottom:1px solid rgba(211,211,211,1);
       margin-top:24px;
       padding-bottom:5px;
    }
    form .span9{
        font-size:8px;
        float:left;
    }
    form .span10{
        font-size:8px;
        color:red;
        float:right;
    }
    form .p3{
        padding:11px 10px;
        overflow:hidden;
    }
    .ul3 img{
        width:100%;
    }
    .ul3 li{
        width:22%;
        height:57px;
        float:left;
        background-color:rgba(231,231,231,1);
        margin-right:3%;
    }
    .ul3 li:nth-of-type(4){
        margin-right:0px;
    }
    .ul3{
        overflow:hidden;
    }
    .p4{
        overflow:hidden;
        padding:7px 0px;
    }
    .p4 .span11{
        float:left;
        display: inline-block;
        font-size:9px;
        color:black;
    }
     .p4 .span12{
        float:right;
        display: inline-block;
        font-size:9px;
    }
     .p5{
        width:97%;
        text-align:center;
        padding:5px 0px;
        background-color:rgba(176,176,176,1);
        margin-left:auto;
        margin-right:auto;
        border-radius:6px;
        margin:10px 0px;
    }
    form .p6{
        border-bottom:1px solid rgba(211,211,211,1);
        padding-bottom:5px;
        padding-top:20px;
    }
    form .p7{
        border-bottom:1px solid rgba(211,211,211,1);
        padding-bottom:5px;
         padding-top:20px;
    }
     form .span15{
        font-size:14px;
    }
     .p6 .span7{
        font-size:12px;
        padding:3px 6px;
        background-color:rgba(176,176,176,1);
        border-radius:50px;
        margin-right:10px;
    }
     .p6 .input2{
        width:68%;
        font-size:12px;
    }
    .div3 span,i{
        font-size:8px;
    }
    .div3 span{
            display: inline-block;
            margin-left:8%;
    }
    .div3 i{
             display: inline-block;
            margin-left:8%;
            color:red;
            border-bottom:0.5px solid red;
    }
    .div3 i:nth-of-type(2)
    {
        margin-left:2%;
    }
</style>
<script>
      export default{     
                     data(){
                        return {
                        }
                     },
                     methods:{
                         back(){
                                this.$router.go(-1);
                           },
                      }

                  }
</script>