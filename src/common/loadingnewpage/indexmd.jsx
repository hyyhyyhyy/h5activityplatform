import React from 'react';
import Loadingnewpage from './index';
import Explain from '../../../components/explain/explain'
const ReactMarkdown = require('react-markdown')


const initialSource = `


\`\`\`js

import {Loadingnewpage} from 'ani_frag';

class LoadingnewpageExample extends React.Component{

    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div>
                <Loadingnewpage/>
            </div>  
        )
    }
}

\`\`\`

`










class LoadingnewpageMD extends React.Component {
    render() {
        return (
            <div>
                <Explain title="中转页加载" content="在新开的页面加载等待,一般在该页面进行一些校验,通过则进入正常流程,否则失败处理" clazzName="Loadingnewpage" />
                <section className="contanier">
                    <Loadingnewpage />
                </section>
                <div className='codeContanier'>
                    <h3>使用说明</h3>
                    <section className='code'>
                        <ReactMarkdown source={initialSource} />
                    </section>
                </div>
            </div>
        )
    }
}

export default LoadingnewpageMD;