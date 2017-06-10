'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _table = require('antd/lib/table');

var _table2 = _interopRequireDefault(_table);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _organizations = require('./organizations.less');

var _organizations2 = _interopRequireDefault(_organizations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/simontegg/projects/valueflows-gql/organizations/index.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  query allOrganizations($first: Int!) {\n    allOrganizations(first: $first) {\n      nodes {\n        id,\n        name\n    }\n    }\n  }'], ['\n  query allOrganizations($first: Int!) {\n    allOrganizations(first: $first) {\n      nodes {\n        id,\n        name\n    }\n    }\n  }']);

var debug = require('debug')('vf:organizations:index');


var AGENTS_PER_PAGE = 10;
var columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name'
}];

function OrganizationList(_ref) {
  var organizations = _ref.organizations,
      loading = _ref.loading;

  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _organizations2.default }, __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  })), loading ? _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, 'Loading') : _react2.default.createElement(_table2.default, { columns: columns, dataSource: organizations, __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }));
}

exports.default = (0, _reactApollo.graphql)((0, _reactApollo.gql)(_templateObject), {
  options: {
    variables: {
      first: AGENTS_PER_PAGE
    }
  },
  props: function props(_ref2) {
    var _ref2$data = _ref2.data,
        nodes = _ref2$data.allOrganizations.nodes,
        loading = _ref2$data.loading;
    return {
      organizations: nodes,
      loading: loading
    };
  }
})(OrganizationList);