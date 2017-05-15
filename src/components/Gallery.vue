<template>
    <div class="gallery-container">
    <div class='gallery-header'>Gallery</div>
            <ul>
            <li v-for="image in images" class='centered-image'>
                <a :href="image.src" class="js-img-viewer" :data-caption="image.desc" :data-id="image.id">
                    <img v-bind:src="image.src" data-group="0"/>
                </a>
                <div>
                    {{image.desc}}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import * as smartPhoto from 'smartphoto';

    document.addEventListener('DOMContentLoaded', function(){
        new smartPhoto(".js-img-viwer",{
            arrows: true     
        });
    });

    export default {
        data() {
            return {
            images: [
                {src: '../static/Fence1.JPG', desc: '', id: 'id1'},
                {src: '../static/img/Fence2.JPG', desc: '', id: 'id6'},
                {src: '../static/img/Steve.JPG', desc: '', id: 'id3'},
                {src: '../static/img/Window.JPG', desc: '', id: 'id4'},
                {src: '../static/img/Volunteers.png', desc: '', id: 'id5'},
                {src: '../static/img/bathroom.png', desc: '', id: 'id7'},
                {src: '../static/img/ramp.png', desc: '', id: 'id8'}
            ]
        };
  },
};

</script>

<style scoped>
li{
    list-style-type: none;
    display: inline-block;
}

.centered-image{
    position: relative;
    display: inline-block;
    margin: 50px;
}

.gallery-header{
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    margin-top: 25px;
}
</style>