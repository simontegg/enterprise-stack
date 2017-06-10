'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _layout = require('antd/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _layout3 = require('./layout.less');

var _layout4 = _interopRequireDefault(_layout3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/simontegg/projects/valueflows-gql/layout/index.js';

var Content = _layout2.default.Content,
    Sider = _layout2.default.Sider;

exports.default = function (_ref) {
  var children = _ref.children;
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
  }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _layout4.default }, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })), _react2.default.createElement(_layout2.default, { style: { height: '100vh' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(Sider, { breakpoint: 'lg', collapsedWidth: '0', style: { overflow: 'auto' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement(_menu2.default, { theme: 'light', mode: 'inline', defaultSelectedKeys: ['5'], __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(_menu2.default.Item, { key: '1', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(_icon2.default, { type: 'user', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), ' My Account'), _react2.default.createElement(_menu2.default.Item, { key: '2', __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement(_icon2.default, { type: 'heart', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), ' Heart'), _react2.default.createElement(_menu2.default.Item, { key: '3', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement(_icon2.default, { type: 'area-chart', __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), ' Data'), _react2.default.createElement(_menu2.default.Item, { key: '4', __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement(_icon2.default, { type: 'file-text', __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), ' Documents'), _react2.default.createElement(_menu2.default.Item, { key: '5', __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement(_icon2.default, { type: 'inbox', __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }), ' Inbox'))), _react2.default.createElement(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, children)));
};