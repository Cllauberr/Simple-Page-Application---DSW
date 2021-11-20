export default () => {
    const content = document.createElement("section");
    content.classList.add('content');

    const stringHash = localStorage.getItem('stringHash');
    const stringUpperCase = String(stringHash).toUpperCase();
    const stringLowerCase = String(stringHash).toLowerCase();
    const stringProperCase = toProperCase(stringHash);
    const stringCapitalCase = toCapitalCase(stringHash);
    const encodedMd5 = 'Não codificada'

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
    <Label for="fieldStringMd5">MD5 Encode:</Label>
        <input class="fieldString" name="fieldString" id="fieldStringEncoded" type="text" readonly value="${encodedMd5}">
        <input class="btn btnEncode" name="btnEncode" id="btnEncode" type="button" value="Codificar">
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
        <input  class="fieldString" name="fieldString" id="fieldStringLowerCase" type="text" readonly value="${stringLowerCase}">
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
    const fieldStringEncoded = content.querySelector('#fieldStringEncoded');

    btnEncode.addEventListener('click', () => {
        const encodedMd5 = md5(stringHash);

        content.querySelector('#fieldStringEncoded').value = encodedMd5;
        content.querySelector('#fieldStringUpperCase').value = encodedMd5.toUpperCase();
        content.querySelector('#fieldStringLowerCase').value = encodedMd5.toLowerCase();
        content.querySelector('#fieldStringCapitalCase').value = toCapitalCase(encodedMd5);
        content.querySelector('#fieldStringProperCase').value = toProperCase(encodedMd5);
    });

    return content;
}