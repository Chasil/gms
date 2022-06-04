const gms = {
    firstSelect: "body > div:nth-child(1) > div.vs-sidebar.vs-sidebar-primary.vs-sidebar-position-right > div.vs-sidebar--items > section > div.p-6 > div > div > div.vue-treeselect__control > div.vue-treeselect__value-container",
    firstSelectChosenOption: "body > div:nth-child(1) > div.vs-sidebar.vs-sidebar-primary.vs-sidebar-position-right > div.vs-sidebar--items > section > div.p-6 > div > div > div.vue-treeselect__menu-container > div > div > div:nth-child(2) > div > div.vue-treeselect__label-container > label",
    secondSelect: "body > div:nth-child(1) > div.vs-sidebar.vs-sidebar-primary.vs-sidebar-position-right > div.vs-sidebar--items > section > div.p-6 > div > div:nth-child(2) > div > div.vue-treeselect__control > div.vue-treeselect__value-container",
    secondSelectChosenOption: "body > div:nth-child(1) > div.vs-sidebar.vs-sidebar-primary.vs-sidebar-position-right > div.vs-sidebar--items > section > div.p-6 > div > div:nth-child(2) > div > div.vue-treeselect__menu-container > div > div > div:nth-child(1) > div > div > div > p",
    thirdSelect: "body > div:nth-child(1) > div.vs-sidebar.vs-sidebar-primary.vs-sidebar-position-right > div.vs-sidebar--items > section > div.p-6 > div > div.mb-5 > div > div.vue-treeselect__control > div.vue-treeselect__value-container",
    thirdSelectChosenOption: "body > div:nth-child(1) > div.vs-sidebar.vs-sidebar-primary.vs-sidebar-position-right > div.vs-sidebar--items > section > div.p-6 > div > div.mb-5 > div > div.vue-treeselect__menu-container > div > div > div > div > div",
    // iframeData: "body > div.main.threads > div.content.ng-scope > div > div > div.threads > div.threads-data-box > div.thread-details.ng-scope > div.thread-mails.ng-scope > div > div.mail-data > div.mail-content.ng-scope > div > i-frame > iframe",
    g_xml: document.documentElement.outerHTML,
    copy() {
        chrome.runtime.sendMessage({
            type: 'runtime-copy',
            userData: {
                g_name: jQuery(this.g_xml).contents().find('ZAPIS[co="zamowienia"] Nazw').text(),
                g_company: ' ',
                g_land: ' ',
                g_postcode: jQuery(this.g_xml).contents().find('ZAPIS[co="zamowienia"] Kodp').text(),
                g_city: jQuery(this.g_xml).contents().find('ZAPIS[co="zamowienia"] Mias').text(),
                g_address: jQuery(this.g_xml).contents().find('ZAPIS[co="zamowienia"] Ulic').text(),
                g_phone: jQuery(this.g_xml).contents().find('ZAPIS[co="zamowienia"] T1').text(),
                g_fax: ' ',
                g_email: jQuery(this.g_xml).contents().find('ZAPIS[co="zamowienia"] Mail').text(),
                g_order_number: jQuery(this.g_xml).contents().find('ZAPIS[co="zamowienia"]').attr('NrR'),
                // g_product: jQuery(this.g_xml).contents().find('ZAPIS[co="zamsy"] Nazw').text().split(/\r?\n/).map(text => text.trim()),
                g_productname: jQuery(this.g_xml).contents().find('ZAPIS[co="zamsy"] Nazw').text().split(/\r?\n/).map(text => text.trim())[0].split('-').map(text => text.trim())[0],
                g_productchoice: jQuery(this.g_xml).contents().find('ZAPIS[co="zamsy"] Nazw').text().split(/\r?\n/).map(text => text.trim())[1].split(':').map(text => text.trim())[1],
                g_width: jQuery(this.g_xml).contents().find('ZAPIS[co="zamsy"] Nazw').text().split(/\r?\n/).map(text => text.trim())[2].split(':').map(text => text.trim())[1].split('x').map(text => text.trim())[0].replace(/[^\d.-]/g, ''),
                g_height: jQuery(this.g_xml).contents().find('ZAPIS[co="zamsy"] Nazw').text().split(/\r?\n/).map(text => text.trim())[2].split(':').map(text => text.trim())[1].split('x').map(text => text.trim())[1].replace(/[^\d.-]/g, ''),
                g_montage: jQuery(this.g_xml).contents().find('ZAPIS[co="zamsy"] Nazw').text().split(/\r?\n/).map(text => text.trim())[3].split(':').map(text => text.trim())[1],
                g_embossing: jQuery(this.g_xml).contents().find('ZAPIS[co="zamsy"] Nazw').text().split(/\r?\n/).map(text => text.trim())[4].split(':').map(text => text.trim())[1],
                g_insulation: jQuery(this.g_xml).contents().find('ZAPIS[co="zamsy"] Nazw').text().split(/\r?\n/).map(text => text.trim())[5].split(':').map(text => text.trim())[1],
                g_division: jQuery(this.g_xml).contents().find('ZAPIS[co="zamsy"] Nazw').text().split(/\r?\n/).map(text => text.trim())[6].split(':').map(text => text.trim())[1],
                g_opening: jQuery(this.g_xml).contents().find('ZAPIS[co="zamsy"] Nazw').text().split(/\r?\n/).map(text => text.trim())[7].split(':').map(text => text.trim())[1],
                g_threshold: jQuery(this.g_xml).contents().find('ZAPIS[co="zamsy"] Nazw').text().split(/\r?\n/).map(text => text.trim())[8].split(':').map(text => text.trim())[1],
                g_shell: jQuery(this.g_xml).contents().find('ZAPIS[co="zamsy"] Nazw').text().split(/\r?\n/).map(text => text.trim())[9].split(':').map(text => text.trim())[1],
                g_frame: jQuery(this.g_xml).contents().find('ZAPIS[co="zamsy"] Nazw').text().split(/\r?\n/).map(text => text.trim())[10].split(':').map(text => text.trim())[1],
                g_window: jQuery(this.g_xml).contents().find('ZAPIS[co="zamsy"] Nazw').text().split(/\r?\n/).map(text => text.trim())[11].split(':').map(text => text.trim())[1],
                g_vent: jQuery(this.g_xml).contents().find('ZAPIS[co="zamsy"] Nazw').text().split(/\r?\n/).map(text => text.trim())[12].split(':').map(text => text.trim())[1],
                // g_hardware: jQuery(this.iframeData).contents().find("html").find('#g_hardware').text(),
                g_handle: jQuery(this.g_xml).contents().find('ZAPIS[co="zamsy"] Nazw').text().split(/\r?\n/).map(text => text.trim())[13].split(':').map(text => text.trim())[1],
                g_transport: jQuery(this.g_xml).contents().find('ZAPIS[co="zamsy"] Nazw').text().split(/\r?\n/).map(text => text.trim())[15].split(':').map(text => text.trim())[1],
                g_sonstige: jQuery(this.g_xml).contents().find('ZAPIS[co="zamsy"] Nazw').text().split(/\r?\n/).map(text => text.trim())[16].split(':').map(text => text.trim())[1],
                g_anzahl: jQuery(this.g_xml).contents().find('ZAPIS[co="zamsy"] Nazw').text().split(/\r?\n/).map(text => text.trim())[17].split(':').map(text => text.trim())[1],
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
            $(selectorPrefix + 'div:nth-child(7) > div > input').val(userData.g_transport)[0].dispatchEvent(new Event('input'));
            $(selectorPrefix + 'div:nth-child(8) > div > input').val(userData.g_phone)[0].dispatchEvent(new Event('input'));
            $(selectorPrefix + 'div:nth-child(9) > div > input').val(userData.g_email)[0].dispatchEvent(new Event('input'));
            $(selectorPrefix + 'div:nth-child(9) > div > input').val(userData.g_email)[0].dispatchEvent(new Event('input'));
            $(selectorPrefix + 'div.vs-component.vs-con-textarea.mt-5.w-full.vs-textarea-primary > textarea').val(userData.g_order_number)[0].dispatchEvent(new Event('input'));
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

            if(userData.g_shell.indexOf('8017') != '-1') {

                await this.simulateMouseClick('#feat23799');
                if(userData.g_frame === 'Mit') {
                    await this.simulateMouseClick('#feat23821');
                }

            } else if(userData.g_shell.indexOf('9006') != '-1') {

                await this.simulateMouseClick('#feat23786');
                if(userData.g_frame === 'Mit') {
                    await this.simulateMouseClick('#feat23824');
                }

            } else if(userData.g_shell.indexOf('9010') != '-1') {

                await this.simulateMouseClick('#feat23787');
                if(userData.g_frame === 'Mit') {
                    await this.simulateMouseClick('#feat23794');
                }

            } else if(userData.g_shell.indexOf('6005') != '-1') {

                await this.simulateMouseClick('#feat23843');
                if(userData.g_frame === 'Mit') {
                    await this.simulateMouseClick('#feat23832');
                }

            } else if(userData.g_shell.indexOf('7016') != '-1') {

                await this.simulateMouseClick('#feat23774');
                if(userData.g_frame === 'Mit') {
                    await this.simulateMouseClick('#feat23788');
                }

            } else if(userData.g_shell.indexOf('8004') != '-1') {

                await this.simulateMouseClick('#feat23784');
                if(userData.g_frame === 'Mit') {
                    await this.simulateMouseClick('#feat23831');
                }

            } else if(userData.g_shell.indexOf('3005') != '-1') {

                await this.simulateMouseClick('#feat23813');
                if(userData.g_frame === 'Mit') {
                    await this.simulateMouseClick('#feat23816');
                }

            } else if(userData.g_shell.indexOf('8017') != '-1') {

                await this.simulateMouseClick('#feat23812');
                if(userData.g_frame === 'Mit') {
                    await this.simulateMouseClick('#feat23821');
                }

            } else if(userData.g_shell.indexOf('6020') != '-1') {

                await this.simulateMouseClick('#feat23842');
                if(userData.g_frame === 'Mit') {
                    await this.simulateMouseClick('#feat23833');
                }

            } else if(userData.g_shell.indexOf('7024') != '-1') {

                await this.simulateMouseClick('#feat23814');
                if(userData.g_frame === 'Mit') {
                    await this.simulateMouseClick('#feat23819');
                }

            } else if(userData.g_shell.indexOf('7035') != '-1') {

                await this.simulateMouseClick('#feat23804');
                if(userData.g_frame === 'Mit') {
                    await this.simulateMouseClick('#feat23807');
                }

            } else if(userData.g_shell.indexOf('Goldene Eiche') != '-1') {

                await this.simulateMouseClick('#feat23796');
                if(userData.g_frame === 'Mit') {
                    await this.simulateMouseClick('#feat23845');
                }

            } else if(userData.g_shell.indexOf('Nussbaum') != '-1') {

                await this.simulateMouseClick('#feat23838');
                if(userData.g_frame === 'Mit') {
                    await this.simulateMouseClick('#feat23823');
                }

            } else if(userData.g_shell.indexOf('Verzinkt') != '-1') {

                await this.simulateMouseClick('#feat23775');
                if(userData.g_frame === 'Mit') {
                    await this.simulateMouseClick('#feat23792');
                }

            }

            if(userData.g_window != '0') {
                if(userData.g_window.indexOf('8003') != '-1') {
                    await this.simulateMouseClick('#feat28132');
                    if(userData.g_window.indexOf('2 Stück')) {
                        $('body > div.vs-content-sidebar.add-new-data-sidebar.items-no-padding.font-medium > div.vs-sidebar.vs-sidebar-primary.vs-sidebar-position-right > div.vs-sidebar--items > section > div.p-6 > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(7) > div > ul > li > ul > li:nth-child(1) > span > span:nth-child(4) > div > input').val('2')[0].dispatchEvent(new Event('change'));
                    }
                } else if(userData.g_window.indexOf('9010') != '-1') {
                    await this.simulateMouseClick('#feat23790');
                    if(userData.g_window.indexOf('2 Stück')) {
                        $('body > div.vs-content-sidebar.add-new-data-sidebar.items-no-padding.font-medium > div.vs-sidebar.vs-sidebar-primary.vs-sidebar-position-right > div.vs-sidebar--items > section > div.p-6 > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(7) > div > ul > li > ul > li:nth-child(2) > span > span:nth-child(4) > div > input').val('2')[0].dispatchEvent(new Event('change'));
                    }
                } else if(userData.g_window.indexOf('9005') != '-1') {
                    await this.simulateMouseClick('#feat23844');
                    if(userData.g_window.indexOf('2 Stück')) {
                        $('body > div.vs-content-sidebar.add-new-data-sidebar.items-no-padding.font-medium > div.vs-sidebar.vs-sidebar-primary.vs-sidebar-position-right > div.vs-sidebar--items > section > div.p-6 > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(7) > div > ul > li > ul > li:nth-child(3) > span > span:nth-child(4) > div > input').val('2')[0].dispatchEvent(new Event('change'));
                    }
                } else if(userData.g_window.indexOf('8011') != '-1') {
                    await this.simulateMouseClick('#feat23826');
                    if(userData.g_window.indexOf('2 Stück')) {
                        $('body > div.vs-content-sidebar.add-new-data-sidebar.items-no-padding.font-medium > div.vs-sidebar.vs-sidebar-primary.vs-sidebar-position-right > div.vs-sidebar--items > section > div.p-6 > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(7) > div > ul > li > ul > li:nth-child(4) > span > span:nth-child(4) > div > input').val('2')[0].dispatchEvent(new Event('change'));
                    }
                } else if(userData.g_window.indexOf('8017') != '-1') {
                    await this.simulateMouseClick('#feat23800');
                    if(userData.g_window.indexOf('2 Stück')) {
                        $('body > div.vs-content-sidebar.add-new-data-sidebar.items-no-padding.font-medium > div.vs-sidebar.vs-sidebar-primary.vs-sidebar-position-right > div.vs-sidebar--items > section > div.p-6 > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(7) > div > ul > li > ul > li:nth-child(5) > span > span:nth-child(4) > div > input').val('2')[0].dispatchEvent(new Event('change'));
                    }
                } else if(userData.g_window.indexOf('7016') != '-1') {
                    await this.simulateMouseClick('#feat23781');
                    if(userData.g_window.indexOf('2 Stück')) {
                        $('body > div.vs-content-sidebar.add-new-data-sidebar.items-no-padding.font-medium > div.vs-sidebar.vs-sidebar-primary.vs-sidebar-position-right > div.vs-sidebar--items > section > div.p-6 > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(7) > div > ul > li > ul > li:nth-child(6) > span > span:nth-child(4) > div > input').val('2')[0].dispatchEvent(new Event('change'));
                    }
                }
            }

            if(userData.g_vent != 'Nein') {
                if(userData.g_vent.indexOf('Braun') != '-1') {
                    await this.simulateMouseClick('#feat23839');
                    if(userData.g_vent.indexOf('2 Stück')) {
                        $('body > div.vs-content-sidebar.add-new-data-sidebar.items-no-padding.font-medium > div.vs-sidebar.vs-sidebar-primary.vs-sidebar-position-right > div.vs-sidebar--items > section > div.p-6 > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div > ul > li > ul > li:nth-child(2) > span > span:nth-child(4) > div > input').val('2')[0].dispatchEvent(new Event('change'));
                    }
                } else if(userData.g_vent.indexOf('Weiß') != '-1') {
                    await this.simulateMouseClick('#feat23772');
                    if(userData.g_vent.indexOf('2 Stück')) {
                        $('body > div.vs-content-sidebar.add-new-data-sidebar.items-no-padding.font-medium > div.vs-sidebar.vs-sidebar-primary.vs-sidebar-position-right > div.vs-sidebar--items > section > div.p-6 > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div > ul > li > ul > li:nth-child(1) > span > span:nth-child(4) > div > input').val('2')[0].dispatchEvent(new Event('change'));
                    }
                }  else if(userData.g_vent.indexOf('Anthrazit') != '-1') {
                    await this.simulateMouseClick('#feat28647');
                    if(userData.g_vent.indexOf('2 Stück')) {
                        $('body > div.vs-content-sidebar.add-new-data-sidebar.items-no-padding.font-medium > div.vs-sidebar.vs-sidebar-primary.vs-sidebar-position-right > div.vs-sidebar--items > section > div.p-6 > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(4) > div > ul > li > ul > li:nth-child(3) > span > span:nth-child(4) > div > input').val('2')[0].dispatchEvent(new Event('change'));
                    }
                }
            }

            if(userData.g_hardware === 'Knauf') {
                await this.simulateMouseClick('#feat28048');
            }

            // stopka
            await this.simulateMouseClick('#feat23847');
            $('body > div.vs-content-sidebar.add-new-data-sidebar.items-no-padding.font-medium > div.vs-sidebar.vs-sidebar-primary.vs-sidebar-position-right > div.vs-sidebar--items > section > div.p-6 > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(6) > div > ul > li > ul > li:nth-child(1) > span > span:nth-child(3) > div > input').val('2')[0].dispatchEvent(new Event('change'));

            // $('body > div:nth-child(1) > div.vs-sidebar.vs-sidebar-primary.vs-sidebar-position-right > div.vs-sidebar--items > section > div.p-6 > div:nth-child(2) > div.wx-row > table > tr:nth-child(10) > td > div > input').val(userData.g_anzahl)[0].dispatchEvent(new Event('change'));
            // $('body > div:nth-child(1) > div.vs-sidebar.vs-sidebar-primary.vs-sidebar-position-right > div.vs-sidebar--items > section > div.p-6 > div:nth-child(2) > div.wx-row > table > tr:nth-child(12) > td > div > textarea').val(userData.g_sonstige)[0].dispatchEvent(new Event('input'));

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