module.exports = function toReadable (number) {

    let str = '';
    const numberArray = number.toString().split('');

    function f1(num) {
        switch (num) {
            case '1': {
                return 'one';
            }
            case '2': {
                return 'two';;
            }
            case '3': {
                return 'three';
            }
            case '4': {
                return 'four';
            }
            case '5': {
                return 'five';
            }
            case '6': {
                return 'six';
            }
            case '7': {
                return 'seven';
            }
            case '8': {
                return 'eight';
            }
            case '9': {
                return 'nine';
            }
            case '0': {
                return '';
            }
        }
    }

    function f2(num) {
        switch (num) {
            case '10': {
                return 'ten';
            }
            case '11': {
                return 'eleven';
            }
            case '12': {
                return 'twelve';
            }
            case '13': {
                return 'thirteen';
            }
            case '14': {
                return 'fourteen';
            }
            case '15': {
                return 'fifteen';
            }
            case '16': {
                return 'sixteen';
            }
            case '17': {
                return 'seventeen';
            }
            case '18': {
                return 'eighteen';
            }
            case '19': {
                return 'nineteen';
            }
        }
    }

    function f3(num) {
        switch (num) {
            case '2': {
                return 'twenty';;
            }
            case '3': {
                return 'thirty';
            }
            case '4': {
                return 'forty';
            }
            case '5': {
                return 'fifty';
            }
            case '6': {
                return 'sixty';
            }
            case '7': {
                return 'seventy';
            }
            case '8': {
                return 'eighty';
            }
            case '9': {
                return 'ninety';
            }
        }
    }

    function f4(num) {
        if (num[0] == 0) {
            return '' + f1(num[1]);
        } else if (num[0] == 1) {
            return f2(num.join(''));
        } else {
            if (f1(num[1]) == 0) {
                return f3(num[0]);
            } else {
                return f3(num[0]) + ' ' + f1(num[1]);
            }
        }
    }

    if (number === 0) {
        str = 'zero';
    } else if (numberArray.length === 1) {
        str = f1(numberArray[0]);
    } else if (numberArray.length === 2) {
        str = f4(numberArray);
    } else if (numberArray.length === 3) {
        if (numberArray[1] == 0 && numberArray[2] == 0) {
            str = f1(numberArray[0]) + ' hundred'
        } else {
            str = f1(numberArray[0]) + ' hundred' + ' ' + f4(numberArray.slice(1));
        }
    }

    return str;
}
