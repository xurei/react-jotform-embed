import 'core-js/stable';

const React = require('react'); //eslint-disable-line no-unused-vars
const ReactDOM = require('react-dom');
const PropTypes = require('prop-types');

const iframeStyle = {
	width: '100%',
	height: '300px',
};

export default class JotformEmbed extends React.Component {
	static propTypes = {
		src: PropTypes.string.isRequired,
		className: PropTypes.string,
		scrolling: PropTypes.bool,
	};

	constructor(props) {
		super(props);
		this.handleIframeMessage = this.handleIframeMessage.bind(this);
	}

	handleIframeMessage(e) {
		const props = this.props;
		if (!e.data.split) {
			return;
		}
		const args = e.data.split(':');
		const formId = args[2];
		const iframe = ReactDOM.findDOMNode(this.refs.iframe);
		if (!!iframe && (!formId || props.src.split('?')[0].endsWith(formId))) {
			switch (args[0]) {
				case 'scrollIntoView':
					iframe.scrollIntoView();
					break;
				case 'setHeight':
					iframe.style.height = `${args[1]}px`;
					break;
				case 'collapseErrorPage':
					if (iframe.clientHeight > globalThis.innerHeight) {
						iframe.style.height = `${globalThis.innerHeight}px`;
					}
					break;
				case 'reloadPage':
					globalThis.location.reload();
					break;
			}
			const isJotForm = (e.origin.indexOf('jotform') > -1);
			if (isJotForm && 'contentWindow' in iframe && 'postMessage' in iframe.contentWindow) {
				const urls = {
					'docurl': encodeURIComponent(globalThis.document.URL),
					'referrer': encodeURIComponent(globalThis.document.referrer),
				};
				iframe.contentWindow.postMessage(JSON.stringify({'type': 'urls', 'value': urls}), '*');
			}
		}
	}

	componentWillMount() {
		if (globalThis.addEventListener) {
			globalThis.addEventListener('message', this.handleIframeMessage, false);
		}
		else if (globalThis.attachEvent) {
			globalThis.attachEvent('onmessage', this.handleIframeMessage);
		}
	}

	componentWillUnmount() {
		if (globalThis.removeEventListener) {
			global.removeEventListener('message', this.handleIframeMessage, false);
		}
		else if (globalThis.detachEvent) {
			globalThis.detachEvent('onmessage', this.handleIframeMessage);
		}
	}

	render() {
		const props = this.props;
		return (
			<iframe ref="iframe" style={iframeStyle} className={props.className} src={props.src} frameBorder={0} scrolling={props.scrolling ? 'yes' : 'no'} />
		);
	}

	shouldComponentUpdate(nextProps) {
		const props = this.props;
		return props.src !== nextProps.src || props.className !== nextProps.className || props.scrolling !== nextProps.scrolling;
	}
}
