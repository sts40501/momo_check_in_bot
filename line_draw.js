// ==UserScript==
// @name         LINE活動連續開獎
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  LINE活動開獎自動化程式
// @author       fase
// @match        https://event.line.me/luckydraw/*
// @match        https://liff.line.me/*/luckydraw/*
// @exclude      https://event.line.me/luckydraw/*/rewards
// @exclude      https://liff.line.me/*/luckydraw/*/rewards
// @icon         https://www.google.com/s2/favicons?sz=64&domain=idv.tw
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

function proc1() {
    let button = rootEl.querySelector('.button__text');
    //alert(button.innerText);
    if (button.innerText != '活動辦法' && button.innerText != '活動詳情') {
        //button.innerHTML = "點擊";
        button.click();
        setTimeout(proc2, 1000);
    } else {
        //button.innerHTML = "停止";
        //停止script
        return;
    }
}
function proc2() {
    let button = rootEl.querySelectorAll('.floating-btn > .text');
    //alert(button[0].innerText);
    if (button[0].innerText == '你還有抽獎券') {
        //button[0].innerText = "點擊";
        button[0].click();
    } else {
        //button[0].innerText = "結束";
        button[0].click();
        return;
    }
}

    const rootEl = document.getElementById('__nuxt');
    setTimeout(proc1, 1000);
})();

