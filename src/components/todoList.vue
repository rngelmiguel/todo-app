<script setup>
    import todoListItem from './todoListItem.vue'
    import { useTodo } from '../stores/todo'
    const store = useTodo()
</script>

<template>
    <ul>
        <template v-for="todo in store.todoList" :key="`todo-item${todo.id}`">
            <todoListItem
                v-bind:id="todo.id"
                v-bind:task="todo.task"
                v-bind:completed="todo.completed"
                v-bind:date="todo.date"
            ></todoListItem>
        </template>
        
        <!-- <li v-for="todo in store.todoList" :key="`todo-item${todo.id}`">
            {{todo.task}}
        </li> -->
    </ul>
</template>
