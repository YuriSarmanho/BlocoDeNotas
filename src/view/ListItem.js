export default class ListItem {
    createListItem(text, status) {
        const listItem =
            `<li>
                <input type="checkbox" ${status ? 'checked' : ''}>${text}
            </li > `;
        const div = document.createElement('div');
        div.innerHTML = listItem;
        return div.firstChild;
    }
}