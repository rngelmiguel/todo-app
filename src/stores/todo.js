import { defineStore } from "pinia";

export const useTodo = defineStore("todo", {
    state: function() {
        return {
            todoList:[],
            id: 0
        }
    },
    getters: {
        totalTodo: function(state){
            return state.todoList.length
        },
        totalCompleted: function(state) {
            const todoCompleted = state.todoList.filter(item => item.completed)
            return todoCompleted.length
        }
    },
    actions: {
        addTodo: function(task) {
            const date = new Date()
            const newTask =  {id: this.id++, task, completed: false, date}
            this.todoList.push(newTask)
        },
        toggleTodo: function(id) {
            const task = this.todoList.find(item => item.id === id)
            if(task){
                task.completed = !task.completed
            }
        },
        deleteTodo: function(id) {
            this.todoList = this.todoList.filter(item => item.id !== id)
        }
    }
})