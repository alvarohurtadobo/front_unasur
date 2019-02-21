<template>
<div class="h-100 col-md-12">
    <div class="h-100 row scroll">
        <div class="h-100 col-md-6 division">
            <div class="text-center titulo">
                <span>Auditorio</span>
            </div>
            <div class="col-md-12">
                <router-link to="accesos_au" class="text-decoration-none">
                    <div class="row">
                        <div class="col-md-9 accion">
                            Accesos Auditorio
                        </div>
                        <div class="col-md-3 accion text-center">
                            <img v-bind:src="[encendido_acceso_1 ? '/images/layout/Acceso2.png': '/images/layout/Acceso2.png']" alt="">
                        </div>
                    </div>
                </router-link>
                <router-link to="iluminacion_au" class="text-decoration-none">
                    <div class="row">
                        <div class="col-md-9 accion">
                            Iluminación Auditorio
                        </div>
                        <div class="col-md-3 accion text-center">
                            <img v-bind:src="[encendido_acceso_1 ? '/images/layout/Iluminacion2.png': '/images/layout/Iluminacion2.png']" alt="">
                        </div>
                    </div>
                </router-link>
                <router-link to="iluminacion_au_prin" class="text-decoration-none">
                    <div class="row">
                        <div class="col-md-9 accion">
                            Iluminación Audit. Principal
                        </div>
                        <div class="col-md-3 accion text-center">
                            <img v-bind:src="[encendido_acceso_1 ? '/images/layout/Iluminacion2.png': '/images/layout/Iluminacion2.png']" alt="">
                        </div>
                    </div>
                </router-link>
                
                <router-link to="iluminacion_au_a" class="text-decoration-none">
                    <div class="row">
                        <div class="col-md-9 accion">
                            Iluminación Auditorio A
                        </div>
                        <div class="col-md-3 accion text-center">
                            <img v-bind:src="[encendido_acceso_1 ? '/images/layout/Iluminacion2.png': '/images/layout/Iluminacion2.png']" alt="">
                        </div>
                    </div>
                </router-link>
                <router-link to="iluminacion_au_b" class="text-decoration-none">
                    <div class="row">
                        <div class="col-md-9 accion">
                            Iluminación Auditorio B
                        </div>
                        <div class="col-md-3 accion text-center">
                            <img v-bind:src="[encendido_acceso_1 ? '/images/layout/Iluminacion2.png': '/images/layout/Iluminacion2.png']" alt="">
                        </div>
                    </div>
                </router-link>
                <router-link to="dimmer_auditorios" class="text-decoration-none">
                    <div class="row">
                        <div class="col-md-9 accion">
                            Dimmer Auditorios
                        </div>
                        <div class="col-md-3 accion text-center">
                            <img v-bind:src="[encendido_acceso_1 ? '/images/layout/Iluminacion2.png': '/images/layout/Iluminacion2.png']" alt="">
                        </div>
                    </div>
                </router-link>
                <router-link to="aire_au_prin" class="text-decoration-none">
                    <div class="row">
                        <div class="col-md-9 accion">
                            Aire Auditorios
                        </div>
                        <div class="col-md-3 accion text-center">
                            <img v-bind:src="[encendido_acceso_1 ? '/images/layout/Clima.png': '/images/layout/Clima.png']" alt="">
                        </div>
                    </div>
                </router-link>
                <router-link to="camaras_au_prin" class="text-decoration-none">
                    <div class="row">
                        <div class="col-md-9 accion">
                            Cámaras Auditorios
                        </div>
                        <div class="col-md-3 accion text-center">
                            <img v-bind:src="[encendido_acceso_1 ? '/images/layout/Clima.png': '/images/layout/Clima.png']" alt="">
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
img{
    width: 36%;
}
</style>
