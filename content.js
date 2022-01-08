chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {

    alert(message.type);
    console.log(message.type);

    if(message.type === 'popup-copy') {
        alert(2344324);
    }
});