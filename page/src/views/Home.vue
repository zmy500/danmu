<template>
    <div class="layout">
          <header>
             <div class="layout-ceiling-main">
               <div class="logo">
                 <img src="http://10.10.20.5/zsplat/Z1/portal/dist/6db3ef1e4e37b66d138e840cb2d231b0.png" width="90" height="17" style="position: absolute; top: 14px;">
                 <span class="aim"><i>务实 高效 规范 创新</i></span>
               </div>
               <ul class="header_list" >
                  <li class="base-info ivu-menu-item" style="padding-right: 8px;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAATCAYAAACZZ43PAAAAAXNSR0IArs4c6QAAAY5JREFUOBGtVDFLw0AYvS+1waEViyAVkgzFSVxcdHYUcXDTxaFidxc3ceg/cBB0dHERdPMP6OJvKMIlKUGEIlY6FJLzfVcvppJSW8zQd/e+9959JfeFxIgnCIItpcQVl4lEw3XdhzzpTB7JHJuVUs6gThzkDtbDv9bwlo2q4Pvh8Y9Zc47v+3u/tbynLCnla42ofwPzepY3ayK6K5dL9Uql8m64tAOYikL0b0eZ2YDabrf7eWHMjGlAELRPIFnLFvPWCNmXsr1jammAUkndkOOQKD40Gh2A1FkQNUOOR1oxGh0QRVHJEH9BHFg2Oh1gNtPg/wTEcTw/zens0R3g2p5PGFANw3CbPSRl2BAiuZwwgOWRZdGqRZScTWFmy1KSiCNMo9VEyAawhU5eMEtvxSJ1cO87tm13er0eT+wC9guMeIVV4DL+9mKhYN0PDRMK+pEyeMK1xmBRCYYE+IFCy/PczW9JCqNe4yMUVZj5gs0BHZz4nLoyi9wOYLDxTWiii4OBlq49zzlFJ/2MVy+/AAzBkorupimQAAAAAElFTkSuQmCC" class="xiaoxi"></li>
                  <li class="base-info ivu-menu-item" style="padding-right: 8px;"><span class="nameFirst">张</span> <button type="button" class="back-login loginName ivu-btn ivu-btn-primary ivu-btn-circle ivu-btn-small"><!----> <!----> <span>张梦雨</span></button></li>
                  <li class="base-info ivu-menu-item" style="padding-right: 0px;"><button type="button" class="ivu-btn ivu-btn-primary ivu-btn-circle ivu-btn-small"><!----> <!----> <span>已签到</span></button></li>
                  <li class="base-info ivu-menu-item"><button type="button" class="back-login ivu-btn ivu-btn-primary ivu-btn-circle ivu-btn-small"><!----> <!----> <span>退出</span></button></li>
               </ul>
            </div>
          </header>

        <main class="main_content">
               <div class="lunbo_auto">
                   <Carousel   :loop="loop" v-model="lunbo" :autoplay="autoplay" dots="none" v-for="(item,index) in imgs" :key="index">
                     <CarouselItem >
                        <div class="banner">
                           <h3>你好，<span>{{employeeName}}</span></h3>
                           <img :src="luSrc + item.imgUrl"/>>>
                           <h2>欢迎使用智数智能办公门户</h2>
                        </div>
                    </CarouselItem>
                </Carousel>
               </div>

            <div class="tempMonitor" style="margin-top: 20px;">
                <div class="title">温度监测</div>
                <div class="check-temp">
                  <ul>
                     <li>
                        <div  class="temp_left temp-content" :style="{backgroundImage:'url(' + weather_img_src + weather.wea_img+'.png'+ ')'}">
                            <div class="date" v-show="weather.date != undefined">{{weather.date +' '+ weather.week}}</div>
                            <div class="temp">
                              <label>{{weather.tem}}</label>
                              <span>{{weather.wea}}</span>
                            </div>
                            <div class="tips">{{weather.air_tips}}</div>
                        </div>  
                     </li> 
                      <li>
                        <div class="temp_center temp-content">
                           <div class="date">所在办公区域</div> 
                           <div class="temp" style="margin-top: 20px;">B-2</div>
                           <div class="tips">智数科技 B-2</div> 
                        </div>  
                     </li>  
                      <li>
                        <div class="temp_right temp-content">
                           <div class="date">办公环境指标</div>
                          <div class="tempList"><div class="list"><span>29.2</span> <p>温度(℃)</p></div> <div class="list"><span>58.5</span> <p>湿度(%)</p></div> <div class="list"><span>--</span> <p>PM2.5(μg/m³)</p></div></div> 
                        </div>  
                      </li>   
                  </ul>
                </div>
            </div>

            <div class="zsplatLife">
               <div class="title">智数生活</div>
                <div class="zsLive">
                  <ul>
                     <li>
                        <div class="zsplatLife_work">
                            <div class="right">
                              <div class="today" style="font-weight: bolder;">{{startTime}}</div>
                              <div class="today">加入智数科技，距今</div> 
                              <div class="today" style="margin-top: 35px;">年<span style="color: rgb(104, 147, 252); font-family: DINAlternate-Bold;">{{workTimeMonth}}</span>月<span style="color: rgb(104, 147, 252); font-family: DINAlternate-Bold;">{{workTimeDay}}</span>日 </div>
                            </div>
                        </div>  
                     </li> 
                      <li>
                        <div class="zsplatLife_birth">
                              <div class="festival">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAUCAYAAAB1aeb6AAAAAXNSR0IArs4c6QAAAolJREFUSA3FVs9rE1EQnnm7Jf2RQoLEggkeFKRoTxUp/gOCeBO1ehLqwaPUvyAXTwrij4uHehI1RrwKxbMioqdao4hSqUIbSoK2TUI3+8y3cdLJsybxoJnL7Lz53szs25nvLdMOcviOHUgN12aYwwulKh0sV+0QYIlBriQHadFaM1fcjN19fZG3Tj+y3svl9XG2NG4N7WFrRoG1HP7gkL5ZpsJUJl7In+E61rWwNvB87F5lplyxt1bWw2HXp+2xuNmM+XxlqVTfIGuT2vfbM3OJ2c4vzY6+075W8mzjdV49qOUWVoJTGtDteX/SW/xYCvMUht2g5DE/P//92rNsNhuBW8lP3K/m/zaxZIsKWAvyYnfSKODz5fg8MFFyHPX7Yn1Ob2JmOjvh0/Qhnw7sMpHrw1pIubcBPVwIGidtNZzScXNztUJXib4Wm450qr4VTNaJJ9uADYMN5fAJGM3lmUpZf+PdI4ZuHI/R0Uwzqbv5xXJIl57WaHVj+6jRA/VwKIEm1Pi918v7mPyTNrTx1nqjB6YyI7cNulonxht3SowAKAoYYEUQA7HEFv1lNvHJUvBE7Eg3GhQTYjBO2oGj/tMbaxwwwGpxY4kPBXhk34gNjdE0mGO9iG/cq7hYN5aO4w34bcnBCUYIRIDSXGJ30i7WjdW+VxqxuQoy2rmj2nf9M8uAMnV0jFOv4mLdWO1x0iltg34NuFovYo57FRfrxtJxMPPaBu8bXBJ6EQSCOe4mwACrxY0lPsy6Sza4cAxuJxCEAMFcIJBOBQjJaJZDDMSSOKKFZMSOdEQy8UJ/6VUq6sfF0hq1I+di0xNj/mMpplfdulJ72CBXqkC3yfnXSl9+JqQa6P/1G/UT1wp588577mwAAAAASUVORK5CYII=" width="25"> 
                                <span>本月生日人员:</span>
                               </div>
                               <div class="person">
                                  <div class="person-list odd" v-for="item in birthList" :key="item.employeeId">
                                   <div class="person-img">
                                     <span>{{item.name.substring(0,1)}}</span> 
                                     <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAANCAYAAAB2HjRBAAAAAXNSR0IArs4c6QAAAbhJREFUKBWFkr1rU1EYxt/33HvTtFKoUtpCB4tg1KWCFIqDq5tJQwlCh+AknXSyq93ExdFJLbh26GD/BxUc2ikf7bXSDm2htCEqOSfn4/Hc3ARJQvVw4T3P876/536cSzSwALCMi7kBu0+imh9PDNHneqHrhTKJ6zVVKzwe7CVa7i09lMFkU1UKK0MwKPrK5mzXOvEAWA+HApCdY9KHIhQHQ71OevxkVf54gVYl/0XWl2/0hmS9/FyfvDWqWnyfeMPJ3mToC4pmCDJeJKd3WpVHzziYuM+jt546dUQOduxSGJANNg3icJKgj8eJow0KrxJsk9A+JmZcuRQWMA1nzpO+XwERjL98mJBEtuEfjVMYB0sTxvCd6ObWZ+wXp5R2RWuxQu40Zcn5ig4EF3X2/jRTWOngFUVzq6pW+qaMugdCegJQXbhXfADaqWDEySYUwAdr4gsezf0WwfS80ycZ6DN/p+bf4S7PTBX/Z6xlc5+2E4u7fqeo7+V5EjMf/Ye5i+SdXavb5lMmfjlyO/OOedP2mD44MYFSRu5n1tn+XPNCgflN9trIa57a/NWD/lvb1fwCaqXZfw3+ASRdx3fTIZsrAAAAAElFTkSuQmCC" class="toukuan"></div> <div class="person-name">
                                      {{item.name}}
                                      <p>破壳日：{{item.birthDay}}</p></div>
                                      <div class="person-happy" style="display: none;"><button><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAAAAXNSR0IArs4c6QAAAHBJREFUKBVjYEACH0udckEYJkSID1LHBFM8OOh7ISG5IAxzDSE+SB0LTDGIZmRiEiaFD1JLcRgwgkz5fjN86////71AbGIBIyPjNk71ld5gF5CqGWQJTA/FXhg1AJh2nh20v8Xwn0GV2OhDUcfIcBsAQusr3XQY6b0AAAAASUVORK5CYII=" width="12" height="12">
                                        送祝福
                                      </button></div> 
                                  </div>
                               </div>
                                <div class="festival juli" style="margin-top:-20px;">
                                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAUCAYAAAB1aeb6AAAAAXNSR0IArs4c6QAAAmpJREFUSA3FVs1rE1EQnze72SQlhartRUXFitYKIgX/kfp16K2CN8E/IRdF8KaehHrzEFKr5+LZowfB2IOVeEgR/ApEm3Q/3vP91k7Y3T6bejEDm5k383szk7cz81aRg4y5VYra5WVD6ibFvXmjf1YBU1zrkz/ZUmRWSqd2nir1JDLmmhe2BnPE3pwhOmptk8DavT1FtEU62QjmKxtKNRPos2TteQrbt5dN3Huko28TeUt+xaUj2+wHd6PB51/K0KG8Nb8yin547K2Xz754n7UMgxtT5/BTt6H7m1ezgFEyB8dbFHeaWo9C2pMjfn2/celVvV5P0cPgO+07zX8NLOGQgA47TVnvx5FA5fzLdWDS4DjqpN9e2W/TKJsqzzzUSfdBh/pfgD1G1RmTxAtsaKG4lz2vgVegUFzhZth1vWOeuED+4UXi6pl0v+5/oPj7Guntd0V/hBoIZoMpFGHWOHh75bQuxYu2EGuiRw1Uz5UfM6raFdifvk7BiXvEtctEnq0n+0CGDrYiwQd8FfWVi88/cuSvZfUoUHSIPRXbTgVK//H0ktUOSyKDUDb4EgFTJJcvYJCAVvQmh7etyejjnNIucNTuwIK0CaQYWe9yhy9BKM/PBcdMYBkgAgKXd5zVFWUXxuVL9kkhyhrDiGUxDs7pyCxERlWPIhfG5Uv8oPVEBsf4ZczqrBIy2gnmv5PZxRQQDl+CQM+LDG5LeYtxSWSVkNHH8ddnVnIlYANbm6vXXb7gD72+Z9jYC2esQ2a84xXHAhrHxTJsteDk1A2uzq7+SeXgv3KlHmSHXKmC3TM/x/IxIdmA/6/PqN/q+l9ipt96AgAAAABJRU5ErkJggg==" width="25">
                                  <span>本月节日:</span>
                                </div>
                                <div class="person">
                                  <span>本</span>
                                  <span>月</span>
                                  <span>无</span>
                                  <span>节</span>
                                  <span>日</span>
                                  <span>哦</span>
                                </div>
                        </div>  
                       
                     </li>    
                  </ul>
                </div>
              
              </div>


             <div class="noticeNews">
                <div class="title">公告通知</div>
                <div class="notice_list">
                  <ul>
                     <li v-for="(item,index) in noticeList" :key="index">
                        <div class="notice_content">
                            <div class="news_title">{{item.title}}</div>
                            <div class="news_sub_title">
                              <p class="news_sub_title_notice">{{item.description}}</p> 
                              <p class="news_sub_date">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAnBJREFUSA29VkFr1EAUfm+yiwVRhG1lm4UWsehaD21jBT2IePAu1JO/xaO/xZNC757Eg4KatgfrCqJtYbtCiSB2EZptxvkym7idzWYSGzqHZN5737xv3sybmcdUoG1uflqJiB5Fku4RcYtJuhgmiffVtyuY3gii9eXlmxs2d5wH8P3O44ijZyTl9TxcamP+IqR46nntF6nO6GQSbm11rgyOo+eS5B0DX0hk4nc1RzxZWmp/NweMEfr+5/sRyZdqqRomuJzMgSBe87wbr0fHnSDUZNErBaiPgk7RDwWJh6OkKSGWMTyO3p8+MnN6HNQdcTtZXpVcumHPipK5zRlyZ2eSoZa/bGjfGhYTIhvLJEizOU2zirRog29wAB8TxqlfdPR/4hIOgUNd+JwNyaTUHeY0BezTUGcZXAI3iB1tIoaMptoig0vo68qCNMz/IjQMFhFcag+5ZcFlmHWEU1PnMmx5Km6pe1dfxHkw09bv/4lV1xbm6eKF86Z5ogyu9BxORGUYvn7bo+DnL3IchxauztF041IGalylXhcp9BMzbszTYA93drvU+3FAyNT5OZda7uW8IYmtpyKU3UQq+9/vHcTEUs0AUdbrNYsL2a3h8VTZ88CCnGjG0h4dDdRRjigMBxNxMMQPtQpxPRdVwPj7sE+Hw0TKg4Mrvio+bGx3yt42eY4zbaoaWF1ZbMdZirIgE1ShMuFIL8OP/vbbMi9Gmbmg5LjlLd7FmDhCdFCDqFsnQL/axoH2rb2mhHiRUYModVghoSoxeC157eE3JYSA2gM1SDWRoog6Wc+AI91DCEk70zIxIcX/zArhUVL0qyz1/wIQsu0r7Sx7VAAAAABJRU5ErkJggg==" width="15" height="15">
                                <span>{{item.createTime}}</span>
                              </p>
                            </div>
                        </div>  
                     </li> 
            
                  </ul>
                </div>
             </div>


            <div class="enterpriseNews">
                <div class="title">企业新闻</div>
                <div class="news_list">
                   <div class="news_content">
                        <div class="imgWrap" @mouseenter="enter" @mouseleave="leave">
                              <Barrage  class="danmu" :saveMsg="chun"></Barrage>
                              <img :src="firstImgSrc" alt="" class="imgWrap">
                              <div class="content">
                                  <div class="title">{{firstNewTitle}}</div>
                                  <p>
                                      {{firstNewTitleSpan}}
                                  </p> 
                                  <div class="time">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAnBJREFUSA29VkFr1EAUfm+yiwVRhG1lm4UWsehaD21jBT2IePAu1JO/xaO/xZNC757Eg4KatgfrCqJtYbtCiSB2EZptxvkym7idzWYSGzqHZN5737xv3sybmcdUoG1uflqJiB5Fku4RcYtJuhgmiffVtyuY3gii9eXlmxs2d5wH8P3O44ijZyTl9TxcamP+IqR46nntF6nO6GQSbm11rgyOo+eS5B0DX0hk4nc1RzxZWmp/NweMEfr+5/sRyZdqqRomuJzMgSBe87wbr0fHnSDUZNErBaiPgk7RDwWJh6OkKSGWMTyO3p8+MnN6HNQdcTtZXpVcumHPipK5zRlyZ2eSoZa/bGjfGhYTIhvLJEizOU2zirRog29wAB8TxqlfdPR/4hIOgUNd+JwNyaTUHeY0BezTUGcZXAI3iB1tIoaMptoig0vo68qCNMz/IjQMFhFcag+5ZcFlmHWEU1PnMmx5Km6pe1dfxHkw09bv/4lV1xbm6eKF86Z5ogyu9BxORGUYvn7bo+DnL3IchxauztF041IGalylXhcp9BMzbszTYA93drvU+3FAyNT5OZda7uW8IYmtpyKU3UQq+9/vHcTEUs0AUdbrNYsL2a3h8VTZ88CCnGjG0h4dDdRRjigMBxNxMMQPtQpxPRdVwPj7sE+Hw0TKg4Mrvio+bGx3yt42eY4zbaoaWF1ZbMdZirIgE1ShMuFIL8OP/vbbMi9Gmbmg5LjlLd7FmDhCdFCDqFsnQL/axoH2rb2mhHiRUYModVghoSoxeC157eE3JYSA2gM1SDWRoog6Wc+AI91DCEk70zIxIcX/zArhUVL0qyz1/wIQsu0r7Sx7VAAAAABJRU5ErkJggg==" width="15" height="15"> 
                                    <span>{{firstNewTime}}</span>
                                  </div>
                              </div>
                              <div class="playbar" v-if="isClose">
                                   <Button type="primary" @click="damu"   style="margin-top:15px;float:right;margin-right:10px;" size="small">关闭</Button>
                              </div>
                        </div>
                   </div>

                   <div class="news_content">
                       <!-- <ul>
                         <li v-for="(item,index) in newsList" :key="index">
                           <div class="dev-img">
                                 <img :src="item.ImgSrc" width="280" height="180" class="li-img">
                           </div>
                           <div class="content">
                             <div class="title">{{item.NewTitle}}</div>
                             <p>
					                     {{item.NewTitleSpan}}
									         	</p>
                             <div class="time">
                               <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAnBJREFUSA29VkFr1EAUfm+yiwVRhG1lm4UWsehaD21jBT2IePAu1JO/xaO/xZNC757Eg4KatgfrCqJtYbtCiSB2EZptxvkym7idzWYSGzqHZN5737xv3sybmcdUoG1uflqJiB5Fku4RcYtJuhgmiffVtyuY3gii9eXlmxs2d5wH8P3O44ijZyTl9TxcamP+IqR46nntF6nO6GQSbm11rgyOo+eS5B0DX0hk4nc1RzxZWmp/NweMEfr+5/sRyZdqqRomuJzMgSBe87wbr0fHnSDUZNErBaiPgk7RDwWJh6OkKSGWMTyO3p8+MnN6HNQdcTtZXpVcumHPipK5zRlyZ2eSoZa/bGjfGhYTIhvLJEizOU2zirRog29wAB8TxqlfdPR/4hIOgUNd+JwNyaTUHeY0BezTUGcZXAI3iB1tIoaMptoig0vo68qCNMz/IjQMFhFcag+5ZcFlmHWEU1PnMmx5Km6pe1dfxHkw09bv/4lV1xbm6eKF86Z5ogyu9BxORGUYvn7bo+DnL3IchxauztF041IGalylXhcp9BMzbszTYA93drvU+3FAyNT5OZda7uW8IYmtpyKU3UQq+9/vHcTEUs0AUdbrNYsL2a3h8VTZ88CCnGjG0h4dDdRRjigMBxNxMMQPtQpxPRdVwPj7sE+Hw0TKg4Mrvio+bGx3yt42eY4zbaoaWF1ZbMdZirIgE1ShMuFIL8OP/vbbMi9Gmbmg5LjlLd7FmDhCdFCDqFsnQL/axoH2rb2mhHiRUYModVghoSoxeC157eE3JYSA2gM1SDWRoog6Wc+AI91DCEk70zIxIcX/zArhUVL0qyz1/wIQsu0r7Sx7VAAAAABJRU5ErkJggg==" width="15" height="15">
                               <span>{{item.NewTime}}</span>
                             </div>
                           </div>
                         </li>
                       </ul> -->
                         <Input v-model="content" placeholder="Enter something..." style="width: 300px" />
                             <Button type="primary" @click="sendContent">发送</Button>
                   </div>
                </div>
            </div>

            <div class="Work_count" style="margin-top:50px;">
               <div class="title">本月考勤</div>
               <div class="workDigital">
                 <ul class="count_list">
                   <li>
                       <div class="live-content kaoqin">
                       <div class="festival">
                         <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAUCAYAAAB1aeb6AAAAAXNSR0IArs4c6QAAAolJREFUSA3FVs9rE1EQnnm7Jf2RQoLEggkeFKRoTxUp/gOCeBO1ehLqwaPUvyAXTwrij4uHehI1RrwKxbMioqdao4hSqUIbSoK2TUI3+8y3cdLJsybxoJnL7Lz53szs25nvLdMOcviOHUgN12aYwwulKh0sV+0QYIlBriQHadFaM1fcjN19fZG3Tj+y3svl9XG2NG4N7WFrRoG1HP7gkL5ZpsJUJl7In+E61rWwNvB87F5lplyxt1bWw2HXp+2xuNmM+XxlqVTfIGuT2vfbM3OJ2c4vzY6+075W8mzjdV49qOUWVoJTGtDteX/SW/xYCvMUht2g5DE/P//92rNsNhuBW8lP3K/m/zaxZIsKWAvyYnfSKODz5fg8MFFyHPX7Yn1Ob2JmOjvh0/Qhnw7sMpHrw1pIubcBPVwIGidtNZzScXNztUJXib4Wm450qr4VTNaJJ9uADYMN5fAJGM3lmUpZf+PdI4ZuHI/R0Uwzqbv5xXJIl57WaHVj+6jRA/VwKIEm1Pi918v7mPyTNrTx1nqjB6YyI7cNulonxht3SowAKAoYYEUQA7HEFv1lNvHJUvBE7Eg3GhQTYjBO2oGj/tMbaxwwwGpxY4kPBXhk34gNjdE0mGO9iG/cq7hYN5aO4w34bcnBCUYIRIDSXGJ30i7WjdW+VxqxuQoy2rmj2nf9M8uAMnV0jFOv4mLdWO1x0iltg34NuFovYo57FRfrxtJxMPPaBu8bXBJ6EQSCOe4mwACrxY0lPsy6Sza4cAxuJxCEAMFcIJBOBQjJaJZDDMSSOKKFZMSOdEQy8UJ/6VUq6sfF0hq1I+di0xNj/mMpplfdulJ72CBXqkC3yfnXSl9+JqQa6P/1G/UT1wp588577mwAAAAASUVORK5CYII=" width="25"> 
                         <span>天数统计</span>
                      </div>
                         <div class="left-kaoqin">
                           <ul>
                              <li>
                                <span>{{days.chuQin}}</span>
                                <p>出勤</p>
                                <div class="shuxian"></div>
                              </li>
                              <li>
                               <span class="yellow" style="color: rgb(52, 210, 117);">{{days.xiuJia}}</span>
                                <p>休假</p>
                                <div class="shuxian"></div>
                              </li>
                              <li>
                              <span class="yellow" style="color: rgb(94, 211, 236);">{{days.waiChu}}</span>
                                <p>外出</p>
                                <div class="shuxian"></div>
                              </li>
                              <li>
                             <span class="yellow" style="color: rgb(232, 202, 88);">{{days.chuChai}}</span>
                                <p>出差</p>
                                <div class="shuxian"></div>
                              </li>
                              <li>
                                <span class="red">{{days.kuangGong}}</span>
                                <p>旷工</p>
                              </li>
                           </ul>
                         </div>

                       </div>
                   </li>
                   <li>
                     <div class="live-content kaoqin"  style="width:600px;">
                       <div class="festival">
                         <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAUCAYAAAB1aeb6AAAAAXNSR0IArs4c6QAAAolJREFUSA3FVs9rE1EQnnm7Jf2RQoLEggkeFKRoTxUp/gOCeBO1ehLqwaPUvyAXTwrij4uHehI1RrwKxbMioqdao4hSqUIbSoK2TUI3+8y3cdLJsybxoJnL7Lz53szs25nvLdMOcviOHUgN12aYwwulKh0sV+0QYIlBriQHadFaM1fcjN19fZG3Tj+y3svl9XG2NG4N7WFrRoG1HP7gkL5ZpsJUJl7In+E61rWwNvB87F5lplyxt1bWw2HXp+2xuNmM+XxlqVTfIGuT2vfbM3OJ2c4vzY6+075W8mzjdV49qOUWVoJTGtDteX/SW/xYCvMUht2g5DE/P//92rNsNhuBW8lP3K/m/zaxZIsKWAvyYnfSKODz5fg8MFFyHPX7Yn1Ob2JmOjvh0/Qhnw7sMpHrw1pIubcBPVwIGidtNZzScXNztUJXib4Wm450qr4VTNaJJ9uADYMN5fAJGM3lmUpZf+PdI4ZuHI/R0Uwzqbv5xXJIl57WaHVj+6jRA/VwKIEm1Pi918v7mPyTNrTx1nqjB6YyI7cNulonxht3SowAKAoYYEUQA7HEFv1lNvHJUvBE7Eg3GhQTYjBO2oGj/tMbaxwwwGpxY4kPBXhk34gNjdE0mGO9iG/cq7hYN5aO4w34bcnBCUYIRIDSXGJ30i7WjdW+VxqxuQoy2rmj2nf9M8uAMnV0jFOv4mLdWO1x0iltg34NuFovYo57FRfrxtJxMPPaBu8bXBJ6EQSCOe4mwACrxY0lPsy6Sza4cAxuJxCEAMFcIJBOBQjJaJZDDMSSOKKFZMSOdEQy8UJ/6VUq6sfF0hq1I+di0xNj/mMpplfdulJ72CBXqkC3yfnXSl9+JqQa6P/1G/UT1wp588577mwAAAAASUVORK5CYII=" width="25">
                          <span>打卡详情</span>
                       </div>
                       <div class="right-kaoqin" style="width:600px;">
                         <ul>
                           <li>
                             <span>{{attendanceInfo.Normal}}</span>
                             <p>正常打卡次数</p> 
                             <div class="shuxian"></div>
                            </li>
                            <li><span class="yellow" style="color: rgb(236, 74, 90);">{{attendanceInfo.Early}}</span> <p>早退次数</p> <div class="shuxian"></div></li>
                            <li><span class="yellow" style="color: rgb(203, 207, 213);">{{attendanceInfo.NotSigned}}</span> <p>未打卡次数</p> <div class="shuxian"></div></li>
                            <li><span class="red">{{attendanceInfo.Late}}</span> <p>迟到次数</p></li>
                            <li><span class="yellow">{{attendanceInfo.SeriousLate}}</span> <p>严重迟到次数</p> <div class="shuxian"></div></li>
                            <li><span class="red">{{attendanceInfo.Absenteeism}}</span> <p>旷工迟到次数</p></li>
                         </ul>
                       </div>
                     </div>
                   </li>
                 </ul>
               </div>
               

               <div class="top5" style="margin-top:-90px;">
                  <div class="festival">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAUCAYAAAB1aeb6AAAAAXNSR0IArs4c6QAAAmpJREFUSA3FVs1rE1EQnze72SQlhartRUXFitYKIgX/kfp16K2CN8E/IRdF8KaehHrzEFKr5+LZowfB2IOVeEgR/ApEm3Q/3vP91k7Y3T6bejEDm5k383szk7cz81aRg4y5VYra5WVD6ibFvXmjf1YBU1zrkz/ZUmRWSqd2nir1JDLmmhe2BnPE3pwhOmptk8DavT1FtEU62QjmKxtKNRPos2TteQrbt5dN3Huko28TeUt+xaUj2+wHd6PB51/K0KG8Nb8yin547K2Xz754n7UMgxtT5/BTt6H7m1ezgFEyB8dbFHeaWo9C2pMjfn2/celVvV5P0cPgO+07zX8NLOGQgA47TVnvx5FA5fzLdWDS4DjqpN9e2W/TKJsqzzzUSfdBh/pfgD1G1RmTxAtsaKG4lz2vgVegUFzhZth1vWOeuED+4UXi6pl0v+5/oPj7Guntd0V/hBoIZoMpFGHWOHh75bQuxYu2EGuiRw1Uz5UfM6raFdifvk7BiXvEtctEnq0n+0CGDrYiwQd8FfWVi88/cuSvZfUoUHSIPRXbTgVK//H0ktUOSyKDUDb4EgFTJJcvYJCAVvQmh7etyejjnNIucNTuwIK0CaQYWe9yhy9BKM/PBcdMYBkgAgKXd5zVFWUXxuVL9kkhyhrDiGUxDs7pyCxERlWPIhfG5Uv8oPVEBsf4ZczqrBIy2gnmv5PZxRQQDl+CQM+LDG5LeYtxSWSVkNHH8ddnVnIlYANbm6vXXb7gD72+Z9jYC2esQ2a84xXHAhrHxTJsteDk1A2uzq7+SeXgv3KlHmSHXKmC3TM/x/IxIdmA/6/PqN/q+l9ipt96AgAAAABJRU5ErkJggg==" width="25"> 
                    <span>今日考勤前五名</span>
                  </div>
                  <div class="top-list">
                      <div class="list" v-for="(item,index) in top_five" :key="index">
                        <div class="userName" :class="classList[index]">
                          <div class="person-img">
                            <span class="user">{{item.empName.substring(0,1)}}</span>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAUCAYAAAADU1RxAAAAAXNSR0IArs4c6QAAA3FJREFUSA3FVstLVGEU/517rzPTZEhFkWZmb1GSQtqFZBHUykWL/oDAWkSLWiQZNZGQ1CLosRGSNi1qUUFtKnoQlAg9LbMoslKbEFPTxnnc+93T+eZhPq+DBh24831855zf+X3n8TGE/yDMbKTCEhOBrdlwEDASf/lSYNlgpX18QFiIsM0MpUFmJEmw3qZ8u7/9sBuP3gusv3g7GyDxM9F5pjg23HeB2HznL6mvTaclG/cJNpZjhw+z5T/guriWvuEEo0kO3Njgj2OsnB2uih6MfTi0eUYkMgEJ/kemL2cIZPwALvsnCTjhaPjtvgpGvBxuQupofwv41LvZlQOwnO7jzfbAzwp2nHvBQN4uKjk9NCGyHMRba0oUo156YFdKTwgGg6to7dnPM8qEBiEixq+GXILaaPilz8Dbh2MDjyPv9xekgqR+o201RZFXe5uUi7d/CWgdC4jTrXezmg4V+V0ppTGMHB8UIhpvA8UTzfG2vTt9DvVGwUfYwT4J6JeQY4RAUVpzPq4Px5AQpnJBTTFLcXmbtuwfXoRcQ6rgOhCMIsfmpzJ3phDMnRqJ+zM6QzeZvo18Qogtvc8op1uF81Zt096xCdefVI82zxMcDwLJYoyQyGRCr370nt8DNzJPAOqTNU/DMocsfLfzwUahAi+VZBW64CK5dpk2GYgsxKvPBShd1oqSwo9pL+9FMj6eRJeJvlu74UbPgiVM+ESV01k3IHVJBlTd9pJUhlQSeXy9yoqf43X7cswLRr0jj9HSeBJyQZc+AY4jw2sy3AIGV2mfZEAptJcU539A9ZY7WDR/UPrCw1J0dhjIWTquHOm0J+Smj9FzqlLUZPjUV47RCzlb7AE5RlW28oV+f+CMeiVYep9GP2HSbeaCpFtYSvoyAzDlY2V3Hd1KcO9KEsyM8bSrGCf6fo6YJTqAwAq8d4meSKA3ZHJrIEfWdY29I0aymZKENlKddbXSgKdGO0y3V7+HvqhE4r5B/CBg4SGVNkoBvMWThJSDVNfRG9If1ZPB0C/JryX9kosemZSrJswrtOxky2S2XmeeJLQj9zXkqcjgMxma1bDFPJBqUhkxGRW6CZOazCXWXaKQ4xXISzctiSSRzlC5su0WJBDAXAzK83bJMn3nKD/0xQs8W11WJDSY0123W/4/FRhzrEu0MCSz+O/kDzlwigcV8yxMAAAAAElFTkSuQmCC" class="toukuan">
                          </div>
                          <div class="person-name">
                                   {{item.empName}}
                            <span>{{item.checkTime}}</span>
                          </div>
                        </div>
                      </div>
                     
                  </div>
               </div>
            </div>
            <div class="office_application">
               <div class="title">办公应用</div>
               <div class="app_list">
                 <ul>
                     <li>
                       <div class="yingyong">
                        <img src="http://10.10.20.5/zsplat/Z1/portal/dist/9ca6257c0e18b0b476e0ca420d2701f1.png" width="50">
                        <div>软件库</div>
                        <p>整合公司办公、设计及研发软件，提供统一下载入口</p>
                       </div>
                     </li>
                     <li>
                       <div class="yingyong">
                         <img src="http://10.10.20.5/zsplat/Z1/portal/dist/f69b9974934e059c3886265aeea7da32.png" width="50">
                      <div>模板管理</div> 
                      <p>分类整理公司各项工作模板，多种格式，支持预览及下载。</p>
                      </div></li>
                      <li><div class="yingyong"><img src="http://10.10.20.5/zsplat/Z1/portal/dist/9fb629704f3bf1e4fb67ea841a6af56b.png" width="50"> <div>考勤统计</div> <p>考勤数据智能统计，记录上、下班打卡时间与次数。</p></div></li>
                      <li><div class="yingyong"><img src="http://10.10.20.5/zsplat/Z1/portal/dist/acc271fa9a337cf3f9be06cbdc0ee7c6.png" width="50"> <div>签到记录</div> <p>记录每日签到时间与排名，可查看不同月份签到情况。</p></div></li>
                      <li><div class="yingyong"><img src="http://10.10.20.5/zsplat/Z1/portal/dist/8de8376a42b19c16e48d6df307fa7524.png" width="50"> <div>智数规范</div> <p>公司管理规范制度合集，便于阅读查看公司各项规章条款</p></div></li>
                      <li><div class="yingyong"><img src="http://10.10.20.5/zsplat/Z1/portal/dist/13b1192570fe8c41ccc2b00f47b4a5ed.png" width="50"> <div>企业邮箱</div> <p>以企业域名做后缀，体现公司的品牌和形象，对员工信箱进行统一管理。</p></div></li>
                      <li><div class="yingyong"><img src="http://10.10.20.5/zsplat/Z1/portal/dist/c8215647bdef0629099134692b6f02ab.png" width="50"> <div>缺陷管理</div> <p>项目管理软件，集产品、项目、质量、文档、组织、事务管理于一体。</p></div></li>
                      <li><div class="yingyong"><img src="http://10.10.20.5/zsplat/Z1/portal/dist/e27ea5b64f48a54307b4e0cec149182d.png" width="50"> <div>知识库</div> <p>企业内部百科全书，团队知识整合共享，答疑解惑，共同发展。</p></div></li>
                      <li><div class="yingyong"><img src="http://10.10.20.5/zsplat/Z1/portal/dist/7f64a5524dd41817bb519aee5dd8e72f.png" width="50"> <div>Z1</div> <p>以业务管理为主体，结合其他多项功能为一体的企业管理信息平台</p></div></li>
                      <li><div class="yingyong"><img src="http://10.10.20.5/zsplat/Z1/portal/dist/052b9b99abea1e748d5a95522a2a450c.png" width="50"> <div>项目库</div> <p>智数主要展示平台之一，庞大而详实的各类项目信息数据库</p></div></li>
                 </ul>
               </div>
             </div> 
        </main>
    </div>
