<template>
    <div class="col-md-6 scroll">
        <div class="text-center subtitulo">
            <span class="text-center">Iluminación Auditorio</span>
        </div>
        <div class="col-md-12">
            <div ref="au_ing" class="row bloque_opcion" v-on:click='au_ing' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_ing ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Ingreso
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_ing ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
            <div ref="au_rampa_sud" class="row bloque_opcion" v-on:click='au_rampa_sud' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_rampa_sud ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Rampla Sud
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_rampa_sud ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
            <div ref="au_ext_norte" class="row bloque_opcion" v-on:click='au_ext_norte' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_ext_norte ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Rampla Norte
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_ext_norte ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
            <div ref="au_prin_laterales" class="row bloque_opcion" v-on:click='au_prin_laterales' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_prin_laterales ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Luces Laterales
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_prin_laterales ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
            <div ref="au_pasillo_mezzanine" class="row bloque_opcion" v-on:click='au_pasillo_mezzanine' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_pasillo_mezzanine ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Pasillo Mezzanine
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_pasillo_mezzanine ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
            <div ref="au_p1" class="row bloque_opcion" v-on:click='au_p1' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_p1 ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Iluminación Piso 1
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_p1 ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
            <div ref="au_p1_wc_mujeres" class="row bloque_opcion" v-on:click='au_p1_wc_mujeres' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_p1_wc_mujeres ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Baño Mujeres Piso 1
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_p1_wc_mujeres ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
            <div ref="au_p1_wc_varones" class="row bloque_opcion" v-on:click='au_p1_wc_varones' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_p1_wc_varones ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Baño Varones Piso 1
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_p1_wc_varones ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
            <div ref="au_p2" class="row bloque_opcion" v-on:click='au_p2' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_p2 ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Iluminación Piso 2
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_p2 ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
            <div ref="au_p4" class="row bloque_opcion" v-on:click='au_p4' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_p4 ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Iluminación Piso 4
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_p4 ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
            <div ref="au_prin_ingr_pas_norte" class="row bloque_opcion" v-on:click='au_prin_ingr_pas_norte' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_prin_ingr_pas_norte ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Ingreso Pasillo Norte
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_prin_ingr_pas_norte ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
            <div ref="au_pasillo_norte" class="row bloque_opcion" v-on:click='au_pasillo_norte' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_pasillo_norte ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Luz Pas. interior Norte
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_pasillo_norte ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
            <div ref="au_clispas_ramp_sud" class="row bloque_opcion" v-on:click='au_clispas_ramp_sud' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_clispas_ramp_sud ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Chispas Rampa Sud
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_clispas_ramp_sud ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
            <div ref="au_pasillo_gradas" class="row bloque_opcion" v-on:click='au_pasillo_gradas' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_pasillo_gradas ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Pasillo gradas
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_pasillo_gradas ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
            <div ref="au_cafeteria" class="row bloque_opcion" v-on:click='au_cafeteria' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_cafeteria ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Cafetería
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_cafeteria ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
            <div ref="au_recib_ofis" class="row bloque_opcion" v-on:click='au_recib_ofis' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_recib_ofis ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Recibidor Oficinas
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_recib_ofis ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        encendido_au_ing: Boolean,
        encendido_au_rampa_sud: Boolean,
        encendido_au_pasillo_mezzanine: Boolean,
        encendido_au_p1: Boolean,
        encendido_au_p1_wc_mujeres: Boolean,
        encendido_au_p1_wc_varones: Boolean,
        encendido_au_p2: Boolean,
        encendido_au_p4: Boolean,
        encendido_au_prin_laterales: Boolean,
        encendido_au_ext_norte: Boolean,
        encendido_au_prin_ingr_pas_norte: Boolean,
        encendido_au_pasillo_norte: Boolean,
        encendido_au_clispas_ramp_sud: Boolean,
        encendido_au_pasillo_gradas: Boolean,
        encendido_au_cafeteria: Boolean,
        encendido_au_recib_ofis: Boolean,
    },
    methods:{
        au_ing() {
            let bloque_1 = new Array();
            bloque_1 = ['5/0/6'];
            const button = this.$refs.au_ing
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://app:3001/api/knx/devices',
                { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == '0') {
                            this.encendido_au_ing = false;
                            button.dataset.estado = '1';
                        } else{
                            this.encendido_au_ing = true;
                            button.dataset.estado = '0';
                        }
                    } else{
                        console.log(error);
                    }
            });
        },
        au_rampa_sud() {
            let bloque_1 = new Array();
            bloque_1 = ['5/0/19'];
            const button = this.$refs.au_rampa_sud
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://app:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_rampa_sud = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_rampa_sud = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_clispas_ramp_sud() {
            let bloque_1 = new Array();
            bloque_1 = ['1/0/7'];
            const button = this.$refs.au_clispas_ramp_sud
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://app:3001/api/knx/devices',
                { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == '0') {
                            this.encendido_au_clispas_ramp_sud = false;
                            button.dataset.estado = '1';
                        } else{
                            this.encendido_au_clispas_ramp_sud = true;
                            button.dataset.estado = '0';
                        }
                    } else{
                        console.log(error);
                    }
            });
        },
        au_pasillo_mezzanine() {
            let bloque_1 = new Array();
            bloque_1 = ["5/5/3"];
            const button = this.$refs.au_pasillo_mezzanine
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            
                let result = HTTP.call('POST', 'http://app:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_pasillo_mezzanine = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_pasillo_mezzanine = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_p1() {
            let bloque_1 = new Array();
            bloque_1 = ["5/2/0"];
            const button = this.$refs.au_p1
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://app:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_p1 = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_p1 = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_p1_wc_mujeres() {
            let bloque_1 = new Array();
            bloque_1 = ["0/2/2"];
            const button = this.$refs.au_p1_wc_mujeres
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://app:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_p1_wc_mujeres = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_p1_wc_mujeres = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_p1_wc_varones() {
            let bloque_1 = new Array();
            bloque_1 = ["0/2/5"];
            const button = this.$refs.au_p1_wc_varones
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://app:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_p1_wc_varones = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_p1_wc_varones = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_p1() {
            let bloque_1 = new Array();
            bloque_1 = ["5/2/0"];
            const button = this.$refs.au_p1
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://app:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_p1 = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_p1 = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_p2() {
            let bloque_1 = new Array();
            bloque_1 = ["5/3/13"];
            const button = this.$refs.au_p2
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://app:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_p2 = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_p2 = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                    }
                );
        },
        au_p4() {
            let bloque_1 = new Array();
            bloque_1 = ["5/5/2"];
            const button = this.$refs.au_p4
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://app:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_p4 = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_p4 = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        
        au_ext_norte() {
            let bloque_1 = new Array();
            bloque_1 = ['5/1/3'];
            const button = this.$refs.au_ext_norte
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://app:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_ext_norte = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_ext_norte = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_prin_ingr_pas_norte(){
            let bloque_1 = new Array();
            bloque_1 = ['5/0/7'];
            const button = this.$refs.au_prin_ingr_pas_norte
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://app:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_prin_ingr_pas_norte = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_prin_ingr_pas_norte = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_pasillo_norte() {
            let bloque_1 = new Array();
            bloque_1 = ['2/0/15'];
            const button = this.$refs.au_pasillo_norte
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://app:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_pasillo_norte = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_pasillo_norte = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_pasillo_gradas() {
            let bloque_1 = new Array();
            bloque_1 = ['5/2/1'];
            const button = this.$refs.au_pasillo_gradas
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://app:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_pasillo_gradas = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_pasillo_gradas = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_cafeteria() {
            let bloque_1 = new Array();
            bloque_1 = ['5/1/0'];
            const button = this.$refs.au_cafeteria
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://app:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_cafeteria = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_cafeteria = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
         au_recib_ofis() {
            let bloque_1 = new Array();
            bloque_1 = ['5/1/14'];
            const button = this.$refs.au_recib_ofis
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://app:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_recib_ofis = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_recib_ofis = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_prin_laterales() {
            let bloque_1 = new Array();
            bloque_1 = ['5/0/4'];
            const button = this.$refs.au_prin_laterales
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://app:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_prin_laterales = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_prin_laterales = true;
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
img{
    width: 60%;
}
.scroll{
    height: 600px;
    overflow: auto;
}
</style>
