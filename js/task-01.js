const list = document.querySelector('#categories');
const items = document.querySelectorAll('.item');

const f = items => items.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);

    console.log(`Elements: ${item.lastElementChild.childElementCount}`);
});

console.log(`Number of categories: ${items.length}`);

f(items);