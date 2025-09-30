javascript: (function() {

    function openUrl(url) {
        var handle = open(url);
    }
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

    function isYTVideoUrl(curUrl) {
        return curUrl.includes("watch") || curUrl.includes("shorts");
    }

    function getYoutubeUrl(curUrl, preferCursor) {
        if (!curUrl.includes("youtube.com")) {
            return null;
        }
        const underCursor = document.querySelector('[href]:hover');
        if (underCursor) {
            if (preferCursor || !isYTVideoUrl(curUrl)) {
                return underCursor.href;
            }
        }
        if (isYTVideoUrl(curUrl)) {
            return curUrl;
        }
        return null;
    }


    function getObsLink(dataX) {
        const data = encodeURIComponent(dataX);
        return "obsidian://daily?vault=obsidian&content=" + data;
    }

    function vidTemplate(data) {
        return "\r\n\`\`\`vid\r\n" + data + "\r\n\`\`\`\r\n\r\n";
    }

    function sendToObsidian(preferCurUrl) {
        const curUrl = getYoutubeUrl(window.location.href, !preferCurUrl);
        if (!curUrl) {
            console.log("URL not found");
            return;
        } else {
        }
        const cleanUrl = cleanUrlYT(curUrl);
        const template = getObsLink(vidTemplate(cleanUrl));
        openUrl(template);
    }
    let url = window.location.href;
    sendToObsidian(url);
})();
