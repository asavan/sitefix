javascript: (function(count) {
    function getFullUrl(id) {
        return "https://www.youtube.com/watch?v=" + id;
    }

    function getIdFromUrl(line) {
        const url = new URL(line);
        if (!url.hostname.includes("youtube.com")) {
            if (url.hostname.includes("youtu.be")) {
                return url.pathname.replace("/", "");
            }
            return "";
        }

        const id = url.searchParams.get("v");
        if (id) {
            return id;
        }
        return url.pathname.replace("/shorts/", "");
    }

    function cleanUrlYT(text) {
        if (text.includes("shorts")) {
            const url = new URL(text);
            return url.origin + url.pathname;
        }
        return getFullUrl(getIdFromUrl(text));
    }
    const arr = [...document.querySelectorAll("ytd-playlist-video-renderer a#video-title")].slice(-count).map(e => cleanUrlYT(e.href));
    console.log(arr.join("\n"));
})(20);
