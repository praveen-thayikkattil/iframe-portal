import React, { Component } from "react";
import IframeComponent from "./IframeComponent";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videoTitle: ''
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = e => {
        const videoTitle = e.target.previousElementSibling.title;

        this.setState(state => ({
            videoTitle
        }));
    }

    render() {
        return (
            <section id="home" onClick={this.handleClick}>
                <header className="section-header">
                    <h1 className="section-title">Data fetched from Iframe Section</h1>

                    <h3>Video Title : <span>{this.state.videoTitle}</span></h3>

                    <p>Main application &amp; iframe section separation implemented through the Portal feature of react.</p>
                </header>

                <IframeComponent>
                    <Child />
                </IframeComponent>
            </section>
        )
    }
}

const Child = () => {
    return (
        <div id="iframe-canvas">
            <iframe id="ytplayer" type="text/html" width="720" height="405"
src="https://www.youtube.com/embed/Mk1NY9m6Hlw?autoplay=1&enablejsapi=1"
frameBorder="0" allowFullscreen title="UST Global Trivandrum Campus Video"></iframe>

            <button>Click to send Video Title to outer app component</button>
        </div>
    );
}

export default Home;