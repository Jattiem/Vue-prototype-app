<template>
    <Navbar/>
    <h1>Properties {{ $route.params.id}}</h1>
     <div class="products-container">
        <div v-for="property of properties" :key="property.id" class="card">
        <router-link :to="{name: 'Property', params: {id: property.id}}">
        <img :src="property.image"/>
           <h5>{{property.address.region}} / {{property.address.neighbourhood}} / {{property.address.street}}</h5>
                <h5>${{property.price}}</h5>
                <ul>   
                    <li> Bedrooms: {{property.rooms.bedrooms}}</li>
                    <li> Bathrooms: {{property.rooms.bathrooms}}</li>
                    <li> Land Size: {{property.size}} Sqr Metre</li>
                </ul>
        </router-link>
        </div>
    </div>
</template>
<script>
export default {
    data(){

      return {
        properties:[]
      };
  },
  mounted(){
    fetch('http://localhost:3000/properties')
    .then((res) =>res.json())
    .then((data) =>(this.properties = data));
  }
}
</script>

<style>
.card li{
    list-style: none;
}
.card{
    border: 2px solid rgb(19, 226, 136);
    gap: 200px;
    margin-bottom: 20px;
    box-shadow: 10px 10px 10px rgb(153, 225, 154);
}
.card img{
    height: 250px;
    margin-top: 10px;
}
</style>