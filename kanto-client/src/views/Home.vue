<template>
  <div>
    <w-app>
    <div >
        <w-toolbar fixed bg-color="info-dark1" color="white">
            <div class="title2">Kanto Travel Guide</div>
            <div class="spacer"></div>
            <span class="ml2"><a class="test1" href="#kanto">Kanto</a></span>
            <span class="ml2"><a class="test1" href="#places">Cities</a></span>
            <span class="test1 ml2"><a class="test1" href="#attractions">Attractions</a></span>
            <span class="test1 ml2"><a class="test1" href="#badges">Badges</a></span>
            <span class="test1 ml2"><a class="test1" href="#pictures">Pictures</a></span>
             <span class="test1 ml2"><a class="test1" href="#map">Map</a></span>
            <span class="test1 ml2"><a class="test1" href="/admin">Admin</a></span>
        </w-toolbar>
    </div>
</w-app>
    <ImageSlider class="image"   />
    <KantoDes class="tabs" id="kanto" />
    <CityTable class="table" />
    <ImportantPlaces  id="places"  />
    <ImportantAttractions id="attractions" />
    <Badges id="badges" />
    <Pictures id="pictures" />
    <Map id="map" />
    <div class="foot"></div>
  </div>
</template>

<script>
import ImageSlider from "../components/ImageSlider.vue";
///import NavBar from "../components/NavBar.vue";
import KantoDes from "../components/KantoDes.vue";
import CityTable from "../components/CityTable.vue";
import ImportantPlaces from "../components/ImportantPlaces.vue";
import ImportantAttractions from "../components/ImportantAttractions.vue";
import Badges from "../components/Badges.vue";
import Pictures from "../components/Pictures.vue"
import Map from "../components/Map.vue"
export default {
  components: {
    ImageSlider,
   /// NavBar,
    KantoDes,
    CityTable,
    ImportantPlaces,
    ImportantAttractions,
    Badges,
    Pictures,
    Map
    
  },
  data: () => ({
    openDrawer: false,
    showNav:true

  }),
};
</script>

<style scoped>
.image {
  position: relative;
  top: -675px;
  
}
.tabs {
  position: relative;
  top: -675px;
}
.table{
  position: relative;
  top:-1209px;
 
}
.title2 {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 11cm;
}
.foot{
  position:relative;
  height:500px;
  background-color:rgb(40, 79, 206);
  top:-300px
}

.test1 {
    padding-left: 0px;
    padding-right: 5px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: .5cm;
    color: white;
}

a:link,
a:visited {
    background-color: info-dark1;
    color: rgb(255, 255, 255);
    border: 2px solid info-dark1;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
}

a:hover,
a:active {
    background-color: rgb(26, 59, 245);
    color: white;

}
.mainfooter{
  position: relative;
  top:-340px
}

</style>
