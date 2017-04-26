<template>
    <div class='navbar'>
        <ul>
            <li><router-link to="/about">WHO WE ARE</router-link></li>
            <li><router-link to="/gallery">GALLERY</router-link></li>
            <li><router-link to="/resources">RESOURCES</router-link></li>
            <li><router-link to="/newsandevents">NEWS & EVENTS</router-link></li>
            <li><router-link to="/donate">HELP NOW</router-link></li>
        </ul>
    </div>
</template>


<script>
    export default {
        name: 'homepage',
        data() {
            return {
                msg: 'Welcome',
            };
        },
    };
</script>

<style scoped>
.navbar{
    display:block;
    margin: auto;
    background: #FFFF80;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    border: 1px solid black;
}

ul{
    margin: auto;
    display: flex;
    justify-content: center;
}

li{
    list-style-type: none;
    padding: 5px 15px;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    color: #5a5a5a;
    text-decoration: none;
}

li:hover{
    color: blue;
    cursor: pointer;
}

router-link{
    text-decoration: none;
}

a{
    text-decoration:none;
}

a:hover{
    color:blue;
    cursor: pointer;
}

</style>

