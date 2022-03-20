class ShortAnything {
    constructor() {

    }

    incomeSort(income, currency) {

        if (income >= 999) {

            income = (income.toString().split(""));
            income.splice(1, 0, ".");
            income = Number(income.join("")).toFixed(1);

            return `${income}${currency}`;

        } else if (income <= 999) {

            return income + currency;
        }
    }
}

let shortAnything = new ShortAnything;
