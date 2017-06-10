'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _table = require('antd/lib/table');

var _table2 = _interopRequireDefault(_table);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _layout = require('antd/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _app = require('../styles/components/app.less');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/simontegg/projects/valueflows-gql/components/app.js';

var Header = _layout2.default.Header,
    Content = _layout2.default.Content,
    Footer = _layout2.default.Footer,
    Sider = _layout2.default.Sider;

var SubMenu = _menu2.default.SubMenu;

var dataSource = [{
  key: '1',
  name: 'Mike',
  age: 32,
  address: '10 Downing Street'
}, {
  key: '2',
  name: 'John',
  age: 42,
  address: '10 Downing Street'
}, {
  key: '3',
  name: 'Mike',
  age: 32,
  address: '10 Downing Street'
}, {
  key: '4',
  name: 'Mike',
  age: 32,
  address: '10 Downing Street'
}];

var columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name'
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age'
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address'
}];

var SiderDemo = function (_React$Component) {
  (0, _inherits3.default)(SiderDemo, _React$Component);

  function SiderDemo() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SiderDemo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SiderDemo.__proto__ || (0, _getPrototypeOf2.default)(SiderDemo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      collapsed: false,
      mode: 'inline'
    }, _this.onCollapse = function (collapsed) {
      console.log(collapsed);
      _this.setState({
        collapsed: collapsed,
        mode: collapsed ? 'vertical' : 'inline'
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SiderDemo, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          collapsed = _state.collapsed,
          mode = _state.mode;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _app2.default }, __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      })), _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(Sider, { collapsible: true, collapsed: collapsed, onCollapse: this.onCollapse, __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement('div', { className: 'logo', __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }), _react2.default.createElement(_menu2.default, { theme: 'dark', mode: mode, defaultSelectedKeys: ['6'], __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement(SubMenu, {
        key: 'sub1',
        title: _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        }, _react2.default.createElement(_icon2.default, { type: 'user', __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        }), _react2.default.createElement('span', { className: 'nav-text', __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        }, 'User')),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement(_menu2.default.Item, { key: '1', __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, 'Tom'), _react2.default.createElement(_menu2.default.Item, { key: '2', __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, 'Bill'), _react2.default.createElement(_menu2.default.Item, { key: '3', __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, 'Alex')), _react2.default.createElement(SubMenu, {
        key: 'sub2',
        title: _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          }
        }, _react2.default.createElement(_icon2.default, { type: 'team', __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        }), _react2.default.createElement('span', { className: 'nav-text', __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        }, 'Team')),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement(_menu2.default.Item, { key: '4', __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, 'Team 1'), _react2.default.createElement(_menu2.default.Item, { key: '5', __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, 'Team 2')), _react2.default.createElement(_menu2.default.Item, { key: '6', __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react2.default.createElement('span', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react2.default.createElement(_icon2.default, { type: 'file', __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }), _react2.default.createElement('span', { className: 'nav-text', __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, 'File'))))), _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, _react2.default.createElement(Header, { style: { background: '#fff', padding: 0 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }), _react2.default.createElement(Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, _react2.default.createElement('div', { style: { backgroundColor: '#fff' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react2.default.createElement(_table2.default, {
        dataSource: dataSource,
        columns: columns,
        pagination: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }))))));
    }
  }]);

  return SiderDemo;
}(_react2.default.Component);

exports.default = SiderDemo;