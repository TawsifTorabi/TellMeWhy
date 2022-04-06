// ==UserScript==
// @name         UCAM Homepage Modifier
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://ucam.uiu.ac.bd/*
// @icon         https://www.google.com/s2/favicons?domain=ac.bd
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //Homepage Account Balance Check
    document.getElementById('ctl00_MainContainer_FI_CurrentBalance').innerHTML = '70,000 Tk.';


})();