</template>

<script>
     import Barrage from '@/components/barrage'
     import Util from "../libs/util";
   　import Cookies from 'js-cookie'
    export default {
         components:{
            Barrage
         },
        data(){
          return{
              luSrc:'',
              weather_img_src:'http://10.10.20.5/zsplat/Z1/weather/',
              baseUrl:'http://10.10.20.5/zsplat/Z1/',
              lunbo:0, 
              noticeList:[],
              top_five:[],
              birthList:[],
              workDays:{},
              days:{},
              startTime:'',
              workTime:'',
              workTimeMonth:'',
              workTimeDay:'',
              attendanceInfo:{},
              firstImgSrc:'',
              employeeName:'',
              firstNewsId:'',
               firstNewTitle:'',
               firstNewTitleSpan :'',
              firstNewTime:'',
              loop:false,
              autoplay:false,
              imgs:[],
              newsList:[],
              classList:[
                'first',
                 'third',
                'second',
                'four',
                'four'
              ],
              weather:{
                wea_img:'lei'
              },
              switch1:false,
              isClose:false,
              content:'' ,//输入内容,
              saveMsg:[], //临时存放的数据
              chun:[]//传给子组件的数据
          }
        },
        created(){
          Util.initVm(this);
        },
        mounted(){
          this.getWeather();
          this.fiveTop();
          this.getNotice();
          this.getEmployeeBirths();
          this.countWorkDays();
          this.getEmployeeTime();
          this.getEnterPriseNews();
          this.getCarousel();
        },
        methods:{
           //鼠标事件
            enter(){
              this.isClose = false;
            },
            leave(){
              this.isClose = false;
            },
            damu(){
               
            },
           

          //温度检测
          getWeather() {
            let that = this;
            Util.ajax({
              method: "POST",
              url: "/zsOnePortalBirthdayComment/getWeather2",
              data: {}
            })
              .then(function(res) {
                  if(res.data.data[0]){
                 
                    var list = {};
                    var arr = res.data.data[0]
                    for (var key in arr) {
                        list[key] = arr[key];
                    }
                    that.weather = list;
                  }
              })
              .catch(function(error) {
                console.log(error);
              });
          },
          //今日考勤前5名
          fiveTop(){
             let that = this;
            Util.ajax({
              method: "POST",
              url: "zsplat-one-portal/zsOnePortalBussTimetags/selectTopFive",
              data: {
                searchDate:this.getCurrentDate()
              }
            })
              .then(function(res) {
                if(res.data.code == "1000"){
                     res.data.data.forEach(function(obj, index) {
                          obj.checkTime = Util.formatDate(obj.checkTime, "hh:mm");
                        });
                    that.top_five = res.data.data;
                }
              })
              .catch(function(error) {
                console.log(error);
              });
          },
          //获取当前时间
             getCurrentDate() {
              var timeStr = '-';
              var curDate = new Date();
              var curYear =curDate.getFullYear();  //获取完整的年份(4位,1970-????)
              var curMonth = curDate.getMonth()+1;  //获取当前月份(0-11,0代表1月)
              if(curMonth < 10){
                 curMonth = '0'+curMonth
              }
              var curDay = curDate.getDate();       //获取当前日(1-31)
             if(curDay < 10){
                curDay = '0'+curDay
             }
              var curWeekDay = curDate.getDay();    //获取当前星期X(0-6,0代表星期天)
              var curHour = curDate.getHours();      //获取当前小时数(0-23)
              var curMinute = curDate.getMinutes();   // 获取当前分钟数(0-59)
              var curSec =curDate.getSeconds();      //获取当前秒数(0-59)
              var Current= curYear+timeStr+curMonth+timeStr+curDay
           
              return Current;
           },
           //获取通知
           getNotice(){
               let that = this;
                let employeeId = Cookies.get("employeeId");
                Util.ajax({
                  method: "POST",
                  url: "zsplat-one-portal/zsOnePortalNotice/getEmployeeNotice",
                  data: {
                    employeeId:employeeId,
                    offset:4
                  }
                })
              .then(function(res) {
                if(res.data.code == "1000"){
                   let data = res.data.data.zsOnePortalNotices;
                
                    data.forEach(function(obj, index) {
                      obj.createTime = Util.formatDate(
                        obj.createTime,
                        "yyyy-MM-dd hh:ss:mm"
                      );
                    });
                    that.noticeList = data;

                 }
              })
              .catch(function(error) {
                console.log(error);
              });
           },
           
           //获取员工生日
           getEmployeeBirths(){
               let that = this;
                Util.ajax({
                  method: "POST",
                  url: "zsplat-one-portal/zsOneRabcEmployee/getEmpBirthDayOfWeek",
                  data: {
                     
                  }
                })
              .then(function(res) {
                if(res.data.code == "1000"){
                   that.birthList = res.data.data;
                }
              })
              .catch(function(error) {
                console.log(error);
              });
           },

           //获取员工考勤
           countWorkDays(){
                let that = this;
                Util.ajax({
                  method: "POST",
                  url: "zsplat-one-portal/zsOnePortalBussTimetags/getAttendanceStatistics",
                  data: {
                     userId: Cookies.get('employeeId')
                  }
                })
              .then(function(res) {
                if(res.data.code == "1000"){
                   let data = res.data.data;
                    let days = {};
                    days.chuQin = data.chuQin;
                    days.xiuJia = data.leave;
                    days.waiChu = 0;
                    days.chuChai = data.travel;
                    days.kuangGong = data.Absenteeism;
                    that.days = days;
                    that.attendanceInfo = data;
                    var myDate = new Date();
                    myDate.setDate(myDate.getDate());
                    that.toadyDate = myDate.getDate();
                }
              })
              .catch(function(error) {
                console.log(error);
              });
           },

           //获取员工加入公司的时长
           getEmployeeTime(){
               let that = this;
                Util.ajax({
                  method: "POST",
                  url: "zsplat-one-portal/zsOneRabcEmployee/getEmpWorkDayAtZsplat",
                  data: {
                     searchEmpId: Cookies.get("employeeId")
                  }
                })
              .then(function(res) {
                if(res.data.code == "1000"){
                    that.startTime = Util.formatDate(
                    res.data.startTime,
                    "yyyy年MM月dd日"
                  );
                  let workTime = res.data.data.split("年")[1];
                  that.workTime = workTime;
                  that.workTimeMonth = workTime.split("月")[0];
                  that.workTimeDay = workTime.split("月")[1].split("天")[0];
                 }
              })
              .catch(function(error) {
                console.log(error);
              });
           },

           //获取企业新闻
           getEnterPriseNews(){
                let that = this;
                Util.ajax({
                  method: "POST",
                  url: "zsplat-one-portal/zsOnePortalNews/query",
                  data: {
                     currentPage: 0,
                     pageSize: 3,
                     perParams: {state: "2"}
                  }
                })
              .then(function(res) {
                if(res.data.code == "1000"){
                  
                   if (res.data.data.items[0] != undefined) {
                    
                      let news = res.data.data.items[0];
                      that.firstImgSrc = Util.ajaxUrl + news.topImg;
                      that.firstNewsId = news.id;
                      that.firstNewTitle = news.title;
                      that.firstNewTitleSpan = news.description;
                      that.firstNewTime = Util.formatDate(
                        news.createTime,
                        "yyyy-MM-dd hh:ss:mm"
                      );
                    }
                    for (let i = 1; i < res.data.data.items.length; i++) {
                      let news = res.data.data.items[i];
                      let a = {};
                      a.ImgSrc = Util.ajaxUrl + news.topImg;
                      a.NewTitle = news.title;
                      a.NewTitleSpan = news.description;
                      a.NewTime = Util.formatDate(news.createTime, "yyyy-MM-dd hh:ss:mm");
                      a.id = news.id;
                      that.newsList.push(a);
                    }
                 }
              })
              .catch(function(error) {
                   console.log(error);
              });
           },

           //获取轮播图
           getCarousel(){
                this.employeeName = Cookies.get('employeeName');
                var that = this;
                Util.ajax({
                  method: "POST",
                  url: "zsplat-one-portal/zsOnePortalBussBanner/query",
                  data: {
                    perParams: {}
                  }
                })
                .then(function(res) {
                  if (res.data.code == "1000") {
                    that.imgs = res.data.data.items;
                    that.luSrc = Util.ajaxUrl 
                    if(res.data.data.items.length >1){
                      that.loop = true;
                      that.autoplay = true;
                    }
                   // document.getElementById("0").src =  Util.ajaxUrl + res.data.data.items[0].imgUrl;
                   }
                })
                .catch(function(error) {
                  console.log(error);
                });
           },

           //发送内容
           sendContent(){
                 var _this = this;
                 _this.saveMsg = [];
                Util.ajax({
                  method: "POST",
                  url: "zsOnePortalBirthdayComment/add",
                  data:{
                    data:{
                     commentatorEmployeeId:Cookies.get('employeeId'),
                     isAnonymous:'02',
                     birthdayEmployeeId:'4fe553565e9b4911a7586c18a77dbb3f',
                     content:_this.content,
                     effectiveTime:'08-15',
                     birthdayEmployeeName:'王凯'
                    }
                    
                  }
                }).then((res) =>{
                    _this.content = "";
                    if(res.data.code == "1000"){
                       let obj = {};
                       obj.createName  = res.data.data.createName
                       obj.content  = res.data.data.content
                       _this.saveMsg.push(obj)
                    }
                })
           }
        },
        watch:{
           saveMsg:{
        　　　　handler(newValue, oldValue) {
        　　　　　　this.chun = newValue
        　　　　},
        　　　　deep: true
        　　}
        }

    }
