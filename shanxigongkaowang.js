// ==UserScript==
// @name         shanxigongkaowang
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.sxgkw.cn/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(() => {
        document.onselectstart = null;
        document.oncontextmenu = null;
        document.head.innerHTML += "<style>.zhaokao ul.list li {display: flex}\n.zhaokao ul.list li a {width: 93%;white-space: nowrap;text-overflow: ellipsis;overflow: hidden}\na {color: revert}</style>";
        for(let i of document.querySelectorAll("body > div.proListClassify.clearfix > div > div > div.sectionC > div > div > div.info-cont p")) {
            if (i.innerText.includes("扫码")) {
                i.innerHTML = i.innerHTML.substr(0, i.innerHTML.indexOf("<br>"));
            }
            if (i.innerText.includes("来源")) {
                i.innerHTML = i.innerHTML.substr(0, 3) + "<a href='" + i.innerHTML.substr(3) + "'>" + i.innerHTML.substr(3) + "</a>";
            }
        }
        document.querySelectorAll("body > div.proListClassify.clearfix > div > div > div.sectionC > div > div > div.info-cont img").forEach((i) => i.remove())
    }, 30)
})();