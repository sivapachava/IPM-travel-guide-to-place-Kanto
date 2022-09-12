<template>
<div>
    <w-app>
        <w-tag xl  height="3em" class="heading" bg-color="primary">Important Facts about World Kanto</w-tag>
        <w-table :headers="table.headers" :items="table.items"> </w-table>
    </w-app>
</div>
</template>

<script>
export default {
    name: "CityTable",
    data: () => ({
        table: {
            headers: [
                {
                    label: "First name",
                    key: "firstName"
                },
                {
                    label: "Last name",
                    key: "lastName"
                },
            ],
            items: [{
                  
                    firstName: "Floretta",
                    lastName: "Sampson"
                },
                {
                   
                    firstName: "Nellie",
                    lastName: "Lynn"
                },
                {
               
                    firstName: "Rory",
                    lastName: "Bristol"
                },
                {
                
                    firstName: "Daley",
                    lastName: "Elliott"
                },
                {
                    
                    firstName: "Virgil",
                    lastName: "Carman"
                },
            ],
            sort: "+firstName",
        },
    }),
};
</script>

<style scoped>
.heading {
    height: 50px;
    font-size: 5em;
    color: white;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
</style>
