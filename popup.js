/*
 * w zmiennych są zaczytane przyciski z wtyczki (copyData itd. odpowiadające id tym z pliku popup.html)
 * kliknięcie w poszczególne wysyła message, która jest odbierana w content.js
 * console.logi z tego pliku widoczne są w devtoolsach wtyczki - kliknięcie w przyciski musi nastąpić na aktywnej stronie, z której korzystamy
 */

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

    console.log(2343442);

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

      chrome.tabs.sendMessage(tabs[0].id, {type: "popup-paste"}, function(response) {

      });

    });

  }, false);

});