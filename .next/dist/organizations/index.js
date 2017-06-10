'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

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

function OrganizationList(props) {
  debug(props);
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _organizations2.default }, __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  })), props ? _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, 'Loading') : _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, 'Loaded'));
}

exports.default = (0, _reactApollo.graphql)((0, _reactApollo.gql)(_templateObject), {
  options: {
    variables: {
      first: AGENTS_PER_PAGE
    }
  },
  props: function props(_ref) {
    var _ref$data = _ref.data,
        nodes = _ref$data.allOrganizations.nodes,
        loading = _ref$data.loading;
    return {
      organizations: nodes,
      loading: loading
    };
  }
})(OrganizationList);