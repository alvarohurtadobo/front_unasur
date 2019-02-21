<template>
    <div class="col-md-6 scroll">
        <div class="text-center subtitulo">
            <span class="text-center">Iluminación Auditorio A</span>
        </div>
        <div class="col-md-12">
            <div ref="au_a_butacas_total" class="row bloque_opcion" v-on:click='au_a_butacas_total' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_a_butacas_total ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Encendido Total
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_a_butacas_total ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div ref="au_a_butacas_tenue" class="row bloque_opcion" v-on:click='au_a_butacas_tenue' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_a_butacas_tenue ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Encendido Led
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_a_butacas_tenue ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div ref="au_a_butacas_parcial" class="row bloque_opcion" v-on:click='au_a_butacas_parcial' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_a_butacas_parcial ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Encendido Parcial
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_a_butacas_parcial ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
        <!-- <div class="col-md-12">
            <div ref="au_a_butacas_estrella" class="row bloque_opcion" v-on:click='au_a_butacas_estrella' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_a_butacas_estrella ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Butacas Estrella
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_a_butacas_estrella ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div> -->
        <div class="col-md-12">
            <div ref="au_a_butacas_ojos_gato" class="row bloque_opcion" v-on:click='au_a_butacas_ojos_gato' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_a_butacas_ojos_gato ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Modo pantalla
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_a_butacas_ojos_gato ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div ref="au_a_limpieza" class="row bloque_opcion" v-on:click='au_a_limpieza' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_a_limpieza ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Modo Limpieza
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_a_limpieza ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div ref="au_a_modo_disertacion" class="row bloque_opcion" v-on:click='au_a_modo_disertacion' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_a_modo_disertacion ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Modo disertación 1
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_a_modo_disertacion ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div ref="au_a_modo_disertacion_2" class="row bloque_opcion" v-on:click='au_a_modo_disertacion_2' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_a_modo_disertacion_2 ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Modo disertación 2
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_a_modo_disertacion_2 ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div ref="au_a_solo_escenario" class="row bloque_opcion" v-on:click='au_a_solo_escenario' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_a_solo_escenario ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Solo Escenario
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_a_solo_escenario ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div ref="au_a_escenario_a" class="row bloque_opcion" v-on:click='au_a_escenario_a' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_a_escenario_a ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Escenario sección 1
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_a_escenario_a ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div ref="au_a_escenario_b" class="row bloque_opcion" v-on:click='au_a_escenario_b' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_a_escenario_b ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Escenario sección 2
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_a_escenario_b ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div ref="au_a_escenario_c" class="row bloque_opcion" v-on:click='au_a_escenario_c' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_a_escenario_c ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Escenario sección 3
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_a_escenario_c ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    props:{
        encendido_au_a_butacas_total: Boolean,
        encendido_au_a_butacas_tenue: Boolean,
        encendido_au_a_butacas_ojos_gato: Boolean,
        encendido_au_a_limpieza: Boolean,
        encendido_au_a_butacas_parcial: Boolean,
        encendido_au_a_butacas_estrella: Boolean,
        encendido_au_a_modo_disertacion: Boolean,
        encendido_au_a_modo_disertacion_2: Boolean,
        encendido_au_a_solo_escenario: Boolean,
        encendido_au_a_escenario_a: Boolean,
        encendido_au_a_escenario_b: Boolean,
        encendido_au_a_escenario_c: Boolean,
    },
    methods:{
        au_a_butacas_total() {
            let bloque_1 = new Array();
            bloque_1 = ['5/0/0', '0/0/5', '0/0/7', '0/0/14'];
            const button = this.$refs.au_a_butacas_total
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://localhost:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_a_butacas_total = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_a_butacas_total = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_a_butacas_tenue() {
            let bloque_1 = new Array();
            bloque_1 = ['0/0/6'];
            const button = this.$refs.au_a_butacas_tenue
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://localhost:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_a_butacas_tenue = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_a_butacas_tenue = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_a_butacas_ojos_gato() {
            let bloque_1 = new Array();
            bloque_1 = ['0/0/13'];
            const button = this.$refs.au_a_butacas_ojos_gato
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://localhost:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_a_butacas_ojos_gato = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_a_butacas_ojos_gato = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_a_limpieza() {
            let bloque_1 = new Array();
            bloque_1 = ['0/0/13', '0/0/6', '0/0/7'];
            const button = this.$refs.au_a_limpieza
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://localhost:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_a_limpieza = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_a_limpieza = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_a_butacas_parcial() {
            let bloque_1 = new Array();
            // bloque_1 = ['0/0/5','0/0/15' , '0/0/7'];
            bloque_1 = ['0/0/15' , '0/0/7'];
            const button = this.$refs.au_a_butacas_parcial
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://localhost:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_a_butacas_parcial = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_a_butacas_parcial = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_a_butacas_estrella() {
            let bloque_1 = new Array();
            bloque_1 = ['0/0/4'];
            const button = this.$refs.au_a_butacas_estrella
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://localhost:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_a_butacas_estrella = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_a_butacas_estrella = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_a_modo_disertacion() {
            let bloque_1 = new Array();
            bloque_1 = ['0/0/6', '0/0/5', '0/0/7', '0/0/14'];
            const button = this.$refs.au_a_modo_disertacion
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://localhost:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_a_modo_disertacion = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_a_modo_disertacion = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_a_modo_disertacion_2() {
            let bloque_1 = new Array();
            bloque_1 = ['0/0/14','0/0/6'];
            const button = this.$refs.au_a_modo_disertacion_2
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://localhost:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_a_modo_disertacion_2 = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_a_modo_disertacion_2 = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_a_solo_escenario() {
            let bloque_1 = new Array();
            bloque_1 = ['0/0/5', '0/0/7', '0/0/14'];
            const button = this.$refs.au_a_solo_escenario
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://localhost:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_a_solo_escenario = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_a_solo_escenario = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_a_escenario_a() {
            let bloque_1 = new Array();
            bloque_1 = ['0/0/5'];
            const button = this.$refs.au_a_escenario_a
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://localhost:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_a_escenario_a = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_a_escenario_a = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_a_escenario_b() {
            let bloque_1 = new Array();
            bloque_1 = ['0/0/7'];
            const button = this.$refs.au_a_escenario_b
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://localhost:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_a_escenario_b = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_a_escenario_b = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_a_escenario_c() {
            let bloque_1 = new Array();
            bloque_1 = ['0/0/14'];
            const button = this.$refs.au_a_escenario_c
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://localhost:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_a_escenario_c = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_a_escenario_c = true;
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
