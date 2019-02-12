<template>
    <div class="h-100 col-md-12">
        <div class="h-100 row">
            <div class="h-100 col-md-6 division">
                <div class="text-center titulo">
                    <span>Sala VIP</span>
                </div>
                <div class="col-md-12">
                    <router-link to="iluminacion_vip" class="text-decoration-none">
                        <div class="row">
                            <div class="col-md-9 accion">
                                Iluminacion VIP
                            </div>
                            <div class="col-md-3 accion">
                                <img v-bind:src="[encendido_acceso_1 ? '/images/layout/Acceso2.png': '/images/layout/Acceso2.png']" alt="">
                            </div>
                        </div>
                    </router-link>

                </div>
                <div class="col-md-12">
                    <router-link to="dimmer_vip" class="text-decoration-none">
                        <div class="row">
                            <div class="col-md-9 accion">
                                Dimmerización
                            </div>
                            <div class="col-md-3 accion">
                                <img v-bind:src="[encendido_acceso_1 ? '/images/layout/Iluminacion2.png': '/images/layout/Iluminacion2.png']" alt="">
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-md-12">
                    <router-link to="rgb_vip" class="text-decoration-none">
                        <div class="row">
                            <div class="col-md-9 accion">
                                RGB VIP
                            </div>
                            <div class="col-md-3 accion">
                                <img v-bind:src="[encendido_acceso_1 ? '/images/layout/Iluminacion2.png': '/images/layout/Iluminacion2.png']" alt="">
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-md-12">
                    <router-link to="aire_vip" class="text-decoration-none">
                        <div class="row">
                            <div class="col-md-9 accion">
                                Aire Acondicionado
                            </div>
                            <div class="col-md-3 accion">
                                <img v-bind:src="[encendido_acceso_1 ? '/images/layout/clima.png': '/images/layout/Clima.png']" alt="">
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
