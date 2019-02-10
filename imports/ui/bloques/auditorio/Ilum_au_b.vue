<template>
    <div class="col-md-6">
        <div class="text-center subtitulo">
            <span class="text-center">Iluminación Auditorio Principal</span>
        </div>
        <div class="col-md-12">
            <div ref="au_ab_pasillo" class="row bloque_opcion" v-on:click='au_ab_pasillo' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_ab_pasillo ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Pasillo A/B
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_ab_pasillo ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div ref="au_b_butacas" class="row bloque_opcion" v-on:click='au_b_butacas' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_b_butacas ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Butacas Total
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_b_butacas ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div ref="au_b_butacas_tenue" class="row bloque_opcion" v-on:click='au_b_butacas_tenue' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_b_butacas_tenue ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Butacas Ténue
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_b_butacas_tenue ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div ref="au_b_butacas_ojos_gato" class="row bloque_opcion" v-on:click='au_b_butacas_ojos_gato' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_b_butacas_ojos_gato ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Butacas Ojos de gato
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_b_butacas_ojos_gato ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div ref="au_b_butacas_rombo" class="row bloque_opcion" v-on:click='au_b_butacas_rombo' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_b_butacas_rombo ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Butacas Rombo
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_b_butacas_rombo ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div ref="au_b_butacas_parcial" class="row bloque_opcion" v-on:click='au_b_butacas_parcial' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_b_butacas_parcial ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Butacas Parcial
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_b_butacas_parcial ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div ref="au_b_escenario_a" class="row bloque_opcion" v-on:click='au_b_escenario_a' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_b_escenario_a ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Escenario Aud. B modo 1
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_b_escenario_a ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div ref="au_b_escenario_b" class="row bloque_opcion" v-on:click='au_b_escenario_b' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_b_escenario_b ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Escenario Aud. B modo 2
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_b_escenario_b ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div ref="au_b_escenario_c" class="row bloque_opcion" v-on:click='au_b_escenario_c' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_b_escenario_c ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Escenario Aud. B modo 3
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_b_escenario_c ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
    </div>
    <!-- <button ref="au_ab_pasillo" class="btn" v-bind:class="[encendido_au_ab_pasillo ? 'btn-warning' : 'btn-primary']" v-on:click='au_ab_pasillo' data-estado="1"><i class="fa fa-bolt"></i> Pasillo A/B</button> -->
    <!-- <button ref="au_b_butacas" class="btn" v-bind:class="[encendido_au_b_butacas ? 'btn-warning' : 'btn-primary']" v-on:click='au_b_butacas' data-estado="1"><i class="fa fa-bolt"></i> Butacas Total </button> -->
    <!-- <button ref="au_b_butacas_tenue" class="btn" v-bind:class="[encendido_au_b_butacas_tenue ? 'btn-warning' : 'btn-primary']" v-on:click='au_b_butacas_tenue' data-estado="1"><i class="fa fa-bolt"></i> Butacas tenue</button> -->
    <!-- <button ref="au_b_butacas_ojos_gato" class="btn" v-bind:class="[encendido_au_b_butacas_ojos_gato ? 'btn-warning' : 'btn-primary']" v-on:click='au_b_butacas_ojos_gato' data-estado="1"><i class="fa fa-bolt"></i> Butacas Ojos de gato</button> -->
    <!-- <button ref="au_b_butacas_rombo" class="btn" v-bind:class="[encendido_au_b_butacas_rombo ? 'btn-warning' : 'btn-primary']" v-on:click='au_b_butacas_rombo' data-estado="1"><i class="fa fa-bolt"></i> Butacas Rombo</button> -->
    <!-- <button ref="au_b_butacas_parcial" class="btn" v-bind:class="[encendido_au_b_butacas_parcial ? 'btn-warning' : 'btn-primary']" v-on:click='au_b_butacas_parcial' data-estado="1"><i class="fa fa-bolt"></i> Butacas Parcial</button> -->
    <!-- <button ref="au_b_escenario_a" class="btn" v-bind:class="[encendido_au_b_escenario_a ? 'btn-warning' : 'btn-primary']" v-on:click='au_b_escenario_a' data-estado="1"><i class="fa fa-bolt"></i> Escenario Aud. B modo 1</button> -->
    <!-- <button ref="au_b_escenario_b" class="btn" v-bind:class="[encendido_au_b_escenario_b ? 'btn-warning' : 'btn-primary']" v-on:click='au_b_escenario_b' data-estado="1"><i class="fa fa-bolt"></i> Escenario Aud. B modo 2</button> -->
    <!-- <button ref="au_b_escenario_c" class="btn" v-bind:class="[encendido_au_b_escenario_c ? 'btn-warning' : 'btn-primary']" v-on:click='au_b_escenario_c' data-estado="1"><i class="fa fa-bolt"></i> Escenario Aud. B modo 3</button> -->
</template>

<script>
export default {
    props:{
        encendido_au_b_butacas: Boolean,
        encendido_au_b_escenario_a: Boolean,
        encendido_au_b_escenario_b: Boolean,
        encendido_au_b_escenario_c: Boolean,
        // encendido_au_prin_haz_luz: Boolean,
        encendido_au_ab_pasillo: Boolean,    
        encendido_au_b_butacas_ojos_gato: Boolean,
        encendido_au_b_butacas_tenue: Boolean,
        encendido_au_b_butacas_rombo: Boolean,
        encendido_au_b_butacas_parcial: Boolean,
    },
    methods:{
        au_ab_pasillo() {
            let bloque_1 = new Array();
            bloque_1 = ['5/0/5'];
            const button = this.$refs.au_ab_pasillo
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_ab_pasillo = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_ab_pasillo = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        


        au_b_butacas() {
            let bloque_1 = new Array();
            bloque_1 = ['5/0/2'];
            const button = this.$refs.au_b_butacas
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_b_butacas = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_b_butacas = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_b_butacas_tenue(){
            let bloque_1 = new Array();
            bloque_1 = ['0/1/4'];
            const button = this.$refs.au_b_butacas_tenue
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_b_butacas_tenue = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_b_butacas_tenue = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_b_butacas_ojos_gato(){
            let bloque_1 = new Array();
            bloque_1 = ['0/1/6'];
            const button = this.$refs.au_b_butacas_ojos_gato
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_b_butacas_ojos_gato = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_b_butacas_ojos_gato = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_b_butacas_parcial(){
            let bloque_1 = new Array();
            bloque_1 = ['0/1/5'];
            const button = this.$refs.au_b_butacas_parcial
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_b_butacas_parcial = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_b_butacas_parcial = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_b_butacas_rombo(){
            let bloque_1 = new Array();
            bloque_1 = ['0/1/12'];
            const button = this.$refs.au_b_butacas_rombo
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_b_butacas_rombo = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_b_butacas_rombo = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_b_escenario_a() {
            let bloque_1 = new Array();
            bloque_1 = ['0/0/1'];
            const button = this.$refs.au_b_escenario_a
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_b_escenario_a = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_b_escenario_a = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_b_escenario_b() {
            let bloque_1 = new Array();
            bloque_1 = ['0/0/2'];
            const button = this.$refs.au_b_escenario_b
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_b_escenario_b = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_b_escenario_b = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_b_escenario_c() {
            let bloque_1 = new Array();
            bloque_1 = ['0/0/3'];
            const button = this.$refs.au_b_escenario_c
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_b_escenario_c = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_b_escenario_c = true;
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
