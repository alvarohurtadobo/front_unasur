<template>
    <div id="blq_s_pc" class="bloques">
        <div class="titulo">
            <h2 class="encendido">Iluminación Auditorio</h2>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div>
                    <button ref="au_ing" class="btn" v-bind:class="[encendido_au_ing ? 'btn-warning' : 'btn-primary']" v-on:click='au_ing' data-estado="0"><i class="fa fa-bolt"></i> Ingreso</button>
                    <button ref="au_rampa_sud" class="btn" v-bind:class="[encendido_au_rampa_sud ? 'btn-warning' : 'btn-primary']" v-on:click='au_rampa_sud' data-estado="0"><i class="fa fa-bolt"></i> Ilum. Rampa Sud</button>
                    <button ref="au_p4" class="btn" v-bind:class="[encendido_au_p4 ? 'btn-warning' : 'btn-primary']" v-on:click='au_p4' data-estado="0"><i class="fa fa-bolt"></i> Iluminación P4</button>
                    <button ref="au_p1" class="btn" v-bind:class="[encendido_au_p1 ? 'btn-warning' : 'btn-primary']" v-on:click='au_p1' data-estado="0"><i class="fa fa-bolt"></i> Iluminación P1</button>
                    <button ref="au_pas_norte" class="btn" v-bind:class="[encendido_au_pas_norte ? 'btn-warning' : 'btn-primary']" v-on:click='au_pas_norte' data-estado="0"><i class="fa fa-bolt"></i> Pasillo Norte</button>
                    <button ref="au_clispas_ramp_sud" class="btn" v-bind:class="[encendido_au_clispas_ramp_sud ? 'btn-warning' : 'btn-primary']" v-on:click='au_clispas_ramp_sud' data-estado="0"><i class="fa fa-bolt"></i> Chispas Rampa Sud</button>
                    <button ref="au_pasillo_gradas" class="btn" v-bind:class="[encendido_au_pasillo_gradas ? 'btn-warning' : 'btn-primary']" v-on:click='au_pasillo_gradas' data-estado="0"><i class="fa fa-bolt"></i> Pasillo gradas</button>
                    <button ref="au_cafeteria" class="btn" v-bind:class="[encendido_au_cafeteria ? 'btn-warning' : 'btn-primary']" v-on:click='au_cafeteria' data-estado="0"><i class="fa fa-bolt"></i> Cafetería</button>
                </div>
            </div>
            <div class="col-md-12">
                <div class="titulo">
                    <h2 class="encendido">Accesos Auditorio</h2>
                </div>
                <div>
                    <button ref="au_puerta_disc_esc" class="btn" v-bind:class="[encendido_au_puerta_disc_esc ? 'btn-warning' : 'btn-primary']" v-on:click='au_puerta_disc_esc' data-estado="0"><i class="fa fa-bolt"></i> Puerta Escaleras</button>
                    <button ref="au_puerta_2_izq" class="btn" v-bind:class="[encendido_au_puerta_2_izq ? 'btn-warning' : 'btn-primary']" v-on:click='au_puerta_2_izq' data-estado="0"><i class="fa fa-bolt"></i> Puerta Izquierda</button>
                    <button ref="au_puerta_1_der" class="btn" v-bind:class="[encendido_au_puerta_1_der ? 'btn-warning' : 'btn-primary']" v-on:click='au_puerta_1_der' data-estado="0"><i class="fa fa-bolt"></i> Puerta Derecha</button>
                </div>
            </div>
            <div class="col-md-12">
                <div class="titulo">
                    <h2 class="encendido">Auditorio Principal</h2>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <button ref="au_pas_prin" class="btn" v-bind:class="[encendido_au_pas_prin ? 'btn-warning' : 'btn-primary']" v-on:click='au_pas_prin' data-estado="0"><i class="fa fa-bolt"></i> Pasillo Principal</button>
                        <button ref="au_prin_haz_luz" class="btn" v-bind:class="[encendido_au_prin_haz_luz ? 'btn-warning' : 'btn-primary']" v-on:click='au_prin_haz_luz' data-estado="0"><i class="fa fa-bolt"></i> Haz de luz</button>
                        <button ref="au_prin_blq_norte" class="btn" v-bind:class="[encendido_au_prin_blq_norte ? 'btn-warning' : 'btn-primary']" v-on:click='au_prin_blq_norte' data-estado="0"><i class="fa fa-bolt"></i> Bloque Norte</button>
                        <button ref="au_prin_blq_sud" class="btn" v-bind:class="[encendido_au_prin_blq_sud ? 'btn-warning' : 'btn-primary']" v-on:click='au_prin_blq_sud' data-estado="0"><i class="fa fa-bolt"></i> Bloque Sud</button>
                        <button ref="au_prin_blq_central" class="btn" v-bind:class="[encendido_au_prin_blq_central ? 'btn-warning' : 'btn-primary']" v-on:click='au_prin_blq_central' data-estado="0"><i class="fa fa-bolt"></i> Bloque central</button>
                        <button ref="au_prin_blq_posterior" class="btn" v-bind:class="[encendido_au_prin_blq_posterior ? 'btn-warning' : 'btn-primary']" v-on:click='au_prin_blq_posterior' data-estado="0"><i class="fa fa-bolt"></i> Bloque Posterior</button>
                        <button ref="au_prin_escenario" class="btn" v-bind:class="[encendido_au_prin_escenario ? 'btn-warning' : 'btn-primary']" v-on:click='au_prin_escenario' data-estado="0"><i class="fa fa-bolt"></i> Escenario</button>
                    </div>
                    <div class="col-md-6">
                        <button ref="au_prin_mezanine" class="btn" v-bind:class="[encendido_au_prin_mezanine ? 'btn-warning' : 'btn-primary']" v-on:click='au_prin_mezanine' data-estado="0"><i class="fa fa-bolt"></i> Mezanine</button>
                        <button ref="au_prin_pas_traduc" class="btn" v-bind:class="[encendido_au_prin_pas_traduc ? 'btn-warning' : 'btn-primary']" v-on:click='au_prin_pas_traduc' data-estado="0"><i class="fa fa-bolt"></i> Pasillo Traducción</button>
                        <button ref="au_prin_ofi_traduc" class="btn" v-bind:class="[encendido_au_prin_ofi_traduc ? 'btn-warning' : 'btn-primary']" v-on:click='au_prin_ofi_traduc' data-estado="0"><i class="fa fa-bolt"></i> Oficina Traducción</button>
                        <button ref="au_prin_laterales" class="btn" v-bind:class="[encendido_au_prin_laterales ? 'btn-warning' : 'btn-primary']" v-on:click='au_prin_laterales' data-estado="0"><i class="fa fa-bolt"></i> Luces Laterales</button>
                    </div>

                </div>
            </div>
            <div class="col-md-5">
                <div class="titulo">
                    <h2 class="encendido">Auditorio A</h2>
                </div>
                <div>
                    <button ref="au_a_butacas" class="btn" v-bind:class="[encendido_au_a_butacas ? 'btn-warning' : 'btn-primary']" v-on:click='au_a_butacas' data-estado="0"><i class="fa fa-bolt"></i> Butacas Aud. A</button>
                    <button ref="au_a_escenario" class="btn" v-bind:class="[encendido_au_a_escenario ? 'btn-warning' : 'btn-primary']" v-on:click='au_a_escenario' data-estado="0"><i class="fa fa-bolt"></i> Escenario Aud. A</button>
                </div>
            </div>
            <div class="col-md-2">
                <div class="titulo">
                    <h2 class="encendido">&nbsp; </h2>
                </div>
                <div>
                    <button ref="au_ab_pasillo" class="btn" v-bind:class="[encendido_au_ab_pasillo ? 'btn-warning' : 'btn-primary']" v-on:click='au_ab_pasillo' data-estado="0"><i class="fa fa-bolt"></i> Pasillo A/B</button>
                </div>
            </div>
            <div class="col-md-5">
                <div class="titulo">
                    <h2 class="encendido">Auditorio B</h2>
                </div>
                <div>
                    <button ref="au_b_butacas" class="btn" v-bind:class="[encendido_au_b_butacas ? 'btn-warning' : 'btn-primary']" v-on:click='au_b_butacas' data-estado="0"><i class="fa fa-bolt"></i> Butacas Aud. B</button>
                    <button ref="au_b_escenario" class="btn" v-bind:class="[encendido_au_b_escenario ? 'btn-warning' : 'btn-primary']" v-on:click='au_b_escenario' data-estado="0"><i class="fa fa-bolt"></i> Escenario Aud. B</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
            encendido_au_ing: Boolean,
            encendido_au_rampa_sud: Boolean,
            encendido_au_p4: Boolean,
            encendido_au_p1: Boolean,
            encendido_au_pas_prin: Boolean,
            encendido_au_pas_norte: Boolean,
            encendido_au_clispas_ramp_sud: Boolean,
            encendido_au_puerta_disc_esc: Boolean,
            encendido_au_puerta_1_der: Boolean,
            encendido_au_puerta_2_izq: Boolean,
            encendido_au_prin_blq_norte: Boolean,
            encendido_au_prin_blq_sud: Boolean,
            encendido_au_prin_blq_central: Boolean,
            encendido_au_prin_escenario: Boolean,
            encendido_au_prin_blq_posterior: Boolean,
            encendido_au_prin_mezanine: Boolean,
            encendido_au_a_butacas: Boolean,
            encendido_au_a_escenario: Boolean,
            encendido_au_b_butacas: Boolean,
            encendido_au_b_escenario: Boolean,
            encendido_au_prin_haz_luz: Boolean,
            encendido_au_ab_pasillo: Boolean,
            encendido_au_prin_pas_traduc: Boolean,
            encendido_au_prin_ofi_traduc: Boolean,
            encendido_au_pasillo_gradas: Boolean,
            encendido_au_cafeteria: Boolean,
            encendido_au_prin_laterales: Boolean,
    },
    methods: {  
        au_ing() {
            let bloque_1 = new Array();
            bloque_1 = ['5/0/6'];
            const button = this.$refs.au_ing
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
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
            if (valor == '0') {
                this.encendido_au_rampa_sud = false;
                
            } else{
                this.encendido_au_rampa_sud = true;
                
            }
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
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
            
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
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
        au_p4() {
            let bloque_1 = new Array();
            bloque_1 = ["5/5/3"];
            const button = this.$refs.au_p4
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            if (valor == '0') {
                this.encendido_au_p4 = false;
                
            } else{
                this.encendido_au_p4 = true;
                
            }
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
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
        au_p1() {
            let bloque_1 = new Array();
            bloque_1 = ["5/2/0"];
            const button = this.$refs.au_p1
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            if (valor == '0') {
                this.encendido_au_p1 = false;
                
            } else{
                this.encendido_au_p1 = true;
                
            }
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
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
        au_pas_prin() {
            let bloque_1 = new Array();
            bloque_1 = ['5/3/2','5/3/12'];
            const button = this.$refs.au_pas_prin
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            if (valor == '0') {
                this.encendido_au_pas_prin = false;
                
            } else{
                this.encendido_au_pas_prin = true;
                
            }
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
        au_pas_norte() {
            let bloque_1 = new Array();
            bloque_1 = ['5/1/3'];
            const button = this.$refs.au_pas_norte
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_pas_norte = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_pas_norte = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_puerta_1_der() {
            let bloque_1 = new Array();
            bloque_1 = ['1/0/6'];
            const button = this.$refs.au_puerta_1_der
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_puerta_1_der = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_puerta_1_der = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_puerta_2_izq() {
            let bloque_1 = new Array();
            bloque_1 = ['1/0/5'];
            const button = this.$refs.au_puerta_2_izq
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_puerta_2_izq = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_puerta_2_izq = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_puerta_disc_esc() {
            let bloque_1 = new Array();
            bloque_1 = ['1/0/4'];
            const button = this.$refs.au_puerta_disc_esc
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_puerta_disc_esc = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_puerta_disc_esc = true;
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
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
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
        au_a_butacas() {
            let bloque_1 = new Array();
            bloque_1 = ['5/0/0'];
            const button = this.$refs.au_a_butacas
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_a_butacas = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_a_butacas = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_a_escenario() {
            let bloque_1 = new Array();
            bloque_1 = ['5/0/1'];
            const button = this.$refs.au_a_escenario
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_a_escenario = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_a_escenario = true;
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
        au_b_escenario() {
            let bloque_1 = new Array();
            bloque_1 = ['5/0/3'];
            const button = this.$refs.au_b_escenario
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_b_escenario = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_b_escenario = true;
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
            bloque_1 = ['0/1/0'];
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
        au_cafeteria() {
            let bloque_1 = new Array();
            bloque_1 = ['5/1/0'];
            const button = this.$refs.au_cafeteria
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
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
        au_prin_laterales() {
            let bloque_1 = new Array();
            bloque_1 = ['5/0/4'];
            const button = this.$refs.au_prin_laterales
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
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
  },
}
</script>

<style scoped>
.colorBtn{
    color: gold;
}
a{
    text-decoration: none;
}
a hover{
    color: rgb(116, 113, 110);
    background-color: aliceblue;
}
.encendido{
    color: #ffc107;
}
.titulo{
    background-color: rgba(54, 70, 136, 0.6);
}
</style>
