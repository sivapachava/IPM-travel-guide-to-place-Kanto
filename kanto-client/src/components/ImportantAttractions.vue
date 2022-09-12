<template>
<div class="test">
    <w-app>
        <w-tag xl height="3em" class="heading" bg-color="primary">Tourist Attractions in World Kanto</w-tag>

        <div class="cities">
            <vueper-slides class="no-shadow" slide-multiple :arrows-outside="false" :visible-slides="4" :slide-ratio="1 / 4" :dragging-distance="70">
                <vueper-slide v-for="i in 12" :key="i" :title="i.toString()" :style="'background-color: ' + ['#043e94', '#2c3f5c'][i % 2]">
                <template #content>
                        <div class="vueperslide__content-wrapper">
                            <div class="vueperslide__title">Kanto</div>
                            <div class="vueperslide__content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                        </div>
                    </template>
                </vueper-slide>
            </vueper-slides>
        </div>
    </w-app>
</div>
</template>

<script>
import {
    VueperSlides,
    VueperSlide
} from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
    name: "ImportantAttractions",
    components: {
        VueperSlides,
        VueperSlide,
    },
};
</script>

<style scoped>
.heading {
    font-size: 5em;
    color: white;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.no-shadow {
    position: relative;
    height: -10000px;
}

.test {
    position: relative;
    top: -1830px;
    height: 0;
}
.vueperslide__title {
    font-size: 2em;
    color: white;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    text-decoration: underline;
}

.vueperslide__content {
    font-size: 1em;
    color: white;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    text-align: justify;
    padding:7px
}
</style>
