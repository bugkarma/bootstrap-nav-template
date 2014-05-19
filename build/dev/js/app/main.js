define([ "jquery", "bootstrap" ], function($) {
    (function() {
        if (!navigator.userAgent.match(/IEMobile\/10\.0/)) return;
        var msViewportStyleEl = document.createElement("style");
        msViewportStyleEl.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}"));
        document.querySelector("head").appendChild(msViewportStyleEl);
    })();
});