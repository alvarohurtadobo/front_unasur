<template>
    <div class="col-md-6">
        <div class="text-center subtitulo">
            <span class="text-center">Reset Incendio PC</span>
        </div>
        <div class="col-md-12">
            <div ref="incendio_pc" class="row bloque_opcion" v-on:click='incendio_pc' data-estado="0">
                <div class="col-md-2">
                    <img v-bind:src="[encendido_incendio_pc ? '/images/layout/Clima.png': '/images/layout/Clima.png']" alt="">
                </div>
                <div class="col-md-8 opcion">
                    Reset incendio PC
                </div>
                <div class="col-md-2">
                    <img v-bind:src="[encendido_incendio_pc ? '/images/layout/Clima.png': '/images/layout/Clima.png']" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        encendido_incendio_pc: Boolean,
    },
    methods:{
        incendio_pc() {
            let bloque_1 = new Array();
            bloque_1 = ["0/1/11"];
            const button = this.$refs.incendio_pc
            let valor = button.dataset.estado;
            console.log("Estado: "+valor);

                let result = HTTP.call('POST', 'http://192.168.8.6:3001/api/knx/devices',
                    { data: { "ip": "192.168.2.86", "group": bloque_1, "order": parseInt(valor)} },
                    (error, result) => {
                        if (!error) {
                            console.log("Los datos recibidos son: " + JSON.stringify(result.data));
                            if (valor == '0') {
                                this.encendido_incendio_pc = false;
                                button.dataset.estado = '1';
                            } else{
                                this.encendido_incendio_pc = true;
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

<style>

</style>
