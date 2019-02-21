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
                    <label v-on:click="super_vip" for="formControlRange">Sala Super VIP</label>
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
            -->
        </div>
    </div>
</template>

<script>
export default {
    props:{
       encendido_super_vip: Boolean,
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
        super_vip() {
            let bloque_1 = new Array();
            bloque_1 = ['1/0/3','1/0/4'];
            // const button = this.$refs.super_vip
            let valor = 1; //button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.4.214", "group": bloque_1, "order": parseInt(valor)} },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        // if (valor == '0') {
                        //     this.encendido_super_vip = false;
                        //     button.dataset.estado = '1';
                        // } else{
                        //     this.encendido_super_vip = true;
                        //     button.dataset.estado = '0';
                        // }
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
