import React from "react";

import "./index.scss";


class Broadcast extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            prizeBroadcastList: [
                {
                    'inviterName': '张先生',
                    'score': '1000'
                },
                {
                    'inviterName': '李先生',
                    'score': '230'
                },
                {
                    'inviterName': '陈先生',
                    'score': '500'
                },
                {
                    'inviterName': '章先生',
                    'score': '800'
                },
            ]
        }
    }


    render() {
        const { prizeBroadcastList } = this.state;
        return (
            <div className="broadcast">
                {prizeBroadcastList && prizeBroadcastList.length ?
                    <div className="prizeBroadcast" style={{ width: prizeBroadcastList.length * 300 * 2 + 100, display: "inline-block" }}>
                        <ul style={{ display: "inline-block" }} className="move">
                            {prizeBroadcastList && prizeBroadcastList.map((item, index) => {
                                return (
                                    <li key={index}>{`${item.inviterName}邀请好友获得了`}<span>{`${item.score}等值现金奖励`}</span></li>
                                )
                            })}
                        </ul>
                        <ul style={{ display: "inline-block" }} className="move">
                            {prizeBroadcastList && prizeBroadcastList.map((item, index) => {
                                return (
                                    <li key={index}>{`${item.inviterName}邀请好友获得了`}<span>{`${item.score}等值现金奖励`}</span></li>
                                )
                            })}
                        </ul>
                    </div> : <div className={style.noList}>暂无获奖名单~</div>}
            </div>
        )
    }
}

export default Broadcast;