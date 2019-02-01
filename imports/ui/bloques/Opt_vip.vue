<template>
    <div id="bl_s_vip" class="bloques">
        <div class="titulo">
            <h2 class="encendido">Iluminación Sala VIP</h2>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div>
                    <button ref="super_vip" class="btn" v-bind:class="[encendido_super_vip ? 'btn-warning' : 'btn-primary']" v-on:click='super_vip' data-estado="1"><i class="fa fa-bolt"></i> Super VIP</button>
                    <button ref="s_reuniones" class="btn" v-bind:class="[encendido_s_reuniones ? 'btn-warning' : 'btn-primary']" v-on:click='s_reuniones' data-estado="1"><i class="fa fa-bolt"></i> Sala de reuniones</button>
                    <button ref="c_reuniones" class="btn" v-bind:class="[encendido_c_reuniones ? 'btn-warning' : 'btn-primary']" v-on:click='c_reuniones' data-estado="1"><i class="fa fa-bolt"></i> Centro de reunion</button>
                    <button ref="ing_vip" class="btn" v-bind:class="[encendido_ing_vip ? 'btn-warning' : 'btn-primary']" v-on:click='ing_vip' data-estado="1"><i class="fa fa-bolt"></i> Ingreso VIP</button>
                    <button ref="s_descanso" class="btn" v-bind:class="[encendido_s_descanso ? 'btn-warning' : 'btn-primary']" v-on:click='s_descanso' data-estado="1"><i class="fa fa-bolt"></i> Sala de descanso</button>
                </div>
            </div>
            <div class="col-md-12">
                <div class="titulo">
                    <h2 class="encendido">Dimmer 1</h2>
                </div>
                <div>
                    <button ref="dimm_1_down" class="btn" v-bind:class="[encendido_dimm_1_down ? 'btn-warning' : 'btn-primary']" v-on:click='dimm_1_down' data-estado="1"><i class="fa fa-bolt"></i> -</button>
                    <button ref="dimm_1_up" class="btn" v-bind:class="[encendido_dimm_1_up ? 'btn-warning' : 'btn-primary']" v-on:click='dimm_1_up' data-estado="1"><i class="fa fa-plus"></i> + </button>
                </div>
            </div>
            <div class="col-md-12">
                <div class="titulo">
                    <h2 class="encendido">Dimmer 2</h2>
                </div>
                <div>
                    <button ref="dimm_2_down" class="btn" v-bind:class="[encendido_dimm_2_down ? 'btn-warning' : 'btn-primary']" v-on:click='dimm_2_down' data-estado="1"><i class="fa fa-bolt"></i> -</button>
                    <button ref="dimm_2_up" class="btn" v-bind:class="[encendido_dimm_2_up ? 'btn-warning' : 'btn-primary']" v-on:click='dimm_2_up' data-estado="1"><i class="fa fa-plus"></i> + </button>
                </div>
            </div>
            <div class="col-md-12">
                <div class="titulo">
                    <h2 class="encendido">R G B</h2>
                </div>
                <div>
                    <button ref="live_rgb" class="btn" v-bind:class="[encendido_live_rgb ? 'btn-warning' : 'btn-primary']" v-on:click='live_rgb' data-estado="1"><i class="fa fa-bolt"></i> Encender RGB</button>
                    <button ref="rgb_azul" class="btn" v-bind:class="[encendido_rgb_azul ? 'btn-warning' : 'btn-primary']" v-on:click='rgb_azul' data-estado="1"><i class="fa fa-plus"></i> Azul </button>
                    <button ref="rgb_verde" class="btn" v-bind:class="[encendido_rgb_verde ? 'btn-warning' : 'btn-primary']" v-on:click='rgb_verde' data-estado="1"><i class="fa fa-plus"></i> Verde </button>
                    <button ref="rgb_rojo" class="btn" v-bind:class="[encendido_rgb_rojo ? 'btn-primary' : 'btn-primary']" v-on:click='rgb_rojo' data-estado="1"><i class="fa fa-plus"></i> Rojo </button>
                    <button ref="rgb_plateado" class="btn" v-bind:class="[encendido_rgb_plateado ? 'btn-warning' : 'btn-primary']" v-on:click='rgb_plateado' data-estado="1"><i class="fa fa-plus"></i> Plateado </button>
                    <div>
                        <button ref="rgb_efecto_1" class="btn" v-bind:class="[encendido_rgb_efecto_1 ? 'btn-warning' : 'btn-primary']" v-on:click='rgb_efecto_1' data-estado="1"><i class="fa fa-plus"></i> Efecto 1 </button>
                        <button ref="rgb_efecto_2" class="btn" v-bind:class="[encendido_rgb_efecto_2 ? 'btn-warning' : 'btn-primary']" v-on:click='rgb_efecto_2' data-estado="1"><i class="fa fa-plus"></i> Efecto 2 </button>
                        <button ref="rgb_efecto_3" class="btn" v-bind:class="[encendido_rgb_efecto_3 ? 'btn-warning' : 'btn-primary']" v-on:click='rgb_efecto_3' data-estado="1"><i class="fa fa-plus"></i> Efecto 3 </button>
                        <button ref="rgb_efecto_4" class="btn" v-bind:class="[encendido_rgb_efecto_4 ? 'btn-warning' : 'btn-primary']" v-on:click='rgb_efecto_4' data-estado="1"><i class="fa fa-plus"></i> Efecto 4 </button>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
