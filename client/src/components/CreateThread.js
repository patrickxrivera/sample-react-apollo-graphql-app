import React from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';

import { CREATE_THREAD } from '../graphql/mutations';
import { GET_THREADS_BY_PEER_CIRCLE_ID } from '../graphql/queries';
import { getPrevPath } from '../utils';

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

  handleSubmit = (peerCircleId, prevPath) => () => {
    const { mutate, history } = this.props;
    const { title, body } = this.state;

    mutate({
      variables: { peerCircleId, title, body },

      update: (store, { data: { createThread } }) => {
        const data = store.readQuery({
          query: GET_THREADS_BY_PEER_CIRCLE_ID,
          variables: { id: peerCircleId }
        });

        data.getPeerCircleById.threads.push(createThread);

        store.writeQuery({
          query: GET_THREADS_BY_PEER_CIRCLE_ID,
          variables: { id: peerCircleId },
          data
        });
      },

      optimisticResponse: {
        __typename: 'Mutation',
        createThread: {
          __typename: 'Thread'
        }
      }
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
        <button style={style.submit} onClick={this.handleSubmit(peerCircleId, prevPath)}>
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

export default graphql(CREATE_THREAD)(CreateThread);
