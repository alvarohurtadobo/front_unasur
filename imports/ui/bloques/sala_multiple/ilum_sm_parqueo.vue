<template>
    <div class="col-md-6">
        <div class="text-center subtitulo">
            <span class="text-center">Iluminacion Parqueo</span>
        </div>
        <div class="col-md-12">
            <div ref="s_hall_pk_norte" class="row bloque_opcion" v-on:click='s_hall_pk_norte' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pk_norte ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Luces Parqueo Norte
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pk_norte ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
            <div ref="s_hall_pk_sud" class="row bloque_opcion" v-on:click='s_hall_pk_sud' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pk_sud ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Luces Parqueo Sud
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pk_sud ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
            <div ref="s_hall_pk_ingreso" class="row bloque_opcion" v-on:click='s_hall_pk_ingreso' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pk_ingreso ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Luces ingreso Parqueo
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pk_ingreso ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        encendido_pk_sud: Boolean,
        encendido_pk_norte: Boolean,
        encendido_pk_ingreso: Boolean,
    },
    methods: {
        s_hall_pk_sud() {
            const button = this.$refs.s_hall_pk_sud;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['2/0/4'];
            console.log('Parqueo Sud');
            HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == 0) {
                            this.encendido_pk_sud = false;
                            button.dataset.estado = 1;
                        } else{
                            this.encendido_pk_sud = true;
                            button.dataset.estado = 0;
                        }
                    }
                });
        },
        //  Falta 2/0/0 - 2/0/1 - 2/0/2
        s_hall_pk_norte() {
            const button = this.$refs.s_hall_pk_norte;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['2/0/3'];
            console.log('Parqueo Norte');
            HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == 0) {
                            this.encendido_pk_norte = false;
                            button.dataset.estado = 1;
                        } else{
                            this.encendido_pk_norte = true;
                            button.dataset.estado = 0;
                        }
                    }
                });
        },
        s_hall_pk_ingreso() {
            const button = this.$refs.s_hall_pk_ingreso;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['2/0/0','2/0/1', '2/0/2'];
            console.log('Ingreso Parqueo');
            HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == 0) {
                            this.encendido_pk_ingreso = false;
                            button.dataset.estado = 1;
                        } else{
                            this.encendido_pk_ingreso = true;
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
