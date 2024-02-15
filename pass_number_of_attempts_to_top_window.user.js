// ==UserScript==
// @name         Pass number of attempts
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://10.10.10.10:8008/*
// @grant        none
// ==/UserScript==

(function() {

    'use strict';

    $(document).ready(function(){
        var start = true;

        // check if the answer button is already loaded
        var checkExist = setInterval(function() {
            if ($('#check-answer-button').length) {

                // if the answer button is loaded, we can assume the page is fully loaded, so put the boolean start to false 
                document.getElementById("check-answer-button").onclick = function(){
                   start = false;
                };

                clearInterval(checkExist);
            }
        }, 500); // check every 100ms

        // when the number of attempts change, we pass this on the the top window 
        $("body").on('DOMSubtreeModified', ".attempts", function() {
            if (start === false) {
                if ($(".attempts span:last-child").length == 1) {
                    // the class of the last span contains if the last question was answered right or wrong
                    parent.postMessage($(".attempts span:last-child")[0].getAttribute("class"),"*");
                }
            }
        });
    });
})();
