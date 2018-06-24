import React from 'react';
import { Link } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';

import { getPrevPath } from '../utils';
import { CREATE_THREAD } from '../graphql/mutations';

const style = {
  body: {
    height: '100px'
  },
  submit: {
    marginTop: '1rem'
  }
};

class CreateThread extends React.Component {
  state = {
    title: '',
    body: ''
  };

  handleInputChange = (prop) => (e) => {
    this.setState({ [prop]: e.target.value });
  };

  handleThreadSubmit = (prevPath, peerCircleId) => async () => {
    const { title, body } = this.state;
    const { history, createThread } = this.props;

    createThread({
      variables: { peerCircleId, title, body }
    }).catch((err) => {
      throw new Error(err);
    });

    history.push(prevPath, { id: peerCircleId });
  };

  render() {
    const { pathname, state } = this.props.location;
    const { peerCircleId } = state;
    const prevPath = getPrevPath(pathname);

    return (
      <div>
        <div>
          <h3>Title</h3>
          <input value={this.state.title} type="text" onChange={this.handleInputChange('title')} />
        </div>
        <div>
          <h3>Body</h3>
          <textarea
            style={style.body}
            value={this.state.body}
            type="text"
            onChange={this.handleInputChange('body')}
          />
        </div>
        <button style={style.submit} onClick={this.handleThreadSubmit(prevPath, peerCircleId)}>
          Submit
        </button>
        <Link
          to={{
            pathname: prevPath,
            state: {
              id: peerCircleId
            }
          }}>
          <button style={style.submit}>Back</button>
        </Link>
      </div>
    );
  }
}

export default compose(graphql(CREATE_THREAD, { name: 'createThread' }))(CreateThread);
