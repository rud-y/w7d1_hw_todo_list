import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {

    new Vue({
        el: "#app",
        data: {
            todos: ['Buy shopping', 'Tidy up garage', 'Wash the car','Look up holiday'],
            newItem: ''
        },
        methods: {
            addNewItem: function(){
                this.todos.push(this.newItem);
                this.newItem = '';
            }
            
        }
    }); 

});