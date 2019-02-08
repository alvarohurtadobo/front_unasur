<template>
    <div class="col-md-6">
        <div class="text-center subtitulo">
            <span class="text-center">Accesos Plaza de comidas</span>
        </div>
        <div class="col-md-12">
            <div ref="pc_puerta_de_izq" class="row bloque_opcion" v-on:click='pc_puerta_de_izq' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_puerta_de_izq ? '/images/layout/Iconos_peques/AccesoA.png': '/images/layout/Iconos_peques/AccesoB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Puerta delantera Izq.
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_puerta_de_izq ? '/images/layout/Iconos_peques/AccesoA.png': '/images/layout/Iconos_peques/AccesoB.png']" alt="">
                </div>
            </div>
            <div ref="pc_puerta_de_der" class="row bloque_opcion" v-on:click='pc_puerta_de_der' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_puerta_de_der ? '/images/layout/Iconos_peques/AccesoA.png': '/images/layout/Iconos_peques/AccesoB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Puerta delantera Der.
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_puerta_de_der ? '/images/layout/Iconos_peques/AccesoA.png': '/images/layout/Iconos_peques/AccesoB.png']" alt="">
                </div>
            </div>
            <div ref="pc_puerta_tra_izq" class="row bloque_opcion" v-on:click='pc_puerta_tra_izq' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_puerta_tra_izq ? '/images/layout/Iconos_peques/AccesoA.png': '/images/layout/Iconos_peques/AccesoB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Puerta tracera Izq.
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_puerta_tra_izq ? '/images/layout/Iconos_peques/AccesoA.png': '/images/layout/Iconos_peques/AccesoB.png']" alt="">
                </div>
            </div>
            <div ref="pc_puerta_tra_der" class="row bloque_opcion" v-on:click='pc_puerta_tra_der' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_puerta_tra_der ? '/images/layout/Iconos_peques/AccesoA.png': '/images/layout/Iconos_peques/AccesoB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Puerta tracera Der.
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_puerta_tra_der ? '/images/layout/Iconos_peques/AccesoA.png': '/images/layout/Iconos_peques/AccesoB.png']" alt="">
                </div>
            </div>
                <!-- <button ref="pc_puerta_de_izq" class="btn" v-bind:class="[encendido_pc_puerta_de_izq ? 'btn-warning' : 'btn-primary']" v-on:click='pc_puerta_de_izq' data-estado="1"><i class="fa fa-bolt"></i> Puerta delantera Izq.</button> -->
                <!-- <button ref="pc_puerta_de_der" class="btn" v-bind:class="[encendido_pc_puerta_de_der ? 'btn-warning' : 'btn-primary']" v-on:click='pc_puerta_de_der' data-estado="1"><i class="fa fa-bolt"></i> Puerta delantera Der.</button> -->
                <!-- <button ref="pc_puerta_tra_izq" class="btn" v-bind:class="[encendido_pc_puerta_tra_izq ? 'btn-warning' : 'btn-primary']" v-on:click='pc_puerta_tra_izq' data-estado="1"><i class="fa fa-bolt"></i> Puerta tracera Izq.</button> -->
                <!-- <button ref="pc_puerta_tra_der" class="btn" v-bind:class="[encendido_pc_puerta_tra_der ? 'btn-warning' : 'btn-primary']" v-on:click='pc_puerta_tra_der' data-estado="1"><i class="fa fa-bolt"></i> Puerta tracera Der.</button> -->
        </div>
    </div>
</template>

<script>
export default {
    props: {
        encendido_pc_puerta_de_izq: Boolean,
        encendido_pc_puerta_de_der: Boolean,
        encendido_pc_puerta_tra_izq: Boolean,
        encendido_pc_puerta_tra_der: Boolean
    },
    methods:{
        pc_puerta_de_izq() {
            let bloque_1 = new Array();
            bloque_1 = ['0/3/0'];
            const button = this.$refs.pc_puerta_de_izq
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.2.86", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_pc_puerta_de_izq = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_pc_puerta_de_izq = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        pc_puerta_de_der() {
            let bloque_1 = new Array();
            bloque_1 = ['0/3/1'];
            const button = this.$refs.pc_puerta_de_der
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.2.86", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_pc_puerta_de_der = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_pc_puerta_de_der = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        pc_puerta_tra_der() {
            let bloque_1 = new Array();
            bloque_1 = ['0/1/10'];
            const button = this.$refs.pc_puerta_tra_der
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.2.86", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_pc_puerta_tra_der = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_pc_puerta_tra_der = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        pc_puerta_tra_izq() {
            let bloque_1 = new Array();
            bloque_1 = ['0/1/9'];
            const button = this.$refs.pc_puerta_tra_izq
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.2.86", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_pc_puerta_tra_izq = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_pc_puerta_tra_izq = true;
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

<style scoped>
img{
    width: 60%;
}
</style>
