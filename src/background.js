const storage = chrome.storage.sync;

chrome.browserAction.onClicked.addListener(() => {
  storage.get('enabled', (value) => {
    storage.set({ enabled: !value.enabled });
  });
});
