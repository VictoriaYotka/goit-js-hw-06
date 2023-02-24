const list = document.querySelector('#categories');
const items = document.querySelectorAll('.item');

const elementsCounting = elements => elements.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);

    console.log(`Elements: ${element.lastElementChild.childElementCount}`);
});

console.log(`Number of categories: ${items.length}`);

elementsCounting(items);