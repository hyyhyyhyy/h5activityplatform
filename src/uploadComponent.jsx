import React from 'react';
import ReactDOM from 'react-dom';
import './uploadComponent.scss'

class UploadComponent extends React.Component {
    render() {
        return (
            <div>
                <section className='upcontanier'>
                    <div className='h3'>1. hyycli简介</div>
                    <div className='upcontent'>
                        hyycli是一个管理组件的工具，统一开发组件模板，支持新建组件和删除组件。
                    </div>
                </section>
                <section className='upcontanier'>
                    <div className='h3'>2. hyycli的使用</div>
                    <div className='h4'>2.1 添加组件 <span>hyycli a</span></div>
                    <div className='upcontenta'>
                        <div className='img'></div>
                        <div className='img1'></div>
                        <div className='img2'></div>

                    </div>
                    <div className='h4'>2.2 删除组件 <span>hyycli r</span></div>
                    <div className='upcontentr'>
                        <div className='img3'></div>
                    </div>
                </section>
            </div>
        )
    }
}

export default UploadComponent;