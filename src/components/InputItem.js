import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import Info from './Info'

class InputItem extends Component {
    constructor() {
        super();
        this.state = {
            people: '',
            money: '',
            text1: '',
            text2: ''
        }
    }
    handlePeopleNumber(e) {
        var val = e.target.value+'';
        if (/\D/.test(val)) {
            this.setState({
                people: val.replace(/\D/,''),
                text1: '人数必须为整数'
            })
            return false
        } else if (/^[0]/.test(val)) {
            this.setState({
                people: val.replace(/^[0]/,''),
                text1: '人数必须大于0'
            })
            return false
        } else {
            this.setState({
                people:val,
                text1: ''
            })
        }
    }
    handleMoneyNumber(e) {
        var val = e.target.value+'';
        if (/\D/.test(val) && val <= 0.01) {
            this.setState({
                money: val,
                text2: '金额必须为大于0.01'
            })
            return false;
        } else if (/^0$/.test(val)) {
            this.setState({
                money: val,
                text2: '金额必须大于0'
            })
            return false;
        } else {
            this.setState({
                money: val,
                text2: ''
            })
        }
    }
    handleSubmit(e) {
        if ((!this.state.text1)
        && (!this.state.text2)
        && (this.state.people)
        && (this.state.money)
        && (this.props.onSubmit)) {
            const { people, money } = this.state;
            if (Number(money) < 0.01 * Number(people)) {
                this.setState({
                    text2: '平均金额不能小于0.01'
                })
                e.preventDefault();
            } else {
                this.props.onSubmit({ people, money })
                this.setState({
                    people: '',
                    money: ''
                })
            }
        } else {
            e.preventDefault()
        }
    }
    render() {
        return (
            <div className="container-box">
                <div className="box-title">
                    <h1>发红包</h1>
                    <hr/>
                </div>
                <div className="box-form">
                    <div className="box-input">
                        <p>请输入人数</p>
                        <input type="text" 
                        value={this.state.people}
                        onChange={this.handlePeopleNumber.bind(this)}
                        autoFocus
                        />
                        <Info text={this.state.text1}></Info>
                    </div>
                    <div className="box-input">
                        <p>请输入金额</p>
                        <input type="text"
                        value={this.state.money}
                        onChange={this.handleMoneyNumber.bind(this)}
                        autoFocus
                        />
                        <Info text={this.state.text2}></Info>
                    </div>
                    <Link to='/complete' onClick={this.handleSubmit.bind(this)}>发红包</Link>
                </div>
            </div>
        )
    }
}
export default InputItem