<template>
    <h1>Mi nombre es {{myName}}, tengo {{myAge}} años y vivo en {{myCity}}</h1>
    <div>
        <button @click="clickHello">Click to Hello</button>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";

// iteracion 2
const myName = ref("Norman L");
const myAge = ref(38);
const myCity = ref("Barcelona");

// iteracion 3 bonus
const clickHello = () => console.log('Hola Mundo');

// iteracion 4 bonus



</script>

<style></style>
