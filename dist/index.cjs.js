'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var preact = _interopDefault(require('preact'));
var emotion = require('emotion');
var createEmotionStyled = _interopDefault(require('create-emotion-styled'));

var index = createEmotionStyled(emotion, preact);

Object.keys(emotion).forEach(function (key) { exports[key] = emotion[key]; });
exports.default = index;
