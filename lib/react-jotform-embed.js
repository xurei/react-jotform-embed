'use strict';

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _desc, _value, _class;

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

var React = require('react'); //eslint-disable-line no-unused-vars
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');


var iframeStyle = {
	width: '100%',
	height: '300px'
};

var JobformEmbed = (_class = function (_React$Component) {
	(0, _inherits3.default)(JobformEmbed, _React$Component);

	function JobformEmbed() {
		(0, _classCallCheck3.default)(this, JobformEmbed);
		return (0, _possibleConstructorReturn3.default)(this, (JobformEmbed.__proto__ || (0, _getPrototypeOf2.default)(JobformEmbed)).apply(this, arguments));
	}

	(0, _createClass3.default)(JobformEmbed, [{
		key: 'handleIframeMessage',
		value: function handleIframeMessage(e) {
			var props = this.props;
			var args = e.data.split(':');
			var formId = args[2];
			var iframe = ReactDOM.findDOMNode(this.refs.iframe);
			if (!!iframe && props.src.endsWith(formId)) {
				switch (args[0]) {
					case 'scrollIntoView':
						iframe.scrollIntoView();
						break;
					case 'setHeight':
						iframe.style.height = args[1] + 'px';
						break;
					case 'collapseErrorPage':
						if (iframe.clientHeight > global.innerHeight) {
							iframe.style.height = global.innerHeight + 'px';
						}
						break;
					case 'reloadPage':
						global.location.reload();
						break;
				}
				var isJotForm = e.origin.indexOf('jotform') > -1;
				if (isJotForm && 'contentWindow' in iframe && 'postMessage' in iframe.contentWindow) {
					var urls = {
						'docurl': encodeURIComponent(global.document.URL),
						'referrer': encodeURIComponent(global.document.referrer)
					};
					iframe.contentWindow.postMessage((0, _stringify2.default)({ 'type': 'urls', 'value': urls }), '*');
				}
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (global.addEventListener) {
				global.addEventListener('message', this.handleIframeMessage, false);
			} else if (global.attachEvent) {
				global.attachEvent('onmessage', this.handleIframeMessage);
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			if (global.removeEventListener) {
				global.removeEventListener('message', this.handleIframeMessage, false);
			} else if (global.detachEvent) {
				global.detachEvent('onmessage', this.handleIframeMessage);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var props = this.props;
			return React.createElement('iframe', { ref: 'iframe', style: iframeStyle, className: props.className, allowTransparency: 'true', src: props.src, frameBorder: 0 });
		}
	}, {
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps) {
			var props = this.props;
			return props.src !== nextProps.src || props.className !== nextProps.className;
		}
	}]);
	return JobformEmbed;
}(React.Component), (_applyDecoratedDescriptor(_class.prototype, 'handleIframeMessage', [_autobindDecorator2.default], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'handleIframeMessage'), _class.prototype)), _class);
JobformEmbed.propTypes = {
	src: PropTypes.string.isRequired
};


module.exports = JobformEmbed;