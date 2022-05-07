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

    //Modificable Variables
    var AddBalance = 5000;


    var OldBalanceString = document.getElementById('ctl00_MainContainer_FI_CurrentBalance').innerHTML;
    var filteredBalanceString = OldBalanceString.replace(" Tk.", "");
    var OldBalance = numberWithoutCommas(filteredBalanceString);
    var NewBalance = OldBalance + AddBalance;

    //Number Comma Separator
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    //Number Comma Separator remover
    function numberWithoutCommas(x) {
        return parseFloat(x.replace(/,/g, ''));
    }


    //Homepage Account Balance Check
    document.getElementById('ctl00_MainContainer_FI_CurrentBalance').innerHTML = numberWithCommas(NewBalance)+' Tk.';


})();
