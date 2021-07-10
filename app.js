import ListItem from './src/view/ListItem.js';

// Controller
class App {

    constructor() {
        this.listItemFactory = new ListItem();
    }

    init() {
        const list = document.getElementById('list');
        const hello1 = this.listItemFactory.createListItem('hello 1', true);
        list.append(hello1);
    }
}
// model
// task
// - titulo
// - status (terminada/!terminada)

const app = new App();
app.init();
