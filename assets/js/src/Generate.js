class Generate {
    constructor() {}

    number(charLength = 5) {
        let number = '0123456789';
        let value = '';
        for (let i = 0; i < charLength; i++) value += number.charAt(Math.floor(Math.random() * number.length));

        return value;
    }

    numberWithAlpha(charLength = 5) {

        var value = "";
        var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";

        for (var i = 0; i < charLength; i++)
            value += alpha.charAt(Math.floor(Math.random() * alpha.length));

        return value;
    }

    numberWithMinMax(min = 1, max = 99) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    };
}

let generate = new Generate;
