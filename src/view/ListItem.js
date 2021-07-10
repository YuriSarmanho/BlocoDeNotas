export default class ListItem {
    createListItem(task) {
        const listItem =
            `<li>
                <input type="checkbox" ${task.status ? 'checked' : ''}>${task.title}
            </li > `;
        const div = document.createElement('div');
        div.innerHTML = listItem;
        return div.firstChild;
    }
}