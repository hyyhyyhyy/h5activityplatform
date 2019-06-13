import React from 'react';
import Broadcast from './index';
import Explain from '../../../components/explain/explain';
import { Icon } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';



const ReactMarkdown = require('react-markdown')

const code = `import {Broadcast} from 'ani_frag';

class BroadcastExample extends React.Component{

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
                }
            ]
        }
    }

    render(){
        return(
            <div>
                <Broadcast prizeBroadcastList={this.state.prizeBroadcastList}/>
            </div>  
        )
    }
}`


const initialSource = `


\`\`\`js

${code}

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
                    <h3>使用说明</h3>
                    <section className='code'>
                        <ReactMarkdown source={initialSource} />
                        <CopyToClipboard text={code}>
                            <Icon type="snippets" />
                        </CopyToClipboard>
                    </section>
                </div>


            </div>
        )
    }
}

export default BroadcastMD;