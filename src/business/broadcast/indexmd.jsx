import React from 'react';
import Broadcast from './index';
import Explain from '../../../components/explain/explain'
const ReactMarkdown = require('react-markdown')


const initialSource = `


\`\`\`js

class pg extends React.Component {
    render() {
        return (
            <div>
                <div>这里是源码</div>
                <div>这里是源码</div>
                <div>这里是源码</div>
                <div>这里是源码</div>
                <div>这里是源码</div>
                <div>这里是源码</div>
                <div>这里是源码</div>
                <div>这里是源码</div>
                <div>这里是源码</div>
                <div>这里是源码</div>
                <div>这里是源码</div>
                <div>这里是源码</div>
            </div>
        )
    }
}


\`\`\`

`










class BroadcastMD extends React.Component {
    render() {
        return (
            <div>
                <Explain title="广播通知" content="中奖信息以滚动形式呈现,展示动态效果" clazzName="Broadcast" />
                <section className="contanier">
                    <Broadcast />
                </section>
                <div className='codeContanier'>
                    <h3>源码</h3>
                    <section className='code'>
                        <ReactMarkdown source={initialSource} />
                    </section>
                </div>


            </div>
        )
    }
}

export default BroadcastMD;