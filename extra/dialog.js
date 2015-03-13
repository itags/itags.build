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
    var ITSA = require('itsa'),
        customPrompt;

    require('../css/dialog.css');
    require('i-input')(window);

    customPrompt = function(message, options, type) {
        var typeDesc = '',
            minDesc = '',
            maxDesc = '',
            floatDesc = '',
            placeholder, defaultValue, label, icon, validate, min, max;
        options || (options={});
        defaultValue = options.defaultValue || '';
        placeholder = options.placeholder;
        min = options.min;
        max = options.max;
        max = options.max;
        label = options.label;
        icon = options.icon;
        placeholder = placeholder ? ' placeholder="'+placeholder+'"' : '';
        if ((typeof message ==='string') || (message!=='')) {
            message = '<div class="dialog-prompt">'+message+'</div>';
        }
        else {
            message = '';
        }
        label = (typeof label==='string') ? (label='<label for="iprompt">'+label+'</label>') : '';
        switch (type) {
            case 1:
                typeDesc = ' type="number"';
                if (typeof min==='number') {
                    minDesc = ' min="'+min+'"';
                }
                if (typeof max==='number') {
                    maxDesc = ' max="'+max+'"';
                }
                if (options.floated) {
                    floatDesc = ' floated="true"';
                }
                break;
            case 2:
                typeDesc = ' type="email"';
                break;
            case 3:
                typeDesc = ' type="url"';
                break;
        }
        if (typeof type==='number') {
            validate = function(e) {
                var i_input = e.target.getElement('i-input'),
                    validated = !i_input.model.invalid || (e.button.getAttr('is')==='cancel');
                // if needed to refocus: do this DOUBLE async,
                // because `enter` key will set focus on the primary button asynced by itself
                // and we need to refocus after that
                if (!validated) {
                    ITSA.async(function() {
                        ITSA.async(i_input.focus.call(i_input));
                    });
                }
                return validated;
            };
        }
        return ITSA.message(
            '<div class="pure-form">'+message+label+'<i-input id="iprompt" defaultitem="true" primaryonenter="true"'+
                                     typeDesc+minDesc+maxDesc+floatDesc+placeholder+'><!--'+defaultValue+'--></i-input></div>',
            {
                footer: '<button is="cancel" class="pure-button">Cancel</button><button is="ok" class="pure-button pure-button-primary">Ok</button>',
                icon: icon,
                validate: validate
            }
        ).then(function(container) {
            var button = container.getElement('button');
            if (button.getAttr('is')==='ok') {
                return container.getElement('input').getValue();
            }
        });
    };

    // redefine ITSA.prompt:
    ITSA.prompt = function(message, options) {
        return customPrompt(message, options);
    };

    ITSA.getNumber = function(message, options) {
        return customPrompt(message, options, 1).then(
            function(val) {
                if (val) {
                    return options.floated ? parseFloat(val) : parseInt(val, 10);
                }
            }
        );
    };

    ITSA.getEmail = function(message, options) {
        return customPrompt(message, options, 2);
    };

    ITSA.getUrl = function(message, options) {
        return customPrompt(message, options, 3);
    };

})(global.window || require('node-win'));
