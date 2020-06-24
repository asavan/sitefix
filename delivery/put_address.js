javascript:(async () => {
    const delay = s => new Promise(res => setTimeout(res, s * 100));
    document.getElementsByClassName("address-input__location")[0].click();
    await delay(5);
    document.getElementsByClassName("address-suggest__search-input")[0].value = "Москва, Тверская, 6";
})();
