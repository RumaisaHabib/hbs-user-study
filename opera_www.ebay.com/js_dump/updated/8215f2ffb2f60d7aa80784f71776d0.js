/**
 * Copyright (c) 2018 eBay Inc.
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 *
 **/

/**
 * Default configuration
**/
var _DEFAULTS = {
    'url': '/api/log',
    'flushInterval': 1000,
    isInSampling: true,
    samplingRate: 100,
    collectMetrics: true,
    logLevels: ['log', 'info', 'warn', 'debug', 'error'],
    maxAttempts: 50
};

/**
 * Logger Class which exposes API for intercepting log, errors & collects metrics
**/
function Logger() {
    this.buffer = [];
    this.plugins = {};

    this.url = _DEFAULTS.url;
    this.flushInterval = _DEFAULTS.flushInterval;
    this.collectMetrics = _DEFAULTS.collectMetrics;
    this.logLevels = _DEFAULTS.logLevels;
}

/**
 * Init API for intializing the class with paramaters.
**/
Logger.prototype.init = function(options) {
    options = options || _DEFAULTS;
    this.url = options.url || this.url;
    this.logLevels = options.logLevels || this.logLevels;
    this.flushInterval = options.flushInterval !== undefined ? options.flushInterval : this.flushInterval;
    this.collectMetrics = options.collectMetrics !== undefined ? options.collectMetrics : this.collectMetrics;
    this.maxAttempts = options.maxAttempts !== undefined ? options.maxAttempts : this.maxAttempts;

    // Use Sampling Flag provide in init() or calculate Sampling factor based on Sampling Rate
    this.isInSampling = options.isInSampling !== undefined ? options.isInSampling : sample(options.samplingRate);
    this.isSendCritical = options.isSendCritical !== undefined ? options.isSendCritical : false;
    var _this = this;

    // Setup timer & flush ONLY if this is in Sampling
    if (_this.isInSampling || _this.isSendCritical) {
        var loglevels = ['log', 'info', 'warn', 'debug', 'error'];

        loglevels.forEach(function(level) {
            var _fn = console[level];
            console[level] = function() {
                var args = Array.prototype.slice.call(arguments);
                _this[level](args);
                _fn.apply(console, args);
            }
        });

        if (_this.flushInterval) {
            _this.interval = setInterval(function() {
                _this.flush();
            }, _this.flushInterval);
        } else {
            // add support for `pagehide`
            var activeEvent = 'onpagehide' in window ? 'pagehide' : 'beforeunload';
            window.addEventListener(activeEvent, function() {}, false);
        }
    }
};

/**
 * API for registering custom functions.
**/
Logger.prototype.registerPlugin = function(property, customFunction) {
    this.plugins[property] = customFunction;
};

/**
 * Collects metrics using navigation API
**/
Logger.prototype.metrics = function() {};

Logger.prototype.log = function() {
    this.addToQ('LOG', arguments);
};

Logger.prototype.info = function() {};

Logger.prototype.debug = function() {};

Logger.prototype.warn = function() {};

Logger.prototype.error = function() {};

/**
 * Clears Buffer
**/
Logger.prototype.clearBuffer = function(clearFromIndex) {};

/**
 * Adds message and type to Queue
**/
Logger.prototype.addToQ = function(type, args) {
    if (this.logLevels.indexOf(type.toLowerCase()) > -1) {
        var message = (args.length > 0 && [].join.call(args, ' ')) || '';
        if (this.isInSampling || (this.isSendCritical && message.indexOf('"type":"critical"') > -1)) {
            this.buffer.push({
                level: type,
                msg: message,
                desc: this.getDesc(message)
            });
        }
    }
};

/**
 * Get error description
**/
Logger.prototype.getDesc = function(msg) {};

/**
 * Flushes data from buffer
**/
Logger.prototype.flush = function() {
    var _this = this;

    if (_this.buffer.length < 1) {
        return;
    }
    if (_this.maxAttempts < 1) {
        clearInterval(_this.interval);
        return;
    }
    _this.maxAttempts = _this.maxAttempts - 1;
    var bufSize = _this.buffer.length,
        payload = {
            'metrics': _this.metrics(),
            'logs': _this.buffer,
            'isBeaconAPI': false
        },
        url = _this.url + '&desc=' + encodeURI(_this.buffer.map(a => a.desc));

    Object.keys(_this.plugins).forEach(function(property) {});

    if (navigator && navigator.sendBeacon) {
        payload.isBeaconAPI = true;
        var status = navigator.sendBeacon(url, JSON.stringify(payload));
        if (status) {
            _this.clearBuffer(bufSize);
        }
    } else {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, true); // third parameter indicates sync xhr
        xhr.setRequestHeader('Content-Type', 'text/plain');
        xhr.onreadystatechange = function() {};
        xhr.send(JSON.stringify(payload));
    }
};

/**
 * Client side Sampling API
**/
function sample(samplingRate) {
    if (Math.random() * 100 < samplingRate) {
        return true;
    }
    return false;
}

function intialize() {
    var logger = new Logger();
    if (window) {
        window.$logger = logger;

        var _onerror = window.onerror;
        // Handle Uncaught Errors
        window.onerror = function() {};
    }
}

intialize();
