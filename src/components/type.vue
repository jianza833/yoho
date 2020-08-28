<template>
       <div>
             <div class="div1">

             </div>
             <div class="div2">
                <span v-for="(item,index) in list" class="span1" v-bind:class="{current:index==x}" v-on:click="view(index)">{{item}}</span>
             </div>
              
            <div class="div5" v-show="x==num">
                <div class="div3" >
                        <ul>
                            <li v-for="(item,index) in list2"  v-on:click="change(index)"  v-bind:class="{current:z==index}">&nbsp&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                        </ul>
                </div>
                <div class="div4">
                        <ul v-show="y==num">

                                   <router-link to="/details/Tshirt" class="link100">
                                        <li v-for="(item,index) in list3">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                                </router-link>
                        </ul>
                         <ul v-show="y==num1">
                                   <router-link to="/details/fleec" class="link100">
                                        <li v-for="(item,index) in list4">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                                </router-link>
                        </ul>
                         <ul v-show="y==num2">
                                   <router-link to="/details/shose" class="link100">
                                        <li v-for="(item,index) in list5">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                                </router-link>
                        </ul>
                         <ul v-show="y==num3">
                                   <router-link to="/details" class="link100">
                                         <li v-for="(item,index) in list3">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                                </router-link>
                        </ul>
                         <ul v-show="y==num4">
                                   <router-link to="/details" class="link100">
                                        <li v-for="(item,index) in list3">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                                </router-link>
                        </ul>
                         <ul v-show="y==num5">
                                   <router-link to="/details" class="link100">
                                        <li v-for="(item,index) in list3">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                                </router-link>
                        </ul>
                         <ul v-show="y==num6">
                                   <router-link to="/details" class="link100">
                                        <li v-for="(item,index) in list3">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                                </router-link>
                        </ul>
                         <ul v-show="y==num7">
                                   <router-link to="/details" class="link100">
                                        <li v-for="(item,index) in list3">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                                 </router-link>
                        </ul>
                        </ul>
                         <ul v-show="y==num8">
                                   <router-link to="/details" class="link100">
                                        <li v-for="(item,index) in list3">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                                </router-link>
                        </ul>
                        </ul>
                         <ul v-show="y==num9">
                                   <router-link to="/details" class="link100">
                                        <li v-for="(item,index) in list3">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                                </router-link>
                        </ul>
                </div>
            </div>


              <div class="div5" v-show="x==num1">
                <div class="div3" >
                        <ul>
                            <li v-for="(item,index) in list21"  v-on:click="change(index)"  v-bind:class="{current:z==index}">&nbsp&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                        </ul>
                </div>
                <div class="div4">
                        <ul v-show="y==num">
                            <li v-for="(item,index) in list31">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                        </ul>
                         <ul v-show="y==num1">
                            <li v-for="(item,index) in list4">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                        </ul>
                         <ul v-show="y==num2">
                            <li v-for="(item,index) in list5">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                        </ul>
                         <ul v-show="y==num3">
                            <li v-for="(item,index) in list3">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                        </ul>
                         <ul v-show="y==num4">
                            <li v-for="(item,index) in list3">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                        </ul>
                         <ul v-show="y==num5">
                            <li v-for="(item,index) in list3">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                        </ul>
                         <ul v-show="y==num6">
                            <li v-for="(item,index) in list3">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                        </ul>
                         <ul v-show="y==num7">
                            <li v-for="(item,index) in list3">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                        </ul>
                        </ul>
                         <ul v-show="y==num8">
                            <li v-for="(item,index) in list3">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                        </ul>
                        </ul>
                         <ul v-show="y==num9">
                            <li v-for="(item,index) in list3">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                        </ul>
                </div>
            </div>
            


              <div class="div5" v-show="x==num2">
                <div class="div3" >
                        <ul>
                            <li v-for="(item,index) in list211"  v-on:click="change(index)"  v-bind:class="{current:z==index}">&nbsp&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                        </ul>
                </div>
                <div class="div4">
                        <ul v-show="y==num">
                            <li v-for="(item,index) in list3">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                        </ul>
                         <ul v-show="y==num1">
                            <li v-for="(item,index) in list4">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                        </ul>
                         <ul v-show="y==num2">
                            <li v-for="(item,index) in list5">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                        </ul>
                         <ul v-show="y==num3">
                            <li v-for="(item,index) in list3">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                        </ul>
                         <ul v-show="y==num4">
                            <li v-for="(item,index) in list3">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                        </ul>
                         <ul v-show="y==num5">
                            <li v-for="(item,index) in list3">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                        </ul>
                         <ul v-show="y==num6">
                            <li v-for="(item,index) in list3">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                        </ul>
                         <ul v-show="y==num7">
                            <li v-for="(item,index) in list3">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                        </ul>
                        </ul>
                         <ul v-show="y==num8">
                            <li v-for="(item,index) in list3">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                        </ul>
                        </ul>
                         <ul v-show="y==num9">
                            <li v-for="(item,index) in list3">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                        </ul>
                </div>
            </div>


              <div class="div5" v-show="x==num3">
                <div class="div3" >
                        <ul>
                            <li v-for="(item,index) in list2111"  v-on:click="change(index)"  v-bind:class="{current:z==index}">&nbsp&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                        </ul>
                </div>
                <div class="div4">
                        <ul v-show="y==num">
                            <li v-for="(item,index) in list3">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                        </ul>
                         <ul v-show="y==num1">
                            <li v-for="(item,index) in list4">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                        </ul>
                         <ul v-show="y==num2">
                            <li v-for="(item,index) in list5">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                        </ul>
                         <ul v-show="y==num3">
                            <li v-for="(item,index) in list3">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                        </ul>
                         <ul v-show="y==num4">
                            <li v-for="(item,index) in list3">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                        </ul>
                         <ul v-show="y==num5">
                            <li v-for="(item,index) in list3">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                        </ul>
                         <ul v-show="y==num6">
                            <li v-for="(item,index) in list3">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                        </ul>
                         <ul v-show="y==num7">
                            <li v-for="(item,index) in list3">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                        </ul>
                        </ul>
                         <ul v-show="y==num8">
                            <li v-for="(item,index) in list3">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                        </ul>
                        </ul>
                         <ul v-show="y==num9">
                            <li v-for="(item,index) in list3">&nbsp&nbsp&nbsp&nbsp{{item}}</li>
                        </ul>
                </div>
            </div>
       </div>
