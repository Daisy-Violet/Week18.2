let errors = [];
function checkValidity(input) {
    let validity = input.validity;
    if (!validity.valueMissing) { errors.push('Поле ' + input.placeholder + ' не заполнено'); }
    if (!validity.patternMismatch) { errors.push('Неверный формат заполнения'); }
    if (validity.rangeUnderflow) {
        let min = getAttributeValue(input, 'min');
        errors.push('Минимальное значение не может быть больше чем ' + min);
    }
}
function checkAll() {
    errors = [];
    let inputs = document.querySelectorAll("input");

    for (let input of inputs) {
        checkValidity(input);
    }
    let result = document.getElementById("errorsInfo");
    result.innerHTML = errors.join('. <br>');
}