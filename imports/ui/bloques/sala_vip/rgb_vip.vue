<template>
    <div class="col-md-6">
        <div class="text-center subtitulo">
            <span class="text-center">RGB VIP</span>
        </div>
        <div class="col-md-12">
            <div ref="live_rgb" class="row bloque_opcion" v-on:click='live_rgb' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_live_rgb ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Encendido RGB
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_live_rgb ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
            </div>
            <div ref="rgb_azul" class="row bloque_opcion" v-on:click='rgb_azul' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_rgb_azul ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    AZUL
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_rgb_azul ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
            </div>
            <div ref="rgb_verde" class="row bloque_opcion" v-on:click='rgb_verde' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_rgb_verde ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    VERDE
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_rgb_verde ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
            </div>
            <div ref="rgb_rojo" class="row bloque_opcion" v-on:click='rgb_rojo' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_rgb_rojo ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    ROJO
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_rgb_rojo ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
            </div>
            <div ref="rgb_plateado" class="row bloque_opcion" v-on:click='rgb_plateado' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_rgb_plateado ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    PLATEADO
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_rgb_plateado ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
            </div>
            <div ref="rgb_efecto_1" class="row bloque_opcion" v-on:click='rgb_efecto_1' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_rgb_efecto_1 ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Efecto 1
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_rgb_efecto_1 ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
            </div>
            <div ref="rgb_efecto_2" class="row bloque_opcion" v-on:click='rgb_efecto_2' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_rgb_efecto_2 ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Efecto 2
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_rgb_efecto_2 ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
            </div>
            <div ref="rgb_efecto_3" class="row bloque_opcion" v-on:click='rgb_efecto_3' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_rgb_efecto_3 ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Efecto 3
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_rgb_efecto_3 ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
            </div>
            <div ref="rgb_efecto_4" class="row bloque_opcion" v-on:click='rgb_efecto_4' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_rgb_efecto_4 ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Efecto 4
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_rgb_efecto_4 ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        encendido_live_rgb: Boolean,
        encendido_rgb_azul: Boolean,
        encendido_rgb_verde: Boolean,
        encendido_rgb_rojo: Boolean,
        encendido_rgb_plateado: Boolean,
        encendido_rgb_efecto_1: Boolean,
        encendido_rgb_efecto_2: Boolean,
        encendido_rgb_efecto_3: Boolean,
        encendido_rgb_efecto_4: Boolean,
    },
    methods:{
        live_rgb() {
            let bloque_1 = new Array();
            const button = this.$refs.live_rgb
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices/rgb/live/',
                    { data: { "ip": "192.168.4.214",
                                "order":parseInt(valor)} 
                            },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_live_rgb = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_live_rgb = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
            });
        },
        rgb_azul() {
            let bloque_1 = new Array();
            const button = this.$refs.rgb_azul
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices/rgb/',
                    { data: { "ip": "192.168.4.214",
                                "mode": "Azul"} 
                            },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_rgb_azul = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_rgb_azul = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
            });
        },
        rgb_verde() {
            let bloque_1 = new Array();
            const button = this.$refs.rgb_verde
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices/rgb/',
                    { data: { "ip": "192.168.4.214",
                                "mode": "Verde"} 
                            },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_rgb_verde = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_rgb_verde = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
            });
        },
        rgb_rojo() {
            let bloque_1 = new Array();
            const button = this.$refs.rgb_rojo
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices/rgb/',
                    { data: { "ip": "192.168.4.214",
                                "mode": "Rojo"} 
                            },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_rgb_rojo = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_rgb_rojo = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
            });
        },
        rgb_plateado() {
            let bloque_1 = new Array();
            const button = this.$refs.rgb_plateado
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices/rgb/',
                    { data: { "ip": "192.168.4.214",
                                "mode": "Plateado"} 
                            },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_rgb_plateado = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_rgb_plateado = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
            });
        },
        rgb_efecto_1() {
            let bloque_1 = new Array();
            const button = this.$refs.rgb_efecto_1
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices/rgb/',
                    { data: { "ip": "192.168.4.214",
                                "mode": "Efecto 1"} 
                            },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_rgb_efecto_1 = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_rgb_efecto_1 = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
            });
        },
        rgb_efecto_2() {
            let bloque_1 = new Array();
            const button = this.$refs.rgb_efecto_2
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices/rgb/',
                    { data: { "ip": "192.168.4.214",
                                "mode": "Efecto 2"} 
                            },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_rgb_efecto_2 = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_rgb_efecto_2 = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
            });
        },
        rgb_efecto_3() {
            let bloque_1 = new Array();
            const button = this.$refs.rgb_efecto_3
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices/rgb/',
                    { data: { "ip": "192.168.4.214",
                                "mode": "Efecto 3"} 
                            },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_rgb_efecto_3 = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_rgb_efecto_3 = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
            });
        },
        rgb_efecto_4() {
            let bloque_1 = new Array();
            const button = this.$refs.rgb_efecto_4
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices/rgb/',
                    { data: { "ip": "192.168.4.214",
                                "mode": "Efecto 4"} 
                            },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_rgb_efecto_4 = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_rgb_efecto_4 = true;
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
img {
    width: 60%;
}
</style>
