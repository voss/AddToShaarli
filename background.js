const defaultShaarliInstance = "https://example.com/";

chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason === "install") {
    chrome.runtime.openOptionsPage();
  }
});

function addUrl(tab) {
  chrome.storage.sync.get(
    {
      savedShaarliInstance: defaultShaarliInstance,
    },
    function (items) {
      const shaarliInstance = items.savedShaarliInstance;
      if (
        shaarliInstance === defaultShaarliInstance ||
        shaarliInstance === ""
      ) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: () => {
            alert(
              "Please setup your Shaarli instance in the options of the extension."
            );
          },
        });
      } else {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["addUrl.js"],
        });
      }
    }
  );
}

function addNote(tab) {
  chrome.storage.sync.get(
    {
      savedShaarliInstance: defaultShaarliInstance,
    },
    function (items) {
      const shaarliInstance = items.savedShaarliInstance;
      if (
        shaarliInstance === defaultShaarliInstance ||
        shaarliInstance === ""
      ) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: () => {
            alert(
              "Please setup your Shaarli instance in the options of the extension."
            );
          },
        });
      } else {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["addNote.js"],
        });
      }
    }
  );
}

chrome.commands.onCommand.addListener(function (command, tab) {
  switch (command) {
    case "add-url":
      addUrl(tab);
      break;
    case "add-note":
      addNote(tab);
      break;
  }
});

chrome.action.onClicked.addListener(function (tab) {
  addUrl(tab);
});
