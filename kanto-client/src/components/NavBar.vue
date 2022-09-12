<template>
<w-app>
    <div>
        <w-toolbar bg-color="info-dark1" color="white">
            <div class="test">Kanto Travel Guide</div>
            <div class="spacer"></div>
            <div class="test">Admin Page</div>
            <div class="spacer"></div>
            <span class="ml2"><a class="test" href="/">Travel Guide</a></span>
        </w-toolbar>
    </div>
</w-app>
</template>

<script>
export default {
    name: "NavBar",
};
</script>

<style scoped>
.test {
    padding-left: 15px;
    padding-right: 15px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 0.5cm;
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
</style>
