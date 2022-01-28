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
                g_name: $('body > div.main.threads > div.content.ng-scope > div > div > div.threads > div.threads-data-box > div.thread-details.ng-scope > div.thread-mails.ng-scope > div > div.mail-data > div.mail-content.ng-scope > div > i-frame > iframe').contents().find("html").html().find('#g_name').text(),
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
                g_embossing: jQuery('#g_embossing').text(),
                g_insulation: jQuery('#g_insulation').text(),
                g_division: jQuery('#g_division').text(),
                g_opening: jQuery('#g_opening').text(),
                g_threshold: jQuery('#g_threshold').text(),
                g_shell: jQuery('#g_shell').text(),
                g_frame: jQuery('#g_frame').text(),
                g_window: jQuery('#g_window').text(),
                g_window_color: jQuery('#g_window_color').text(),
                g_vent: jQuery('#g_vent').text(),
                g_vent_color: jQuery('#g_vent_color').text(),
                g_hardware: jQuery('#g_hardware').text(),
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
            $('body > div.vs-content-sidebar.add-new-data-sidebar.items-no-padding.font-medium > div.vs-sidebar.vs-sidebar-primary.vs-sidebar-position-right > div.vs-sidebar--items > section > div.p-6 > div:nth-child(2) > table > tr:nth-child(8) > td:nth-child(2) > div > input').val(userData.g_width * 1000)[0].dispatchEvent(new Event('change'));
            $('body > div.vs-content-sidebar.add-new-data-sidebar.items-no-padding.font-medium > div.vs-sidebar.vs-sidebar-primary.vs-sidebar-position-right > div.vs-sidebar--items > section > div.p-6 > div:nth-child(2) > table > tr:nth-child(9) > td:nth-child(2) > div > input').val(userData.g_height * 1000)[0].dispatchEvent(new Event('change'));

            if(userData.g_embossing === 'Senkrecht schmal') {
                await this.simulateMouseClick('#feat23768');
            } else if(userData.g_embossing === 'Senkrecht breit') {
                await this.simulateMouseClick('#feat23795');
            } else if(userData.g_embossing === 'Waagerecht schmal') {
                await this.simulateMouseClick('#feat23798');
            } else if(userData.g_embossing === 'Waagerecht breit') {
                await this.simulateMouseClick('#feat23771');
            }

            if(userData.g_montage === 'Montage vor der Einbauöffnung') {
                await this.simulateMouseClick('#feat23780');
            }

            if(userData.g_insulation === 'Ja') {
                await this.simulateMouseClick('#feat23808');
            }

            if(userData.g_division != 'Symetrisch') {
                await this.simulateMouseClick('#feat23848');
            }

            if(userData.g_opening === 'Linker Torflügel öffnet zuerst DIN Links') {
                await this.simulateMouseClick('#feat27643');
            }

            if(userData.g_threshold === 'Bürste am Tor') {
                await this.simulateMouseClick('#feat23825');
            }

            if(userData.g_shell === 'Verzinkt') {

                await this.simulateMouseClick('#feat23775');
                if(userData.g_frame === 'Mit') {
                    await this.simulateMouseClick('#feat23792');
                }

            } else if(userData.g_shell === 'RAL 8017 Schokoladen braun (glänzend)') {

                await this.simulateMouseClick('#feat23799');
                if(userData.g_frame === 'Mit') {
                    await this.simulateMouseClick('#feat23821');
                }

            } else if(userData.g_shell === 'RAL 9006 Weißaluminium (glänzend)') {

                await this.simulateMouseClick('#feat23786');
                if(userData.g_frame === 'Mit') {
                    await this.simulateMouseClick('#feat23824');
                }

            } else if(userData.g_shell === 'RAL 9010 Reinweiß (glänzend)') {

                await this.simulateMouseClick('#feat23787');
                if(userData.g_frame === 'Mit') {
                    await this.simulateMouseClick('#feat23794');
                }

            } else if(userData.g_shell === 'RAL 6005 Moosgrün (glänzend)') {

                await this.simulateMouseClick('#feat23843');
                if(userData.g_frame === 'Mit') {
                    await this.simulateMouseClick('#feat23832');
                }

            } else if(userData.g_shell === 'RAL 7016 Anthrazitgrau (glänzend)') {

                await this.simulateMouseClick('#feat23774');
                if(userData.g_frame === 'Mit') {
                    await this.simulateMouseClick('#feat23788');
                }

            } else if(userData.g_shell === 'RAL 8004 Ziegelrot (glänzend)') {

                await this.simulateMouseClick('#feat23784');
                if(userData.g_frame === 'Mit') {
                    await this.simulateMouseClick('#feat23831');
                }

            } else if(userData.g_shell === 'RAL 3005 Kirsch (glänzend)') {

                await this.simulateMouseClick('#feat23813');
                if(userData.g_frame === 'Mit') {
                    await this.simulateMouseClick('#feat23816');
                }

            } else if(userData.g_shell === 'RAL 8017 Schokoladen braun (matt)') {

                await this.simulateMouseClick('#feat23812');
                if(userData.g_frame === 'Mit') {
                    await this.simulateMouseClick('#feat23821');
                }

            } else if(userData.g_shell === 'RAL 6020 Chromoxidgrün (matt)') {

                await this.simulateMouseClick('#feat23842');
                if(userData.g_frame === 'Mit') {
                    await this.simulateMouseClick('#feat23833');
                }

            } else if(userData.g_shell === 'RAL 7024 Graphitgrau (matt)') {

                await this.simulateMouseClick('#feat23814');
                if(userData.g_frame === 'Mit') {
                    await this.simulateMouseClick('#feat23819');
                }

            } else if(userData.g_shell === 'RAL 7035 Lichtgrau (glänzend)') {

                await this.simulateMouseClick('#feat23804');
                if(userData.g_frame === 'Mit') {
                    await this.simulateMouseClick('#feat23807');
                }

            } else if(userData.g_shell === 'Goldene Eiche (*)') {

                await this.simulateMouseClick('#feat23796');
                if(userData.g_frame === 'Mit') {
                    await this.simulateMouseClick('#feat23845');
                }

            } else if(userData.g_shell === 'Nussbaum') {

                await this.simulateMouseClick('#feat23838');
                if(userData.g_frame === 'Mit') {
                    await this.simulateMouseClick('#feat23823');
                }

            }

            if(userData.g_window != '0') {
                if(userData.g_window_color === 'RAL 8003') {
                    await this.simulateMouseClick('#feat28132');
                    $('body > div.vs-content-sidebar.add-new-data-sidebar.items-no-padding.font-medium > div.vs-sidebar.vs-sidebar-primary.vs-sidebar-position-right > div.vs-sidebar--items > section > div.p-6 > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(7) > div > ul > li > ul > li:nth-child(1) > span > span:nth-child(4) > div > input').val(userData.g_window)[0].dispatchEvent(new Event('change'));
                } else if(userData.g_window_color === 'RAL 9010') {
                    await this.simulateMouseClick('#feat23790');
                    $('body > div.vs-content-sidebar.add-new-data-sidebar.items-no-padding.font-medium > div.vs-sidebar.vs-sidebar-primary.vs-sidebar-position-right > div.vs-sidebar--items > section > div.p-6 > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(7) > div > ul > li > ul > li:nth-child(2) > span > span:nth-child(4) > div > input').val(userData.g_window)[0].dispatchEvent(new Event('change'));
                } else if(userData.g_window_color === 'RAL 9005') {
                    await this.simulateMouseClick('#feat23844');
                    $('body > div.vs-content-sidebar.add-new-data-sidebar.items-no-padding.font-medium > div.vs-sidebar.vs-sidebar-primary.vs-sidebar-position-right > div.vs-sidebar--items > section > div.p-6 > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(7) > div > ul > li > ul > li:nth-child(3) > span > span:nth-child(4) > div > input').val(userData.g_window)[0].dispatchEvent(new Event('change'));
                } else if(userData.g_window_color === 'RAL 8011') {
                    await this.simulateMouseClick('#feat23826');
                    $('body > div.vs-content-sidebar.add-new-data-sidebar.items-no-padding.font-medium > div.vs-sidebar.vs-sidebar-primary.vs-sidebar-position-right > div.vs-sidebar--items > section > div.p-6 > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(7) > div > ul > li > ul > li:nth-child(4) > span > span:nth-child(4) > div > input').val(userData.g_window)[0].dispatchEvent(new Event('change'));
                } else if(userData.g_window_color === 'RAL 8017') {
                    await this.simulateMouseClick('#feat23800');
                    $('body > div.vs-content-sidebar.add-new-data-sidebar.items-no-padding.font-medium > div.vs-sidebar.vs-sidebar-primary.vs-sidebar-position-right > div.vs-sidebar--items > section > div.p-6 > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(7) > div > ul > li > ul > li:nth-child(5) > span > span:nth-child(4) > div > input').val(userData.g_window)[0].dispatchEvent(new Event('change'));
                } else if(userData.g_window_color === 'RAL 7016') {
                    await this.simulateMouseClick('#feat23781');
                    $('body > div.vs-content-sidebar.add-new-data-sidebar.items-no-padding.font-medium > div.vs-sidebar.vs-sidebar-primary.vs-sidebar-position-right > div.vs-sidebar--items > section > div.p-6 > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(7) > div > ul > li > ul > li:nth-child(6) > span > span:nth-child(4) > div > input').val(userData.g_window)[0].dispatchEvent(new Event('change'));
                }
            }

            if(userData.g_vent != '0') {
                if(userData.g_vent_color === 'Ja (braun)') {
                    await this.simulateMouseClick('#feat23839');
                    $('body > div.vs-content-sidebar.add-new-data-sidebar.items-no-padding.font-medium > div.vs-sidebar.vs-sidebar-primary.vs-sidebar-position-right > div.vs-sidebar--items > section > div.p-6 > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div > ul > li > ul > li:nth-child(2) > span > span:nth-child(4) > div > input').val(userData.g_vent)[0].dispatchEvent(new Event('change'));
                } else if(userData.g_vent_color === 'Ja (Weiß)') {
                    await this.simulateMouseClick('#feat23772');
                    $('body > div.vs-content-sidebar.add-new-data-sidebar.items-no-padding.font-medium > div.vs-sidebar.vs-sidebar-primary.vs-sidebar-position-right > div.vs-sidebar--items > section > div.p-6 > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div > ul > li > ul > li:nth-child(1) > span > span:nth-child(4) > div > input').val(userData.g_vent)[0].dispatchEvent(new Event('change'));
                }
            }

            if(userData.g_hardware === 'Knauf') {
                await this.simulateMouseClick('#feat28048');
            }

            await this.simulateMouseClick('#feat23847');
            $('body > div.vs-content-sidebar.add-new-data-sidebar.items-no-padding.font-medium > div.vs-sidebar.vs-sidebar-primary.vs-sidebar-position-right > div.vs-sidebar--items > section > div.p-6 > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(6) > div > ul > li > ul > li:nth-child(6) > span > span:nth-child(3) > div > input').val('2')[0].dispatchEvent(new Event('change'));

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