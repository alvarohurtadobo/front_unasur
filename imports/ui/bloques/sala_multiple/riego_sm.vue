<template>
    <div class="col-md-6">
        <div class="text-center subtitulo">
            <span class="text-center">Sistema de Riego</span>
        </div>
        <div class="col-md-12">
            <div ref="riego_norte_master" class="row bloque_opcion" v-on:click='riego_norte_master' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_riego_norte_master ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Riego Master A1: [A+D]
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_riego_norte_master ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
            <div class="col-md-12">
                <div ref="riego_norte_a_2" class="row bloque_opcion" v-on:click='riego_norte_a_2' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_riego_norte_a_2 ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Riego Norte A2: [B + A]
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_riego_norte_a_2 ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
            </div>
            <div class="col-md-12">
                <div ref="riego_norte_a_3" class="row bloque_opcion" v-on:click='riego_norte_a_3' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_riego_norte_a_3 ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Riego Norte A3: [C + A]
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_riego_norte_a_3 ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
            </div>
            <div class="col-md-12">
                <div ref="riego_norte_a_4" class="row bloque_opcion" v-on:click='riego_norte_a_4' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_riego_norte_a_4 ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Riego Norte A4: [A + F + A Sist. 1]
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_riego_norte_a_4 ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
            </div>
            <div class="col-md-12">
                <div ref="riego_norte_a_5" class="row bloque_opcion" v-on:click='riego_norte_a_5' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_riego_norte_a_5 ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Riego Norte A5: [ D]
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_riego_norte_a_5 ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
            </div>
            <div class="col-md-12">
                <div ref="riego_norte_a_6" class="row bloque_opcion" v-on:click='riego_norte_a_6' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_riego_norte_a_6 ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Riego Norte A6
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_riego_norte_a_6 ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                </div>
            </div>
            <div class="col-md-12">
                <div ref="riego_norte_a_7" class="row bloque_opcion" v-on:click='riego_norte_a_7' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_riego_norte_a_7 ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Riego Norte A7
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_riego_norte_a_7 ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                </div>
            </div>                        
    </div>
</template>

<script>
export default {
    props: {
        encendido_riego_norte_master: Boolean,
        encendido_riego_norte_a_2: Boolean,
        encendido_riego_norte_a_3: Boolean,
        encendido_riego_norte_a_4: Boolean,
        encendido_riego_norte_a_5: Boolean,
        encendido_riego_norte_a_6: Boolean,
        encendido_riego_norte_a_7: Boolean,
    },
    methods:{
        riego_norte_master(){
         const button = this.$refs.riego_norte_master;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['8/0/0', '8/0/3'];
            console.log('Sistema de riego Master');
            try {
                HTTP.call('POST', 'http://172.21.0.3:3001/api/knx/devices',
                    { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) }, timeout:3000 },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == 0) {
                                this.encendido_riego_norte_master = false;
                                button.dataset.estado = 1;
                            } else{
                                this.encendido_riego_norte_master = true;
                                button.dataset.estado = 0;
                            }
                        }
                });   
                
            } catch (error) {
                console.log('Error HTTP: '+error);
            }
        },
        riego_norte_a_2(){
         const button = this.$refs.riego_norte_a_2;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['8/0/1', '8/0/0'];
            console.log('Sistema de riego 2');
            HTTP.call('POST', 'http://172.21.0.3:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == 0) {
                            this.encendido_riego_norte_a_2 = false;
                            button.dataset.estado = 1;
                        } else{
                            this.encendido_riego_norte_a_2 = true;
                            button.dataset.estado = 0;
                        }
                    }
                });   
        },
        riego_norte_a_3(){
         const button = this.$refs.riego_norte_a_3;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['8/0/2', '8/0/0'];
            console.log('Sala de prensa');
            HTTP.call('POST', 'http://172.21.0.3:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == 0) {
                            this.encendido_riego_norte_a_3 = false;
                            button.dataset.estado = 1;
                        } else{
                            this.encendido_riego_norte_a_3 = true;
                            button.dataset.estado = 0;
                        }
                    }
                });   
        },
        riego_norte_a_4(){
         const button = this.$refs.riego_norte_a_4;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['8/0/0', '8/1/0', '8/1/5'];
            console.log('Sala de prensa');
            HTTP.call('POST', 'http://172.21.0.3:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == 0) {
                            this.encendido_riego_norte_a_4 = false;
                            button.dataset.estado = 1;
                        } else{
                            this.encendido_riego_norte_a_4 = true;
                            button.dataset.estado = 0;
                        }
                    }
                });   
        },
        riego_norte_a_5(){
         const button = this.$refs.riego_norte_a_5;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['8/1/3'];
            console.log('Sala de prensa');
            HTTP.call('POST', 'http://172.21.0.3:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == 0) {
                            this.encendido_riego_norte_a_5 = false;
                            button.dataset.estado = 1;
                            console.log("Cambio de estado 1");
                        } else{
                            this.encendido_riego_norte_a_5 = true;
                            button.dataset.estado = 0;
                            console.log("Cambio de estado 2");
                        }
                    }
                });   
        },
        riego_norte_a_6(){
         const button = this.$refs.riego_norte_a_6;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['8/1/4'];
            console.log('Sala de prensa');
            HTTP.call('POST', 'http://172.21.0.3:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == 0) {
                            this.encendido_riego_norte_a_6 = false;
                            button.dataset.estado = 1;
                            console.log("Cambio de estado Riego 6");
                        } else{
                            this.encendido_riego_norte_a_6 = true;
                            button.dataset.estado = 0;
                        }
                    }
                });   
        },
        riego_norte_a_7(){
         const button = this.$refs.riego_norte_a_7;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['8/1/1', '8/1/2', '8/1/4'];
            console.log('Sala de prensa');
            HTTP.call('POST', 'http://172.21.0.3:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == 0) {
                            this.encendido_riego_norte_a_7 = false;
                            button.dataset.estado = 1;
                        } else{
                            this.encendido_riego_norte_a_7 = true;
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
