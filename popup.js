document.addEventListener('DOMContentLoaded', function() {

  let copyData = document.getElementById('copyData');
  let pasteAddress = document.getElementById('pasteAddress');
  let pasteItem = document.getElementById('pasteItem');

  copyData.addEventListener("click", function(request, sender, sendResponse) {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

      chrome.tabs.sendMessage(tabs[0].id, {type: "popup-copy"}, function(response) {
        console.log(response);
      });

    });

  }, false);

  pasteAddress.addEventListener("click", function(request, sender, sendResponse) {

    chrome.runtime.sendMessage({type: 'popup-paste'});

  }, false);

});