import React from "react";

export default class Content extends React.PureComponent {
    constructor() {
        super();
        this.content = "It is Application";
    }
    render() {
        return <div>
            <div className="content">{this.content}</div>
        </div>;
    }
}
