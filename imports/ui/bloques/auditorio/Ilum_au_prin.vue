<template>
    <div class="col-md-6 scroll">
        <div class="text-center subtitulo">
            <span class="text-center">Iluminación Auditorio Principal</span>
        </div>
        <div class="col-md-12">
            <div ref="au_pas_prin" class="row bloque_opcion" v-on:click='au_pas_prin' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_pas_prin ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Lobby aud. principal
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_pas_prin ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div ref="au_prin_blq_norte" class="row bloque_opcion" v-on:click='au_prin_blq_norte' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_prin_blq_norte ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Bloque Norte
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_prin_blq_norte ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div ref="au_prin_blq_sud" class="row bloque_opcion" v-on:click='au_prin_blq_sud' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_prin_blq_sud ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Bloque Sud
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_prin_blq_sud ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div ref="au_prin_blq_central" class="row bloque_opcion" v-on:click='au_prin_blq_central' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_prin_blq_central ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Bloque Central
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_prin_blq_central ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div ref="au_prin_blq_posterior" class="row bloque_opcion" v-on:click='au_prin_blq_posterior' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_prin_blq_posterior ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Bloque Posterior
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_prin_blq_posterior ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div ref="au_prin_escenario" class="row bloque_opcion" v-on:click='au_prin_escenario' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_prin_escenario ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Solo Escenario
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_prin_escenario ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div ref="au_prin_esc_diserta" class="row bloque_opcion" v-on:click='au_prin_esc_diserta' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_prin_esc_diserta ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Modo Disertación
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_prin_esc_diserta ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div ref="au_prin_esc_limpieza" class="row bloque_opcion" v-on:click='au_prin_esc_limpieza' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_prin_esc_limpieza ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Modo Limpieza
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_prin_esc_limpieza ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div ref="au_prin_esc_concierto" class="row bloque_opcion" v-on:click='au_prin_esc_concierto' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_prin_esc_concierto ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Modo Concierto
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_prin_esc_concierto ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div ref="au_prin_esc_tenue" class="row bloque_opcion" v-on:click='au_prin_esc_tenue' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_prin_esc_tenue ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Modo Ténue
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_prin_esc_tenue ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div ref="au_prin_esc_salida" class="row bloque_opcion" v-on:click='au_prin_esc_salida' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_prin_esc_salida ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Modo Salida
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_prin_esc_salida ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div ref="au_prin_esc_pasi_norte" class="row bloque_opcion" v-on:click='au_prin_esc_pasi_norte' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_prin_esc_pasi_norte ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Aud. Pasillo Norte
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_prin_esc_pasi_norte ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div ref="au_prin_esc_pasi_sud" class="row bloque_opcion" v-on:click='au_prin_esc_pasi_sud' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_prin_esc_pasi_sud ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Aud. Pasillo Sud
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_prin_esc_pasi_sud ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div ref="au_prin_mezanine" class="row bloque_opcion" v-on:click='au_prin_mezanine' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_prin_mezanine ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Mezzanine
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_prin_mezanine ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div ref="au_prin_pas_traduc" class="row bloque_opcion" v-on:click='au_prin_pas_traduc' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_prin_pas_traduc ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Pasillo Traducción
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_prin_pas_traduc ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div ref="au_prin_ofi_traduc" class="row bloque_opcion" v-on:click='au_prin_ofi_traduc' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_prin_ofi_traduc ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Oficina Traducción
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_prin_ofi_traduc ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        encendido_au_prin_blq_norte: Boolean,
        encendido_au_prin_blq_sud: Boolean,
        encendido_au_prin_blq_central: Boolean,
        encendido_au_prin_escenario: Boolean,
        encendido_au_prin_blq_posterior: Boolean,
        encendido_au_prin_mezanine: Boolean,
        encendido_au_prin_pas_traduc: Boolean,
        encendido_au_prin_ofi_traduc: Boolean,
        encendido_au_prin_esc_tenue: Boolean,
        encendido_au_prin_esc_pasi_norte: Boolean,
        encendido_au_prin_esc_pasi_sud: Boolean,
        encendido_au_prin_esc_diserta: Boolean,
        encendido_au_prin_esc_limpieza: Boolean,
        encendido_au_prin_esc_concierto: Boolean,
        encendido_au_pas_prin: Boolean,
        encendido_au_prin_esc_salida: Boolean,
    },
    methods:{
        au_prin_blq_norte() {
            let bloque_1 = new Array();
            bloque_1 = ['5/3/4'];
            const button = this.$refs.au_prin_blq_norte
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_prin_blq_norte = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_prin_blq_norte = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_prin_blq_sud() {
            let bloque_1 = new Array();
            bloque_1 = ['3/0/8','3/0/9','3/0/10','3/0/11','3/0/12','3/0/13'];
            const button = this.$refs.au_prin_blq_sud
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_prin_blq_sud = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_prin_blq_sud = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_prin_blq_posterior() {
            let bloque_1 = new Array();
            bloque_1 = ['3/0/14'];
            const button = this.$refs.au_prin_blq_posterior
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_prin_blq_posterior = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_prin_blq_posterior = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_prin_blq_central() {
            let bloque_1 = new Array();
            bloque_1 = ['5/3/5'];
            const button = this.$refs.au_prin_blq_central
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_prin_blq_central = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_prin_blq_central = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_prin_escenario() {
            let bloque_1 = new Array();
            bloque_1 = ['5/4/9'];
            const button = this.$refs.au_prin_escenario
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_prin_escenario = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_prin_escenario = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_prin_mezanine() {
            let bloque_1 = new Array();
            bloque_1 = ['3/1/6', '3/1/3'];
            const button = this.$refs.au_prin_mezanine
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_prin_mezanine = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_prin_mezanine = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_prin_haz_luz() {
            let bloque_1 = new Array();
            bloque_1 = ['4/2/3'];
            const button = this.$refs.au_prin_haz_luz
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_prin_haz_luz = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_prin_haz_luz = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_prin_pas_traduc() {
            let bloque_1 = new Array();
            // bloque_1 = ['0/1/0'];
            bloque_1 = ['5/4/1'];
            const button = this.$refs.au_prin_pas_traduc
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_prin_pas_traduc = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_prin_pas_traduc = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_prin_ofi_traduc() {
            let bloque_1 = new Array();
            bloque_1 = ['0/1/1'];
            const button = this.$refs.au_prin_ofi_traduc
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_prin_ofi_traduc = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_prin_ofi_traduc = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },

        au_prin_esc_limpieza() {
            let bloque_1 = new Array();
            // bloque_1 = ['3/0/0' ,'3/0/5', '3/0/8', '3/0/13'];
            bloque_1 = ['3/0/0', '3/0/12', '3/1/1', '3/1/3'];
            const button = this.$refs.au_prin_esc_limpieza
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_prin_esc_limpieza = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_prin_esc_limpieza = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        
        au_prin_esc_diserta() {
            let bloque_1 = new Array();
            bloque_1 = ['3/0/0' ,'3/0/5', '3/0/8', '3/0/13', '3/1/6', '3/0/15', '3/1/0'];
            const button = this.$refs.au_prin_esc_diserta
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_prin_esc_diserta = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_prin_esc_diserta = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_prin_esc_concierto() {
            let bloque_1 = new Array();
            // bloque_1 = ['3/1/1'];
            bloque_1 = ['3/1/1', '3/1/2'];
            const button = this.$refs.au_prin_esc_concierto
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_prin_esc_concierto = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_prin_esc_concierto = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_prin_esc_tenue() {
            let bloque_1 = new Array();
            bloque_1 = ['3/1/4', '3/1/5', '3/1/7'];
            // bloque_1 = ['5/3/19'];
            const button = this.$refs.au_prin_esc_tenue
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_prin_esc_tenue = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_prin_esc_tenue = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_prin_esc_salida() {
            let bloque_1 = new Array();
            bloque_1 = ['3/1/3', '3/0/0' ,'3/0/5', '3/0/8', '3/0/13', '3/0/14'];
            // bloque_1 = ['5/3/19'];
            const button = this.$refs.au_prin_esc_salida
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_prin_esc_salida = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_prin_esc_salida = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_prin_esc_pasi_norte() {
            let bloque_1 = new Array();
            bloque_1 = ['3/0/0'];
            const button = this.$refs.au_prin_esc_pasi_norte
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_prin_esc_pasi_norte = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_prin_esc_pasi_norte = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_prin_esc_pasi_sud() {
            let bloque_1 = new Array();
            bloque_1 = ['3/0/12'];
            const button = this.$refs.au_prin_esc_pasi_sud
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_prin_esc_pasi_sud = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_prin_esc_pasi_sud = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_pas_prin() {
            let bloque_1 = new Array();
            bloque_1 = ['0/0/11'];
            const button = this.$refs.au_pas_prin
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_pas_prin = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_pas_prin = true;
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
