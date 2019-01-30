<template>
            <div class="bloques" >
                    <div class="titulo">
                        <span class="encendido">Sala VIP</span>
                    </div>
                    <router-link :to="{name: 'vip'}" >
                        <div class="h-100" id="blq_sala_vip">
                                <figure>
                                    <img src="/images/SalaVip.png" alt="" class="img_sm">
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
    width: 80%;
}
</style>

