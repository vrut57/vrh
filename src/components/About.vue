<template>
    <div class='about'>
        <p class="main-paragraph">VRH Corporation is a 501(c)3 charitable organization.  Our purpose is to help people in the northern Virginia area who are in need of assistance to make their homes safer, warmer, dryer, and more accessible or more energy efficient.</p>
        
        <ul class="list-of-goals">
            <li class="goal-ele">VRH helps people financially challenged, persons with temporary or permanent disabilities, victims of natural or man-made disasters or other people requiring home repair assistance.</li>
            <li class="goal-ele">Projects are completed by a small Team of 4-6 people consisting of volunteers and contractors when needed.  Services are at no cost to the homeowner.</li>
            <li class="goal-ele">VRH adheres to the concepts of social justice and confidentiality.  VRH volunteers respect the dignity, privacy, diversity and uniqueness of each recipient of assistance.</li>
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
    .about{
        font-size: 24px;
        margin: 0px 25px;
    }
    .main-paragraph{

    }
    .list-of-goals{

    }
    .goal-ele{
        margin: auto;
        display: list-item;
        padding: 10px 0px;
    }
</style>

