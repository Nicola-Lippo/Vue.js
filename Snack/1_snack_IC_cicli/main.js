'use strict'
console.log('collegato');
//vue
const { createApp } = Vue
const objApp = {
    data() {
        return {
            title: 'V-Todolist',
            //creo un array di oggetti con 2 proprietà text e done
            myArray: [
                { text: 'Todo 1', done: false },
                { text: 'Todo 2', done: false },
                { text: 'Todo 3', done: true },
                { text: 'Todo 4', done: false },
                { text: 'Todo 5', done: true },
                { text: 'Todo 6', done: false },
                { text: 'Todo 7', done: false },
                { text: 'Todo 8', done: true },
                { text: 'Todo 9', done: false },
                { text: 'Todo 10', done: true }
            ],
            //nuovo Todo
            newTodo: '',
            //serch Todo
            serchTodo: ''
        }
    },
    methods: {
        //cliccando sulla X, il todo viene rimosso dalla lista
        remuveTodo(index) {
            this.myArray = this.myArray.filter((_, i) => i !== index);
            //console alla rimozione
            console.log('Todo rimosso:', index);
            console.log(this.myArray);
        },
        //creare un nuovo todo
        addTodo() {
            //Verifica che non sia vuoto
            //.trim rimuove spazzi all'inizio o fine
            if (this.newTodo.trim() !== '') {
                //Aggiunge un nuovo oggetto
                this.myArray.push({ text: this.newTodo.trim(), done: false });
                //Resetta l'input
                this.newTodo = '';
                //console all' aggiunta
                console.log('Todo aggiunto');
                console.log(this.myArray);
            } else {
                console.log('aggiungi un testo valido');
                this.newTodo = '';
            }

        },
        //cliccando sul testo dell'item, invertire il valore della proprietà done
        invertTodo(index) {
            const todo = this.myArray[index];
            if (todo.done === false) {
                todo.done = true;
            } else if (todo.done === true) {
                todo.done = false;
            }
            console.log('inverto done');
        },
        //cerca Todo
        //non modifichiamo l'array di partenza con filter
        viewTodo() {
            if (this.serchTodo) {
                return this.myArray.filter((element) => {
                    return element.text.includes(this.serchTodo)
                });
            } else {
                return this.myArray
            }
        },
    }
};
const app = createApp(objApp);
app.mount('#app');
