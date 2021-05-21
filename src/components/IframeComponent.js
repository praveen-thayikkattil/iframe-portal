import { Component } from "react";
import ReactDOM from 'react-dom';

const iframeRoot = document.getElementById('iframe-root');

class IframeComponent extends Component {
    constructor(props) {
        super(props);

        this.el = document.createElement('div');
    }

    componentDidMount() {
        iframeRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        if(iframeRoot !== null) iframeRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        );
    }
}

export default IframeComponent;