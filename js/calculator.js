function getNum(num) {  //Number 0~9；1.字串是空的時候0不能一直按
    var boxResult = $("#result").val();
    var last = boxResult.substr(boxResult.length - 1);
    if (last == "0" && boxResult.length == 1) { //1.
        $("#result").val();
    } else {
        $("#result").val(function (i, val) {
            return val + num;
        });
    }
}

function clearNum() {  //clear all
    $("#result").val("");
}

function back() {   //backspace
    $("#result").val(function (i, val) {
        return val.substr(0, val.length - 1);
    });
}

function cal(sign) {  //calculate；1.空的時候不能點運算符號，2.運算符號不能重複一直點
    var boxResult = $("#result").val();
    var last = boxResult.substr(boxResult.length - 1);
    if ($("#result").val() == "") {
        $("#result").val("");
    } else if (last == "+" || last == "-" || last == "*" || last == "/" || last == ".") {
        $("#result").val();
    } else {
        $("#result").val(function (i, val) {
            return val + sign
        });
    }
}

function minus(minusSign) {  //-可以當運算符號或負數
    var boxResult = $("#result").val();
    var last = boxResult.substr(boxResult.length - 1);
    if (last == "+" || last == "-" || last == "*" || last == "/" || last == ".") {
        $("#result").val();
    } else {
        $("#result").val(function (i, val) {
            return val + minusSign
        });
    }
}

function rightBracket(bracketSign) {  //右括號；1.前面不可是數字或左括號，2.右括號也不能重複點
    var boxResult = $("#result").val();
    var last = boxResult.substr(boxResult.length - 1);
    if (last == "0" || last == "1" || last == "2" || last == "3" || last == "4" || last == "5" || last == "6" || last == "7" || last == "8" || last == "9" || last == "(" || last == ")") {
        $("#result").val();
    } else {
        $("#result").val(function (i, val) {
            return val + bracketSign
        });
    }
}

function leftBracket(bracketSign) {  //左括號；1.前面不可是運算符號或右括號，2.前面不可沒有出現又括號，3.左括號也不能重複點
    var boxResult = $("#result").val();
    var last = boxResult.substr(boxResult.length - 1);
    if ($("#result").val() == "") {
        $("#result").val("");
    } else if (last == "+" || last == "-" || last == "*" || last == "/" || last == "." || last == "(" || last == ")") {
        $("#result").val();
    } else if (($("#result").val()).indexOf('(') == -1) {
        $("#result").val();
    } else {
        $("#result").val(function (i, val) {
            return val + bracketSign
        });
    }
}
function equal() {  //sum
    var boxResult = $("#result").val();
    var last = boxResult.substr(boxResult.length - 1);
    if (last == "+" || last == "-" || last == "*" || last == "/" || last == ".") {
        alert("Error.Please check again.");
    } else {
        $("#result").val(eval($("#result").val()));
    }
}