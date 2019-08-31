<template>
    <div id="animate">
        <vue-baberrage
      :isShow= "barrageIsShow"
      :barrageList = "barrageList"
      :loop = "barrageLoop"
      >
    </vue-baberrage>
    </div>
</template>

<script>
import { MESSAGE_TYPE } from 'vue-baberrage'
export default{
   data () {
    return {
        msg: 'Hello vue-baberrage',
        barrageIsShow: true,
        currentId : 0,
        barrageLoop: false,
        barrageList: [
            'sdfkasdjf',
            'ksjdfkldjlkf'
        ]
     }
  }
}
</script>

<style scoped>
  #animate{
     width:500px;
     height:600px;
  }
</style>