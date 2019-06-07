import React from 'react';
import Component1 from './index'


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

\`\`\`

### 参数说明




`



class Component1MD extends React.Component {
    render() {
        return (
            <div>
                <div style={{ height: 100 }}>
                    <Component1 />
                    <ReactMarkdown source={initialSource} />

                </div>
            </div>
        )
    }
}

export default Component1MD;