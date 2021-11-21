import routes from "./routes.js";

var stringBox = document.getElementById('stringBox');
var btnSend = document.getElementById('btnSend');

btnSend.addEventListener('click', () => {
    if (stringBox.value === '')
        alert('A string não deve estar vazia.');
    else {
        localStorage.setItem('parameterString', stringBox.value);
        location.reload();
    }
});

const container = document.querySelector('#root');

const init = () => window.addEventListener('hashchange', renderPage);
const validateHash = (hash) => hash === '' ? 'home' : hash.replace('#', '');

const renderPage = () => {
    const page = validateHash(window.location.hash);
    container.innerHTML = '';
    container.appendChild(routes[page]);
};

window.addEventListener('load', () => {
    renderPage();
    init();
});