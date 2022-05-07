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
    var AddBalance = 10000;
    var NewCGPA = 2.75;
    var NewCredits = 47;




    //If it isn't "undefined" and it isn't "null", then it exists.
    var HomepageBalanceElement = document.getElementById('ctl00_MainContainer_FI_CurrentBalance');
    var AccountsPageBalanceElement = document.getElementById('ctl00_MainContainer_txt_online_amount');

    if(typeof(HomepageBalanceElement) != 'undefined' && HomepageBalanceElement != null){
        //alert('Element exists!');
        var OldBalanceString = document.getElementById('ctl00_MainContainer_FI_CurrentBalance').innerHTML;
        var filteredBalanceString = OldBalanceString.replace(" Tk.", "");
        var OldBalance = numberWithoutCommas(filteredBalanceString);
        var NewBalance = OldBalance + AddBalance;
    } else if(typeof(AccountsPageBalanceElement) != 'undefined' && AccountsPageBalanceElement != null){
        //alert('Element does not exist!');
        var OldBalanceString = document.getElementById('ctl00_MainContainer_txt_online_amount').innerHTML;
        var filteredBalanceString = OldBalanceString.replace(" Tk.", "");
        var OldBalance = numberWithoutCommas(filteredBalanceString);
        var NewBalance = OldBalance + AddBalance;
    }




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
    //Homepage CGPA Check
    document.getElementById('ctl00_MainContainer_Status_CGPA').innerHTML = NewCGPA;
    //Homepage Completed Credit Check
    document.getElementById('ctl00_MainContainer_Status_CompletedCr').innerHTML = NewCredits;


    var WebURL = (window.location.href);
    WebURL = WebURL.split('?mmi=')[0];
    console.log(WebURL);

    var filteredBalanceString = OldBalanceString.replace(" Tk.", "");

    //AccountsPage Online Amount Payment Check
    setTimeout(document.getElementById('ctl00_MainContainer_txt_online_amount').value = "13143654365574", 1000);








})();
