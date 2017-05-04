<template>
    <div class="gallery-container">
    <h1>Gallery</h1>
            <ul>
            <li v-for="image in images">
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
                {src: '../static/Fence1.JPG', desc: 'Testing description of image', id: 'id1'},
                {src: '../static/img/Fence1.JPG', desc: 'Here is the second Image', id: 'id2'},
                {src: '../static/img/Steve.JPG', desc: 'online url', id: 'id3'},
                {src: '../static/img/Window.JPG', desc: 'online url', id: 'id4'},
                {src: '../static/img/Volunteers.png', desc: 'online url', id: 'id5'},
                {src: '../static/img/Fence2.JPG', desc: 'online url', id: 'id6'},
                {src: '../static/img/bathroom.png', desc: 'online url', id: 'id7'},
                {src: '../static/img/ramp.png', desc: 'online url', id: 'id8'}
            ]
        };
  },
};

</script>