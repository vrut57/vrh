<template>
    <div class="gallery-container">
    <h1>Gallery</h1>
            <ul>
            <li v-for="image in images">
                <a href="" class="js-img-viewer">
                    <img v-bind:src="image.src"/>
                </a>
                <div>
                    {{image.desc}}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import smartPhoto from 'smartphoto';

    console.log(smartPhoto);
    document.addEventListener('DOMContentLoaded', function(){
        new smartPhoto(".js-img-viwer");
    })

    export default {
        data() {
            return {
            images: [
                {src: '../static/Fence1.JPG', desc: 'Testing description of image'},
                {src: '../static/img/Fence1.JPG', desc: 'Here is the second Image'},
                {src: '../static/img/Steve.JPG', desc: 'online url'},
                {src: '../static/img/Window.JPG', desc: 'online url'},
                {src: '../static/img/Volunteers.png', desc: 'online url'},
                {src: '../static/img/Fence2.JPG', desc: 'online url'},
                {src: '../static/img/bathroom.png', desc: 'online url'},
                {src: '../static/img/ramp.png', desc: 'online url'}
            ]
        };
  },
};

</script>