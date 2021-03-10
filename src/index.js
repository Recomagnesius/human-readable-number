module.exports = function toReadable(number) {
    function firstTwoTen(number) {
        let list = [
            'zero',
            'one',
            'two',
            'three',
            'four',
            'five',
            'six',
            'seven',
            'eight',
            'nine',
            'ten',
            'eleven',
            'twelve',
            'thirteen',
            'fourteen',
            'fifteen',
            'sixteen',
            'seventeen',
            'eighteen',
            'nineteen',
            'twenty',
        ];
        return list[number];
    }

    function lessHundred(number) {
        let list = [
            undefined,
            undefined,
            'twenty',
            'thirty',
            'forty',
            'fifty',
            'sixty',
            'seventy',
            'eighty',
            'ninety',
        ];
        return list[number];
    }

    function hundreds(number) {
        let list = [
            undefined,
            'one hundred',
            'two hundred',
            'three hundred',
            'four hundred',
            'five hundred',
            'six hundred',
            'seven hundred',
            'eight hundred',
            'nine hundred',
        ]
        return list[number];
    }

    if (number < 21) {
        return firstTwoTen(number);
    }
    else if (number > 20 && number < 100) {
        number = number + '';
        number.split('');
        if (number[1] == '0') {
            let result = Number(number[0]);
            return lessHundred(result);
        }
        else {
            let result = String(number);
            result = result.split('');
            num10 = lessHundred(result[0]);
            num1 = firstTwoTen(result[1]);
            result = num10 + ' ' + num1;
            return result;
        }
    }
    else {
        let result = String(number);
        result = result.split('');
        var tens = result[1] + result[2];
        var hun = result[0];
        hun = Number(hun);
        hun = hundreds(hun);
        tens = Number(tens);
        if (tens < 21 && tens != 0) {
            tens = firstTwoTen(tens);
        }
        else if (tens == 0) {
            tens = '00'
        }
        else {
            tens = String(tens);
            tens = tens.split('');
            if (tens[1] == '0') {
                let result = Number(number[0]);
                tens = lessHundred(tens[0]);
            }
            else {
                tens = String(tens);
                tens = tens.split('');
                let num10 = lessHundred(tens[0]);
                let num1 = firstTwoTen(tens[1]);
                tens = num10 + ' ' + num1;
            }
            result = hun + ' ' + tens;
            return result;
        }

    }
}