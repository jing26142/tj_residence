<template>
    <div class="backdrop" @click=closeImg>
        <div>
            <img class="enlarge" :src="getImgUrl(selectImage)">
        </div> 
    </div>
</template>


<script>
export default {
    props: ['selectImage'],
    methods: {
        closeImg(){
            this.$emit('close')
        },
        
        getImgUrl(pic) {
            return require('../../public/pictures/'+pic)
        },
    },
}
</script>

<style scoped>

.backdrop{
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%
}

.backdrop img{
    margin-top: 2%;
    width:60%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

@media (max-width:730px) {
  .backdrop img{
    width:100%;
    margin-top: 0%;
    margin-bottom: 2%;
  }
}


</style>