'use strict';

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

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = require('react'); //eslint-disable-line no-unused-vars
var PropTypes = require('prop-types');

var JobformEmbed = function (_React$Component) {
	(0, _inherits3.default)(JobformEmbed, _React$Component);

	function JobformEmbed(props) {
		(0, _classCallCheck3.default)(this, JobformEmbed);
		return (0, _possibleConstructorReturn3.default)(this, (JobformEmbed.__proto__ || (0, _getPrototypeOf2.default)(JobformEmbed)).call(this, props));
	}

	(0, _createClass3.default)(JobformEmbed, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'render',
		value: function render() {
			var props = this.props;
			return React.createElement(
				'div',
				{ className: props.className },
				React.createElement('iframe', { ref: 'iframe', className: 'jotform-embed', id: 'JotFormIFrame-72712353584357', allowTransparency: 'true', src: 'https://form.jotformeu.com/72712353584357', frameBorder: 0, scrolling: 'no' })
			);
		}
	}, {
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps, nextState) {
			return !deepEqual(this.props, nextProps) || !deepEqual(this.state, nextState);
		}
	}]);
	return JobformEmbed;
}(React.Component);

JobformEmbed.propTypes = {
	formId: PropTypes.number.isRequired
};


module.exports = JobformEmbed;