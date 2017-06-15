var valueString = "";
var valueNum = 0;
var valueOper = "";
let btnList = document.querySelectorAll(".squares");

for (let i = 0; i < btnList.length; i++) {
    let btn = btnList[i];
    btn.addEventListener("click", function (e) {
        var input;
        var answer = document.getElementById("answer");
        input = e.target.innerHTML;
        switch (input) {
            case "+":
            case "-":
            case "X":
            case "/":
            case "=":
                if (valueOper != "") {
                    switch (valueOper) {
                        case "+":
                            valueNum = valueNum + Number(valueString);
                            break;
                        case "-":
                            valueNum = valueNum - Number(valueString);
                            break;
                        case "/":
                            valueNum = valueNum / Number(valueString);
                            break;
                        case "X":
                            valueNum = valueNum * Number(valueString);
                            break;
                        default:
                    }
                    answer.innerHTML = valueNum;
                }
                else {
                    valueNum = valueString;
                }
                valueString = "";
                valueOper = input;
                break;
            case "C":
                valueOper = "";
                valueNum = "";
                valueString = "";
                answer.innerHTML = "";
                break;
            default:
                valueString += input;
                answer.innerHTML = valueString;
        }
    });
}