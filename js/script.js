console.log('Vue ok', Vue);

const app = Vue.createApp({
    name: 'Darth List',
    data() {
        return{
            newText: '',
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
   
    },
    methods: {
        deleteTask(targetText) {
            this.tasks = this.tasks.filter(task => task.text !== targetText)
        },
        addNewTask() {
            const newTask = {text: this.newText, done: false};
            this.tasks.push(newTask);
        }
    }
});

app.mount('#root');