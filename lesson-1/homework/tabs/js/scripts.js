"use strict";

window.addEventListener('load', function(e) {
    var tabs = document.querySelectorAll('.nav-tabs > li');
    var tabsContent = document.querySelectorAll('.tab-content');

    for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', switchTabs);
    }

    function switchTabs() {
        removeActiveTabs ();
        removeActiveTabsContent ();

        this.classList.add('active');

        var dataTabAttr = this.getAttribute('data-tab');

        for (var j = 0; j < tabsContent.length; j++) {
            if (tabsContent[j].getAttribute('data-tab') === dataTabAttr) {
                tabsContent[j].classList.add('active');
            }
        }
    }

    function removeActiveTabs () {
        for(var i = 0; i < tabs.length; i++){
            tabs[i].classList.remove('active');
        }
    }

    function removeActiveTabsContent () {
        for(var i = 0; i < tabsContent.length; i++){
            tabsContent[i].classList.remove('active');
        }
    }

});

