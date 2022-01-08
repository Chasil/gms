chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {

    if(message.type === 'popup-copy') {
        sendResponse({farewell: "goodbye"});
    }
});