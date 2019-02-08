<template>
    <div class="col-md-6">
        <div class="text-center subtitulo">
            <span class="text-center">Iluminación VIP</span>
        </div>
        <div class="col-md-12">
            <div ref="super_vip" class="row bloque_opcion" v-on:click='super_vip' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_super_vip ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Super VIP
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_super_vip ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
            </div>
            <div ref="s_reuniones" class="row bloque_opcion" v-on:click='s_reuniones' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_s_reuniones ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Sala de reuniones
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_s_reuniones ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
            </div>
            <div ref="c_reuniones" class="row bloque_opcion" v-on:click='c_reuniones' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_c_reuniones ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Centro Sala de reuniones
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_c_reuniones ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
            </div>
            <div ref="ing_vip" class="row bloque_opcion" v-on:click='ing_vip' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_ing_vip ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Ingreso VIP
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_ing_vip ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
            </div>
            <div ref="s_descanso" class="row bloque_opcion" v-on:click='s_descanso' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_s_descanso ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Sala de descanso
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_s_descanso ? '/images/layout/Iconos_peques/IluminacionA.png': '/images/layout/Iconos_peques/IluminacionB.png']" alt="">
                </div>
            </div>
        </div>


        <!-- <button ref="super_vip" class="btn" v-bind:class="[encendido_super_vip ? 'btn-warning' : 'btn-primary']" v-on:click='super_vip' data-estado="1"><i class="fa fa-bolt"></i> Super VIP</button> -->
        <!-- <button ref="s_reuniones" class="btn" v-bind:class="[encendido_s_reuniones ? 'btn-warning' : 'btn-primary']" v-on:click='s_reuniones' data-estado="1"><i class="fa fa-bolt"></i> Sala de reuniones</button> -->
        <!-- <button ref="c_reuniones" class="btn" v-bind:class="[encendido_c_reuniones ? 'btn-warning' : 'btn-primary']" v-on:click='c_reuniones' data-estado="1"><i class="fa fa-bolt"></i> Centro de reunion</button> -->
        <!-- <button ref="ing_vip" class="btn" v-bind:class="[encendido_ing_vip ? 'btn-warning' : 'btn-primary']" v-on:click='ing_vip' data-estado="1"><i class="fa fa-bolt"></i> Ingreso VIP</button> -->
        <!-- <button ref="s_descanso" class="btn" v-bind:class="[encendido_s_descanso ? 'btn-warning' : 'btn-primary']" v-on:click='s_descanso' data-estado="1"><i class="fa fa-bolt"></i> Sala de descanso</button> -->
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
    },
    methods:{
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
    }

}
</script>

<style scoped>
img{
    width: 60%;
}
</style>
