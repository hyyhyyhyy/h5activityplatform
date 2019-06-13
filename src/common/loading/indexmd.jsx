import React from 'react';
import Loading from './index';
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










class LoadingMD extends React.Component {
    render() {
        return (
            <div>
                <Explain title="加载旋转" content="在当前页面接口数据返回较慢时,加载动画,给用户良好体验" clazzName="Loading" />
                <section className="contanier">
                    <Loading />
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

export default LoadingMD;