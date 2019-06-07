import React from 'react';
import './explain.scss'

class Explain extends React.Component {
    render() {
        const { title, content, clazzName } = this.props;
        return (
            <div>
                <h1 className='explainTitle'>{`${title}  <${clazzName}/>`}</h1>
                <section className='explainContent'>{content}</section>
                <h1 className='explainTitle'>预览</h1>
            </div>
        )
    }
}

export default Explain;