<template>
    <div class="col-md-6">
        <div class="text-center subtitulo">
            <span class="text-center">Sala de Convensiones</span>
        </div>
        <div class="col-md-12">
            <div ref="bloque_1" class="row bloque_opcion" v-on:click='s_multi_b1' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_sm_b1 ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Bloque 1
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_sm_b1 ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
            <div ref="bloque_2" class="row bloque_opcion" v-on:click='s_multi_b2' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_sm_b2 ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    
                    Bloque 2
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_sm_b2 ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
            <div ref="bloque_3" class="row bloque_opcion" v-on:click='s_multi_b3' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_sm_b3 ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    
                    Bloque 3
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_sm_b3 ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
            <div ref="exterior" class="row bloque_opcion" v-on:click='s_multi_ext' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_sm_ext ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    
                    Luces Ramplas
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_sm_ext ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
            <div ref="calle_norte" class="row bloque_opcion" v-on:click='s_multi_calle_norte' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_sm_calle_norte ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    
                    Luces calle Norte
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_sm_calle_norte ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
            <div ref="calle_sud" class="row bloque_opcion" v-on:click='s_multi_calle_sud' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_sm_calle_sud ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    
                    Luces calle Sud
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_sm_calle_sud ? '/images/layout/Iconos_peques/IluminacionB.png': '/images/layout/Iconos_peques/IluminacionA.png']" alt="">
                </div>
            </div>
            <!-- <button ref="bloque_1" class="btn" v-bind:class="[ encendido_sm_b1 ? 'btn-warning' : 'btn-primary' ]" v-on:click='s_multi_b1' data-estado="1"><i class="fa fa-bolt"></i> Bloque 1</button> -->
            <!-- <button ref="bloque_2" class="btn" v-bind:class="[ encendido_sm_b2 ? 'btn-warning' : 'btn-primary' ]" v-on:click='s_multi_b2' data-estado="1"><i class="fa fa-bolt"></i> Bloque 2</button> -->
            <!-- <button ref="bloque_3" class="btn" v-bind:class="[ encendido_sm_b3 ? 'btn-warning' : 'btn-primary' ]" v-on:click='s_multi_b3' data-estado="1"><i class="fa fa-bolt"></i> Bloque 3</button> -->
            <!-- <button ref="exterior" class="btn" v-bind:class="[ encendido_sm_ext ? 'btn-warning' : 'btn-primary' ]" v-on:click='s_multi_ext' data-estado="1"><i class="fa fa-bolt"></i> Luces Ramplas</button> -->
            <!-- <button ref="calle_norte" class="btn" v-bind:class="[ encendido_sm_calle_norte ? 'btn-warning' : 'btn-primary' ]" v-on:click='s_multi_calle_norte' data-estado="1"><i class="fa fa-bolt"></i> Luces Calle Norte</button> -->
            <!-- <button ref="calle_sud" class="btn" v-bind:class="[ encendido_sm_calle_sud ? 'btn-warning' : 'btn-primary' ]" v-on:click='s_multi_calle_sud' data-estado="1"><i class="fa fa-bolt"></i> Luces Calle Sud</button> -->
        </div>
    </div>
</template>

