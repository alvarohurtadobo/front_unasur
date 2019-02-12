<template>
    <div class="col-md-6">
        <div class="text-center subtitulo">
            <span class="text-center">Accesos Auditorio</span>
        </div>
        <div class="col-md-12">
            <div ref="au_puerta_disc_esc" class="row bloque_opcion" v-on:click='au_puerta_disc_esc' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_puerta_disc_esc ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Puerta Discapacitados
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_puerta_disc_esc ? '/images/layout/Iconos_peques/AccesoB.png': '/images/layout/Iconos_peques/AccesoA.png']" alt="">
                </div>
            </div>
            <div ref="au_puerta_2_izq" class="row bloque_opcion" v-on:click='au_puerta_2_izq' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_puerta_2_izq ? '/images/layout/Iconos_peques/AccesoB.png': '/images/layout/Iconos_peques/AccesoA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Puerta Izquierda
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_puerta_2_izq ? '/images/layout/Iconos_peques/AccesoB.png': '/images/layout/Iconos_peques/AccesoA.png']" alt="">
                </div>
            </div>
            <div ref="au_puerta_1_der" class="row bloque_opcion" v-on:click='au_puerta_1_der' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_puerta_1_der ? '/images/layout/Iconos_peques/AccesoB.png': '/images/layout/Iconos_peques/AccesoA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Puerta Derecha
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_puerta_1_der ? '/images/layout/Iconos_peques/AccesoB.png': '/images/layout/Iconos_peques/AccesoA.png']" alt="">
                </div>
            </div>
            <div ref="au_puerta_ofi_1" class="row bloque_opcion" v-on:click='au_puerta_ofi_1' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_puerta_ofi_1 ? '/images/layout/Iconos_peques/AccesoB.png': '/images/layout/Iconos_peques/AccesoA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Puerta Oficinas 1
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_puerta_ofi_1 ? '/images/layout/Iconos_peques/AccesoB.png': '/images/layout/Iconos_peques/AccesoA.png']" alt="">
                </div>
            </div>
            <div ref="au_puerta_ofi_2" class="row bloque_opcion" v-on:click='au_puerta_ofi_2' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_puerta_ofi_2 ? '/images/layout/Iconos_peques/AccesoB.png': '/images/layout/Iconos_peques/AccesoA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Puerta Oficinas 2
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_puerta_ofi_2 ? '/images/layout/Iconos_peques/AccesoB.png': '/images/layout/Iconos_peques/AccesoA.png']" alt="">
                </div>
            </div>
            <div ref="au_puerta_ofi_3" class="row bloque_opcion" v-on:click='au_puerta_ofi_3' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_puerta_ofi_3 ? '/images/layout/Iconos_peques/AccesoB.png': '/images/layout/Iconos_peques/AccesoA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Puerta Oficinas 3
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_puerta_ofi_3 ? '/images/layout/Iconos_peques/AccesoB.png': '/images/layout/Iconos_peques/AccesoA.png']" alt="">
                </div>
            </div>
            <div ref="au_puerta_ofi_escalera" class="row bloque_opcion" v-on:click='au_puerta_ofi_escalera' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_puerta_ofi_escalera ? '/images/layout/Iconos_peques/AccesoB.png': '/images/layout/Iconos_peques/AccesoA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Puerta Ofi. Gradas
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_au_puerta_ofi_escalera ? '/images/layout/Iconos_peques/AccesoB.png': '/images/layout/Iconos_peques/AccesoA.png']" alt="">
                </div>
            </div>
            <!-- <button ref="au_puerta_disc_esc" class="btn" v-bind:class="[encendido_au_puerta_disc_esc ? 'btn-warning' : 'btn-primary']" v-on:click='au_puerta_disc_esc' data-estado="1"><i class="fa fa-bolt"></i> Puerta Escaleras</button> -->
                    <!-- <button ref="au_puerta_2_izq" class="btn" v-bind:class="[encendido_au_puerta_2_izq ? 'btn-warning' : 'btn-primary']" v-on:click='au_puerta_2_izq' data-estado="1"><i class="fa fa-bolt"></i> Puerta Izquierda</button> -->
                    <!-- <button ref="au_puerta_1_der" class="btn" v-bind:class="[encendido_au_puerta_1_der ? 'btn-warning' : 'btn-primary']" v-on:click='au_puerta_1_der' data-estado="1"><i class="fa fa-bolt"></i> Puerta Derecha</button> -->
                    <!-- <button ref="au_puerta_ofi_1" class="btn" v-bind:class="[encendido_au_puerta_ofi_1 ? 'btn-warning' : 'btn-primary']" v-on:click='au_puerta_ofi_1' data-estado="1"><i class="fa fa-bolt"></i> Puerta Oficinas 1</button> -->
                    <!-- <button ref="au_puerta_ofi_2" class="btn" v-bind:class="[encendido_au_puerta_ofi_2 ? 'btn-warning' : 'btn-primary']" v-on:click='au_puerta_ofi_2' data-estado="1"><i class="fa fa-bolt"></i> Puerta Oficinas 2</button> -->
                    <!-- <button ref="au_puerta_ofi_3" class="btn" v-bind:class="[encendido_au_puerta_ofi_3 ? 'btn-warning' : 'btn-primary']" v-on:click='au_puerta_ofi_3' data-estado="1"><i class="fa fa-bolt"></i> Puerta Oficinas 3</button> -->
                    <!-- <button ref="au_puerta_ofi_escalera" class="btn" v-bind:class="[encendido_au_puerta_ofi_escalera ? 'btn-warning' : 'btn-primary']" v-on:click='au_puerta_ofi_escalera' data-estado="1"><i class="fa fa-bolt"></i> Puerta Ofi. Gradas</button> -->
        </div>
    </div>
