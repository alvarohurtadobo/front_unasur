<template>
    <div id="bl_s_multi" class="bloques">
        <div class="titulo">
            <h1 ref="estado_sm" v-on:click="estado_sm">Sala Multiple</h1>
        </div>
        <div class="row">
            <div class="col-md-12" style="margin: 1% 0 2% 0;">
                <button class="btn btn-lg btn-danger" v-on:click="estado_sm">Traer Estado</button>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <!-- <button class="btn btn-warning">Sala de Convensiones</button> -->
                <div class="titulo">
                    <h2 class="encendido">Sala de Convensiones</h2>
                </div>
                <div>
                    <button ref="bloque_1" class="btn" v-bind:class="[ encendido_sm_b1 ? 'btn-warning' : 'btn-primary' ]" v-on:click='s_multi_b1' data-estado="0"><i class="fa fa-bolt"></i> Bloque 1</button>
                    <button ref="bloque_2" class="btn" v-bind:class="[ encendido_sm_b2 ? 'btn-warning' : 'btn-primary' ]" v-on:click='s_multi_b2' data-estado="0"><i class="fa fa-bolt"></i> Bloque 2</button>
                    <button ref="bloque_3" class="btn" v-bind:class="[ encendido_sm_b3 ? 'btn-warning' : 'btn-primary' ]" v-on:click='s_multi_b3' data-estado="0"><i class="fa fa-bolt"></i> Bloque 3</button>
                    <button ref="exterior" class="btn" v-bind:class="[ encendido_sm_ext ? 'btn-warning' : 'btn-primary' ]" v-on:click='s_multi_ext' data-estado="0"><i class="fa fa-bolt"></i> Luces Ramplas</button>
                    <button ref="calle_norte" class="btn" v-bind:class="[ encendido_sm_calle_norte ? 'btn-warning' : 'btn-primary' ]" v-on:click='s_multi_calle_norte' data-estado="0"><i class="fa fa-bolt"></i> Luces Calle Norte</button>
                    <button ref="calle_sud" class="btn" v-bind:class="[ encendido_sm_calle_sud ? 'btn-warning' : 'btn-primary' ]" v-on:click='s_multi_calle_sud' data-estado="0"><i class="fa fa-bolt"></i> Luces Calle Sud</button>
                </div>
            </div>
            <div class="col-md-8">
                <!-- <button class="btn btn-warning">Hall recibidor</button> -->
                <div class="titulo">
                    <h2 class="encendido">Hall Recibidor</h2>
                </div>
                <div>
                    <button ref="s_hall_ing" class="btn" v-bind:class="[ encendido_sm_hall_ing ? 'btn-warning' : 'btn-primary' ]" v-on:click='s_hall_ing' data-estado="0">Ingreso Sala Multi.</button>
                    <button ref="s_hall_reci_izq" class="btn" v-bind:class="[ encendido_sm_hall_reci_izq ? 'btn-warning' : 'btn-primary' ]" v-on:click='s_hall_reci_izq' data-estado="0">Recibidor Izq.</button>
                    <button ref="s_hall_sp" class="btn" v-bind:class="[ encendido_sm_hall_sp ? 'btn-warning' : 'btn-primary' ]" v-on:click='s_hall_sp' data-estado="0">Sala de Prensa</button>
                    <button ref="s_hall_pk_este" class="btn" v-bind:class="[ encendido_pk_este ? 'btn-warning' : 'btn-primary' ]" v-on:click='s_hall_pk_este' data-estado="0">Parking Este</button>
                    <button ref="s_hall_pk_oeste" class="btn" v-bind:class="[ encendido_pk_oeste ? 'btn-warning' : 'btn-primary' ]" v-on:click='s_hall_pk_oeste' data-estado="0">Parking Oeste</button>
                    <button ref="s_hall_pk_ingreso" class="btn" v-bind:class="[ encendido_pk_ingreso ? 'btn-warning' : 'btn-primary' ]" v-on:click='s_hall_pk_ingreso' data-estado="0">Ingreso Parking</button>
                    <button ref="s_hall_scr" class="btn" v-bind:class="[ encendido_s_hall_scr ? 'btn-warning' : 'btn-primary' ]" v-on:click='s_hall_scr' data-estado="0">Sala Control Recib</button>
                    <button ref="s_hall_ofp" class="btn" v-bind:class="[ encendido_s_hall_ofp ? 'btn-warning' : 'btn-primary' ]" v-on:click='s_hall_ofp' data-estado="0">Oficina Prensa</button>
                </div>
            </div>
            <div class="col-md-12">
                <div class="titulo">
                    <h2 class="encendido">Accesos Sala Multiple</h2>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <button ref="acceso_1" class="btn" v-bind:class="[ encendido_acceso_1 ? 'btn-warning' : 'btn-primary' ]" v-on:click='acceso_1' data-estado="0"><i class="fa fa-bolt"></i> Acceso 1</button>
                        <button ref="acceso_2" class="btn" v-bind:class="[ encendido_acceso_2 ? 'btn-warning' : 'btn-primary' ]" v-on:click='acceso_2' data-estado="0"><i class="fa fa-bolt"></i> Acceso 2</button>
                        <button ref="acceso_3" class="btn" v-bind:class="[ encendido_acceso_3 ? 'btn-warning' : 'btn-primary' ]" v-on:click='acceso_3' data-estado="0"><i class="fa fa-bolt"></i> Acceso 3</button>
                        <button ref="acceso_4" class="btn" v-bind:class="[ encendido_acceso_4 ? 'btn-warning' : 'btn-primary' ]" v-on:click='acceso_4' data-estado="0"><i class="fa fa-bolt"></i> Acceso 4</button>
                    </div>
                    <div class="col-md-6">
                        <button ref="acceso_ascensores_1" class="btn" v-bind:class="[ encendido_acceso_ascensores_1 ? 'btn-warning' : 'btn-primary' ]" v-on:click='acceso_ascensores_1' data-estado="0"><i class="fa fa-bolt"></i> Acceso Ascensores 1</button>
                        <button ref="acceso_ascensores_2" class="btn" v-bind:class="[ encendido_acceso_ascensores_2 ? 'btn-warning' : 'btn-primary' ]" v-on:click='acceso_ascensores_2' data-estado="0"><i class="fa fa-bolt"></i> Acceso Ascensores 2</button>
                        <button ref="acceso_ascensores_3" class="btn" v-bind:class="[ encendido_acceso_ascensores_3 ? 'btn-warning' : 'btn-primary' ]" v-on:click='acceso_ascensores_3' data-estado="0"><i class="fa fa-bolt"></i> Acceso Ascensores 3</button>
                        <button ref="acceso_garage" class="btn" v-bind:class="[ encendido_acceso_garage ? 'btn-warning' : 'btn-primary' ]" v-on:click='acceso_garage' data-estado="0"><i class="fa fa-bolt"></i> Puerta Garage</button>
                    </div>

                </div>
            </div>
            <div class="col-md-12">
                <div class="titulo">
                    <h2 class="encendido">Sistema de Riego</h2>
                </div>
                <div>
                    <button ref="riego_norte_master" class="btn" v-bind:class="[ encendido_riego_norte_master ? 'btn-warning' : 'btn-primary' ]" v-on:click='riego_norte_master' data-estado="0"><i class="fa fa-bolt"></i> Riego Master A1: [A+D]</button> 
                    <button ref="riego_norte_a_2" class="btn" v-bind:class="[ encendido_riego_norte_a_2 ? 'btn-warning' : 'btn-primary' ]" v-on:click='riego_norte_a_2' data-estado="0"><i class="fa fa-bolt"></i> Riego Norte A2: [B + A]</button> 
                    <button ref="riego_norte_a_3" class="btn" v-bind:class="[ encendido_riego_norte_a_3 ? 'btn-warning' : 'btn-primary' ]" v-on:click='riego_norte_a_3' data-estado="0"><i class="fa fa-bolt"></i> Riego Norte A3: [C + A]</button> 
                    <button ref="riego_norte_a_4" class="btn" v-bind:class="[ encendido_riego_norte_a_4 ? 'btn-warning' : 'btn-primary' ]" v-on:click='riego_norte_a_4' data-estado="0"><i class="fa fa-bolt"></i> Riego Norte A4: [A + F + A Sist. 1]</button> 
                    <button ref="riego_norte_a_5" class="btn" v-bind:class="[ encendido_riego_norte_a_5 ? 'btn-warning' : 'btn-primary' ]" v-on:click='riego_norte_a_5' data-estado="0"><i class="fa fa-bolt"></i> Riego Norte A5: [ D]</button> 
                    <button ref="riego_norte_a_6" class="btn" v-bind:class="[ encendido_riego_norte_a_6 ? 'btn-warning' : 'btn-primary' ]" v-on:click='riego_norte_a_6' data-estado="0"><i class="fa fa-bolt"></i> Riego Norte A6</button> 
                    <button ref="riego_norte_a_7" class="btn" v-bind:class="[ encendido_riego_norte_a_7 ? 'btn-warning' : 'btn-primary' ]" v-on:click='riego_norte_a_7' data-estado="0"><i class="fa fa-bolt"></i> Riego Norte A7</button> 
                    
                </div>
            </div>
            <div class="col-md-12">
                <div class="titulo">
                    <h2 class="encendido">Control Energía</h2>
                </div>
                <div>
                    <button ref="sm_ctrl_energia" class="btn" v-bind:class="[ encendido_sm_ctrl_energia ? 'btn-warning' : 'btn-primary' ]" v-on:click='sm_ctrl_energia' data-estado="0"><i class="fa fa-bolt"></i> Niveles de Energía</button> 
                    <table class="table table-condensed table-striped">
                        <thead>
                            <tr>
                                <th>Linea</th>
                                <th>Voltage</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="color:#green;">
                                <td>Linea 1</td>
                                <td>{{dd_voltage_dd_linea_1}}</td>
                            </tr>
                            <tr>
                                <td>Linea 2</td>
                                <td>{{dd_voltage_dd_linea_2}}</td>
                            </tr>
                            <tr>
                                <td>Linea 3</td>
                                <td>{{dd_voltage_dd_linea_3}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
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
        encendido_sm_hall_ing: Boolean,
        encendido_sm_hall_reci_izq: Boolean,
        encendido_sm_hall_sp: Boolean,
        encendido_pk_este: Boolean,
        encendido_pk_oeste: Boolean,
        encendido_pk_ingreso: Boolean,
        encendido_s_hall_scr: Boolean,
        encendido_s_hall_ofp: Boolean,
        encendido_acceso_1: Boolean,
        encendido_acceso_2: Boolean,
        encendido_acceso_3: Boolean,
        encendido_acceso_4: Boolean,
        encendido_acceso_ascensores_1: Boolean,
        encendido_acceso_ascensores_2: Boolean,
        encendido_acceso_ascensores_3: Boolean,
        encendido_acceso_garage: Boolean,
        encendido_riego_norte_master: Boolean,
        encendido_riego_norte_a_2: Boolean,
        encendido_riego_norte_a_3: Boolean,
        encendido_riego_norte_a_4: Boolean,
        encendido_riego_norte_a_5: Boolean,
        encendido_riego_norte_a_6: Boolean,
        encendido_riego_norte_a_7: Boolean,
        encendido_sm_ctrl_energia: Boolean,
    },
    data() {
        return{
            dd_voltage_1: 0,
            dd_voltage_2: 0,
            dd_voltage_3: 0,
        }
    },
    methods: {  
        estado_sm(){
            let bloque_1 = new Array();
            bloque_1 = ['1/2/3', '1/0/8','1/3/0', '1/0/0', '2/0/6', '0/1/0', '0/0/1', '1/3/11', '2/0/4', '2/0/3', '0/0/7', '0/0/9', '1/3/8', '2/1/0', '2/1/1', '2/1/2', '2/1/3', '1/1/8', '1/1/9', '1/1/10'];
            let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices/status',
                { data: { "ip": "192.168.8.254", "group": bloque_1} },
                (error, result) => {
                    if (!error) {
                        let vv = result.data[0]; 
                        // Object.keys(vv).forEach(key => {
                        //     if (vv[key]==1) {
                        //         this.encendido_sm_b1 = true;
                        //     } else{
                        //         this.encendido_sm_b1 = false;
                        //     }
                        // });
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
        
            let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": bloque_1, "order": parseInt(valor)} },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data)+ ' Valor--> '+valor);
                        if (valor == '0') {
                            this.encendido_sm_b1 = true;
                            button.dataset.estado = '1';
                        } else{
                            this.encendido_sm_b1 = false;
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
            HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": bloque_2, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == '0') {
                            this.encendido_sm_b2 = true;
                            button.dataset.estado = '1';
                        } else{
                            this.encendido_sm_b2 = false;
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
            HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": bloque_3, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == '0') {
                            this.encendido_sm_b3 = true;
                            button.dataset.estado = '1';
                        } else{
                            this.encendido_sm_b3 = false;
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
            HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": exterior, "order": parseInt(valor)} },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == '0') {
                            this.encendido_sm_ext = true;
                            button.dataset.estado = '1';
                        } else{
                            this.encendido_sm_ext = false;
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
            HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": exterior, "order": parseInt(valor)} },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == '0') {
                            this.encendido_sm_calle_sud = true;
                            button.dataset.estado = '1';
                        } else{
                            this.encendido_sm_calle_sud = false;
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
            HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": exterior, "order": parseInt(valor)} },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == '0') {
                            this.encendido_sm_calle_norte = true;
                            button.dataset.estado = '1';
                        } else{
                            this.encendido_sm_calle_norte = false;
                            button.dataset.estado = '0';
                        }
                    }
                });
        },
        // Iluminacion HALL  Falta 0/0/7 - 0/0/8 - 0/0/10
        s_hall_ing() {
            const button = this.$refs.s_hall_ing;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['0/0/1','0/0/3', '0/2/4', '0/2/5', '2/0/9', '2/0/8'];
            console.log('Sala Multiple');
            HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == '0') {
                            this.encendido_sm_hall_ing = true;
                            button.dataset.estado = '1';
                        } else{
                            this.encendido_sm_hall_ing = false;
                            button.dataset.estado = '0';
                        }
                    }
                });
        },
        s_hall_reci_izq(){
            const button = this.$refs.s_hall_reci_izq;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['0/0/1','0/0/3', '0/2/4', '0/2/5'];
            console.log('Hall Recibidor Izquierdo');
            HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == '0') {
                            this.encendido_sm_hall_reci_izq = true;
                            button.dataset.estado = '1';
                        } else{
                            this.encendido_sm_hall_reci_izq = false;
                            button.dataset.estado = '0';
                        }
                    } else{
                        console.log(error);
                    }
                });
        },
        
        s_hall_sp() {
            const button = this.$refs.s_hall_sp;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['1/3/11','1/3/10'];
            console.log('Hall Sala de prensa');
            HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == '0') {
                            this.encendido_sm_hall_sp = true;
                            button.dataset.estado = '1';
                        } else{
                            this.encendido_sm_hall_sp = false;
                            button.dataset.estado = '0';
                        }
                    }
                });
        },
        s_hall_pk_este() {
            const button = this.$refs.s_hall_pk_este;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['2/0/4'];
            console.log('Parqueo Este');
            HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == 0) {
                            this.encendido_pk_este = true;
                            button.dataset.estado = 1;
                        } else{
                            this.encendido_pk_este = false;
                            button.dataset.estado = 0;
                        }
                    }
                });
        },
        //  Falta 2/0/0 - 2/0/1 - 2/0/2
        s_hall_pk_oeste() {
            const button = this.$refs.s_hall_pk_oeste;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['2/0/3'];
            console.log('Parqueo Oeste');
            HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == 0) {
                            this.encendido_pk_oeste = true;
                            button.dataset.estado = 1;
                        } else{
                            this.encendido_pk_oeste = false;
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
            grupos = ['0/0/7', '0/0/8','0/0/10','2/0/0','2/0/1', '2/0/2'];
            console.log('Ingreso Parqueo');
            HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == 0) {
                            this.encendido_pk_ingreso = true;
                            button.dataset.estado = 1;
                        } else{
                            this.encendido_pk_ingreso = false;
                            button.dataset.estado = 0;
                        }
                    }
                });
        },
        s_hall_scr() {
            const button = this.$refs.s_hall_scr;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['0/0/9'];
            console.log('Sala de control recibidor');
            HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == 0) {
                            this.encendido_s_hall_scr = true;
                            button.dataset.estado = 1;
                        } else{
                            this.encendido_s_hall_scr = false;
                            button.dataset.estado = 0;
                        }
                    }
                });
        },
        s_hall_ofp(){
            const button = this.$refs.s_hall_ofp;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['1/3/8'];
            console.log('Sala de prensa');
            HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == 0) {
                            this.encendido_s_hall_ofp = true;
                            button.dataset.estado = 1;
                        } else{
                            this.encendido_s_hall_ofp = false;
                            button.dataset.estado = 0;
                        }
                    }
                });
        },
        acceso_1(){
            const button = this.$refs.acceso_1;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['2/1/0'];
            console.log('Sala de prensa');
            HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == 0) {
                            this.encendido_acceso_1 = true;
                            button.dataset.estado = 1;
                        } else{
                            this.encendido_acceso_1 = false;
                            button.dataset.estado = 0;
                        }
                    }
                });
        },
        acceso_2(){
            const button = this.$refs.acceso_2;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['2/1/1'];
            console.log('Sala de prensa');
            HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == 0) {
                            this.encendido_acceso_2 = true;
                            button.dataset.estado = 1;
                        } else{
                            this.encendido_acceso_2 = false;
                            button.dataset.estado = 0;
                        }
                    }
                });
        },
        acceso_3(){
            const button = this.$refs.acceso_3;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['2/1/2'];
            console.log('Sala de prensa');
            HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == 0) {
                            this.encendido_acceso_3 = true;
                            button.dataset.estado = 1;
                        } else{
                            this.encendido_acceso_3 = false;
                            button.dataset.estado = 0;
                        }
                    }
                });
        },
        acceso_4(){
            const button = this.$refs.acceso_4;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['2/1/3'];
            console.log('Sala de prensa');
            HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == 0) {
                            this.encendido_acceso_4 = true;
                            button.dataset.estado = 1;
                        } else{
                            this.encendido_acceso_4 = false;
                            button.dataset.estado = 0;
                        }
                    }
                });
        },
        acceso_ascensores_1(){
            const button = this.$refs.acceso_ascensores_1;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['1/1/8'];
            console.log('Sala de prensa');
            HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == 0) {
                            this.encendido_acceso_ascensores_1 = true;
                            button.dataset.estado = 1;
                        } else{
                            this.encendido_acceso_ascensores_1 = false;
                            button.dataset.estado = 0;
                        }
                    }
                });
        },
        acceso_ascensores_2(){
            const button = this.$refs.acceso_ascensores_2;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['1/1/9'];
            console.log('Sala de prensa');
            HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == 0) {
                            this.encendido_acceso_ascensores_2 = true;
                            button.dataset.estado = 1;
                        } else{
                            this.encendido_acceso_ascensores_2 = false;
                            button.dataset.estado = 0;
                        }
                    }
                });
        },
        acceso_ascensores_3(){
            const button = this.$refs.acceso_ascensores_3;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['1/1/10'];
            console.log('Sala de prensa');
            HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == 0) {
                            this.encendido_acceso_ascensores_3 = true;
                            button.dataset.estado = 1;
                        } else{
                            this.encendido_acceso_ascensores_3 = false;
                            button.dataset.estado = 0;
                        }
                    }
                });
        },
        acceso_garage(){
            const button = this.$refs.acceso_garage;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['2/0/7'];
            console.log('Sala de prensa');
            HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == 0) {
                            this.encendido_acceso_garage = true;
                            button.dataset.estado = 1;
                        } else{
                            this.encendido_acceso_garage = false;
                            button.dataset.estado = 0;
                        }
                    }
                });
        },
        riego_norte_master(){
         const button = this.$refs.riego_norte_master;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['8/0/0', '8/0/3'];
            console.log('Sistema de riego Master');
            try {
                HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) }, timeout:3000 },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == 0) {
                                this.encendido_riego_norte_master = true;
                                button.dataset.estado = 1;
                            } else{
                                this.encendido_riego_norte_master = false;
                                button.dataset.estado = 0;
                            }
                        }
                });   
                
            } catch (error) {
                console.log('Error HTTP: '+error);
            }
        },
        riego_norte_a_2(){
         const button = this.$refs.riego_norte_a_2;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['8/0/1', '8/0/0'];
            console.log('Sistema de riego 2');
            HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == 0) {
                            this.encendido_riego_norte_a_2 = true;
                            button.dataset.estado = 1;
                        } else{
                            this.encendido_riego_norte_a_2 = false;
                            button.dataset.estado = 0;
                        }
                    }
                });   
        },
        riego_norte_a_3(){
         const button = this.$refs.riego_norte_a_3;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['8/0/2', '8/0/0'];
            console.log('Sala de prensa');
            HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == 0) {
                            this.encendido_riego_norte_a_3 = true;
                            button.dataset.estado = 1;
                        } else{
                            this.encendido_riego_norte_a_3 = false;
                            button.dataset.estado = 0;
                        }
                    }
                });   
        },
        riego_norte_a_4(){
         const button = this.$refs.riego_norte_a_4;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['8/0/0', '8/1/0', '8/1/5'];
            console.log('Sala de prensa');
            HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == 0) {
                            this.encendido_riego_norte_a_4 = true;
                            button.dataset.estado = 1;
                        } else{
                            this.encendido_riego_norte_a_4 = false;
                            button.dataset.estado = 0;
                        }
                    }
                });   
        },
        riego_norte_a_5(){
         const button = this.$refs.riego_norte_a_5;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['8/1/3'];
            console.log('Sala de prensa');
            HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == 0) {
                            this.encendido_riego_norte_a_5 = true;
                            button.dataset.estado = 1;
                        } else{
                            this.encendido_riego_norte_a_5 = false;
                            button.dataset.estado = 0;
                        }
                    }
                });   
        },
        riego_norte_a_6(){
         const button = this.$refs.riego_norte_a_6;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['8/1/4'];
            console.log('Sala de prensa');
            HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == 0) {
                            this.encendido_riego_norte_a_6 = true;
                            button.dataset.estado = 1;
                        } else{
                            this.encendido_riego_norte_a_6 = false;
                            button.dataset.estado = 0;
                        }
                    }
                });   
        },
        riego_norte_a_7(){
         const button = this.$refs.riego_norte_a_7;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['8/1/1', '8/1/2', '8/1/4'];
            console.log('Sala de prensa');
            HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == 0) {
                            this.encendido_riego_norte_a_7 = true;
                            button.dataset.estado = 1;
                        } else{
                            this.encendido_riego_norte_a_7 = false;
                            button.dataset.estado = 0;
                        }
                    }
                });   
        },
        sm_ctrl_energia(){
         const button = this.$refs.sm_ctrl_energia;
            let valor = button.dataset.estado,
            d_voltage = 0;
            console.log("Estado: "+valor);
            HTTP.call('POST', 'http://192.168.8.6:3001/api/modbus/devices',
                { data: { "ip": "192.168.8.21", "parameter": "voltage", "type": "instant" } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        this.dd_voltage_1 = result.data.message.line1.value;
                        this.dd_voltage_2 = result.data.message.line2.value;
                        this.dd_voltage_3 = result.data.message.line3.value;

                        let test = JSON.stringify(result.data.message);
                    } else{
                        // console.log(" Error:  "+error);
                        alert("Se perdio la conexion con el server!");
                    }
                });  
        },
  },
}
</script>

<style scoped>
.encendido{
    color: #ffc107;
}
.fondo{
    background-image: url('/images/SalaVip.png') no-repeat center center fixed;
}

</style>