export default {
   
    props: {
            encendido_super_vip: Boolean,
            encendido_s_reuniones: Boolean,
            encendido_c_reuniones: Boolean,
            encendido_ing_vip: Boolean,
            encendido_s_descanso: Boolean,
            encendido_dimm_1_down: Boolean,
            encendido_dimm_1_up: Boolean,
            encendido_dimm_2_down: Boolean,
            encendido_dimm_2_up: Boolean,
            encendido_live_rgb: Boolean,
            encendido_rgb_azul: Boolean,
            encendido_rgb_verde: Boolean,
            encendido_rgb_rojo: Boolean,
            encendido_rgb_plateado: Boolean,
            encendido_rgb_efecto_1: Boolean,
            encendido_rgb_efecto_2: Boolean,
            encendido_rgb_efecto_3: Boolean,
            encendido_rgb_efecto_4: Boolean,
            
    },
    methods: {  
        super_vip() {
            let bloque_1 = new Array();
            bloque_1 = ['2/1/0','2/1/2'];
            const button = this.$refs.super_vip
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.4.214", "group": bloque_1, "order": parseInt(valor)} },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == '0') {
                            this.encendido_super_vip = false;
                            button.dataset.estado = '1';
                        } else{
                            this.encendido_super_vip = true;
                            button.dataset.estado = '0';
                        }
                    } else{
                        console.log(error);
                    }
            });
        },
        s_reuniones() {
            let bloque_1 = new Array();
            bloque_1 = ['2/0/1'];
            const button = this.$refs.s_reuniones
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.4.214", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_s_reuniones = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_s_reuniones = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        c_reuniones() {
            let bloque_1 = new Array();
            bloque_1 = ["0/0/6"];
            const button = this.$refs.c_reuniones
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.4.214", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_c_reuniones = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_c_reuniones = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        ing_vip() {
            let bloque_1 = new Array();
            bloque_1 = ['2/0/0', '2/0/2'];
            const button = this.$refs.ing_vip
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.4.214", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_ing_vip = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_ing_vip = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        s_descanso() {
            let bloque_1 = new Array();
            bloque_1 = ['2/3/0','2/3/1'];
            const button = this.$refs.s_descanso
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            
                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.4.214", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_s_descanso = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_s_descanso = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
                });
        },
        dimm_1_down() {
            let bloque_1 = new Array();
            const button = this.$refs.dimm_1_down
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices/dimmer/',
                    { data: { "ip": '192.168.4.214',
                                "incrdecr":0,
                                "dimmname": 'dimmer_vip_1',
                                "off": false
                            } 
                    },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_dimm_1_down = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_dimm_1_down = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error); 
                        }
            });
        },
        dimm_1_up() {
            let bloque_1 = new Array();
            bloque_1 = ['2/3/0','2/3/1'];
            const button = this.$refs.dimm_1_up
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices/dimmer/',
                    { data: { "ip": "192.168.4.214",
                                "incrdecr":1,
                                "dimmname": "dimmer_vip_1",
                                "off": false} 
                            },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_dimm_1_up = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_dimm_1_up = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
            });
        },
        dimm_2_down() {
            let bloque_1 = new Array();
            const button = this.$refs.dimm_2_down
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices/dimmer/',
                    { data: { "ip": '192.168.4.214',
                                "incrdecr":0,
                                "dimmname": 'dimmer_vip_2',
                                "off": false
                            } 
                    },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_dimm_2_down = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_dimm_2_down = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error); 
                        }
            });
        },
        dimm_2_up() {
            let bloque_1 = new Array();
            bloque_1 = ['2/3/0','2/3/1'];
            const button = this.$refs.dimm_2_up
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices/dimmer/',
                    { data: { "ip": "192.168.4.214",
                                "incrdecr":1,
                                "dimmname": "dimmer_vip_2",
                                "off": false} 
                            },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_dimm_2_up = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_dimm_2_up = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
            });
        },
        live_rgb() {
            let bloque_1 = new Array();
            const button = this.$refs.live_rgb
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices/rgb/live/',
                    { data: { "ip": "192.168.4.214",
                                "order":parseInt(valor)} 
                            },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_live_rgb = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_live_rgb = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
            });
        },
        rgb_azul() {
            let bloque_1 = new Array();
            const button = this.$refs.rgb_azul
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices/rgb/',
                    { data: { "ip": "192.168.4.214",
                                "mode": "Azul"} 
                            },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_rgb_azul = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_rgb_azul = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
            });
        },
        rgb_verde() {
            let bloque_1 = new Array();
            const button = this.$refs.rgb_verde
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices/rgb/',
                    { data: { "ip": "192.168.4.214",
                                "mode": "Verde"} 
                            },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_rgb_verde = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_rgb_verde = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
            });
        },
        rgb_rojo() {
            let bloque_1 = new Array();
            const button = this.$refs.rgb_rojo
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices/rgb/',
                    { data: { "ip": "192.168.4.214",
                                "mode": "Rojo"} 
                            },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_rgb_rojo = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_rgb_rojo = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
            });
        },
        rgb_plateado() {
            let bloque_1 = new Array();
            const button = this.$refs.rgb_plateado
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices/rgb/',
                    { data: { "ip": "192.168.4.214",
                                "mode": "Plateado"} 
                            },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_rgb_plateado = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_rgb_plateado = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
            });
        },
        rgb_efecto_1() {
            let bloque_1 = new Array();
            const button = this.$refs.rgb_efecto_1
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices/rgb/',
                    { data: { "ip": "192.168.4.214",
                                "mode": "Efecto 1"} 
                            },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_rgb_efecto_1 = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_rgb_efecto_1 = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
            });
        },
        rgb_efecto_2() {
            let bloque_1 = new Array();
            const button = this.$refs.rgb_efecto_2
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices/rgb/',
                    { data: { "ip": "192.168.4.214",
                                "mode": "Efecto 2"} 
                            },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_rgb_efecto_2 = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_rgb_efecto_2 = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
            });
        },
        rgb_efecto_3() {
            let bloque_1 = new Array();
            const button = this.$refs.rgb_efecto_3
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices/rgb/',
                    { data: { "ip": "192.168.4.214",
                                "mode": "Efecto 3"} 
                            },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_rgb_efecto_3 = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_rgb_efecto_3 = true;
                                button.dataset.estado = '0';
                            }
                        } else{
                            console.log(error);
                        }
            });
        },
        rgb_efecto_4() {
            let bloque_1 = new Array();
            const button = this.$refs.rgb_efecto_4
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices/rgb/',
                    { data: { "ip": "192.168.4.214",
                                "mode": "Efecto 4"} 
                            },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_rgb_efecto_4 = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_rgb_efecto_4 = true;
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
