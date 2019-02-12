<template>
    <div class="col-md-6">
        <div class="text-center subtitulo">
            <span class="text-center">Accesos Sala múltiple</span>
        </div>
        <div class="col-md-12">
            <div ref="acceso_1" class="row bloque_opcion" v-on:click='acceso_1' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_acceso_1 ? '/images/layout/Iconos_peques/AccesoA.png': '/images/layout/Iconos_peques/AccesoB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    
                    Puerta acceso Hall 1
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_acceso_1 ? '/images/layout/Iconos_peques/AccesoA.png': '/images/layout/Iconos_peques/AccesoB.png']" alt="">
                </div>
            </div>
            <div ref="acceso_2" class="row bloque_opcion" v-on:click='acceso_2' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_acceso_2 ? '/images/layout/Iconos_peques/AccesoA.png': '/images/layout/Iconos_peques/AccesoB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Puerta acceso Hall 2
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_acceso_2 ? '/images/layout/Iconos_peques/AccesoA.png': '/images/layout/Iconos_peques/AccesoB.png']" alt="">
                </div>
            </div>
            <div ref="acceso_3" class="row bloque_opcion" v-on:click='acceso_3' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_acceso_3 ? '/images/layout/Iconos_peques/AccesoA.png': '/images/layout/Iconos_peques/AccesoB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Puerta acceso Hall 3
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_acceso_3 ? '/images/layout/Iconos_peques/AccesoA.png': '/images/layout/Iconos_peques/AccesoB.png']" alt="">
                </div>
            </div>
            <div ref="acceso_4" class="row bloque_opcion" v-on:click='acceso_4' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_acceso_4 ? '/images/layout/Iconos_peques/AccesoA.png': '/images/layout/Iconos_peques/AccesoB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Puerta acceso Hall 4
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_acceso_4 ? '/images/layout/Iconos_peques/AccesoA.png': '/images/layout/Iconos_peques/AccesoB.png']" alt="">
                </div>
            </div>
            <div ref="acceso_ascensores_1" class="row bloque_opcion" v-on:click='acceso_ascensores_1' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_acceso_ascensores_1 ? '/images/layout/Iconos_peques/AccesoA.png': '/images/layout/Iconos_peques/AccesoB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Puerta ascensores 1
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_acceso_ascensores_1 ? '/images/layout/Iconos_peques/AccesoA.png': '/images/layout/Iconos_peques/AccesoB.png']" alt="">
                </div>
            </div>
            <div ref="acceso_ascensores_2" class="row bloque_opcion" v-on:click='acceso_ascensores_2' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_acceso_ascensores_2 ? '/images/layout/Iconos_peques/AccesoA.png': '/images/layout/Iconos_peques/AccesoB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Puerta ascensores 2
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_acceso_ascensores_2 ? '/images/layout/Iconos_peques/AccesoA.png': '/images/layout/Iconos_peques/AccesoB.png']" alt="">
                </div>
            </div>
            <div ref="acceso_ascensores_3" class="row bloque_opcion" v-on:click='acceso_ascensores_3' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_acceso_ascensores_3 ? '/images/layout/Iconos_peques/AccesoA.png': '/images/layout/Iconos_peques/AccesoB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Puerta ascensores 3
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_acceso_ascensores_3 ? '/images/layout/Iconos_peques/AccesoA.png': '/images/layout/Iconos_peques/AccesoB.png']" alt="">
                </div>
            </div>
            <div ref="acceso_garage" class="row bloque_opcion" v-on:click='acceso_garage' data-estado="1">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_acceso_garage ? '/images/layout/Iconos_peques/AccesoA.png': '/images/layout/Iconos_peques/AccesoB.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Puerta Garage
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_acceso_garage ? '/images/layout/Iconos_peques/AccesoA.png': '/images/layout/Iconos_peques/AccesoB.png']" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        encendido_acceso_1: Boolean,
        encendido_acceso_2: Boolean,
        encendido_acceso_3: Boolean,
        encendido_acceso_4: Boolean,
        encendido_acceso_ascensores_1: Boolean,
        encendido_acceso_ascensores_2: Boolean,
        encendido_acceso_ascensores_3: Boolean,
        encendido_acceso_garage: Boolean,
    },
    methods:{
        acceso_1(){
            const button = this.$refs.acceso_1;
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);
            let grupos = new Array();
            grupos = ['2/1/0'];
            console.log('Acceso Hall 1');
            HTTP.call('POST', 'http://172.18.0.3:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == 0) {
                            this.encendido_acceso_1 = false;
                            button.dataset.estado = 1;
                        } else{
                            this.encendido_acceso_1 = true;
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
            HTTP.call('POST', 'http://172.18.0.3:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == 0) {
                            this.encendido_acceso_2 = false;
                            button.dataset.estado = 1;
                        } else{
                            this.encendido_acceso_2 = true;
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
            HTTP.call('POST', 'http://172.18.0.3:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == 0) {
                            this.encendido_acceso_3 = false;
                            button.dataset.estado = 1;
                        } else{
                            this.encendido_acceso_3 = true;
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
            HTTP.call('POST', 'http://172.18.0.3:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == 0) {
                            this.encendido_acceso_4 = false;
                            button.dataset.estado = 1;
                        } else{
                            this.encendido_acceso_4 = true;
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
            console.log('Acceso ascensores 1, Grupo: '+ grupos);
            HTTP.call('POST', 'http://172.18.0.3:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == 0) {
                            this.encendido_acceso_ascensores_1 = false;
                            button.dataset.estado = 1;
                        } else{
                            this.encendido_acceso_ascensores_1 = true;
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
            console.log('Acceso ascensores 2, grupos: '+grupos);
            HTTP.call('POST', 'http://172.18.0.3:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == 0) {
                            this.encendido_acceso_ascensores_2 = false;
                            button.dataset.estado = 1;
                        } else{
                            this.encendido_acceso_ascensores_2 = true;
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
            console.log('Acceso ascensores 3, Grupos: '+grupos);
            HTTP.call('POST', 'http://172.18.0.3:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == 0) {
                            this.encendido_acceso_ascensores_3 = false;
                            button.dataset.estado = 1;
                        } else{
                            this.encendido_acceso_ascensores_3 = true;
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
            console.log('Acceso garage, grupo: '+grupos);
            HTTP.call('POST', 'http://172.18.0.3:3001/api/knx/devices',
                { data: { "ip": "192.168.8.254", "group": grupos, "order": parseInt(valor) } },
                (error, result) => {
                    if (!error) {
                        console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                        if (valor == 0) {
                            this.encendido_acceso_garage = false;
                            button.dataset.estado = 1;
                        } else{
                            this.encendido_acceso_garage = true;
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
