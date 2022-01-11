/*
 * RUNTIME to taki schowek, który przechowuje dane wymieniane pomiędzy kopiuj i wklej
 */

let data;

chrome.runtime.onMessage.addListener(function(message, sender) {
    if(message.type == 'runtime-copy') {
        data = message.text;
    }
});

chrome.runtime.onMessage.addListener(function(message, sender) {

    if(message.type == 'popup-paste') {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {type: "popup-paste", text: data}, function(response) {
                console.log(response);
            });
        });
    }
});
