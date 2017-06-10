'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _app = require('../components/app');

var _app2 = _interopRequireDefault(_app);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _index = require('../styles/index.less');

var _index2 = _interopRequireDefault(_index);

var _withData = require('../apollo/with-data');

var _withData2 = _interopRequireDefault(_withData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/simontegg/projects/valueflows-gql/pages/index.js?entry';
exports.default = (0, _withData2.default)(function (props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _index2.default }, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })), _react2.default.createElement(_app2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }));
});