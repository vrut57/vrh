<template>
    <div class='navbar'>
        <ul>
            <li>WHO WE ARE</li>
            <li>GALLERY</li>
            <li>RESOURCES</li>
            <li>NEWS & EVENTS</li>
            <li>HELP NOW</li>
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
}

li:hover{
    color: blue;
    cursor: pointer;
}

</style>

