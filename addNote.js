!function(){
    chrome.storage.sync.get({
        savedShaarliInstance: "https://example.com/"
    }, function (items) {
        const shaarliInstance = items.savedShaarliInstance;
        const popup = window.open(
            shaarliInstance +
            "?post=" +
            "&description=" +
            encodeURIComponent(document.getSelection()),
            "_blank",
            "menubar=no,height=800,width=600,toolbar=no,scrollbars=yes,status=no,dialog=1"
        );
    });
}();
