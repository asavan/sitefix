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

    function getAmount(str) {
        return str ? parseFloat(str.replace(/\s/g, '')) : 0;
    }

    function mainLogic(addition = 0) {
        const allLines = Array.from(document.querySelector('table.statement').querySelector('tbody').querySelectorAll('tr'));
        const nonFood = allLines.filter(line => {
            const amount = -getAmount(line.querySelector(".negative")?.innerText);
            const cashBack = getAmount(line.querySelector(".cashback")?.childNodes[2].nodeValue);
            const keep = cashBack * 20 < amount;
            if (keep) {
                console.log(line.querySelector(".counterparty-name").innerText, amount, cashBack);
            }
            return keep;
        });

        const sumNonFood = nonFood.reduce((a, line) => a + getAmount(line.querySelector(".negative")?.innerText), 0);
        const debit = getAmount(document.querySelector('#debit-turnover-row')?.querySelector(".negative")?.innerText);
        const reserved = getAmount(document.querySelector('#reserved')?.querySelector(".negative")?.innerText);
        printResult(debit + addition, sumNonFood + addition);
        console.log("reserved", reserved);
        const all = debit + reserved;
        printResult(all + addition, sumNonFood + addition);
    }

    mainLogic();
})();
