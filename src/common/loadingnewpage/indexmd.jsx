import React from 'react';
import Loadingnewpage from './index';
import Explain from '../../../components/explain/explain'
const ReactMarkdown = require('react-markdown')


const initialSource = `


\`\`\`js

class pg extends React.Component {
    render() {
        return (
            <div>
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
                    <h3>源码</h3>
                    <section className='code'>
                        <ReactMarkdown source={initialSource} />
                    </section>
                </div>
            </div>
        )
    }
}

export default LoadingnewpageMD;