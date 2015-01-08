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
    require('i-select')(window);
    require('i-parcel')(window);
global.I = {};
global.I.async = require('utils').async;
global.I.asyncSilent = require('utils').asyncSilent;
global.I.later = require('utils').later;
global.I.laterSilent = require('utils').laterSilent;
})(global.window || require('node-win'));