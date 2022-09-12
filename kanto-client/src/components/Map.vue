<template>
<div class="te">
    <w-app>
     <w-tag xl height="3em" class="heading" bg-color="primary">Map of World Kanto</w-tag>   
    <w-image class="image" src="https://i.pinimg.com/originals/cc/f9/90/ccf990be4141e36c91bc2b3acf2bbcc7.png" :width="1400"
    :height="1400">
    </w-image> 
    </w-app>
</div>
</template>

<script>
export default {
    name: "Map",
};
</script>

<style scoped>

.te {
    position: relative;
    top: -360px;
    background-color:#8e91e8;
}
.image{
    position: relative;
    top:10px;
    left: 57px;
}
.footer{
    position:relative;
    top:20px;
}
</style>
