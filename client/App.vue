<template>
  <div class="container-fluid" id="principal">
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
import BlqSm from "../imports/ui/bloques/sala_multiple/Bloq_sm.vue";
import BlqPc from "../imports/ui/bloques/plaza_comidas/Bloq_pc.vue";
import BlqAu from "../imports/ui/bloques/auditorio/Bloq_au.vue";
import BlqVip from "../imports/ui/bloques/sala_vip/Bloq_vip.vue";

export default {
  components:{
      
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