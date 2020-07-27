import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {

    new Vue({
        el: "#app",
        data: {
            todos: [
                {name: 'Buy groceries', priority: true},
                {name: 'Tidy up garage', priority: false},
                {name: 'Look up holiday', priority: true}
            ],
            newItem: ''
        },
        methods: {
            addNewItem: function(){
                this.todos.push({
                    name: this.newItem,
                    priority: false
                });

                this.newItem = '';
            },

            setHigh: function(index){
                this.todos[index].priority = true;
            }
            
        }
    }); 

});