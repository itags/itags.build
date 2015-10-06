/**
 * The ITSA module is an aggregator for all the individual modules that the library uses.
 * The developer is free to use it as it is or tailor it to contain whatever modules
 * he/she might need in the global namespace.
 *
 * The modules themselves work quite well independent of this module and can be used
 * separately without the need of them being integrated under one globa namespace.
 *
 *
 * <i>Copyright (c) 2014 ITSA - https://github.com/itsa</i>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 * @module itsa.build
 *
*/
(function (window) {

    "use strict";
    require('./extra/dialog');
    require('i-tabpane')(window);
    require('i-select')(window);
    require('i-parcel')(window);
    require('i-label')(window);
    require('i-input')(window);
    require('i-button')(window);
    require('i-reset')(window);
    require('i-form')(window);
    require('i-formvalue')(window);
    require('i-checkbox')(window);
    require('i-statusbar')(window);
    require('i-menu')(window);
    require('i-nav')(window);
    require('i-link')(window);
    require('i-splitdiv')(window);
    require('i-splitdiv-secondfixed')(window);
    require('i-splitdiv3')(window);
    require('i-scroller')(window);
    require('i-table')(window);
    require('i-table-multisource')(window);
    require('i-chart-line')(window);
    require('i-memo')(window);

    // in case of async requests, we look for the global method: `window._ITSAscripts2`
    // if there, then we execute it. This is used in these situations:
    //
    // <script async src="itsabuild.js"></script>
    // <script async src="some_second_script.js"></script>
    //
    // when they need to be executed in order
    // should `script2` be loaded after, then force it to execute itself:

    window._ITSAexecutedScripts || (window._ITSAexecutedScripts={});
    window._ITSAexecutedScripts.itags = true;
    (typeof window._ITSAscriptsModel==='function') && window._ITSAscriptsModel();

})(global.window || require('node-win'));