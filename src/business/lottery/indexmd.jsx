import React from 'react';
import Lottery from './index';
import Explain from '../../../components/explain/explain'


const ReactMarkdown = require('react-markdown')


const initialSource = `


\`\`\`js

import {Lottery} from 'ani_frag';

class LotteryExample extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            imgArr: [
                require("../../img/1.png"),
                require("../../img/10.png"),
                require("../../img/20.png"),
                require("../../img/100.png"),
                require("../../img/click_btn.png"),
                require("../../img/thanks.png"),
                require("../../img/80.png"),
                require("../../img/50.png"),
                require("../../img/30.png")
            ]
        }
    }

    render(){
        return(
            <div>
                <Lottery imgArr={this.state.imgArr} cycle={'3'} count={'8'} speed={'100'} prize={'5'}/>
            </div>  
        )
    }
}


\`\`\`

`










class LotteryMD extends React.Component {
    render() {
        return (
            <div>
                <div >
                    <Explain title={'抽奖九宫格'} content={'抽奖活动，点击抽奖，产生转动效果'} clazzName="Lottery" />
                    <section className="contanier">
                        <Lottery />
                    </section>
                    <div className='codeContanier'>
                        <h3>使用说明</h3>
                        <section className='code'>
                            <ReactMarkdown source={initialSource} />
                        </section>
                    </div>


                    {/* <section className='attributeContanier'>
                        <ReactMarkdown source={initialSource1} />
                    </section> */}


                </div>
            </div>
        )
    }
}

export default LotteryMD;