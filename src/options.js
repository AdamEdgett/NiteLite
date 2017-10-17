const storage = chrome.storage.sync;

const submitButton = document.querySelector('button.submit');
const checkbox = document.querySelector('input.enabled');

loadSettings();

submitButton.addEventListener('click', saveChanges);

function loadSettings() {
  storage.get('enabled', (value) => {
    checkbox.checked = value.enabled;
  });
}

function saveChanges() {
  storage.set({'enabled': checkbox.checked });
}
