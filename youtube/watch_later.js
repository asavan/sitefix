javascript: (function (count, selector) {
    const getFullUrl = id => "https://www.youtube.com/watch?v=" + id;
    const getShortsUrl = id => "https://www.youtube.com/shorts/" + id;

    const getIdFromUrl = line => {
        const url = new URL(line);
        if (url.hostname.includes("youtu.be")) {
            return url.pathname.replace("/", "");
        }
        if (!url.hostname.includes("youtube.com")) {
            return "";
        }

        const id = url.searchParams.get("v");
        if (id) {
            return id;
        }
        return url.pathname.replace("/shorts/", "");
    };

    const cleanUrlYT = text => {
        if (text.includes("/shorts/")) {
            return getShortsUrl(getIdFromUrl(text));
        }
        return getFullUrl(getIdFromUrl(text));
    };

    const arr = [...document.querySelectorAll(selector)].slice(-count).map(e => cleanUrlYT(e.href));
    console.log(arr.join("\n"));
})(20, "ytd-playlist-video-renderer a#video-title");
