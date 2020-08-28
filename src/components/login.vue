<template>
    <div>
        <div class="div1">
            <span class="iconfont span1" v-on:click="back()">&#xe619;</span>
            <router-link to="/register">               
                <span class="span2">注册</span>
            </router-link>
            <span class="span3">Yoho!Family账号可登录Yoho!Buy有货<span class="iconfont">&#xe645;</span></span>
        </div>
        <form>
            <p class="p1">
                <span class="iconfont span5">&#xe72f;</span>&nbsp
                <span class="span4">中国&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span class="iconfont span6">&#xe611;&nbsp |</span></span>
                <input type="text" placeholder="请输入手机号">
            </p>
            <p class="p2">
                <span class="iconfont span8">&#xe60d;</span>&nbsp
                <input class="input2" type="text" placeholder="请输入验证码">
                <span class="span7">忘记密码</span>
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
             <p class="p5">登录</p>
            <p class="p4">
                <router-link to="/pwdlogin">               
                    <span class="span11">账号密码登录</span>
                </router-link>
                <span class="span12">忘记密码</span>
            </p>
        </form>
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
        src: url('../font/iconfont7.eot');
        src: url('../font/iconfont7.eot?#iefix') format('embedded-opentype'),
             url('../font/iconfont7.woff2') format('woff2'),
             url('../font/iconfont7.woff') format('woff'),
             url('../font/iconfont7.ttf') format('truetype'),
             url('../font/iconfont7.svg#iconfont') format('svg');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 11px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
    .div1{
        background:url("../images/login1.jpg") no-repeat;
        background-size:cover;
        height:145px;
        padding:0% 10%;
          position: relative;
    }
    .div1 .span1{
        margin-top:15px;
        float:left;
         display: inline-block;
         font-size:26px;
         color:white;
    }
    .div1 .span2{
        margin-top:20px;
        float:right;
         display: inline-block;
         font-size:12px;
         color:white;
         border:1px solid white;
         padding:0px 8px;
         border-radius:10px;
    }
     .div1 .span3{
         display: inline-block;
         font-size:11px;
         color:white;
         position: absolute;
         bottom:7px; 
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
        color:white;
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