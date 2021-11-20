export default () => {
    const content = document.createElement("section");
    const scriptTag = document.createElement('script');

    content.classList.add('content');

    var stringHash = localStorage.getItem('stringHash');
    var encodedBase64 = 'Não codificado';
    var stringUpperCase = String(stringHash).toUpperCase();
    var stringLowerCase = String(stringHash).toLowerCase();
    var stringProperCase = toProperCase(stringHash);
    var stringCapitalCase = toCapitalCase(stringHash);

    function toCapitalCase(string) {
        return String(string).charAt(0).toUpperCase() + String(string).slice(1);
    }

    function toProperCase(string) {
        let stringSplit = String(string).split(' ');
        let stringProperCase = "";

        stringSplit.forEach(string => {
            let stringProper = String(string).charAt(0).toUpperCase() + String(string).slice(1);
            stringProperCase += stringProper + " ";
        });

        return stringProperCase;
    }

    content.innerHTML = `
    <div>
    <Label for="fieldStringBase64">Base64 Encode:</Label>
    <input class ="fieldString" name="fieldString" id="fieldStringEncoded" type="text" readonly value="${encodedBase64}">
        <div id="encodeButtons">
            <input class="btn btnEncode" name="btnEncode" id="btnEncode" type="button" value="Codificar">
            <input class="btn btnDecode" name="btnDecode" id="btnDecode" type="button" value="Decodificar">
        </div>
    </div>

    <div>
        <Label for="fieldString">String:</Label>
        <input class="fieldString" name="fieldString" id="fieldStringHash" type="text" readonly value="${stringHash}">
    </div>

    <div>
        <Label for="fieldStringUC">String Upper Case:</Label>
        <input  class="fieldString" name="fieldString" id="fieldStringUpperCase" type="text" readonly value="${stringUpperCase}">
    </div>

    <div>
        <Label for="fieldStringLC">String Lower Case:</Label>
        <input  class="fieldString" name="fieldString" id="fieldStringLoweCase" type="text" readonly value="${stringLowerCase}">
    </div>

    <div>
        <Label for="fieldStringPC">String Proper Case:</Label>
        <input  class="fieldString" name="fieldString" id="fieldStringProperCase" type="text" readonly value="${stringProperCase}">
    </div>

    <div>
        <Label for="fieldStringCC">String Capital Case:</Label>
        <input class="fieldString" name="fieldString" id="fieldStringCapitalCase" type="text" readonly value="${stringCapitalCase}">
    </div>
    `;

    const btnEncode = content.querySelector('#btnEncode');
    const btnDecode = content.querySelector('#btnDecode');

    btnDecode.disabled = true;

    btnEncode.addEventListener('click', () => {
        encodedBase64 = btoa(stringHash);
        content.querySelector('#fieldStringEncoded').value = encodedBase64;
        content.querySelector('#fieldStringUpperCase').value = encodedBase64.toUpperCase();
        content.querySelector('#fieldStringLoweCase').value = encodedBase64.toLowerCase();
        content.querySelector('#fieldStringCapitalCase').value = toCapitalCase(encodedBase64);
        content.querySelector('#fieldStringProperCase').value = toProperCase(encodedBase64);
        
        btnDecode.disabled = false;
    });

    btnDecode.addEventListener('click', () => {
        encodedBase64 = atob(encodedBase64);
        content.querySelector('#fieldStringEncoded').value = encodedBase64;
        content.querySelector('#fieldStringUpperCase').value = encodedBase64.toUpperCase();
        content.querySelector('#fieldStringLoweCase').value = encodedBase64.toLowerCase();
        content.querySelector('#fieldStringCapitalCase').value = toCapitalCase(encodedBase64);
        content.querySelector('#fieldStringProperCase').value = toProperCase(encodedBase64);

        btnDecode.disabled = true;
    });

    return content;
}