</script>

<style scoped>
    li{
      list-style: none;
    }
   .layout{
        background: #fff;
        position: relative;
        height:auto;
    }
    header{
        background: #fff;
        padding: 10px 0;
        overflow: hidden;
        border-bottom:1px solid #ccc;
    }
    .layout-ceiling-main{
        display: flex;
        justify-content: space-between;
        margin-right: 15px;
    }
 
    .main_content{
          width: 1200px;
          margin: 0 auto;
          height:100%;
          margin-top: 25px;
          border-radius: 12px;
    }
    .title{
          width: 100%;
          font-size: 20px;
          font-weight: 700;
          color: #4e4f52;
          letter-spacing: 1px;
          margin-bottom: 20px;
          font-family: PingFangSC-Semibold;
    }
    .temp-content{
      width: 380px;
      height: 142px;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      padding: 15px 20px;
      position: relative;
    }
   .temp_left{
     display:flex;
     flex-flow: column;
     align-items: flex-end;
     color:#fff;
   }
   .temp-content .date{
         width: 100%;
          text-align: right;
          font-size: 13px;
          color: #fff;
          letter-spacing: 1px;
          font-family: PingFangSC-Regular;
          opacity: .9;
   }
    .temp-content .temp{
           width: 100%;
          text-align: right;
          font-size: 28px;
          color: #fff;
          font-weight: bolder;
          letter-spacing: 1px;
          margin-top: 10px;
          font-family: PingFangSC-Semibold;
   }
    .temp-content .temp label{
      font-size: 40px;
      margin-right: 5px;
      font-weight: 700;
      font-family: DINAlternate-Bold;
    }
   .temp-content .temp span{
         font-weight: 400;
        font-size: 13px;
        font-family: PingFangSC-Regular;
        opacity: .9;
        margin-left: 8px;
    }
    .ivu-carousel-list{
          border-radius: 12px;
    }
    .temp-content .tips{
          width: 100%;
          position: absolute;
          bottom: 12px;
          left: 0;
          text-align: right;
          font-size: 12px;
          color: #fff;
          letter-spacing: 1px;
          font-family: PingFangSC-Regular;
          padding-right: 15px;
          opacity: .9;
    }
    .header_list{
      display: flex;
    }
    .notice_content .news_title{
          width: 97.8%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 18px;
          color: #4e4f52;
          letter-spacing: 1px;
          font-family: PingFangSC-Medium;
}
  .notice_content .news_sub_title .news_sub_title_notice{
          width: 100%;
          font-size: 14px;
          color: #b2b3b6;
          letter-spacing: .5px;
          padding-left: 0;
          font-family: PingFangSC-Regular;
          overflow: hidden;
          line-height:40px;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
  }
   .notice_content .news_sub_title .news_sub_date{
       display: flex;
       justify-content: flex-start;
       align-items: center;
      
   }
    .notice_content .news_sub_title .news_sub_date img{
        margin-right:10px;
    }
    .notice_content .news_sub_title .news_sub_date span{
        font-size:14px;
           color: #b2b3b6;
    }
    .temp-content .tempList{
          width: 100%;
          overflow: hidden;
          display: flex;
          margin-top: 17px;
    }
     .temp-content .tempList .list{
        flex:1 0 0;
        text-align: center;
    }
     .temp-content .tempList .list span{
          font-size: 40px;
          color: #fff;
          font-weight: bolder;
          font-family: DINAlternate-Bold;
     }
      .temp-content .tempList .list p{
        font-size: 13px;
        color: #e3e3f6;
        letter-spacing: 1px;
        font-family: PingFangSC-Regular;
     }
    .temp_center{
     background-image: url("../assets/index/temp2.png");
   }
    .temp_right{
     background-image: url("../assets/index/temp3.png");
   }
   .check-temp ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
   }
   .check-temp ul li{
          width: 380px;
          height: 142px;
   }
   .zsplatLife{
     margin-top:50px;
   }
   .zsplatLife_work{
      background-image: url("../assets/index/0.png");
      width: 500px;
      height: 350px;
      margin-top: 20px;
      background-repeat: no-repeat;
      background-size: 100% 100%;
     
   }
   .zsplatLife_work .right{
          width: 50%;
          float: right;
          padding-top: 40px;
          padding-left: 30px;
   }
   .zsplatLife_work .right .today{
         font-size: 16px;
        color: #4e4f52;
        letter-spacing: 1.5px;
        font-family: PingFangSC-Regular;
        margin-top: 10px;
   }
   .zsplatLife_birth{
    
     width: 600px;
    height: 400px;
    overflow: auto;
   }
   .festival{
         width: 100%;
          height: 35px;
          margin-bottom:20px;
          line-height: 35px;
          position: relative;
          clear: both;
          z-index: 1;
   }
   .festival img{
            position: absolute;
            top: 10px;
            left: 0;
            z-index: 1;
   }
  .festival span{
          font-size: 16px;
          color: #4e4f52;
          position: absolute;
          left: 30px;
          letter-spacing: 1px;
          font-weight: bolder;
          font-family: PingFangSC-Medium;
   }
   .zsplatLife_birth .person{
          display: flex;
           font-size: 14px;
          color: #4e4f52;
          padding-left: 15px;
          margin: 15px 0;
          font-family: PingFangSC-Regular;
          flex-wrap: wrap;
   }
    .zsplatLife_birth .person .person-list{
            width: 50%;
            margin-bottom: 30px;
            padding-top: 5px;
            position: relative;
    }
     .zsplatLife_birth .person .person-list .person-img{
            width: 50px;
            height: 50px;
            line-height: 50px;
            border-radius: 50px;
            background-color: #428eed;
            float: left;
            text-align: center;
            color: #fff;
            font-size: 16px;
            font-weight: bolder;
     }
        .zsplatLife_birth .person .person-list .person-img .toukuan{
          position: absolute;
          top: 0;
          left: -3px;
     }
     .zsplatLife_birth .person .person-list .person-name{
            float: left;
            font-size: 16px;
            color: #4e4f52;
            padding-left: 12px;
            letter-spacing: 1px;
     }
      .zsplatLife_birth .person .person-list .person-name p{
        font-weight: 400;
        font-size: 14px;
        color: #b2b3b6;
        letter-spacing: 1px;
        margin-top: 3px;
      }
   .zsLive ul {
     display: flex;
     justify-content: space-between;
   }
   .notice_list{
     overflow: hidden;
     position: relative;
     height: 140px;
   
   }
   .four{
     border: 1px solid #efeff0;
    background-color: #fff;
   }
   .notice_list ul{
     display: flex;
   }
   .notice_list ul li{
     flex:1 0 0;
   }
   .news_list{
      display: flex;
   }
   .news_list .news_content{
      flex:1 0 0;
   }
   .imgWrap{
      width: 560px;
      height: 360px;
      overflow: hidden;
      border-radius: 4px;
      position: relative;
   }
   .imgWrap .content{ 
    width: 100%;
    height: 120px;
    position: absolute;
    left: 0;
    bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;
    z-index: 2;
    cursor: pointer;
   }
    .imgWrap .content .title{
      width: auto;
    color: #fff;
    font-size: 22px;
    letter-spacing: 1px;
    position: absolute;
    top: 0;
    left: 15px;
    z-index: 3;
    right: 15px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    }
    .imgWrap .content p{
      color: #fff;
    font-size: 13px;
    letter-spacing: 1px;
    opacity: .8;
    position: absolute;
    bottom: 40px;
    right: 15px;
    left: 15px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    line-height: 1.7;
    }
    .news_content ul{
        display: flex;
    }
    .news_content ul li{
        flex: 1 0 0;
    }
     .news_content ul li .div-img{
           width: 280px;
          height: 180px;
          position: relative;
          border-radius: 4px;
     }
      .news_content ul li .div-img img{
        width: 280px;
        border-radius: 4px;
      }
        .news_content ul li .content{
              width: 280px;
              height: 165px;
              position: relative;
        }
         .news_content ul li .content .title{
               width: 100%;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              overflow: hidden;
              margin-top: 10px;
              margin-bottom: 30px;
         }
           .news_content ul li .content p{
                 color: #b2b3b6;
                font-size: 14px;
                line-height: 1.7;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                overflow: hidden;
                font-family: PingFangSC-Regular;
           }
            .news_content ul li .content .time{
                   height: 25px;
                    position: absolute;
                    bottom: 0;
                    line-height: 25px;
                    width: 100%;
           }
           .news_content ul li .content .time img{
                 position: absolute;
                 top: 5px;
           }
           .news_content ul li .content .time span{
                 position: absolute;
                left: 23px;
                color: #b2b3b6;
                font-size: 14px;
                letter-spacing: 1px;
                opacity: .8;
                font-family: PingFangSC-Regular;
           }
    .imgWrap .content .time{
          height: 25px;
          position: absolute;
          bottom: 0;
          line-height: 25px;
          width: 100%;
    }
    .imgWrap .content .time img{
        position: absolute;
        top: 5px;
    }
    .imgWrap .content .time span{
      position: absolute;
      left: 23px;
      color: #fff;
      font-size: 12px;
      letter-spacing: 1px;
      opacity: .8;
    }
   .app_list ul li{
      width: 300px;
      height: 160px;
      float: left;
      margin-bottom: 20px;
   }
   .yingyong{
      width: 285px;
      height: 160px;
      border: 1px solid #efeff0;
      padding: 10px 15px;
      cursor: pointer;
      border-radius: 6px;
   }
    .yingyong div{
          font-size: 16px;
          color: #4e4f52;
          margin-top: 5px;
          font-weight: 700;
          font-family: PingFangSC-Medium;
     }
   .yingyong p{
        font-size: 13px;
        color: #b2b3b6;
        margin-bottom: 0;
        margin-top: 5px;
        line-height: 22px;
        font-family: PingFangSC-Regular;
}
.workDigital .count_list {
   display: flex;
}
.workDigital .count_list li{
   flex:1 0 0;
} 
.workDigital .count_list li .live-content{
    width: 500px;
    height: 350px;
    margin-top: 20px;
    overflow: hidden;
}
.first {
    border: 1px solid #fbe37a;
    background: linear-gradient(90deg,hsla(49,94%,73%,.48),hsla(49,94%,73%,.04));
}
.second {
    border: 1px solid #e1e7f2;
    background: linear-gradient(90deg,rgba(225,231,242,.39),rgba(203,213,228,.04));
}
.kaoqin{
    font-size: 13px;
    color: #4e4f52;
}

