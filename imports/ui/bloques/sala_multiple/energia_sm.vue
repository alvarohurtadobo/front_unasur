<template>
    <div class="col-md-6">
        <div class="text-center subtitulo">
            <span class="text-center">Control Energía</span>
        </div>
            <div class="row">
                <div class="col-md-6 text-center">
                    <button ref="sm_ctrl_energia" class="btn btn-lg" v-bind:class="[ encendido_sm_ctrl_energia ? 'btn-warning' : 'btn-primary' ]" v-on:click='sm_ctrl_energia' data-estado="1"><i class="fa fa-bolt"></i> Niveles de Voltage</button> 
                    <table class="table table-dark table-condensed table-striped table-hover indicadores">
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
                    <div class="col-md-6 text-center">
                        <button ref="sm_ctrl_corriente" class="btn btn-lg" v-bind:class="[ encendido_sm_ctrl_corriente ? 'btn-warning' : 'btn-primary' ]" v-on:click='sm_ctrl_corriente' data-estado="0"><i class="fa fa-bolt"></i> Niveles de Corriente</button> 
                        <table class="table table-dark table-condensed table-striped table-hover indicadores">
                            <thead>
                                <tr>
                                    <th>Linea</th>
                                    <th>corriente</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Linea 1</td>
                                    <td>{{dd_corriente_dd_linea_1}}</td>
                                </tr>
                                <tr>
                                    <td>Linea 2</td>
                                    <td>{{dd_corriente_dd_linea_2}}</td>
                                </tr>
                                <tr>
                                    <td>Linea 3</td>
                                    <td>{{dd_corriente_dd_linea_3}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
    </div>
</template>

<script>
export default {
    props: {
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
        sm_ctrl_energia(){
         const button = this.$refs.sm_ctrl_energia;
            let valor = button.dataset.estado,
            d_voltage = 0;
            console.log("Estado: "+valor);
            HTTP.call('POST', 'http://172.21.0.3:3001/api/modbus/devices',
                { data: { "ip": "192.168.2.87", "parameter": "voltage", "type": "instant" } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data.message.line1.value));
                        this.dd_voltage_dd_linea_1 = result.data.message.line1.value;
                        this.dd_voltage_dd_linea_2 = result.data.message.line2.value;
                        this.dd_voltage_dd_linea_3 = result.data.message.line3.value;

                        let test = JSON.stringify(result.data.message);
                    } else{
                        // console.log(" Error:  "+error);
                        alert("Se perdio la conexion con el server!");
                    }
                });  
        },
        sm_ctrl_corriente(){
         const button = this.$refs.sm_ctrl_corriente;
            let valor = button.dataset.estado,
            d_voltage = 0;
            console.log("Estado: "+valor);
            HTTP.call('POST', 'http://172.21.0.3:3001/api/modbus/devices',
                { data: { "ip": "192.168.2.87", "parameter": "current", "type": "instant" } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data.message.line1.value));
                        this.dd_corriente_dd_linea_1 = result.data.message.line1.value;
                        this.dd_corriente_dd_linea_2 = result.data.message.line2.value;
                        this.dd_corriente_dd_linea_3 = result.data.message.line3.value;

                        let test = JSON.stringify(result.data.message);
                    } else{
                        // console.log(" Error:  "+error);
                        alert("Se perdio la conexion con el server!");
                    }
                });  
        },
    }

}
</script>

<style>
.indicadores{
    font-size: 16px;
    color: #EF8B1E;
}
</style>
