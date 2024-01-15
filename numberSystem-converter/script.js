let convertFrom = document.getElementById("convertFrom");
let convertTo = document.getElementById("convertTo");
let res = document.getElementById("res");
let input = document.getElementById("input");
let inputType = document.getElementById("inputType");
let resultType = document.getElementById("resultType");

const tags = {
    10: "Decimal:",
    2: "Binary:",
    8: "Octal:",
    16: "HexaDecimal:",
};

function update() {
    inputType.innerText = tags[convertFrom.value];
    resultType.innerText = tags[convertTo.value];

    // Update result value and title 
    res.value = Number(parseInt(input.value, convertFrom.value)).toString(convertTo.value);
}

function reverse() {
    inputType.innerText = tags[convertFrom.value];
    resultType.innerText = tags[convertTo.value];

    // Update input value 
    input.value = Number(parseInt(res.value, convertTo.value)).toString(convertFrom.value);
}

update();
