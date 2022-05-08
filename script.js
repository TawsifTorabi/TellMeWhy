// ==UserScript==
// @name         TellMeWhy
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Having Pera lying to your dad? Here it is!
// @author       NUNU
// @match        *://ucam.uiu.ac.bd/*
// @icon         https://www.google.com/s2/favicons?domain=ac.bd
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //Modificable Variables
    var AddBalance = 0; //Add More balance
    var NewCGPA = 2.75; //Reset CGPA
    var NewCredits = 47; //Reset Credits
    var paidStatus = "no";

    //Ektu Credits
    console.log('UCAM Modifier - Written by NUNU');
    console.log('Check on Github - ');
    console.log('https://github.com/TawsifTorabi/TellMeWhy/');




if(paidStatus == "no"){
    console.log("The Bill is not Paid, CODE RED!");

    let OldBalanceString, filteredBalanceString, OldBalance, NewBalance = null;
    //Balance Elements for homepage and accounts page
    var HomepageBalanceElement = document.getElementById('ctl00_MainContainer_FI_CurrentBalance');
    var AccountsPageBalanceElement = document.getElementById('ctl00_MainContainer_txt_online_amount');

    //Balance Variable read and manipulation
    //Check If the page is Homepage
    if(typeof(HomepageBalanceElement) != 'undefined' && HomepageBalanceElement != null){
        console.log('Homepage is Loaded, Script Ran');
        OldBalanceString = document.getElementById('ctl00_MainContainer_FI_CurrentBalance').innerHTML;
        filteredBalanceString = OldBalanceString.replace(" Tk.", "");
        OldBalance = numberWithoutCommas(filteredBalanceString);
        NewBalance = OldBalance + AddBalance;
    }

    //Check If the page is Accounts Page
    if(typeof(AccountsPageBalanceElement) != 'undefined' && AccountsPageBalanceElement != null){
        console.log('Accounts Page is Loaded, Script Ran');
        OldBalance = parseInt(document.getElementById('ctl00_MainContainer_txt_online_amount').value);
        NewBalance = OldBalance + AddBalance;
    }



    //Run related Manipulators if the page is homepage
    if(typeof(HomepageBalanceElement) != 'undefined' && HomepageBalanceElement != null){
        //Homepage Account Balance Check
        document.getElementById('ctl00_MainContainer_FI_CurrentBalance').innerHTML = numberWithCommas(NewBalance)+' Tk.';
        //Homepage CGPA Check
        document.getElementById('ctl00_MainContainer_Status_CGPA').innerHTML = NewCGPA;
        //Homepage Completed Credit Check
        document.getElementById('ctl00_MainContainer_Status_CompletedCr').innerHTML = NewCredits;
    }


    //Run related Manipulators if the page is accounts page
    if(typeof(AccountsPageBalanceElement) != 'undefined' && AccountsPageBalanceElement != null){
        //AccountsPage Online Amount Payment Check
        document.getElementById('ctl00_MainContainer_txt_online_amount').value = NewBalance;
        document.getElementById('ctl00_MainContainer_txtBalance').value = NewBalance+".00";
        var totalfee = parseInt(document.getElementById('ctl00_MainContainer_txtTotalFee').value);
        document.getElementById('ctl00_MainContainer_txtTotalFee').value = totalfee + AddBalance;
        document.getElementById('ctl00_MainContainer_txtTotalFee').value = document.getElementById('ctl00_MainContainer_txtTotalFee').value+".00";
    }

} else if(paidStatus == "yes"){
    console.log("The Bill is Paid, Situation Changed");
}





    /**************
    ***************
    NECESSARY FUNCTION AND CODES
    **************
    **************/

    //Number Comma Separator
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    //Number Comma Separator remover
    function numberWithoutCommas(x) {
        return parseFloat(x.replace(/,/g, ''));
    }









})();
