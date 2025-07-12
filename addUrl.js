!function(){
    chrome.storage.sync.get({
        savedShaarliInstance: "https://example.com/"
    }, function (items) {
        const shaarliInstance = items.savedShaarliInstance;
        const o = location.href;
        const e = document.title || o;
        const popup = window.open(
            shaarliInstance +
            "?post=" +
            encodeURIComponent(o) +
            "&title=" +
            encodeURIComponent(e) +
            "&description=" +
            encodeURIComponent(document.getSelection()) +
            "&source=bookmarklet",
            "_blank",
            "menubar=no,height=800,width=600,toolbar=no,scrollbars=yes,status=no,dialog=1"
        );
    });
}();
