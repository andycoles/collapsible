var Collapsible = require('./src/js/collapsible');

function init() {
    var targetElems = document.getElementsByClassName('collapsibleTarget'),
        triggerElems = document.getElementsByClassName('collapsibleTrigger');

    for (var i = 0; i < targetElems.length; i++) {
        new Collapsible(targetElems[i], triggerElems[i], 'collapsed').init();
    }
};

function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
ready(init);
