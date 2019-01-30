<template>
            <div class="bloques" >
                    <div class="titulo">
                        <span class="encendido">P. comidas</span>
                    </div>
                    <router-link :to="{name: 'pc'}">
                        <div class="h-100" id="blq_plz_comidas">
                                <figure>
                                    <img src="/images/PlazaDeComidas.png" alt="" class="img_sm">
                                </figure>
                        </div>
                    </router-link>
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
#blq_sala_multiple:hover{
    cursor: pointer;
}

.titulo{
    background-color: rgba(54, 70, 136, 0.6);
}
.img_sm{
    width: 85%;
}
</style>

