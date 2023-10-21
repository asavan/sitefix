javascript: (async function() {
    const keys = [
        "AIzaSyAwGUSLR-S7iSRFO6JDZwlEskC_5M6zeys",
/*        "AIzaSyAAl-ZFX8hYQQnH7Wmo6gTCboaHjlxzifs",*/
        "AIzaSyBmQcXmAHD2h5ZurlNKHvHRwMVHbBQqbvc"
    ];
    const randomEl = (items) => items[Math.floor(Math.random()*items.length)];
    const fullUrl = window.location.href;
    const url = new URL(fullUrl);
    const params1 = new URLSearchParams(url.search);
    const urlV = params1.get("v");
    console.log(fullUrl, params1, urlV);
    const theUrl = 'https://www.googleapis.com/youtube/v3/videos?id='+urlV+'&part=snippet,statistics,recordingDetails&key=' + randomEl(keys);

    const snippetUrl = "https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyAwGUSLR-S7iSRFO6JDZwlEskC_5M6zeys&part=snippet&fields=items(snippet)";
    const resp = await fetch(theUrl);
    const json = await resp.json();
    console.log(json);
})();
