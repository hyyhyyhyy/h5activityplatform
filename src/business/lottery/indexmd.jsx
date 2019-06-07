import React from 'react';
import Lottery from './index';
import Explain from '../../../components/explain/explain'


const ReactMarkdown = require('react-markdown')


const initialSource = `


\`\`\`js

class pg extends React.Component {
    render() {
        return (
            <div>
                <div>这是一个分页</div>
            </div>
        )
    }
}


class pg extends React.Component {
    render() {
        return (
            <div>
                <div>这是一个分页</div>
            </div>
        )
    }
}

class pg extends React.Component {
    render() {
        return (
            <div>
                <div>这是一个分页</div>
            </div>
        )
    }
}

class pg extends React.Component {
    render() {
        return (
            <div>
                <div>这是一个分页</div>
            </div>
        )
    }
}

class pg extends React.Component {
    render() {
        return (
            <div>
                <div>这是一个分页</div>
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
                        <h3>源码</h3>
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