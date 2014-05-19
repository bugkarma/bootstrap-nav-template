define(["jquery","bootstrap"], function($) {

    //require('');

    //$('#myModal').modal();

    // For Windows Phone 8 versions older than Update 3
    // that don't differentiate device width from viewport width
    (function(){
        if (!navigator.userAgent.match(/IEMobile\/10\.0/)) return;
        var msViewportStyleEl = document.createElement('style');
        msViewportStyleEl.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
        document.querySelector('head').appendChild(msViewportStyleEl);
    }());
});