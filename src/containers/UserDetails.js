import React, {Component} from 'react';
import {connect} from 'react-redux';


class UserDetail extends Component {
    render() {
        if (!this.props.user) {
            return (<div>Select a user...</div>);
        }
        return (
            <div>
                <h2>{this.props.user.name} {this.props.user.email}</h2>
                <h3>Number: {this.props.user.phone}</h3>
                <h3>Company: {this.props.user.company.name} - {this.props.user.company.catchPhrase} </h3>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);
