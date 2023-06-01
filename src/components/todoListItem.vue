<script setup>
    import { toRefs } from 'vue'
    import { useTodo } from '../stores/todo'
    import CheckBold from 'vue-material-design-icons/CheckBold.vue'
    import Delete from 'vue-material-design-icons/Delete.vue'
    const store = useTodo()

    //actions
    const { toggleTodo, deleteTodo } = store

    const props = defineProps({
        id: Number,
        task: String,
        completed: Boolean,
        date: String
    })

    const {id, task, completed, date} = toRefs(props)

    function formatDate(date) {
        const myDate = new Date(date)
        const h = (0 + String(myDate.getHours())).slice(-2)
        const m = (0 + String(myDate.getMinutes())).slice(-2)
        const s = (0 + String(myDate.getSeconds())).slice(-2)

        return `${h}:${m}:${s}`
    }
</script>

<template>
    <li class="flex mb-2">
        <div v-on:click="toggleTodo(id)" class="w-full cursor-pointer p-2 border-l-4 rounded-lg flex mr-2"
        :class="`${completed?'border-secondary bg-gray-600':'border-white bg-primary'}`"
        >
            <span :class="`text-2xl text-white mr-4 h-8 w-8 ${completed?'bg-secondary':'bg-white'} flex items-center justify-center rounded-lg pb-2`"><CheckBold></CheckBold></span>
            <p class="text-white text-lg w-full flex justify-between">{{task}} <span class="text-xs mt-2">{{formatDate(date)}}</span></p>
            <!-- {{task}} -- {{completed}} -- {{formatDate(date)}} -->
        </div>
        <div>
            <button v-on:click="deleteTodo(id)" class="w-42 p-2 hover:bg-error bg-primary text-2xl text-white rounded-lg"><Delete/></button>
        </div>
    </li>
</template>
