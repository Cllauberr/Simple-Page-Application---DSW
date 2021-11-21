export default () => {
    const content = document.createElement("section");

    content.classList.add("content");

    const parameterString = localStorage.getItem("parameterString");
    const encodedString = md5(parameterString);
    var localString = "";

    function converterString(tipo) {
        let string = encodedString;
        switch (tipo) {
            case "uppercase":
                localString = string.toUpperCase();
                break;
            case "lowercase":
                localString = string.toLowerCase();
                break;
            case "captalize":
                localString = string.charAt(0).toUpperCase() + string.slice(1);
                break;
            case "propercase":
                let stringMontada = "";
                let aux = string.split(" ");
                for (let str of aux) {
                    stringMontada =
                        stringMontada + " " + str.charAt(0).toUpperCase() + str.slice(1);
                }
                localString = stringMontada;
                break;
        }
    }

    content.innerHTML = `
      <div>
      <Label>MD5</Label>
      <input class="fieldString" name="fieldString" id="fieldStringHash" type="text" readonly value="${encodedString}">
      </div>
      <button id="uppercase">CAIXA ALTA</button>
      <button id="lowercase">CAIXA BAIXA</button>
      <button id="captalize">CAPTALIZAR</button>
      <button id="propercase">TITLE CASE</button>
      <div>
          <Label>String convertida:</Label>
          <input class="fieldString" id="string-convertida" type="text" readonly">
      </div>
      `;

    const btnEncode = content.querySelectorAll(
        "#uppercase, #lowercase, #captalize, #propercase"
    );

    for (let selector of btnEncode) {
        selector.addEventListener("click", () => {
            converterString(selector.id);
            content.querySelector("#string-convertida").value = localString;
        });
    }

    return content;
};