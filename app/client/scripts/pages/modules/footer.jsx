import React from "react";

export default class Footer extends React.PureComponent {
    constructor() {
        super();
        this.content = "It is Footer";
    }
    render() {
        return <div>
            <div className="footer">{this.content}</div>
        </div>;
    }
}
