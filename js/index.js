/* document.getElementById('menuButton').addEventListener('click', function() {
    var menuOptions = document.getElementById('menuOptions');
    if (menuOptions.classList.contains('show')) {
        menuOptions.classList.remove('show');
    } else {
        menuOptions.classList.add('show');
    }
}); */


const button = document.querySelector('#button')
const dialog = document.querySelector('dialog')

button.addEventListener('click',()=>{
    dialog.showModal();
})