</template>

<script>
export default {
    props:{
        encendido_au_puerta_disc_esc: Boolean,
        encendido_au_puerta_1_der: Boolean,
        encendido_au_puerta_2_izq: Boolean,
        encendido_au_puerta_ofi_1: Boolean,
        encendido_au_puerta_ofi_2: Boolean,
        encendido_au_puerta_ofi_3: Boolean,
        encendido_au_puerta_ofi_escalera: Boolean,
    },
    methods:{
        au_puerta_1_der() {
            let bloque_1 = new Array();
            bloque_1 = ['1/0/6'];
            const button = this.$refs.au_puerta_1_der
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://172.21.0.3:3001/api/knx/devices',
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
                let result = HTTP.call('POST', 'http://172.21.0.3:3001/api/knx/devices',
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
                let result = HTTP.call('POST', 'http://172.21.0.3:3001/api/knx/devices',
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
        au_puerta_ofi_1() {
            let bloque_1 = new Array();
            bloque_1 = ['2/0/8'];
            const button = this.$refs.au_puerta_ofi_1
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://172.21.0.3:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_puerta_ofi_1 = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_puerta_ofi_1 = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_puerta_ofi_2() {
            let bloque_1 = new Array();
            bloque_1 = ['2/0/9'];
            const button = this.$refs.au_puerta_ofi_2
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://172.21.0.3:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_puerta_ofi_2 = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_puerta_ofi_2 = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_puerta_ofi_3() {
            let bloque_1 = new Array();
            bloque_1 = ['2/0/10'];
            const button = this.$refs.au_puerta_ofi_3
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://172.21.0.3:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_puerta_ofi_3 = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_puerta_ofi_3 = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        au_puerta_ofi_escalera() {
            let bloque_1 = new Array();
            bloque_1 = ['2/0/11'];
            const button = this.$refs.au_puerta_ofi_escalera
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://172.21.0.3:3001/api/knx/devices',
                    { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_au_puerta_ofi_escalera = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_au_puerta_ofi_escalera = true;
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
