<template>
            <div class="bloques" >
                    <div class="titulo">
                        <span class="encendido">Auditorio</span>
                    </div>
                    <router-link :to="{name: 'au'}">
                        <div class="h-100" id="blq_auditorio">
                                <figure>
                                    <img src="/images/Auditorio.png" alt="" class="img_sm">
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
    width: 90%;
}
</style>

