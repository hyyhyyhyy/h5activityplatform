import React from "react";

import "./index.scss";


export default class Recordlist extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { recordList } = this.props;
        return (
            <div className="recordList">
                {recordList.length > 5 ?
                    <div className='page'>
                        <div className='box item1'>
                            {recordList.length > 0 && recordList.map(item => {
                                return (
                                    <div className='itemBox'>{`成功邀请${item.mobile}获得${item.money}元还款金券`}</div>
                                )
                            })}
                        </div>
                        <div className='box item2'>
                            {recordList.length > 0 && recordList.map(item => {
                                return (
                                    <div className='itemBox'>{`成功邀请${item.mobile}获得${item.money}元还款金券`}</div>
                                )
                            })}
                        </div>
                    </div> : recordList.length > 0 ?
                        <div className='page2'>
                            <div className='box2 '>
                                {recordList.length > 0 && recordList.map(item => {
                                    return (
                                        <div className='itemBox'>{`成功邀请${item.mobile}获得${item.money}元还款金券`}</div>
                                    )
                                })}
                            </div>
                        </div> :
                        <div className='page2'>
                            <div className='box2 '>
                                <div className='itemBox'>暂无邀请名单</div>
                            </div>
                        </div>
                }
            </div>
        )
    }
}


