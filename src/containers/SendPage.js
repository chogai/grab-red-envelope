import React, { Component } from 'react'
import { connect } from 'react-redux'
import InputItem from '../components/InputItem'
// import InputItems from '../components/InputItems'
import { setArgu } from '../action'


class SendPage extends Component {
    handleState(args) {
        if (this.props.onSubmit) {
            this.props.onSubmit(args);
        }
    }
    render() {
        return (
            <InputItem onSubmit={this.handleState.bind(this)}/>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit({people, money}) {
            dispatch(setArgu({people, money}));
        }
    }
}
SendPage = connect(null,mapDispatchToProps)(SendPage);
export default SendPage