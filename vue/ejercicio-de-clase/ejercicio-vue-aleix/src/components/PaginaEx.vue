<template>
    
<div id="primera-iteracion"></div>
    <h1 v-if="display.opcion1">I'm showing up beacuse our reactive data is true!</h1>
    <h1 v-else>I'm the option anytime our reactive data cannot be read as true</h1>

<div id="segunda-iteracion"></div>
    <p v-if="language.valor1">Today we are learing {{language.valor1}}</p>
    <p v-else-if="language.valor2">Today we are learing {{language.valor2}}</p>
    <p v-else-if="language.valor3">Today we are learing {{language.valor3}}</p>
    <p v-else>Today there's no class!</p>


</template>

<script setup>

import { ref, reactive } from "vue";

const display = reactive ({
    opcion1: true,
    opcion2: false,
});

const language = reactive ({
    valor1: "HTML",
    valor2: "CSS",
    valor3: "JS",
});


</script>
