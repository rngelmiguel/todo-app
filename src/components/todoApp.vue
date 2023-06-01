<script setup>

    import { computed } from 'vue'
    import { storeToRefs } from 'pinia'
    import { useTodo } from '../stores/todo'
    import todoForm from './todoForm.vue'
    import todoList from './todoList.vue'
    import ClipboardList from 'vue-material-design-icons/ClipboardList.vue'
    import Information from 'vue-material-design-icons/Information.vue'

    const store = useTodo()
    const { totalTodo, totalCompleted } = storeToRefs(store)
    const hasTodo = computed(()=>{
        return store.totalTodo > 0 ? true:false
    })

</script>

<template>
    <div class="bg-accent p-10 rounded-lg shadow-lg">
        <h1 class="text-3xl text-white text-center font-bold mb-3"><ClipboardList></ClipboardList>To do App</h1>
        <p v-if="hasTodo" class="text-sm text-white mb-3">completed task {{totalCompleted}}/{{totalTodo}}</p>
        <todoForm></todoForm>
        <todoList></todoList>
        <div v-if="!hasTodo" class="bg-primary text-white p-2 rounded-lg mt-2">
            <p>
                <span class="text-lg"><Information></Information></span> Nothing to do ? Add a new task !!!
            </p>
        </div>
    </div>
</template>