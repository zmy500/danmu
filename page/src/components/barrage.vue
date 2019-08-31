<template>
    <div class="danmudiv">
         <transition-group tag="div"   name="slide"
                v-on:before-enter="beforeEnter"
                v-on:enter="enter">
                <div v-for="(item, index) in danmuarr"
                    v-bind:key="index+1"
                     :datatext="item"
                    class="danmubg">
                   {{item.createName}} - {{item.content}}
                </div>
          </transition-group>
    </div>
</template>

<script>

   import velocity from 'velocity-animate'
   import Util from "../libs/util";
   　import Cookies from 'js-cookie'
   
    export default {
        props:{
          saveMsg:{
            type:Array,
            default:[]
          }
        },
        data(){
            return {
              danmuarr:[],
              speed:{
                  max:300,
                  min:100
              },
              timer:''
        
            }
        },
        mounted(){
           this.add();
          //  this.refreshMsg()
        },
        methods: {
            // 获取随机移动速度
            speedRandom (selfWidth) { 
         
               const speed =
               (document.getElementsByClassName('danmudiv')[0].offsetWidth-selfWidth) /
                Math.floor(
                   Math.random() * (this.speed.max - this.speed.min + 1) + this.speed.min
                )
                return parseInt(speed * 3000) // 转换成毫秒
               
             },
              // 随机高度
                positionRandom (insertH) {
                 var eleheight = document.getElementsByClassName('danmudiv')[0].offsetHeight
                  const top = Math.floor(Math.random() * (eleheight - insertH)) 
                  return top
                },

              // 进入之前
                beforeEnter (el) {
                  el.style.cssText = `left: 100%;`    
                },
                // 此回调函数是可选项的设置
               // 与 CSS 结合时使用
                 enter(el, done) {
                    const insertH = el.offsetHeight
                    const selfWidth = el.offsetWidth
                    el.style.top = `${this.positionRandom(insertH)}px` 
                  
                    velocity(
                        el,
                        {
                        left: `-${el.offsetWidth}px`
                        },
                        {
                        easing: 'swing',
                        delay: 1000, // 动作多少秒后开始执行
                        duration: this.speedRandom(selfWidth),
                        complete: () => {
                            el.parentNode.removeChild(el)
                          }
                        }
                    )     
                },

                add(){
                      Util.ajax({
                          method: "POST",
                          url: "zsOnePortalBirthdayComment/query",
                          data: {
                             perParams: {}
                          }
                        })
                          .then((res) => {
                             if(res.data.code === "1000"){                        
                               let contentArr = res.data.data.items;
                               Cookies.set('msgCount',contentArr.length);
                               const num = 10;
                               var count = Math.ceil((contentArr.length / num))
                              for(var i = 1;i<=count; i++){     
                                  var offnum = (i-1)*num
                                  var newArr = contentArr.slice(offnum,i*10);
                                  this.danmuarr.push(...newArr)
                               }

                            }
                          })
                          .catch(function(error) {
                            console.log(error);
                         });      
                },

             
                refreshMsg(){
                   setInterval(() =>{
                      this.add()
                   },10000)
                }
          },
          watch:{
             'saveMsg':{
                handler(newVal,oldVal){
                     this.danmuarr.push(...newVal)
                },
                deep:true
             }
          }
    }
</script>

<style scoped>
   .danmudiv{
      width:100%;
      height:100%;
   }
   .danmubg{
        position: absolute;
        left: 100%;
        top: 100px;
        height: 30px;
        line-height:30px;
        max-width: 200px;
        padding: 0 10px;
        border-radius: 16px;
        color: #fff;
        font-size: 12px;
        text-align: center;
        background-image: linear-gradient(90deg, rgb(238, 42, 16) 0, rgb(23, 24, 22) 100% );
        z-index: 2000;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        opacity: 0.8;
      
   }
   
</style>