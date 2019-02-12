<template>
    <div class="col-md-6">
        <div class="text-center subtitulo">
            <span class="text-center">Aire acondicionado Auditorio</span>
        </div>
        <div class="col-md-12">
            <div ref="aire_au_prin" class="row bloque_opcion" v-on:click='aire_au_prin' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_aire_au_prin ? '/images/layout/Clima.png': '/images/layout/Clima.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Aire Auditorio Principal
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_aire_au_prin ? '/images/layout/Clima.png': '/images/layout/Clima.png']" alt="">
                </div>
            </div>
            <div ref="aire_au_a" class="row bloque_opcion" v-on:click='aire_au_a' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_aire_au_a ? '/images/layout/Clima.png': '/images/layout/Clima.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Aire Auditorio A
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_aire_au_a ? '/images/layout/Clima.png': '/images/layout/Clima.png']" alt="">
                </div>
            </div>
            <div ref="aire_au_b" class="row bloque_opcion" v-on:click='aire_au_b' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_aire_au_b ? '/images/layout/Clima.png': '/images/layout/Clima.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Aire Auditorio B
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_aire_au_b ? '/images/layout/Clima.png': '/images/layout/Clima.png']" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        encendido_aire_au_prin: Boolean,
        encendido_aire_au_a: Boolean,
        encendido_aire_au_b: Boolean,
    },
    methods:{
        aire_au_prin() {
            let bloque_1 = new Array();
            bloque_1 = ['8/0/49'];
            const button = this.$refs.aire_au_prin
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices/air',
                { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == '0') {
                            this.encendido_aire_au_prin = false;
                            // button.dataset.estado = '1';
                        } else{
                            this.encendido_aire_au_prin = true;
                            // button.dataset.estado = '0';
                        }
                    } else{
                        console.log(error);
                    }
            });
        },
        aire_au_a() {
            let bloque_1 = new Array();
            bloque_1 = ['8/1/49'];
            const button = this.$refs.aire_au_a
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices/air',
                { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == '0') {
                            this.encendido_aire_au_a = false;
                            // button.dataset.estado = '1';
                        } else{
                            this.encendido_aire_au_a = true;
                            // button.dataset.estado = '0';
                        }
                    } else{
                        console.log(error);
                    }
            });
        },
        aire_au_b() {
            let bloque_1 = new Array();
            bloque_1 = ['8/2/49'];
            const button = this.$refs.aire_au_b
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices/air',
                { data: { "ip": "192.168.6.254", "group": bloque_1, "order": parseInt(valor)} },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == '0') {
                            this.encendido_aire_au_b = false;
                            // button.dataset.estado = '1';
                        } else{
                            this.encendido_aire_au_b = true;
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
