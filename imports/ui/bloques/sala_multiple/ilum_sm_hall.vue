<template>
    <div class="col-md-6">
        <div class="text-center subtitulo">
            <span class="text-center">Hall Recibidor</span>
        </div>
        <div class="col-md-12">
            <div ref="s_hall_puertas" class="row bloque_opcion" v-on:click='s_hall_puertas' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_sm_hall_puertas ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Luces Puertas
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_sm_hall_puertas ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
            </div>
            <div ref="s_hall_led" class="row bloque_opcion" v-on:click='s_hall_led' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_sm_hall_led ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Luz Led
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_sm_hall_led ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
            </div>
            <div ref="s_hall_ing" class="row bloque_opcion" v-on:click='s_hall_ing' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_sm_hall_ing ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Hall recibidor Sala Multi.
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_sm_hall_ing ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
            </div>
            <div ref="s_hall_scr" class="row bloque_opcion" v-on:click='s_hall_scr' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_s_hall_scr ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Sala Control Recib
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_s_hall_scr ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
            </div>
            <div ref="s_hall_reci_norte" class="row bloque_opcion" v-on:click='s_hall_reci_norte' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_sm_hall_reci_norte ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Recibidor Norte
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_sm_hall_reci_norte ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
            </div>
            <div ref="s_hall_reci_sud" class="row bloque_opcion" v-on:click='s_hall_reci_sud' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_sm_hall_reci_sud ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Recibidor Sud
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_sm_hall_reci_sud ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
            </div>
            <div ref="s_hall_sp" class="row bloque_opcion" v-on:click='s_hall_sp' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_sm_hall_sp ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Sala de Prensa
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_sm_hall_sp ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
            </div>
            <div ref="s_hall_ofp" class="row bloque_opcion" v-on:click='s_hall_ofp' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_s_hall_ofp ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Oficina Prensa
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_s_hall_ofp ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
            </div>
            <!-- <button ref="s_hall_puertas" class="btn" v-bind:class="[ encendido_sm_hall_puertas ? 'btn-warning' : 'btn-primary' ]" v-on:click='s_hall_puertas' data-estado="1">Luces Puertas</button> -->
            <!-- <button ref="s_hall_led" class="btn" v-bind:class="[ encendido_sm_hall_led ? 'btn-warning' : 'btn-primary' ]" v-on:click='s_hall_led' data-estado="1">Luces Led</button> -->
            <!-- <button ref="s_hall_ing" class="btn" v-bind:class="[ encendido_sm_hall_ing ? 'btn-warning' : 'btn-primary' ]" v-on:click='s_hall_ing' data-estado="1">Ingreso Sala Multi.</button> -->
            <!-- <button ref="s_hall_scr" class="btn" v-bind:class="[ encendido_s_hall_scr ? 'btn-warning' : 'btn-primary' ]" v-on:click='s_hall_scr' data-estado="1">Sala Control Recib</button> -->
            <!-- <button ref="s_hall_reci_norte" class="btn" v-bind:class="[ encendido_sm_hall_reci_norte ? 'btn-warning' : 'btn-primary' ]" v-on:click='s_hall_reci_norte' data-estado="1">Recibidor Norte</button> -->
            <!-- <button ref="s_hall_reci_sud" class="btn" v-bind:class="[ encendido_sm_hall_reci_sud ? 'btn-warning' : 'btn-primary' ]" v-on:click='s_hall_reci_sud' data-estado="1">Recibidor Sud</button> -->
            <!-- <button ref="s_hall_sp" class="btn" v-bind:class="[ encendido_sm_hall_sp ? 'btn-warning' : 'btn-primary' ]" v-on:click='s_hall_sp' data-estado="1">Sala de Prensa</button> -->
            <!-- <button ref="s_hall_ofp" class="btn" v-bind:class="[ encendido_s_hall_ofp ? 'btn-warning' : 'btn-primary' ]" v-on:click='s_hall_ofp' data-estado="1">Oficina Prensa</button> -->
        </div>
    </div>
