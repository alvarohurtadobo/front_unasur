<template>
    <div class="col-md-6">
        <div class="text-center subtitulo">
            <span class="text-center">Iluminación Plaza de comidas</span>
        </div>
        <div class="col-md-12">
            <div ref="pc_pb" class="row bloque_opcion" v-on:click='pc_pb' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_pb ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Planta Baja
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_pb ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>

            <div ref="pc_p1" class="row bloque_opcion" v-on:click='pc_p1' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_p1 ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Piso 1
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_p1 ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>

            <div ref="pc_p2" class="row bloque_opcion" v-on:click='pc_p2' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_p2 ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Piso 2
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_p2 ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>

            <div ref="pc_p3" class="row bloque_opcion" v-on:click='pc_p3' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_p3 ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Piso 3
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_p3 ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>

            <div ref="pc_p4" class="row bloque_opcion" v-on:click='pc_p4' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_p4 ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Piso 4
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_p4 ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>

            <div ref="pc_p5" class="row bloque_opcion" v-on:click='pc_p5' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_p5 ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Piso 5
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_p5 ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        
            <div ref="pc_techo" class="row bloque_opcion" v-on:click='pc_techo' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_techo ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Techo
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_techo ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
            <div ref="pc_piso" class="row bloque_opcion" v-on:click='pc_piso' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_piso ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Luces de Piso
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_piso ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        
            <div ref="pc_banos" class="row bloque_opcion" v-on:click='pc_banos' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_banos ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Baños
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_banos ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        
            <div ref="pc_ctrl" class="row bloque_opcion" v-on:click='pc_ctrl' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_ctrl ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Cuarto de Control PC
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_pc_ctrl ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        encendido_pc_pb: Boolean,
        encendido_pc_p1: Boolean,
        encendido_pc_p2: Boolean,
        encendido_pc_p3: Boolean,
        encendido_pc_p4: Boolean,
        encendido_pc_p5: Boolean,
        encendido_pc_techo: Boolean,
        // encendido_pc_mirador: Boolean,
        encendido_pc_banos: Boolean,
        encendido_pc_ctrl: Boolean,
        encendido_pc_piso: Boolean,
    },
    methods:{
        pc_pb() {
            let bloque_1 = new Array();
            bloque_1 = ['0/0/1'];
            const button = this.$refs.pc_pb
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://172.18.0.3:3001/api/knx/devices',
                { data: { "ip": "192.168.2.86", "group": bloque_1, "order": parseInt(valor)} },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == '0') {
                            this.encendido_pc_pb = false;
                            button.dataset.estado = '1';
                        } else{
                            this.encendido_pc_pb = true;
                            button.dataset.estado = '0';
                        }
                    } else{
                        console.log(error);
                    }
            });
        },
        pc_p1() {
            let bloque_1 = new Array();
            bloque_1 = ['0/0/2'];
            const button = this.$refs.pc_p1
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://172.18.0.3:3001/api/knx/devices',
                    { data: { "ip": "192.168.2.86", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_pc_p1 = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_pc_p1 = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        pc_p2() {
            let bloque_1 = new Array();
            bloque_1 = ["0/0/3"];
            const button = this.$refs.pc_p2
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);

                let result = HTTP.call('POST', 'http://172.18.0.3:3001/api/knx/devices',
                    { data: { "ip": "192.168.2.86", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_pc_p2 = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_pc_p2 = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        pc_p3() {
            let bloque_1 = new Array();
            bloque_1 = ["0/1/0"];
            const button = this.$refs.pc_p3
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://172.18.0.3:3001/api/knx/devices',
                    { data: { "ip": "192.168.2.86", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_pc_p3 = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_pc_p3 = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        pc_p4() {
            let bloque_1 = new Array();
            bloque_1 = ['0/0/4'];
            const button = this.$refs.pc_p4
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://172.18.0.3:3001/api/knx/devices',
                    { data: { "ip": "192.168.2.86", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_pc_p4 = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_pc_p4 = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        pc_p5() {
            let bloque_1 = new Array();
            bloque_1 = ['0/1/1'];
            const button = this.$refs.pc_p5
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://172.18.0.3:3001/api/knx/devices',
                    { data: { "ip": "192.168.2.86", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_pc_p5 = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_pc_p5 = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        pc_techo() {
            let bloque_1 = new Array();
            bloque_1 = ['0/2/0', '0/2/1'];
            const button = this.$refs.pc_techo
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://172.18.0.3:3001/api/knx/devices',
                    { data: { "ip": "192.168.2.86", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_pc_techo = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_pc_techo = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        // pc_mirador() {
        //     let bloque_1 = new Array();
        //     bloque_1 = ['0/2/1'];
        //     const button = this.$refs.pc_mirador
        //     let valor = button.dataset.estado;
        //     console.log("Estado: "+valor);
        //         let result = HTTP.call('POST', 'http://172.18.0.3:3001/api/knx/devices',
        //             { data: { "ip": "192.168.2.86", "group": bloque_1, "order": parseInt(valor)} },
        //             (error, result) => {
        //                 if (!error) {
        //                     console.log("Los datos recibidos son: " + JSON.stringify(result.data));
        //                     if (valor == '0') {
        //                         this.encendido_pc_mirador = false;
        //                         button.dataset.estado = '1';
        //                     } else{
        //                         this.encendido_pc_mirador = true;
        //                         button.dataset.estado = '0';
        //                     }
        //                 } else{
        //                     console.log(error);
        //                 }
        //         });
        // },
        pc_piso() {
            let bloque_1 = new Array();
            bloque_1 = ['0/0/5'];
            const button = this.$refs.pc_piso
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://172.18.0.3:3001/api/knx/devices',
                    { data: { "ip": "192.168.2.86", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_pc_piso = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_pc_piso = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        pc_banos() {
            let bloque_1 = new Array();
            bloque_1 = ['0/1/2'];
            const button = this.$refs.pc_banos
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://172.18.0.3:3001/api/knx/devices',
                    { data: { "ip": "192.168.2.86", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_pc_banos = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_pc_banos = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        pc_ctrl() {
            let bloque_1 = new Array();
            bloque_1 = ['0/1/3'];
            const button = this.$refs.pc_ctrl
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://172.18.0.3:3001/api/knx/devices',
                    { data: { "ip": "192.168.2.86", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_pc_ctrl = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_pc_ctrl = true;
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
