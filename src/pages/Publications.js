import React from "react";
import {connect} from 'react-redux';
import * as usersActions from '../actions/usersActions'
import * as publicationsActions from '../actions/publicationsActions'

class Publications extends React.Component {

    async componentDidMount() {
        await this.props.getUserFromId(this.props.match.params.key);
        await this.props.getPublications(this.props.match.params.key);
    }

    render() {
        return (
            <>
                <div className="container">
                    <h1>Posts from {this.props.usersReducer.userDetails.name}</h1>
                    {this.props.publicationsReducer.publications.map((publication) => (
                        <div className="row" key={publication.id}>
                            <h2 className="card-title">{publication.title}</h2>
                            <p>{publication.body}</p>
                        </div>
                    ))}
                </div>
            </>
        );
    }
}

const mapStateToProps = ({usersReducer, publicationsReducer}) => {
    return {usersReducer, publicationsReducer};
};

const mapDispatchToProps = {
    ...usersActions, ...publicationsActions
};

export default connect(mapStateToProps, mapDispatchToProps)(Publications);
