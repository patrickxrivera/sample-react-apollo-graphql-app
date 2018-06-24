import React from 'react';

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

  render() {
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
        <button style={style.submit}>Submit</button>
      </div>
    );
  }
}

export default CreateThread;
