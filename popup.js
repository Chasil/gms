document.addEventListener('DOMContentLoaded', function() {

  const copyData = document.getElementById('copyData');
  const pasteAddress = document.getElementById('pasteAddress');

  copyData.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {type: "popup-copy"}, function() {});
    });
  }, false);

  pasteAddress.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {type: "popup-paste"}, function() {});
    });
  }, false);

});