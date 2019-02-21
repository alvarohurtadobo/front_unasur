<template>
    <div class="col-md-6">
        <div class="text-center subtitulo">
            <span class="text-center">Accesos Plaza de comidas</span>
        </div>
        <div class="col-md-12">
            <div ref="pc_puerta_de_izq" class="row bloque_opcion" v-on:click='pc_puerta_de_izq' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_puerta_de_izq ? '/images/layout/Iconos_peques/AccesoB.png': '/images/layout/Iconos_peques/AccesoA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Acceso Principal 1
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_puerta_de_izq ? '/images/layout/Iconos_peques/AccesoB.png': '/images/layout/Iconos_peques/AccesoA.png']" alt="">
                </div>
            </div>
            <div ref="pc_puerta_de_der" class="row bloque_opcion" v-on:click='pc_puerta_de_der' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_puerta_de_der ? '/images/layout/Iconos_peques/AccesoB.png': '/images/layout/Iconos_peques/AccesoA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Acceso principal 2
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_puerta_de_der ? '/images/layout/Iconos_peques/AccesoB.png': '/images/layout/Iconos_peques/AccesoA.png']" alt="">
                </div>
            </div>
            <div ref="pc_puerta_tra_izq" class="row bloque_opcion" v-on:click='pc_puerta_tra_izq' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_puerta_tra_izq ? '/images/layout/Iconos_peques/AccesoB.png': '/images/layout/Iconos_peques/AccesoA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Acceso posterior 1
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_puerta_tra_izq ? '/images/layout/Iconos_peques/AccesoB.png': '/images/layout/Iconos_peques/AccesoA.png']" alt="">
                </div>
            </div>
            <div ref="pc_puerta_tra_der" class="row bloque_opcion" v-on:click='pc_puerta_tra_der' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_puerta_tra_der ? '/images/layout/Iconos_peques/AccesoB.png': '/images/layout/Iconos_peques/AccesoA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Acceso posterior 2
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_puerta_tra_der ? '/images/layout/Iconos_peques/AccesoB.png': '/images/layout/Iconos_peques/AccesoA.png']" alt="">
                </div>
            </div>
            <div ref="pc_puerta_mirador_1" class="row bloque_opcion" v-on:click='pc_puerta_mirador_1' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_puerta_mirador_1 ? '/images/layout/Iconos_peques/AccesoB.png': '/images/layout/Iconos_peques/AccesoA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Acceso mirador 1
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_puerta_mirador_1 ? '/images/layout/Iconos_peques/AccesoB.png': '/images/layout/Iconos_peques/AccesoA.png']" alt="">
                </div>
            </div>
            <div ref="pc_puerta_mirador_2" class="row bloque_opcion" v-on:click='pc_puerta_mirador_2' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_puerta_mirador_2 ? '/images/layout/Iconos_peques/AccesoB.png': '/images/layout/Iconos_peques/AccesoA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Acceso mirador 2
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_puerta_mirador_2 ? '/images/layout/Iconos_peques/AccesoB.png': '/images/layout/Iconos_peques/AccesoA.png']" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        encendido_pc_puerta_de_izq: Boolean,
        encendido_pc_puerta_de_der: Boolean,
        encendido_pc_puerta_tra_izq: Boolean,
        encendido_pc_puerta_tra_der: Boolean,
        encendido_pc_puerta_mirador_1: Boolean,
        encendido_pc_puerta_mirador_2: Boolean,
    },
    methods:{
        pc_puerta_de_izq() {
            let bloque_1 = new Array();
            bloque_1 = ['0/3/0'];
            const button = this.$refs.pc_puerta_de_izq
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://localhost:3001/api/knx/devices',
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
                let result = HTTP.call('POST', 'http://localhost:3001/api/knx/devices',
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
                let result = HTTP.call('POST', 'http://localhost:3001/api/knx/devices',
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
                let result = HTTP.call('POST', 'http://localhost:3001/api/knx/devices',
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
        pc_puerta_mirador_1() {
            let bloque_1 = new Array();
            bloque_1 = ['0/3/2'];
            const button = this.$refs.pc_puerta_mirador_1
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://localhost:3001/api/knx/devices',
                    { data: { "ip": "192.168.2.86", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_pc_puerta_mirador_1 = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_pc_puerta_mirador_1 = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        pc_puerta_mirador_2() {
            let bloque_1 = new Array();
            bloque_1 = ['0/3/3'];
            const button = this.$refs.pc_puerta_mirador_2
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://localhost:3001/api/knx/devices',
                    { data: { "ip": "192.168.2.86", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_pc_puerta_mirador_2 = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_pc_puerta_mirador_2 = true;
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
