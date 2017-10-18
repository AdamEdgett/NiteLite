const storage = chrome.storage.sync;

function handleValueChange(value) {
  if (value.enabled) {
    document.body.classList.add('nitelite');
  }
  else {
    document.body.classList.remove('nitelite');
  }
}

if (storage)  storage.get('enabled', (value) => {
  handleValueChange(value);
});

chrome.storage.onChanged.addListener(() => {
  storage.get('enabled', (value) => {
    handleValueChange(value);
  });
});
