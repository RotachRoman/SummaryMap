function copy(value) {
    return arg;
}

function Sum(valueFirst, valueSecond) {
    return arg1 + arg2;
}

function powDouble() {
    var arrList = [100, 25, "Five", 70, "TRY AGAIN", 10];
    console.log("Стандартные значения");
    console.log(arrList);
    let newArray = arrList.map((value) =>
        isNaN(value) ? value = 0 : value *= value
    )
    console.log("Преобразованные значения");
    console.log(newArray);
}