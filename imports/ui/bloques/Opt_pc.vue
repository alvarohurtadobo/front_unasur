<template>
    <div id="blq_s_pc" class="bloques">
        <div class="titulo">
            <h2 class="encendido">Plaza de comidas</h2>
        </div>
        <div class="row">
            <div class="col-md-4">
                <button ref="pc_pb" class="btn" v-bind:class="[encendido_pc_pb ? 'btn-warning' : 'btn-primary']" v-on:click='pc_pb' data-estado="1"><i class="fa fa-bolt"></i> Planta Baja</button>
                <button ref="pc_p1" class="btn" v-bind:class="[encendido_pc_p1 ? 'btn-warning' : 'btn-primary']" v-on:click='pc_p1' data-estado="1"><i class="fa fa-bolt"></i> Primer Piso</button>
                <button ref="pc_p2" class="btn" v-bind:class="[encendido_pc_p2 ? 'btn-warning' : 'btn-primary']" v-on:click='pc_p2' data-estado="1"><i class="fa fa-bolt"></i> Segundo Piso</button>
                <button ref="pc_p3" class="btn" v-bind:class="[encendido_pc_p3 ? 'btn-warning' : 'btn-primary']" v-on:click='pc_p3' data-estado="1"><i class="fa fa-bolt"></i> Tercer Piso</button>
            </div>
            <div class="col-md-4">
                <button ref="pc_p4" class="btn" v-bind:class="[encendido_pc_p4 ? 'btn-warning' : 'btn-primary']" v-on:click='pc_p4' data-estado="1"><i class="fa fa-bolt"></i> Cuarto piso</button>
                <button ref="pc_p5" class="btn" v-bind:class="[encendido_pc_p5 ? 'btn-warning' : 'btn-primary']" v-on:click='pc_p5' data-estado="1"><i class="fa fa-bolt"></i> Quinto piso</button>
                <button ref="pc_techo" class="btn" v-bind:class="[encendido_pc_techo ? 'btn-warning' : 'btn-primary']" v-on:click='pc_techo' data-estado="1"><i class="fa fa-bolt"></i> Iluminación techo</button>
                <!-- <button ref="pc_mirado" class="btn" v-bind:class="[encendido_pc_mirador ? 'btn-warning' : 'btn-primary']" v-on:click='pc_mirador' data-estado="1"><i class="fa fa-bolt"></i> Mirador</button> -->
                <button ref="pc_banos" class="btn" v-bind:class="[encendido_pc_banos ? 'btn-warning' : 'btn-primary']" v-on:click='pc_banos' data-estado="1"><i class="fa fa-bolt"></i> Baños</button>
            </div>
            <div class="col-md-4">
                <button ref="pc_ctrl" class="btn" v-bind:class="[encendido_pc_ctrl ? 'btn-warning' : 'btn-primary']" v-on:click='pc_ctrl' data-estado="1"><i class="fa fa-bolt"></i> Cuarto de Ctrl</button>
            </div>
            <div class="col-md-12">
                <div class="titulo">
                    <h2 class="encendido">Accesos Plaza de comidas</h2>
                </div>
                 <div class="col-md-12">
                    <button ref="pc_puerta_de_izq" class="btn" v-bind:class="[encendido_pc_puerta_de_izq ? 'btn-warning' : 'btn-primary']" v-on:click='pc_puerta_de_izq' data-estado="1"><i class="fa fa-bolt"></i> Puerta delantera Izq.</button>
                    <button ref="pc_puerta_de_der" class="btn" v-bind:class="[encendido_pc_puerta_de_der ? 'btn-warning' : 'btn-primary']" v-on:click='pc_puerta_de_der' data-estado="1"><i class="fa fa-bolt"></i> Puerta delantera Der.</button>
                    <button ref="pc_puerta_tra_izq" class="btn" v-bind:class="[encendido_pc_puerta_tra_izq ? 'btn-warning' : 'btn-primary']" v-on:click='pc_puerta_tra_izq' data-estado="1"><i class="fa fa-bolt"></i> Puerta tracera Izq.</button>
                    <button ref="pc_puerta_tra_der" class="btn" v-bind:class="[encendido_pc_puerta_tra_der ? 'btn-warning' : 'btn-primary']" v-on:click='pc_puerta_tra_der' data-estado="1"><i class="fa fa-bolt"></i> Puerta tracera Der.</button>
                </div>
                <div class="col-md-4">

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
            encendido_pc_puerta_de_izq: Boolean,
            encendido_pc_puerta_de_der: Boolean,
            encendido_pc_puerta_tra_izq: Boolean,
            encendido_pc_puerta_tra_der: Boolean
    },
    methods: {  
        pc_pb() {
            let bloque_1 = new Array();
            bloque_1 = ['0/0/1'];
            const button = this.$refs.pc_pb
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
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
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
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

                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
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
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
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
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
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
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
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
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
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
        //         let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
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
        pc_banos() {
            let bloque_1 = new Array();
            bloque_1 = ['0/1/2'];
            const button = this.$refs.pc_banos
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
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
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
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
  },
}
</script>

<style scoped>
.colorBtn{
    color: gold;
}
a{
    text-decoration: none;
}
a hover{
    color: rgb(116, 113, 110);
    background-color: aliceblue;
}
.encendido{
    color: #ffc107;
}
.titulo{
    background-color: rgba(54, 70, 136, 0.6);
}
</style>