</template>
<script>
export default{
                data(){
                    return {
                        list:["Boys","Girls","Kids","Lifestyle"],
                        list2:["上衣","裤装","鞋靴","裙装","包类/装备","服佩","创意生活","有食","有玩","个人护理"],
                        list3:["全部上衣","T恤","卫衣","夹克","衬衫","防风外套","风衣","POLO","西装","套装","马甲","背心","大衣","毛衣/针织","棉衣","羽绒服"],
                        list4:["全部裤装","休闲裤","牛仔裤","运动裤","短裤","紧身裤","西裤","连体裤","内裤"],
                        list5:["全部鞋靴","运动鞋","休闲鞋","篮球鞋","居家","拖鞋","凉鞋","保护护理","雪地靴"],
                        list21:["上衣","裤装","鞋靴","裙装","服佩","包类/装备","创意生活","有食","有玩","个人护理"],
                        list211:["上衣","裤装","鞋靴","服佩","创意生活","有食","有玩"],
                        list2111:["创意生活","有食","有玩","美妆个护"],
                        list31:["全部上衣","卫衣","防风外套","T恤","夹克","衬衫","风衣","西装","POLO","套装","马甲","背心","大衣","毛衣/针织","棉衣","羽绒服"],
                        num:0,num1:1,num2:2,num3:3,num4:4,num5:5,num6:6,num7:7,num8:8,num9:9,
                        x:0,
                        z:0,
                        y:0
                    }
                },
                methods:{
                   view(a){
                          this.x=a; 
                          console.log(111);
                   },
                   change(b){
                           this.z=b;
                           this.y=b;
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
        .span1{
                width:24.5%;
                display: inline-block; 
                text-align:center;
                color:rgba(172,172,172,1);
                font-size:12px;
                border-right:1px solid rgba(230,230,230,1);
                margin-bottom:6px;
                height:27px;

        }
        .span1:nth-of-type(4){
                border-right:none;
                }
        .div2{
                border-bottom:1px solid rgba(230,230,230,1);
                height:35px;
                line-height:35px;
              margin-top:6px;
                
        }
        .div3{
                width:37%;
                float:left;
                overflow:auto;
        }
        .div3 ul{
                height:86vh;
                width:100%;
                background-color:rgba(248,248,248,1);
               
                
        }
       .div3 li{
               font-size:13px;
               height:47px;
               width:100%;
               background-color:rgba(248,248,248,1);
               line-height:47px;
              
               
       }
      .div3 ul .current{
             background:white;
               
       }
       .div4{
               float:right;
               width:63%;
               height:84vh;
               overflow:auto;
               
       }
       .div5{
               overflow:hidden;
       }
       .div4 li{
                
               font-size:13px;
               height:47px;
               width:100%;
              
               line-height:47px;
       }
       .div5 .link100{
              text-decoration:none;
              color:black; 
       }
       .current{
               color:black;
       }
    </style>