javascript: (function() {
    let url = window.location.href;
    if (url.indexOf("disable_polymer") >=0 ) {
        return;
    }
    if (url.indexOf("?") > 0) {
        url += "&";
    } else {
        url += "?";
    }
    url += "disable_polymer=1";
    window.location.href = url;
})();
