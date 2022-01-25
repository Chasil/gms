const gms = {
    firstSelect: "body > div:nth-child(1) > div.vs-sidebar.vs-sidebar-primary.vs-sidebar-position-right > div.vs-sidebar--items > section > div.p-6 > div > div > div.vue-treeselect__control > div.vue-treeselect__value-container",
    firstSelectChosenOption: "body > div:nth-child(1) > div.vs-sidebar.vs-sidebar-primary.vs-sidebar-position-right > div.vs-sidebar--items > section > div.p-6 > div > div > div.vue-treeselect__menu-container > div > div > div:nth-child(2) > div > div.vue-treeselect__label-container > label",
    secondSelect: "body > div:nth-child(1) > div.vs-sidebar.vs-sidebar-primary.vs-sidebar-position-right > div.vs-sidebar--items > section > div.p-6 > div > div:nth-child(2) > div > div.vue-treeselect__control > div.vue-treeselect__value-container",
    secondSelectChosenOption: "body > div:nth-child(1) > div.vs-sidebar.vs-sidebar-primary.vs-sidebar-position-right > div.vs-sidebar--items > section > div.p-6 > div > div:nth-child(2) > div > div.vue-treeselect__menu-container > div > div > div:nth-child(1) > div > div > div > p",
    thirdSelect: "body > div:nth-child(1) > div.vs-sidebar.vs-sidebar-primary.vs-sidebar-position-right > div.vs-sidebar--items > section > div.p-6 > div > div.mb-5 > div > div.vue-treeselect__control > div.vue-treeselect__value-container",
    thirdSelectChosenOption: "body > div:nth-child(1) > div.vs-sidebar.vs-sidebar-primary.vs-sidebar-position-right > div.vs-sidebar--items > section > div.p-6 > div > div.mb-5 > div > div.vue-treeselect__menu-container > div > div > div > div > div",
    copy: () => {
        chrome.runtime.sendMessage({
            type: 'runtime-copy',
            userData: {
                g_name: jQuery('#g_name').text() ,
                g_lastname: jQuery('#g_lastname').text(),
                g_company: jQuery('#g_company').text(),
                g_land: jQuery('#g_land').text(),
                g_postcode: jQuery('#g_postcode').text(),
                g_city: jQuery('#g_city').text(),
                g_address: jQuery('#g_address').text(),
                g_phone: jQuery('#g_phone').text(),
                g_fax: jQuery('#g_fax').text(),
                g_email: jQuery('#g_email').text(),
                g_productname: jQuery('#g_productname').text(),
                g_productchoice: jQuery('#g_productchoice').text(),
                g_width: jQuery('#g_width').text(),
                g_height: jQuery('#g_height').text(),
                g_montage: jQuery('#g_montage').text(),
            }}
        );
    },
    paste: () => {
        chrome.runtime.sendMessage({
            type: 'runtime-paste'
        }, (userData) => {
            let selectorPrefix = 'div.vs-sidebar--items > section > div.p-6 > div > ';
            $(selectorPrefix + 'div:nth-child(1) > div > input').val(userData.g_name)[0].dispatchEvent(new Event('input'));
            $(selectorPrefix + 'div:nth-child(2) > div > input').val(userData.g_company)[0].dispatchEvent(new Event('input'));
            $(selectorPrefix + 'div:nth-child(4) > div > input').val(userData.g_address)[0].dispatchEvent(new Event('input'));
            $(selectorPrefix + 'div:nth-child(5) > div > input').val(userData.g_postcode)[0].dispatchEvent(new Event('input'));
            $(selectorPrefix + 'div:nth-child(6) > div > input').val(userData.g_city)[0].dispatchEvent(new Event('input'));
            $(selectorPrefix + 'div:nth-child(7) > div > input').val('Niemcy')[0].dispatchEvent(new Event('input'));
            $(selectorPrefix + 'div:nth-child(8) > div > input').val(userData.g_phone)[0].dispatchEvent(new Event('input'));
            $(selectorPrefix + 'div:nth-child(9) > div > input').val(userData.g_email)[0].dispatchEvent(new Event('input'));
        });
    },
    getQuerySelector: (target) => {
        let tries = 0;
        return new Promise(resolve => {
            const waitForQuerySelector = setInterval(() => {
                const querySelector = document.querySelector(target);
                if (querySelector) {
                    clearInterval(waitForQuerySelector);
                    resolve(querySelector);
                } else if (tries > 50) {
                    clearInterval(waitForQuerySelector);
                    throw new Error('selector not found');
                }
                tries += 1;
            }, 100);
        });
    },
    async simulateMouseClick(target) {
        const targetNode = await this.getQuerySelector(target);
        function triggerMouseEvent(targetNode, eventType) {
            const clickEvent = document.createEvent('MouseEvents');
            clickEvent.initEvent(eventType, true, true);
            targetNode.dispatchEvent(clickEvent);
        }
        return new Promise(resolve => {
            setTimeout(() => {
                ["mouseover", "mousedown", "mouseup", "click"].forEach((eventType) => {
                    triggerMouseEvent(targetNode, eventType);
                });
            });
            setTimeout(() => {
                resolve();
            });
        })
    },
    pasteItem() {
        chrome.runtime.sendMessage({
            type: 'runtime-paste-item'
        }, async (userData) => {
            await this.simulateMouseClick(this.firstSelect);
            await this.simulateMouseClick(this.firstSelectChosenOption);
            await this.simulateMouseClick(this.secondSelect);
            await this.simulateMouseClick(this.secondSelectChosenOption);
            await this.simulateMouseClick(this.thirdSelect);
            await this.simulateMouseClick(this.thirdSelectChosenOption);
        });
    }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

    switch(message.type) {
        case 'popup-copy':
            gms.copy();
            break;
        case 'popup-paste':
            gms.paste();
            break;
        case 'popup-paste-item':
            gms.pasteItem();
            break;
    }

    sendResponse();
});