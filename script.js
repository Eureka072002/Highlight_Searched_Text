function search() {
    let textToSearch = document.querySelector('#text-to-search').value;
    let Paragraph = document.querySelector('#paragraph');

    textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    let pattern = new RegExp(`${textToSearch}`, 'gi');

    Paragraph.innerHTML = Paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`);

}