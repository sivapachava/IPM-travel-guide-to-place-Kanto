<template>
<w-app>
    <w-tabs color="blue" bg-color="indigo-light5" :items="tabs" :fill-bar="fillBar"></w-tabs>
</w-app>
</template>

<script>
export default {
    data: () => ({
        tabs: [{
                title: "World Kanto",
                content: "kanto is a region of the Pokemon Universe.Kanto lies to the east of Johto; they presumably make up a small continent; to the south of Kanto are the Sevii and Orange Islands. Hoenn, introduced in Pokémon Ruby, Sapphire, and Emerald, is supposedly further to the southwest. Routes located wholly within Kanto are numbered 1 to 25; routes 26, 27, and 28 connect Kanto with Johto. Supposedly to the north of this continent is the Sinnoh region. Unova is in a considerable distance away and it is unknown where both it and Kalos are in relation to Kanto.Compared to traditional Kansai, on which Johto is based, Kanto is modern and technological. This may be reflected in the look of the cities and the buildings, such as the Pokémon Lab of Cinnabar Island and the Power Plant. While Kanto is the centerpoint for innovation, with the Poké Balls ultimate upgrade, the Master Ball, having been recently invented by Silph Co. All cities in kanto is named after colors, with the exception of Pallet Town, which refers to a palette, meaning a range of colors.",
            },
            {
                title: "Tourist Attractions",
                content: "kanto is a region of the Pokemon Universe.Kanto lies to the east of Johto; they presumably make up a small continent; to the south of Kanto are the Sevii and Orange Islands. Hoenn, introduced in Pokémon Ruby, Sapphire, and Emerald, is supposedly further to the southwest. Routes located wholly within Kanto are numbered 1 to 25; routes 26, 27, and 28 connect Kanto with Johto. Supposedly to the north of this continent is the Sinnoh region. Unova is in a considerable distance away and it is unknown where both it and Kalos are in relation to Kanto.Compared to traditional Kansai, on which Johto is based, Kanto is modern and technological. This may be reflected in the look of the cities and the buildings, such as the Pokémon Lab of Cinnabar Island and the Power Plant. While Kanto is the centerpoint for innovation, with the Poké Balls ultimate upgrade, the Master Ball, having been recently invented by Silph Co. All cities in kanto is named after colors, with the exception of Pallet Town, which refers to a palette, meaning a range of colors.",
            },
        ],
        fillBar: true,
    }),
};
</script>

<style scoped>
</style>
