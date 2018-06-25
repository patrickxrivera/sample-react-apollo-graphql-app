import React from 'react';
import { Link } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';

import { CREATE_PEER_CIRCLE } from '../graphql/mutations';

const style = {
  body: {
    height: '100px'
  },
  submit: {
    marginTop: '1rem'
  }
};

class CreatePeerCircle extends React.Component {
  state = {
    name: '',
    description: ''
  };

  handleInputChange = (prop) => (e) => {
    this.setState({ [prop]: e.target.value });
  };

  handlePeerCircleSubmit = async () => {
    const { name, description } = this.state;
    const { history, createPeerCircle } = this.props;

    const result = await createPeerCircle({
      variables: { name, description }
    }).catch((err) => {
      throw new Error(err);
    });

    const peerCircleId = result.data.createPeerCircle.id;

    history.push(`/${name.toLowerCase()}/threads`, { id: peerCircleId });
  };

  render() {
    return (
      <div>
        <div>
          <h3>Name</h3>
          <input value={this.state.name} type="text" onChange={this.handleInputChange('name')} />
        </div>
        <div>
          <h3>Description</h3>
          <textarea
            style={style.body}
            value={this.state.description}
            type="text"
            onChange={this.handleInputChange('description')}
          />
        </div>
        <button style={style.submit} onClick={this.handlePeerCircleSubmit}>
          Submit
        </button>
        <Link to="/">
          <button style={style.submit}>Back</button>
        </Link>
      </div>
    );
  }
}

export default compose(graphql(CREATE_PEER_CIRCLE, { name: 'createPeerCircle' }))(CreatePeerCircle);
