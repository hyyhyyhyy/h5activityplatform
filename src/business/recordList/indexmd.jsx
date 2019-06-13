import React from 'react';
import Recordlist from './index';
import Explain from '../../../components/explain/explain'
const ReactMarkdown = require('react-markdown')


const initialSource = `


\`\`\`js

import {RecordList} from 'ani_frag';

class RecordlistExample extends React.Component{

    constructor(props) {
        super(props)

        this.recordList = [
            {
                'mobile': '1505229**33',
                'money': '100'
            },
            {
                'mobile': '1345229**33',
                'money': '30'
            }
            
        ];
    }

    render(){
        return(
            <div>
                <RecordList recordList={this.recordList}/>
            </div>  
        )
    }
}

\`\`\`

`










class RecordlistMD extends React.Component {

    constructor(props) {
        super(props)
        this.recordList1 = [];
        this.recordList2 = [
            {
                'mobile': '1505229**33',
                'money': '100'
            },
            {
                'mobile': '1345229**33',
                'money': '30'
            },
            {
                'mobile': '1533229**33',
                'money': '50'
            },
            {
                'mobile': '1505229**33',
                'money': '100'
            }
        ];
        this.recordList3 = [
            {
                'mobile': '150722**345',
                'money': '200'
            },
            {
                'mobile': '1505229**33',
                'money': '100'
            },
            {
                'mobile': '1345229**33',
                'money': '30'
            },
            {
                'mobile': '1533229**33',
                'money': '50'
            },
            {
                'mobile': '1505229**33',
                'money': '100'
            },
            {
                'mobile': '1522229**33',
                'money': '50'
            },
            {
                'mobile': '13433229**33',
                'money': '50'
            }
        ]

    }

    render() {
        return (
            <div>
                <Explain title="记录展示" content="中奖或者邀请记录展示,0条记录提示&#x27;暂无记录&#x27;,1~5条记录静态展示,5条以上上下滚动展示" clazzName="Recordlist" />
                <section className="contanier">
                    <Recordlist recordList={this.recordList1} />
                </section>
                <section className="contanier">
                    <Recordlist recordList={this.recordList2} />
                </section>
                <section className="contanier">
                    <Recordlist recordList={this.recordList3} />
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

export default RecordlistMD;