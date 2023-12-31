console.log('Vue ok', Vue);

const app = Vue.createApp({
    name: 'Darth List',
    data() {
        return{
            newText: '',
            filter:'',
            tasks: [
                {
                    text: 'Conquistare il mondo',
                    done: false
                },
                {
                    text: 'Fare il pieno alla Morte Nera',
                    done: false
                },
                {
                    text: 'Cercare nuove reclute',
                    done: false
                },
                {
                    text: 'Intervista con Maurizio Costanzo',
                    done: false
                },
                {
                    text: 'Dare da mangiare agli unicorni',
                    done: false
                },
                {
                    text: 'Raccogliere margheritine',
                    done: false
                },
                
            ]

        }
    },
    computed: {
        filteredList() {

            const text = this.filter;

            const filteredList = this.tasks.filter((task) => task.text.includes(text))
            return filteredList
        }
    },
    methods: {
        deleteTask(targetText) {
            this.tasks = this.tasks.filter(task => task.text !== targetText)
        },
        addNewTask() {
            const newTask = {text: this.newText, done: false};
            this.tasks.push(newTask);
            // ripulire il campo dopo aver aggiunto l'elemento alla lista
            this.newText = '';
        }
    }
});

app.mount('#root');