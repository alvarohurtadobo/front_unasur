<template>
  <div class="conteiner-fluid">
      <div class="row">
        <div class="col-md-2 menu">
            
            <BlqSm></BlqSm>
            <BlqVip></BlqVip>
            <BlqPc></BlqPc>
            <BlqAu></BlqAu>
        </div>
        <div class=" col-md-10" id="main-content">
            <router-view></router-view>
        </div>
      </div>
  </div>
</template>
<script>
import NavBar from "./NavBar.vue";
import BlqSm from "../imports/ui/bloques/Bloq_sm.vue";
import BlqPc from "../imports/ui/bloques/Bloq_pc.vue";
import BlqAu from "../imports/ui/bloques/Bloq_au.vue";
import BlqVip from "../imports/ui/bloques/Bloq_vip.vue";

export default {
  components:{
      NavBar,
      BlqSm,
      BlqPc,
      BlqAu,
      BlqVip,
  }
}
</script>

<style scoped>
  p {
    font-size: 2em;
    text-align: center;
  }
  .menu{
    max-height: 820px;
    overflow: scroll;
  }
</style>