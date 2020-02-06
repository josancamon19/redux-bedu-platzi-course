import React from "react";
import * as usersActions from '../actions/usersActions'
import {connect} from 'react-redux'
import {Link} from "react-router-dom";

class Users extends React.Component {

    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        console.log(this.props);
        if (this.props.loading) {
            return (
                <div className="d-flex justify-content-center text-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            );
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col">Name</div>
                    <div className="col">Username</div>
                    <div className="col">Email</div>
                </div>
                {this.props.users.map((user) => (
                    <div className="row" key={user.id}>
                        <div className="col">{user.name}</div>
                        <div className="col">{user.username}</div>
                        <div className="col">{user.email}</div>
                        <div><Link to={`/publications/${user.id}`}>View</Link></div>
                    </div>
                ))}
            </div>);
    }
}

const mapStateToProps = (reducers) => {
    return reducers.usersReducer;
};

export default connect(mapStateToProps, usersActions)(Users);
