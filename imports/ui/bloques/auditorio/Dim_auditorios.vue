<template>
    <div class="col-md-6">
        <div class="text-center subtitulo">
            <span class="text-center">Dimmerización Auditorios</span>
        </div>
        <div class="col-md-12">
            <div class="row bloque_opcion">
                <div ref="dimmer_au_A" class="col-md-2" v-on:click='dimm_auditorios("dimmer_au_A","down")' data-estado="0">
                    <img class="img_down" v-bind:src="[encendido_dimm_1_down ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Dimmer Auditorio A
                </div>
                <div ref="dimmer_au_A" class="col-md-2" v-on:click='dimm_auditorios("dimmer_au_A", "up")' data-estado="0">
                    <img v-bind:src="[encendido_dimm_1_down ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
            </div>
            <div class="row bloque_opcion">
                <div ref="dimmer_au_B" class="col-md-2" v-on:click='dimm_auditorios("dimmer_au_B","down")' data-estado="0">
                    <img class="img_down" v-bind:src="[encendido_dimm_1_down ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Dimmer Auditorio B
                </div>
                <div ref="dimmer_au_B" class="col-md-2" v-on:click='dimm_auditorios("dimmer_au_B", "up")' data-estado="0">
                    <img v-bind:src="[encendido_dimm_1_down ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
            </div>
            <div class="row bloque_opcion">
                <div ref="dimmer_au_principal_escenario" class="col-md-2" v-on:click='dimm_auditorios("dimmer_au_principal_escenario","down")' data-estado="0">
                    <img class="img_down" v-bind:src="[encendido_dimm_1_down ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Dimmer Auditorio Prin. Esc.
                </div>
                <div ref="dimmer_au_principal_escenario" class="col-md-2" v-on:click='dimm_auditorios("dimmer_au_principal_escenario", "up")' data-estado="0">
                    <img v-bind:src="[encendido_dimm_1_down ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
            </div>
            <div class="row bloque_opcion">
                <div ref="dimmer_au_principal_laterales" class="col-md-2" v-on:click='dimm_auditorios("dimmer_au_principal_laterales","down")' data-estado="0">
                    <img class="img_down" v-bind:src="[encendido_dimm_1_down ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Dimmer Auditorio Prin. Later.
                </div>
                <div ref="dimmer_au_principal_laterales" class="col-md-2" v-on:click='dimm_auditorios("dimmer_au_principal_laterales", "up")' data-estado="0">
                    <img v-bind:src="[encendido_dimm_1_down ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{

    },
    methods:{
        dimm_auditorios(n,t) {
            let val_dim = this.$refs[n];
            let valor = val_dim.dataset.estado;
            valor = parseInt(valor);
            if (t == 'up' & valor < 100) {
                valor = valor + 5;
            } 
            if(t == 'down' & valor > 0){
                valor = valor - 5;
            }
            console.log("Estado: "+valor+ ' -- '+t+' -- '+n);
            let result = HTTP.call('POST', 'http://172.21.0.3:3001/api/knx/devices/dimmer_abs/',
                    { data: { "ip": "192.168.6.254",
                              "dimmname": n,
                              "absolute": valor
                            } 
                    },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            val_dim.dataset.estado = valor;
                        } else{
                            console.log(error);
                        }
            });
        },
    }
}
</script>

<style scoped>
.img_down{
    width: 50%;
}
</style>
