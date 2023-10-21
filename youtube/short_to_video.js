javascript: (async function() {
    const fullUrl = window.location.href;
    /*https://youtube.com/shorts/6NmsHUnTEQU*/
    const toFind = "https://www.youtube.com/shorts/";
    const toFind2 = "https://youtube.com/shorts/";
    const toReplace = "https://www.youtube.com/watch?v=";
    const finalUrl = fullUrl.replace(toFind, toReplace).replace(toFind2, toReplace);
    console.log(finalUrl);
    window.location.href = finalUrl;
})();
