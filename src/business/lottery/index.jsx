import React from 'react';
import './index.scss'

class Lottery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            index: '',
            times: '',
            cycle: '',
            prize: '',
            count: '',
            timer: '',
            isRolling: false,
            imgArr: [
                require("../../img/1.png"),
                require("../../img/10.png"),
                require("../../img/20.png"),
                require("../../img/100.png"),
                require("../../img/click_btn.png"),
                require("../../img/thanks.png"),
                require("../../img/80.png"),
                require("../../img/50.png"),
                require("../../img/30.png")
            ],
            prizeName: '',
            speed: 100
        }

    }

    init0() {
        this.setState({
            times: 0,
            cycle: 8,
            speed: 100,
            count: 8,
            timer: 0,
            prize: 5
        })
    }

    roll() {

        this.setState({
            times: ++this.state.times
        })
        // this.state.times = ++this.state.times;
        // this.times += 1;
        this.hightLight();
        if (
            this.state.times > this.state.cycle &&
            this.state.prize === this.state.index
        ) {
            clearTimeout(this.state.timer);
            this.state.prize = -1;
            this.state.times = 0;
            this.state.isForbind = true;
            this.state.isRolling = false;
        } else {
            if (
                this.state.times > this.state.cycle

            ) {
                this.state.speed += 50;
            }
            this.state.timer = setTimeout(this.roll.bind(this), this.state.speed);
        }
        return false;
    }

    hightLight() {

        if (this.state.index >= (this.state.count - 1)) {
            this.state.index = -1;
        }


        this.state.index = ++this.state.index;


    }

    getClazz(order) {
        if (order === this.state.index) {
            return `lottery-unit lottery-unit-${order} active`;
        } else {
            return `lottery-unit lottery-unit-${order}`;
        }
    }

    start() {


        if (this.state.isRolling) {
            return;
        }

        this.state.clear = false;
        this.init0();
        clearTimeout(cl);
        var cl = setTimeout(() => { this.toastStatus = true; }, 4000);
        this.state.isRolling = true;
        this.roll();

    }

    render() {
        const { imgArr } = this.state;
        return (
            <div className='lottery'>

                <section className='choujiangBg'>
                    <div className='tr'>
                        <div className={this.getClazz(0)}><img src={imgArr[0]} /></div>
                        <div className={this.getClazz(1)}><img src={imgArr[1]} /></div>
                        <div className={this.getClazz(2)}><img src={imgArr[2]} /></div>
                    </div>
                    <div className='tr'>
                        <div className={this.getClazz(7)}><img src={imgArr[3]} /></div>
                        <div onClick={this.start.bind(this)}><img src={imgArr[4]} /></div>
                        <div className={this.getClazz(3)}><img src={imgArr[5]} /></div>
                    </div>
                    <div className='tr'>
                        <div className={this.getClazz(6)}><img src={imgArr[6]} /></div>
                        <div className={this.getClazz(5)}><img src={imgArr[7]} /></div>
                        <div className={this.getClazz(4)}><img src={imgArr[8]} /></div>
                    </div>
                </section>

            </div>

        )
    }
}

export default Lottery;