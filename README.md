# danmu
# 一个简单的弹幕效果，利用vue transition -group  实现动画的过度，
##1、 随机高度，随机速度，当弹幕移除特定范围时，即消失，
##2、 弹幕是作为一个子组件展示在父页面中的，刚开始还在考虑transition-group 的事件，before-enter,enter,怎么触发，是放在created 中，还是放在mounted 中，
## 发现是报错的，找不到OffsetHeihgt 和 offsetWidth,后来用定时器，不断的向数组中加入数据，它才会触发；
##3、在输入框中输入内容，然后发送，新的弹幕消息就会展示出来，其中遇到了一个坑，就是父组件穿数据给子组件的时候，子组件不能动态渲染，props传值，父组件传递给子
## 子组件，子组件中设置watch 监听，监听不到，后来查询资料，需要先监听父页面中数据的变化，父页面中用watch 监听到数据的变化，然后再动态赋给要传给子组件的信息
## 这时，子组件中就可以监听到父页面传递过来的数据了。