<script>
export default {
 props: {
        habilita_b_sm: Boolean,
        encendido_sm_b1: Boolean,
        encendido_sm_b2: Boolean,
        encendido_sm_b3: Boolean,
        encendido_sm_ext: Boolean,
        encendido_sm_calle_norte: Boolean,
        encendido_sm_calle_sud: Boolean,
       
        
        encendido_sm_ctrl_energia: Boolean,
    },
    data() {
        return{
            dd_voltage_dd_linea_1: 0,
            dd_voltage_dd_linea_2: 0,
            dd_voltage_dd_linea_3: 0,
            dd_corriente_dd_linea_1: 0,
            dd_corriente_dd_linea_2: 0,
            dd_corriente_dd_linea_3: 0,
        }
    },
    methods: {  
        estado_sm(){
            let bloque_1 = new Array();
            bloque_1 = ['1/2/3', '1/0/8','1/3/0', '1/0/0', '2/0/6', '0/1/0', '0/0/1', '1/3/11', '2/0/4', '2/0/3', '0/0/7', '0/0/9', '1/3/8', '2/1/0', '2/1/1', '2/1/2', '2/1/3', '1/1/8', '1/1/9', '1/1/10'];
            let result = HTTP.call('POST', 'http://172.18.0.3:3001/api/knx/devices/status',
                { data: { "ip": "192.168.8.254", "group": bloque_1} },
                (error, result) => {
                    if (!error) {
                        let vv = result.data[0]; 
                    } else{
                        console.log(error);
                    }
            });
        },
        s_multi_b1() {
        let bloque_1 = new Array();
        bloque_1 = ['1/2/3','1/2/1', '1/1/6', '1/1/5', '1/1/4', '1/1/1', '1/1/2', '1/1/3', '1/1/0'];
        // var bloque_1 = ['4/0/0']; 
        const button = this.$refs.bloque_1
        let valor = button.dataset.estado;
        console.log("Estado: "+valor);
        
            let result = HTTP.call('POST', 'http://172.18.0.3:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": bloque_1, "order": parseInt(valor)} },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data)+ ' Valor--> '+valor);
                        if (valor == '0') {
                            this.encendido_sm_b1 = false;
                            button.dataset.estado = '1';
                        } else{
                            this.encendido_sm_b1 = true;
                            button.dataset.estado = '0';
                        }
                    } else{
                        console.log(error);
                    }
            });
        },
        //  Falta 1/3/1 
        s_multi_b2() {
            const button = this.$refs.bloque_2
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);

            let bloque_2 = new Array();
            bloque_2 = ['1/0/8','1/3/2', '1/3/3', '1/2/0', '1/2/5','1/2/6'];
            console.log('Sala Multiple');
            HTTP.call('POST', 'http://172.18.0.3:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": bloque_2, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == '0') {
                            this.encendido_sm_b2 = false;
                            button.dataset.estado = '1';
                        } else{
                            this.encendido_sm_b2 = true;
                            button.dataset.estado = '0';
                        }
                    }
                });
        },
        s_multi_b3() {
            const button = this.$refs.bloque_3
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let bloque_3 = new Array();
            bloque_3 = ['1/3/0','1/3/1', '1/3/5', '1/3/6', '1/2/4'];
            console.log('Sala Multiple');
            HTTP.call('POST', 'http://172.18.0.3:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": bloque_3, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == '0') {
                            this.encendido_sm_b3 = false;
                            button.dataset.estado = '1';
                        } else{
                            this.encendido_sm_b3 = true;
                            button.dataset.estado = '0';
                        }
                    }
                });
        },
        s_multi_ext() {
            const button = this.$refs.exterior;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let exterior = new Array();
            exterior = ['1/0/0','1/0/1', '1/0/2', '1/0/3', '1/0/4', '1/0/5', '1/0/6', '1/0/7','1/0/9', '1/0/10', '1/0/11', '1/2/2'];
             //exterior = ['2/0/6']; avenidas
            console.log('Sala Multiple');
            HTTP.call('POST', 'http://172.18.0.3:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": exterior, "order": parseInt(valor)} },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == '0') {
                            this.encendido_sm_ext = false;
                            button.dataset.estado = '1';
                        } else{
                            this.encendido_sm_ext = true;
                            button.dataset.estado = '0';
                        }
                    }
                });
        },
        s_multi_calle_sud() {
            const button = this.$refs.calle_sud;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let exterior = new Array();
            exterior = ['2/0/6']; 
            console.log('Sala Multiple');
            HTTP.call('POST', 'http://172.18.0.3:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": exterior, "order": parseInt(valor)} },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == '0') {
                            this.encendido_sm_calle_sud = false;
                            button.dataset.estado = '1';
                        } else{
                            this.encendido_sm_calle_sud = true;
                            button.dataset.estado = '0';
                        }
                    }
                });
        },
        s_multi_calle_norte() {
            const button = this.$refs.calle_norte;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let exterior = new Array();
            exterior = ['0/1/0']; 
            console.log('Sala Multiple');
            HTTP.call('POST', 'http://172.18.0.3:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": exterior, "order": parseInt(valor)} },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == '0') {
                            this.encendido_sm_calle_norte = false;
                            button.dataset.estado = '1';
                        } else{
                            this.encendido_sm_calle_norte = true;
                            button.dataset.estado = '0';
                        }
                    }
                });
        },
        
        
        
        
  },
}
</script>

<style>

</style>
