const clickParagraph = document.getElementById('click');

clickParagraph.addEventListener('click', () => console.log('click'));
clickParagraph.addEventListener('mousedown', () => console.log('down'));
clickParagraph.addEventListener('mouseup', () => console.log('up'));
const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);
const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);
addEventListener('keydown', highlight);
addEventListener('keyup', (event) => console.log(`You stopped pressing the key on ${new Date}`));

function highlight(event) {
    event.target.classList.toggle('highlight');
}