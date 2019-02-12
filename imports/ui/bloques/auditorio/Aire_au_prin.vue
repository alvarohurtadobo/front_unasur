<template>
    <div class="col-md-6">
        <div class="text-center subtitulo">
            <span class="text-center">Aire acondicionado Auditorio</span>
        </div>
        <div class="col-md-12">
            <div ref="aire_on_au_prin" class="row bloque_opcion" v-on:click='aire_on_au_prin' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_aire_on_au_prin ? '/images/layout/Clima.png': '/images/layout/Clima.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Aire ON Auditorio Principal
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_aire_on_au_prin ? '/images/layout/Clima.png': '/images/layout/Clima.png']" alt="">
                </div>
            </div>
            <div ref="aire_off_au_prin" class="row bloque_opcion" v-on:click='aire_off_au_prin' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_aire_off_au_prin ? '/images/layout/Clima.png': '/images/layout/Clima.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Aire OFF Auditorio Principal
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_aire_off_au_prin ? '/images/layout/Clima.png': '/images/layout/Clima.png']" alt="">
                </div>
            </div>
            <div ref="on_aire_au_a" class="row bloque_opcion" v-on:click='on_aire_au_a' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_on_aire_au_a ? '/images/layout/Clima.png': '/images/layout/Clima.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Aire ON Auditorio A
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_on_aire_au_a ? '/images/layout/Clima.png': '/images/layout/Clima.png']" alt="">
                </div>
            </div>
            <div ref="off_aire_au_a" class="row bloque_opcion" v-on:click='off_aire_au_a' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_off_aire_au_a ? '/images/layout/Clima.png': '/images/layout/Clima.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Aire OFF Auditorio A
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_off_aire_au_a ? '/images/layout/Clima.png': '/images/layout/Clima.png']" alt="">
                </div>
            </div>
            <div ref="on_aire_au_b" class="row bloque_opcion" v-on:click='on_aire_au_b' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_on_aire_au_b ? '/images/layout/Clima.png': '/images/layout/Clima.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Aire ON Auditorio B
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_on_aire_au_b ? '/images/layout/Clima.png': '/images/layout/Clima.png']" alt="">
                </div>
            </div>
            <div ref="off_aire_au_b" class="row bloque_opcion" v-on:click='off_aire_au_b' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_off_aire_au_b ? '/images/layout/Clima.png': '/images/layout/Clima.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Aire OFF Auditorio B
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_off_aire_au_b ? '/images/layout/Clima.png': '/images/layout/Clima.png']" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        encendido_aire_on_au_prin: Boolean,
        encendido_aire_off_au_prin: Boolean,
        encendido_on_aire_au_a: Boolean,
        encendido_off_aire_au_a: Boolean,
        encendido_on_aire_au_b: Boolean,
        encendido_off_aire_au_b: Boolean,
    },
    methods:{
        aire_on_au_prin() {
            // let bloque_1 = new Array();
            let bloque_1 = '8/0/0';
            const button = this.$refs.aire_on_au_prin
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://app:3001/api/knx/devices/air',
                { data: { "ip": "192.168.6.254", "rgroup": bloque_1, "order": parseInt(valor)} },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == '0') {
                            this.encendido_aire_on_au_prin = false;
                            // button.dataset.estado = '1';
                        } else{
                            this.encendido_aire_on_au_prin = true;
                            // button.dataset.estado = '0';
                        }
                    } else{
                        console.log(error);
                    }
            });
        },
        aire_off_au_prin() {
            // let bloque_1 = new Array();
            let bloque_1 = '8/0/49';
            const button = this.$refs.aire_off_au_prin
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://app:3001/api/knx/devices/air',
                { data: { "ip": "192.168.6.254", "rgroup": bloque_1, "order": parseInt(valor)} },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == '0') {
                            this.encendido_aire_off_au_prin = false;
                            // button.dataset.estado = '1';
                        } else{
                            this.encendido_aire_off_au_prin = true;
                            // button.dataset.estado = '0';
                        }
                    } else{
                        console.log(error);
                    }
            });
        },
        on_aire_au_a() {
            // let bloque_1 = new Array();
            let bloque_1 = '8/1/0';
            const button = this.$refs.on_aire_au_a
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://app:3001/api/knx/devices/air',
                { data: { "ip": "192.168.6.254", "rgroup": bloque_1, "order": parseInt(valor)} },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == '0') {
                            this.encendido_on_aire_au_a = false;
                            // button.dataset.estado = '1';
                        } else{
                            this.encendido_on_aire_au_a = true;
                            // button.dataset.estado = '0';
                        }
                    } else{
                        console.log(error);
                    }
            });
        },
        off_aire_au_a() {
            // let bloque_1 = new Array();
            let bloque_1 = '8/1/49';
            const button = this.$refs.off_aire_au_a
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://app:3001/api/knx/devices/air',
                { data: { "ip": "192.168.6.254", "rgroup": bloque_1, "order": parseInt(valor)} },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == '0') {
                            this.encendido_off_aire_au_a = false;
                            // button.dataset.estado = '1';
                        } else{
                            this.encendido_off_aire_au_a = true;
                            // button.dataset.estado = '0';
                        }
                    } else{
                        console.log(error);
                    }
            });
        },
        on_aire_au_b() {
            // let bloque_1 = new Array();
            let bloque_1 = '8/2/0';
            const button = this.$refs.on_aire_au_b
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://app:3001/api/knx/devices/air',
                { data: { "ip": "192.168.6.254", "rgroup": bloque_1, "order": parseInt(valor)} },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == '0') {
                            this.encendido_on_aire_au_b = false;
                            // button.dataset.estado = '1';
                        } else{
                            this.encendido_on_aire_au_b = true;
                            // button.dataset.estado = '0';
                        }
                    } else{
                        console.log(error);
                    }
            });
        },
        off_aire_au_b() {
            // let bloque_1 = new Array();
            let bloque_1 = '8/2/49';
            const button = this.$refs.off_aire_au_b
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://app:3001/api/knx/devices/air',
                { data: { "ip": "192.168.6.254", "rgroup": bloque_1, "order": parseInt(valor)} },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == '0') {
                            this.encendido_off_aire_au_b = false;
                            // button.dataset.estado = '1';
                        } else{
                            this.encendido_off_aire_au_b = true;
                            // button.dataset.estado = '0';
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
