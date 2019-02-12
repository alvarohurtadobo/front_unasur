<template>
    <div class="col-md-6">
        <div class="text-center subtitulo">
            <span class="text-center">Aire acondicionado VIP</span>
        </div>
        <div class="col-md-12">
            <div ref="on_aire_s_reuniones_vip" class="row bloque_opcion" v-on:click='on_aire_s_reuniones_vip' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_on_aire_s_reuniones_vip ? '/images/layout/Clima.png': '/images/layout/Clima.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    ON Aire Sala de reuniones VIP
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_on_aire_s_reuniones_vip ? '/images/layout/Clima.png': '/images/layout/Clima.png']" alt="">
                </div>
            </div>
            <div ref="aire_s_cafeteria_vip" class="row bloque_opcion" v-on:click='aire_s_cafeteria_vip' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_aire_s_cafeteria_vip ? '/images/layout/Clima.png': '/images/layout/Clima.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Aire Sala Cafeteria VIP
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_aire_s_cafeteria_vip ? '/images/layout/Clima.png': '/images/layout/Clima.png']" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        encendido_on_aire_s_reuniones_vip: Boolean,
        encendido_aire_s_cafeteria_vip: Boolean,
    },
    methods:{
        on_aire_s_reuniones_vip() {
            // let bloque_1 = new Array();
            let bloque_1 = '8/0/49';
            const button = this.$refs.on_aire_s_reuniones_vip
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://app:3001/api/knx/devices/air',
                { data: { "ip": "192.168.4.214", "rgroup": bloque_1, "order": parseInt(valor)} },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == '0') {
                            this.encendido_on_aire_s_reuniones_vip = false;
                            // button.dataset.estado = '1';
                        } else{
                            this.encendido_on_aire_s_reuniones_vip = true;
                            // button.dataset.estado = '0';
                        }
                    } else{
                        console.log(error);
                    }
            });
        },
        aire_s_cafeteria_vip() {
            // let bloque_1 = new Array();
            let bloque_1 = '8/1/49';
            const button = this.$refs.aire_s_cafeteria_vip
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://app:3001/api/knx/devices/air',
                { data: { "ip": "192.168.4.214", "rgroup": bloque_1, "order": parseInt(valor)} },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == '0') {
                            this.encendido_aire_s_cafeteria_vip = false;
                            // button.dataset.estado = '1';
                        } else{
                            this.encendido_aire_s_cafeteria_vip = true;
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
