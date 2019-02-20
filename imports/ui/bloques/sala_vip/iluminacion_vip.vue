<template>
    <div class="col-md-6">
        <div class="text-center subtitulo">
            <span class="text-center">Iluminación VIP</span>
        </div>
        <div class="col-md-12">
            <div ref="super_vip" class="row bloque_opcion" v-on:click='super_vip' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_super_vip ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Super VIP
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_super_vip ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
            <div ref="s_reuniones" class="row bloque_opcion" v-on:click='s_reuniones' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_s_reuniones ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Sala de reuniones
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_s_reuniones ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
            <div ref="c_reuniones" class="row bloque_opcion" v-on:click='c_reuniones' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_c_reuniones ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Centro Sala de reuniones
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_c_reuniones ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
            <div ref="reuniones_pared" class="row bloque_opcion" v-on:click='reuniones_pared' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_reuniones_pared ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Luces apliqué pared
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_reuniones_pared ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
            <div ref="vip_cuadrados" class="row bloque_opcion" v-on:click='vip_cuadrados' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_vip_cuadrados ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Luces decorativas
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_vip_cuadrados ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
            <div ref="ing_vip" class="row bloque_opcion" v-on:click='ing_vip' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_ing_vip ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Ingreso VIP
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_ing_vip ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
            <div ref="s_descanso" class="row bloque_opcion" v-on:click='s_descanso' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_s_descanso ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Sala de descanso
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_s_descanso ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        encendido_super_vip: Boolean,
        encendido_s_reuniones: Boolean,
        encendido_c_reuniones: Boolean,
        encendido_ing_vip: Boolean,
        encendido_s_descanso: Boolean,
        encendido_reuniones_pared: Boolean,
        encendido_vip_cuadrados: Boolean
    },
    methods:{
        super_vip() {
            let bloque_1 = new Array();
            bloque_1 = ['1/0/3','1/0/4'];
            const button = this.$refs.super_vip
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.4.214", "group": bloque_1, "order": parseInt(valor)} },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == '0') {
                            this.encendido_super_vip = false;
                            button.dataset.estado = '1';
                        } else{
                            this.encendido_super_vip = true;
                            button.dataset.estado = '0';
                        }
                    } else{
                        console.log(error);
                    }
            });
        },
        s_reuniones() {
            let bloque_1 = new Array();
            bloque_1 = ['2/0/1'];
            const button = this.$refs.s_reuniones
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.4.214", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_s_reuniones = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_s_reuniones = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        c_reuniones() {
            let bloque_1 = new Array();
            bloque_1 = ["0/0/6"];
            const button = this.$refs.c_reuniones
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.4.214", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_c_reuniones = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_c_reuniones = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        reuniones_pared() {
            let bloque_1 = new Array();
            bloque_1 = ["0/0/11"];
            const button = this.$refs.reuniones_pared
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.4.214", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_reuniones_pared = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_reuniones_pared = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        vip_cuadrados() {
            let bloque_1 = new Array();
            bloque_1 = ["0/0/10"];
            const button = this.$refs.vip_cuadrados
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.4.214", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_vip_cuadrados = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_vip_cuadrados = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        ing_vip() {
            let bloque_1 = new Array();
            bloque_1 = ['1/0/0','1/0/1', '1/0/2'];
            const button = this.$refs.ing_vip
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.4.214", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_ing_vip = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_ing_vip = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        s_descanso() {
            let bloque_1 = new Array();
            bloque_1 = ['2/3/0','2/3/1'];
            const button = this.$refs.s_descanso
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.4.214", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_s_descanso = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_s_descanso = true;
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

<style scoped>
img{
    width: 60%;
}
</style>
