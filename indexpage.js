import routes from "./routes";

var stringField = document.getElementById('stringField');
var btnSend = document.getElementById('btnSend');

btnSend.addEventListener('click', () => {
    if (stringField.value === '')
        alert('A string não deve estar vazia.');
    else{
        localStorage.setItem('stringHash', stringField.value);
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

/* function converterString(tipo) {
  let string = document.getElementById("string-recebida").value;
  string.toString();
  switch (tipo) {
    case "s-md5":
      //converte string
      break;
    case "md5-s":
      //converte string
      break;
    case "s-b64":
      //converte string
      break;
    case "b64-s":
      //converte string
      break;
    case "uppercase":
      document.getElementById("string-convertida").innerHTML =
        string.toUpperCase();
      break;
    case "lowercase":
      document.getElementById("string-convertida").innerHTML =
        string.toLowerCase();
      break;
    case "captalize":
      document.getElementById("string-convertida").innerHTML =
        string.charAt(0).toUpperCase() + string.slice(1);
      break;
    case "propercase":
      let stringMontada = "";
      let aux = string.split(" ");
      for (let str of aux) {
        stringMontada =
          stringMontada +
          " " +
          str.charAt(0).toUpperCase() +
          str.slice(1);
      }
      document.getElementById("string-convertida").innerHTML =
        stringMontada;
      break;
  } 
}*/