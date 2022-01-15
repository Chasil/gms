const gms = {
    userData: {},
    copy: (message) => {
        this.userData = message.userData;
    },
    paste: () => {
        return this.userData;
    }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    switch(message.type) {
        case 'runtime-copy':
            sendResponse(gms.copy(message));
            break;
        case 'runtime-paste':
            sendResponse(gms.paste());
            break;
    }
});
