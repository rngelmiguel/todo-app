<script setup>
    import {useCounter} from '../stores/counter'
    import {storeToRefs} from 'pinia'
    const store = useCounter()
    const {count, name, doubleCount, nameUpperCase} = storeToRefs(store)

    const {increment, reverseName} = store
</script>

<template>
    <div>
        <p>Counter: {{count}}</p>
        <!-- <p>Counter: {{store.count}}</p> -->
        <p>Name: {{name}} -- {{nameUpperCase}}</p>
        <!-- <p>Name: {{store.name}}</p> -->
        <p>Doble Count: {{doubleCount}}</p>
        <!-- <p>Doble Count: {{store.doubleCount}}</p> -->
        <hr>
        <button class="btn btn-primary" v-on:click="increment">Incrementar</button><button class="btn btn-primary" v-on:click="reverseName">Reversar Nombre</button>
    </div>
</template>