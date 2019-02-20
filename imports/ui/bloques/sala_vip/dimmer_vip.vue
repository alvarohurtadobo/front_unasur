<template>
    <div class="col-md-6">
        <div class="text-center subtitulo">
            <span class="text-center">Dimmerización VIP</span>
        </div>
        <div class="col-md-12">
            <div class="row bloque_opcion form-group">
                <div class="col-md-2">
                    <img class="img_down" src="/images/layout/Iconos_peques/IluminacionA.png" alt="">
                </div>
                <div class="col-md-8 opcion">
                    <label for="formControlRange">Ingreso sala VIP</label>
                    <input type="range" class="form-control-range" v-on:change="dimm_vip('dimmer_vip_1',$event.target.value)" v-model="dimmer_vip_1" id="formControlRange" name="dimm_vip" min="5" max="100">
                </div>
                <div class="col-md-2">
                    <img src="/images/layout/Iconos_peques/IluminacionA.png" alt="">
                </div>
            </div>
            <div class="row bloque_opcion form-group">
                <div class="col-md-2">
                    <img class="img_down" src="/images/layout/Iconos_peques/IluminacionA.png" alt="">
                </div>
                <div class="col-md-8 opcion">
                    <label for="formControlRange">Sala de reuniones diag. 1</label>
                    <input type="range" class="form-control-range" v-on:change="dimm_vip('dimmer_vip_2',$event.target.value)" v-model="dimmer_vip_2" id="formControlRange" name="dimm_vip" min="5" max="100">
                </div>
                <div class="col-md-2">
                    <img src="/images/layout/Iconos_peques/IluminacionA.png" alt="">
                </div>
            </div>
            <div class="row bloque_opcion form-group">
                <div class="col-md-2">
                    <img class="img_down" src="/images/layout/Iconos_peques/IluminacionA.png" alt="">
                </div>
                <div class="col-md-8 opcion">
                    <label for="formControlRange">Sala de reuniones diag. 2</label>
                    <input type="range" class="form-control-range" v-on:change="dimm_vip('dimmer_vip_3',$event.target.value)" v-model="dimmer_vip_3" id="formControlRange" name="dimm_vip" min="5" max="100">
                </div>
                <div class="col-md-2">
                    <img src="/images/layout/Iconos_peques/IluminacionA.png" alt="">
                </div>
            </div>
            <div class="row bloque_opcion form-group">
                <div class="col-md-2">
                    <img class="img_down" src="/images/layout/Iconos_peques/IluminacionA.png" alt="">
                </div>
                <div class="col-md-8 opcion">
                    <label for="formControlRange">Sala Super VIP Diag. 1</label>
                    <input type="range" class="form-control-range" v-on:change="dimm_vip('dimmer_vip_4',$event.target.value)" v-model="dimmer_vip_4" id="formControlRange" name="dimm_vip_4" min="5" max="100">
                </div>
                <div class="col-md-2">
                    <img src="/images/layout/Iconos_peques/IluminacionA.png" alt="">
                </div>
            </div>
            <!-- <div class="row bloque_opcion">
                <div ref="dimmer_vip_1" class="col-md-2" v-on:click='dimm_vip("dimmer_vip_1","down")' data-estado="0">
                    <img class="img_down" v-bind:src="[encendido_dimm_1_down ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Ingreso Sala VIP
                </div>
                <div ref="dimmer_vip_1" class="col-md-2" v-on:click='dimm_vip("dimmer_vip_1", "up")' data-estado="0">
                    <img v-bind:src="[encendido_dimm_1_down ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
            </div>
            <div class="row bloque_opcion">
                <div ref="dimmer_vip_2" class="col-md-2" v-on:click='dimm_vip("dimmer_vip_2", "down")'  data-estado="0">
                    <img class="img_down" v-bind:src="[encendido_dimm_2 ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Sala de reuniones diag. 1
                </div>
                <div ref="dimmer_vip_2" class="col-md-2" v-on:click='dimm_vip("dimmer_vip_2", "up")' data-estado="0">
                    <img v-bind:src="[encendido_dimm_2 ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
            </div>
            <div class="row bloque_opcion">
                <div ref="dimmer_vip_3" class="col-md-2" v-on:click='dimm_vip("dimmer_vip_3", "down")'  data-estado="0">
                    <img class="img_down" v-bind:src="[encendido_dimm_3 ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Sala de reuniones diag. 2
                </div>
                <div ref="dimmer_vip_3" class="col-md-2" v-on:click='dimm_vip("dimmer_vip_3", "up")' data-estado="0">
                    <img v-bind:src="[encendido_dimm_3 ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
            </div>
            <div class="row bloque_opcion">
                <div ref="dimmer_vip_4" class="col-md-2" v-on:click='dimm_vip("dimmer_vip_4", "down")'  data-estado="0">
                    <img class="img_down" v-bind:src="[encendido_dimm_4 ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Sala Super VIP Diag. 1
                </div>
                <div ref="dimmer_vip_4" class="col-md-2" v-on:click='dimm_vip("dimmer_vip_4", "up")' data-estado="0">
                    <img v-bind:src="[encendido_dimm_4 ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
            </div> -->
            <!-- <div class="row bloque_opcion">
                <div ref="dimmer_vip_5" class="col-md-2" v-on:click='dimm_vip("dimmer_vip_5", "down")'  data-estado="0">
                    <img class="img_down" v-bind:src="[encendido_dimm_5 ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Sala Super VIP Diag. 2
                </div>
                <div ref="dimmer_vip_5" class="col-md-2" v-on:click='dimm_vip("dimmer_vip_5", "up")' data-estado="0">
                    <img v-bind:src="[encendido_dimm_5 ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    props:{
       
    },
    data(){
        return {
            dimmer_vip_1: 50,
            dimmer_vip_2: 50,
            dimmer_vip_3: 50,
            dimmer_vip_4: 50,
        }
    },
    methods:{
        dimm_vip(n,t){
            console.log("Nombre del dimmer: "+n+ " Valor del dimmer: "+ t);
            let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices/dimmer_abs/',
                    { data: { "ip": "192.168.4.214",
                              "dimmname": n,
                              "absolute": t
                            } 
                    },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        } else{
                            console.log(error);
                        }
            });
        },
        // dimm_vip(n,t) {
        //     let val_dim = this.$refs[n];
        //     let valor = val_dim.dataset.estado;
        //     valor = parseInt(valor);
        //     if (t == 'up' & valor < 100) {
        //         valor = valor + 5;
        //     } 
        //     if(t == 'down' & valor > 5){
        //         valor = valor - 5;
        //     }
        //     console.log("Estado: "+valor+ ' -- '+t+' -- '+n);
        //     let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices/dimmer_abs/',
        //             { data: { "ip": "192.168.4.214",
        //                       "dimmname": n,
        //                       "absolute": valor
        //                     } 
        //             },
        //             (error, result) => {
        //                 if (!error) {
        //                     console.log("Los datos recibidos son: " + JSON.stringify(result.data));
        //                     val_dim.dataset.estado = valor;
        //                 } else{
        //                     console.log(error);
        //                 }
        //     });
        // },
        
    }

}
</script>

<style scoped>
.img_down{
    width: 50%;
}
</style>
