import React from "react";

export default class Header extends React.PureComponent {
    constructor() {
        super();
        this.content = "It is Header";
    }
    render() {
        return <div>
            <div className="header">{this.content}</div>
        </div>;
    }
}
