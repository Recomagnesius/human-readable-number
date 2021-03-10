module.exports = function toReadable (number) {
    function twoTen(num) {
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
        if ((number.length == 1 || number.length == 2) && number <= 20) {
            return list[number];
        }
    }

    let list2 = [
        empty,
        empty,
        'twenty',
        'thirty',
        'fourty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
    ];
    if (number.length == 2) {
        number = String(number);
        number.split();
        number.forEach(function (item, index, array) {
            Number(number[index]);
        });
        let p1 = twoTen(number[0]);
        let p2 = list2[number[1]];
        let result;
        result = p2 + ' ' + p1;
        return result;
    }
}
