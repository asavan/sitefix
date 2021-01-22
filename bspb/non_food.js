javascript:(async () => {

    function declOfNum(number, titles) {
        const cases = [2, 0, 1, 1, 1, 2];
        return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }

    function declDays(number) {
        return declOfNum(number, ["день", "дня", "дней"]);
    }

    function printResult(all, notFood) {
        const x = (all * 0.3 - notFood) / 0.7;
        const need = Math.ceil(x);
        if (need > 0) {
            console.log("Нужно потратить не на еду ", need);
        }
        const y = notFood / 0.3 - all;
        if (y > 0) {
            const dayAverage = 700;
            const days = Math.floor(y * 2 / dayAverage) / 2;
            console.log("Можно потратить на еду", Math.floor(y));
            console.log("Осталось примерно на", days, declDays(Math.floor(days)));
        }
    }

    function getAmount(strValue) {
        if (strValue) {
            const mySubString = strValue.substring(
                strValue.lastIndexOf("-") + 1,
                strValue.lastIndexOf(".")
            );
            return parseInt(mySubString.replace(/\s/g, ''));
        }
        return 0;
    }

    function getCashBackValue(str) {
        if (!str) return 0;
        let lastIndex = str.lastIndexOf(".");
        if (lastIndex < 0) {
            lastIndex = str.length;
        }
        const mySubString = str.substring(
            str.lastIndexOf("+") + 1,
            lastIndex
        );
        return parseInt(mySubString.replace(/\s/g, ''));
    }

    const allLines = Array.from(document.querySelector('table.statement').querySelector('tbody').querySelectorAll('tr'));
    const notDeliveryClub = allLines.filter(line => line.querySelector(".counterparty-name").innerText !== "Delivery Club");
    const onlyNegative = notDeliveryClub.filter(line => line.querySelector(".negative"));
    /* TODO: filter other cafe here */

    const nonFood = allLines.filter(line => {
        const amount = getAmount(line.querySelector(".negative")?.innerText);
        const cashBack = getCashBackValue(line.querySelector(".cashback")?.childNodes[2].nodeValue);
        return cashBack * 50 < amount;
    });
    nonFood.forEach(line => {
        const amount = getAmount(line.querySelector(".negative")?.innerText);
        const cashBack = getCashBackValue(line.querySelector(".cashback")?.childNodes[2].nodeValue);
        console.log(line.querySelector(".counterparty-name").innerText, amount, cashBack);
    });
    let sumNonFood = 0;
    nonFood.forEach(line => sumNonFood += getAmount(line.querySelector(".negative")?.innerText));
    const spisanie = getAmount(document.querySelector('#debit-turnover-row')?.querySelector(".negative")?.innerText);
    const reserved = getAmount(document.querySelector('#reserved')?.querySelector(".negative")?.innerText);
    const all = spisanie + reserved;
    printResult(all, sumNonFood + reserved);
})();
