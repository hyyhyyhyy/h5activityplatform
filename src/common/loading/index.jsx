import React from "react";

import "./index.scss";


class Loading extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className="loading">
                <i></i>
            </div>
        )
    }
}

export default Loading;