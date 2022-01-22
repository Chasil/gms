const gms = {
    userData: {},
    copy: (message) => {
        this.userData = message.userData;
    },
    paste: () => {
        return this.userData;
    },
    paste_item: () => {
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
        case 'runtime-paste-item':
            sendResponse(gms.paste_item());
            break;
    }
});