.left-kaoqin ul li{
      float:left;
      width: 33.3%;
      text-align: left;
      margin-bottom: 35px;
      position:relative;
}
.office_application{
  margin-top:50px;
}
.left-kaoqin ul li span{
    display: inline-block;
    width: 40px;
    height: 40px;
    text-align: center;
    font-size: 32px;
    color: #428eed;
    font-family: DINAlternate-Bold;
    padding-left: 3px;
}
.left-kaoqin ul li p{
   padding-left: 10px;
}
.left-kaoqin  ul li .shuxian{
    position: absolute;
    width: 1px;
    height: 42px;
    background-color: #dce4e9;
    right: 40%;
    top: 19px;
}
.banner{
    width: 100%;
    height: 320px;
    border-radius: 4px;
    padding: 15px 0;
    padding-bottom: 0;
    color: #fff;
    position: relative;
}
.banner h3{
  font-size: 20px;
    font-weight: 400;
    letter-spacing: 3px;
    font-family: PingFangSC-Medium;
    position: absolute;
    top: 50px;
    z-index: 3;
    left: 50px;
}
.banner img{
    width: 100%;
    position: absolute;
    border-radius:4px;
    left: 0;
    top: 0;
    z-index: 2;
}
.banner h2{
    font-size: 32px;
    letter-spacing: 4px;
    font-family: PingFangSC-Medium;
    position: absolute;
    top: 85px;
    z-index: 3;
    left: 50px;
}
.right-kaoqin li{
    margin-bottom: 35px;
    width: 25%;
    height: 68px;
    float: left;
    text-align: center;
    position: relative;
}
.right-kaoqin li span{
    font-size: 32px;
    color: #428eed;
    font-family: DINAlternate-Bold;
    padding-left: 3px;
}
.right-kaoqin li p{
    margin-bottom: 0;
    font-size: 12px;
    color: #4e4f52;
    letter-spacing: 1px;
    font-family: PingFangSC-Regular;
}
.right-kaoqin li .shuxian{
   position: absolute;
    width: 1px;
    height: 42px;
    background-color: #dce4e9;
    right: 0;
    top: 19px;
}
.top-list{
    width: 100%;
    overflow: hidden;
    margin-top: 20px;
}
.top-list .list{
    width: 20%;
    float: left;
}
 .third{
    border: 1px solid #f1b177;
    background: linear-gradient(90deg,hsla(29,81%,71%,.44),hsla(29,81%,71%,.04));
}
.top-list .list .userName{
    width: 224px;
    height: 60px;
    border-radius: 4px;
    border: 1px solid #efeff0;
    background-color: #fff;
    padding: 15px 15px 11px;
}
.top-list .list .userName .person-img{
    width: 28px;
    height: 28px;
    border-radius: 28px;
    float: left;
    position: relative;
    top: 1px;
}
.top-list .list .userName .person-img .user{
      display: inline-block;
    background-color: #428eed;
    width: 28px;
    height: 28px;
    font-size: 14px;
    line-height: 28px;
    text-align: center;
    border-radius: 28px;
    color: #fff;
}
.top-list .list .userName .person-img .user{
   display: inline-block;
    background-color: #428eed;
    width: 28px;
    height: 28px;
    font-size: 14px;
    line-height: 28px;
    text-align: center;
    border-radius: 28px;
    color: #fff;
}
.top-list .list .userName .person-img .toukuan{
    position: absolute;
    top: -12px;
    left: -12px;
}
.top-list .list .userName .person-name{
      height: 28px;
    line-height: 28px;
    padding-left: 40px;
    color: #4e4f52;
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: bolder;
    font-family: PingFangSC-Medium;
}
.top-list .list .userName .person-name span{
     float: right;
    font-weight: 400;
    font-family: PingFangSC-Regular;
}
.aim{
    font-weight: 700;
    color: #4e4f52;
    margin-left: 105px;
    position: relative;
    top: 5px;
}
.logo{
  margin-left:20px;
}
.header_list li{
  margin-right:15px;
}
.nameFirst{
    padding: 2px 5px 3px;
    background-color: #ff485a;
    border-radius: 50%;
    color: #fff;
}
.lunbo_auto{
    width: 100%;
    height: 320px;
    border-radius: 12px;
}
.danmu{
  position:absolute;
  left:0;
  top:0;
  z-index:99;
}
.playbar{
  position:absolute;
  width:100%;
  bottom:0;
  height:50px;
  background-color: #000;
  z-index:999;
}

</style>