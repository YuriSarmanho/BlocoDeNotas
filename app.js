import ListItem from './src/view/ListItem.js';
import Task from './src/model/Task.js';
// Controller
class App {
    constructor() {
        this.listItemFactory = new ListItem();
        this.form = document.querySelector('form');
        this.tasks = [];
    }

    init() {
        const list = document.getElementById('list');
        // todo: view pra lidar com a lista
        // view vai criar os list items baseado num array de tasks
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            // pegou o input
            const input = this.form.elements[0];
            // pegou o valor do input
            const taskName = input.value;
            // criamos uma task
            const task = new Task(taskName, false);
            // salvamos a task
            // this.tasks.push(task);
            // atualizar na view
            const newListItem = this.listItemFactory.createListItem(task);
            list.prepend(newListItem);
            // limpa o input
            this.form.reset();
            // foca o input
            input.focus();
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const app = new App();
    app.init();
})

