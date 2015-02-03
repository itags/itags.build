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
    require('i-tabpane')(window);
    require('i-select')(window);
    // require('i-parcel')(window);
    require('i-input')(window);
    require('i-head')(window);
    require('i-item')(window);

     window.laterSilent = require('utils').laterSilent;

})(global.window || require('node-win'));