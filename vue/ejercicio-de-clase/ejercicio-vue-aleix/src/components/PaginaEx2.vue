<template>
<div>
    <div id="iteration-exercice">
        <h3>My favourites movies</h3>
        <ol>
            <li v-for="(favFilm, index) in favFilms" :key="index">
                {{ index }} - {{ favFilm }}
            </li>
        </ol>

        <h3>My Favourite Things</h3>
    <ul>
        <li v-for="(favThing, index) in favThings" :key="index">
                {{index}} - {{favThing}}
        </li>
    </ul>
</div>

<div id="compañeros-iteracion">
    <h3 v-for="(student, index) in students" :key="index">
        {{student.name}} - {{index}}
        <h3 v-if="student.age >= 18">
            I can go for a few drinks with {{student.name}} after class
        </h3>
        <h3 v-else>{{student.name}} is still too young, they'll have to go home tonight</h3>
        <h4 v-for="language in student.favLang">
            <p>{{language}}</p>        
        </h4>
    </h3>


</div>

</div>
</template>


<script setup>

import { ref, reactive } from "vue";

const favFilms = reactive([
    "Interstellar",
    "Alien",
    "Predator",
    "Life",
    "Indiana Jones",
]);

const favThings = reactive({
    favFood: "pizza",
    favDrink: "water",
    favSport: "riding",
    favCountry: "Turkey",
    favArrayMethod: "reduce()"
});

const students = reactive([
    {
        name: "Joan",
        age: "34",
        favLang: ["catalan", "ingles"],
    },
    {
        name: "Marc",
        age: "24",
        favLang: ["castellano", "catalan"],
    },
    {
        name: "Jose",
        age: "28",
        favLang: ["frances", "ingles"],
    },
]);






</script>

<style>
</style>