</template>

<script>
export default {
    props:{
        encendido_sm_hall_ing: Boolean,
        encendido_sm_hall_puertas: Boolean,
        encendido_sm_hall_led: Boolean,
        encendido_sm_hall_reci_norte: Boolean,
        encendido_sm_hall_reci_sud: Boolean,
        encendido_sm_hall_sp: Boolean,
        encendido_s_hall_scr: Boolean,
        encendido_s_hall_ofp: Boolean,
    },
    methods: {
        s_hall_puertas() {
            const button = this.$refs.s_hall_puertas;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['0/2/5'];
            console.log('Sala Multiple');
            HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == '0') {
                            this.encendido_sm_hall_puertas = false;
                            button.dataset.estado = '1';
                        } else{
                            this.encendido_sm_hall_puertas = true;
                            button.dataset.estado = '0';
                        }
                    }
                });
        },
        s_hall_led() {
            const button = this.$refs.s_hall_led;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['0/0/1'];
            console.log('Sala Multiple');
            HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == '0') {
                            this.encendido_sm_hall_led = false;
                            button.dataset.estado = '1';
                        } else{
                            this.encendido_sm_hall_led = true;
                            button.dataset.estado = '0';
                        }
                    }
                });
        },
        s_hall_ing() {
            const button = this.$refs.s_hall_ing;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['0/0/3', '0/2/4'];
            console.log('Sala Multiple');
            HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == '0') {
                            this.encendido_sm_hall_ing = false;
                            button.dataset.estado = '1';
                        } else{
                            this.encendido_sm_hall_ing = true;
                            button.dataset.estado = '0';
                        }
                    }
                });
        },
        s_hall_reci_norte() {
            const button = this.$refs.s_hall_reci_norte;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['0/0/3'];
            console.log('Sala Multiple');
            HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == '0') {
                            this.encendido_sm_hall_reci_norte = false;
                            button.dataset.estado = '1';
                        } else{
                            this.encendido_sm_hall_reci_norte = true;
                            button.dataset.estado = '0';
                        }
                    }
                });
        },
        s_hall_reci_sud(){
            const button = this.$refs.s_hall_reci_sud;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['0/2/4'];
            console.log('Hall Recibidor Izquierdo');
            HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == '0') {
                            this.encendido_sm_hall_reci_sud = false;
                            button.dataset.estado = '1';
                        } else{
                            this.encendido_sm_hall_reci_sud = true;
                            button.dataset.estado = '0';
                        }
                    } else{
                        console.log(error);
                    }
                });
        },
        
        s_hall_sp() {
            const button = this.$refs.s_hall_sp;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['1/3/11','1/3/10'];
            console.log('Hall Sala de prensa');
            HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == '0') {
                            this.encendido_sm_hall_sp = false;
                            button.dataset.estado = '1';
                        } else{
                            this.encendido_sm_hall_sp = true;
                            button.dataset.estado = '0';
                        }
                    }
                });
        },
        
        s_hall_scr() {
            const button = this.$refs.s_hall_scr;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['0/0/9'];
            console.log('Sala de control recibidor');
            HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == 0) {
                            this.encendido_s_hall_scr = false;
                            button.dataset.estado = 1;
                        } else{
                            this.encendido_s_hall_scr = true;
                            button.dataset.estado = 0;
                        }
                    }
                });
        },
        s_hall_ofp(){
            const button = this.$refs.s_hall_ofp;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['1/3/8'];
            console.log('Sala de prensa');
            HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == 0) {
                            this.encendido_s_hall_ofp = false;
                            button.dataset.estado = 1;
                        } else{
                            this.encendido_s_hall_ofp = true;
                            button.dataset.estado = 0;
                        }
                    }
                });
        },
    }

}
</script>

<style>

</style>
