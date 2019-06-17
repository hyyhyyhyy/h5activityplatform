import React from 'react';
import Loading from './index';
import Explain from '../../../components/explain/explain';
import { Icon } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import "./index.scss";
const ReactMarkdown = require('react-markdown');

const code = `
import { Loading } from 'ani_frag';

class LoadingExample extends React.Component{

    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div>
                //这里是一个使用例子说明
                <Loading/>
            </div>  
        )
    }
}
`


const initialSource = `


\`\`\`js

    ${code}

\`\`\`

`

class LoadingMD extends React.Component {
    render() {
        return (
            <div>
                <Explain title="加载中" content="加载转动显示" clazzName="Loading" />
                <section className="contanier">
                    <Loading />
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

export default LoadingMD;