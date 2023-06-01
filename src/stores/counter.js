import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounter = defineStore("counter",()=>{

    const count = ref(0)
    const name = ref("Miguel Rangel")

    function increment() {
        count.value++
    }

    function reverseName() {
        const reverse = name.value.split('').reverse().join('')
        name.value = reverse
    }

    const doubleCount = computed(()=>
        count.value * 2
    )

    const nameUpperCase = computed(()=>
        name.value.toUpperCase()
    )

    return { count, name, increment, reverseName, doubleCount, nameUpperCase }
})

/* export const useCounter = defineStore("counter", {
    //state
    state:()=>({
        count: 0,
        name: "Miguel Rangel"
    }),
    //getters
    getters: {
        doubleCount: function(state){
            return state.count * 2
        },
        nameUpperCase: function(state){
            return state.name.toUpperCase()
        }
    },
    //actions
    actions: {
        increment: function() {
            this.count++
        },
        reverseName: function() {
            const reverse = this.name.split('').reverse().join('')
            this.name = reverse
        }
    }
}) */