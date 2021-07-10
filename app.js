import ListItem from './src/view/ListItem.js';
import Task from './src/model/Task.js';
// Controller
class App {
    constructor() {
        this.listItemFactory = new ListItem();
        this.form = document.querySelector('form');
        this.list = document.getElementById('list');
        this.tasks = [];
    }

    init() {
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
            // Como enviar pra um servidor e salvar?

            // salvamos a task
            // this.tasks.push(task);
            // atualizar na view
            const newListItem = this.listItemFactory.createListItem(task);
            this.list.prepend(newListItem);
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

