chrome.runtime.onMessage.addListener(function(message, sender) {

    let data;

    if(message.type == 'runtime-copy') {
        data = message.text;
    }

    if(message.type == 'popup-paste') {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {type: "popup-paste", text: data}, function(response) {
            });
        });
    }
});
