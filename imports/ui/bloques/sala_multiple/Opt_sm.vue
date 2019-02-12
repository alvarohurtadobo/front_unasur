<template>
   <div class="col-md-12">
        <div class="row">
            <div class="col-md-6 division">
                <div class="text-center titulo">
                    <span>Sala Multiple</span>
                </div>
                <div class="col-md-12">
                    <router-link to="accesos_sm_detalle" class="text-decoration-none">
                        <div class="row">
                            <div class="col-md-9 accion">
                                Accesos Pk/Ascensores
                            </div>
                            <div class="col-md-3 accion text-center">
                                <img v-bind:src="[encendido_acceso_1 ? '/images/layout/Acceso2.png': '/images/layout/Acceso2.png']" alt="">
                            </div>
                        </div>
                    </router-link>
                    <router-link to="iluminacion_sm_convensiones" class="text-decoration-none">
                        <div class="row">
                            <div class="col-md-9 accion">
                                Iluminación convensiones
                            </div>
                            <div class="col-md-3 accion text-center">
                                <img v-bind:src="[encendido_acceso_1 ? '/images/layout/Iluminacion2.png': '/images/layout/Iluminacion2.png']" alt="">
                            </div>
                        </div>
                    </router-link>
                    <router-link to="iluminacion_sm_hall" class="text-decoration-none">
                        <div class="row">
                            <div class="col-md-9 accion">
                                Iluminación Hall
                            </div>
                            <div class="col-md-3 accion text-center">
                                <img v-bind:src="[encendido_acceso_1 ? '/images/layout/Iluminacion2.png': '/images/layout/Iluminacion2.png']" alt="">
                            </div>
                        </div>
                    </router-link>
                    <router-link to="iluminacion_sm_parqueo" class="text-decoration-none">
                        <div class="row">
                            <div class="col-md-9 accion">
                                Iluminación Parqueo
                            </div>
                            <div class="col-md-3 accion text-center">
                                <img v-bind:src="[encendido_acceso_1 ? '/images/layout/Iluminacion2.png': '/images/layout/Iluminacion2.png']" alt="">
                            </div>
                        </div>
                    </router-link>
                    <router-link to="energia_sm" class="text-decoration-none">
                        <div class="row">
                            <div class="col-md-9 accion">
                                Indicadores energia
                            </div>
                            <div class="col-md-3 accion text-center">
                                <img v-bind:src="[encendido_acceso_1 ? '/images/layout/MedidorEnergia2.png': '/images/layout/MedidorEnergia2.png']" alt="">
                            </div>
                        </div>
                    </router-link>
                    <router-link to="riego" class="text-decoration-none">
                        <div class="row">
                            <div class="col-md-9 accion">
                                Sistema de Riego
                            </div>
                            <div class="col-md-3 accion text-center">
                                <img v-bind:src="[encendido_acceso_1 ? '/images/layout/MedidorEnergia2.png': '/images/layout/MedidorEnergia2.png']" alt="">
                            </div>
                        </div>
                    </router-link>
                </div>           
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.accesos{
    font-size: 2.5rem;
    /* color: #ffc107; */
}
img{
    width: 36%;
}
</style>
