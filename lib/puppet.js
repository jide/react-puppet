'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLibShallowEqual = require('react/lib/shallowEqual');

var _reactLibShallowEqual2 = _interopRequireDefault(_reactLibShallowEqual);

var getDisplayName = function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Component';
};

exports['default'] = function (WrappedComponent) {
  var displayName = 'puppet(' + getDisplayName(WrappedComponent) + ')';

  return (function (_Component) {
    _inherits(_class, _Component);

    _createClass(_class, null, [{
      key: 'displayName',
      value: displayName,
      enumerable: true
    }]);

    function _class() {
      _classCallCheck(this, _class);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _get(Object.getPrototypeOf(_class.prototype), 'constructor', this).apply(this, args);

      this.state = {
        props: {}
      };
    }

    _createClass(_class, [{
      key: 'setProps',
      value: function setProps() {
        var nextProps = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        this.setState({ props: _extends({}, this.props, nextProps) });
      }
    }, {
      key: 'replaceProps',
      value: function replaceProps() {
        var nextProps = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        this.setState({ props: nextProps });
      }
    }, {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps, nextState) {
        return !(0, _reactLibShallowEqual2['default'])(this.props, nextProps) || !(0, _reactLibShallowEqual2['default'])(this.state.props, nextState.props);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(WrappedComponent, _extends({}, this.props, this.state.props));
      }
    }]);

    return _class;
  })(_react.Component);
};

module.exports = exports['default'];