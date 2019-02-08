<template>
    <div class="col-md-6">
        <div class="text-center subtitulo">
            <span class="text-center">Dimmerización VIP</span>
        </div>
        <div class="col-md-12">
            <div ref="dimm_1_down" class="row bloque_opcion" v-on:click='dimm_1_down' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_dimm_1_down ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    --
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_dimm_1_down ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
            </div>
            <div ref="dimm_1_up" class="row bloque_opcion" v-on:click='dimm_1_up' data-estado="0">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_dimm_1_up ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    +
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_dimm_1_up ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
            </div>
            <div ref="dimm_2_down" class="row bloque_opcion" v-on:click='dimm_2_down' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_dimm_2_down ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    -
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_dimm_2_down ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
            </div>
            <div ref="dimm_2_up" class="row bloque_opcion" v-on:click='dimm_2_up' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_dimm_2_up ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    +
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_dimm_2_up ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
            </div>
        </div>
    </div>


    <!-- <button ref="dimm_1_down" class="btn" v-bind:class="[encendido_dimm_1_down ? 'btn-warning' : 'btn-primary']" v-on:click='dimm_1_down' data-estado="1"><i class="fa fa-bolt"></i> -</button> -->
    <!-- <button ref="dimm_1_up" class="btn" v-bind:class="[encendido_dimm_1_up ? 'btn-warning' : 'btn-primary']" v-on:click='dimm_1_up' data-estado="1"><i class="fa fa-plus"></i> + </button> -->
    <!-- <button ref="dimm_2_down" class="btn" v-bind:class="[encendido_dimm_2_down ? 'btn-warning' : 'btn-primary']" v-on:click='dimm_2_down' data-estado="1"><i class="fa fa-bolt"></i> -</button> -->
    <!-- <button ref="dimm_2_up" class="btn" v-bind:class="[encendido_dimm_2_up ? 'btn-warning' : 'btn-primary']" v-on:click='dimm_2_up' data-estado="1"><i class="fa fa-plus"></i> + </button> -->
</template>

<script>
export default {
    props:{
        encendido_dimm_1_down: Boolean,
        encendido_dimm_1_up: Boolean,
        encendido_dimm_2_down: Boolean,
        encendido_dimm_2_up: Boolean,
    },
    methods:{
        dimm_1_down() {
            let bloque_1 = new Array();
            const button = this.$refs.dimm_1_down
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices/dimmer/',
                    { data: { "ip": '192.168.4.214',
                                "incrdecr":0,
                                "dimmname": 'dimmer_vip_1',
                                "off": false
                            } 
                    },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_dimm_1_down = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_dimm_1_down = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error); 
                        }
            });
        },
        dimm_1_up() {
            const button = this.$refs.dimm_1_up
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            valor = parseInt(valor);
            let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices/dimmer_abs/',
                    { data: { "ip": "192.168.4.214",
                                "dimmname": "dimmer_vip_1",
                                "absolute": valor} 
                            },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            valor = valor + 5;
                            button.dataset.estado = valor;
                            console.log('Valor Dimmer: '+valor);
                            // if (valor == '0') {
                            //     this.encendido_dimm_1_up = false;
                            //     button.dataset.estado = '1';
                            // } else{
                            //     this.encendido_dimm_1_up = true;
                            //     button.dataset.estado = '0';
                            // }
                        } else{
                            console.log(error);
                        }
            });
        },
        dimm_2_down() {
            const button = this.$refs.dimm_2_down
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices/dimmer/',
                    { data: { "ip": '192.168.4.214',
                                "incrdecr":0,
                                "dimmname": 'dimmer_vip_2',
                                "off": false
                            } 
                    },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_dimm_2_down = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_dimm_2_down = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error); 
                        }
            });
        },
        dimm_2_up() {
            const button = this.$refs.dimm_2_up
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices/dimmer/',
                    { data: { "ip": "192.168.4.214",
                                "incrdecr":1,
                                "dimmname": "dimmer_vip_2",
                                "off": false} 
                            },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_dimm_2_up = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_dimm_2_up = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
            });
        },
    }

}
</script>

<style>

</style>
