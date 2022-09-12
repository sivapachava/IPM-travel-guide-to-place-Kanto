<template>
<w-app>
    <NavBar />
    <splitpanes class="default-theme" horizontal style="height: 720px">
        <pane>
            <splitpanes :push-other-panes="false">
                <pane>
                    <KantoDesc />
                </pane>
                <pane>
                    <CityFacts />
                </pane>
                <pane>
                    <AddCity />
                </pane>
            </splitpanes>
        </pane>
        <pane>
            <splitpanes style="height: 720px">
                <pane>
                    <AddTourist />
                </pane>
                <pane>
                    <AddBadges />
                </pane>
                <pane>
                    <AddPictures />
                </pane>
            </splitpanes>
        </pane>
    </splitpanes>
</w-app>
</template>

<script>
import KantoDesc from "../components/EditKantoDesc.vue";
import CityFacts from "../components/CityFacts.vue";
import AddCity from "../components/AddEditCity.vue";
import NavBar from "../components/NavBar.vue";
import AddTourist from "../components/AddTourist.vue";
import AddBadges from "../components/AddBadges.vue";
import AddPictures from "../components/AddPictures.vue";
import {
    Splitpanes,
    Pane
} from "splitpanes";
import "splitpanes/dist/splitpanes.css";
export default {
    components: {
        Splitpanes,
        Pane,
        NavBar,
        KantoDesc,
        CityFacts,
        AddCity,
        AddTourist,
        AddBadges,
        AddPictures,
    },
};
</script>

<style scoped>
.default-theme {
    position: absolute;
    top: 70px;
}
</style>
