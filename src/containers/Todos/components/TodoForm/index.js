import React, {Component, PropTypes} from 'react';

export default class TodoForm extends Component {

  static propTypes = {
    actions: PropTypes.object,
    todos: PropTypes.array
  };

  handleSubmit(ev) {
    console.warn('handleSubmit');
    ev.preventDefault();
    // var author = this.state.author.trim();
    // var text = this.state.text.trim();
    // if (!text || !author) {
    //   return;
    // }
    // // TODO: send request to the server
    // this.setState({author: '', text: ''});
  }

  render() {
    // const {todos, actions} = this.props;
    return (
      <section>
        <h3 className="page-title">New Project</h3>
        <div className="project-edit-container">
          <div className="project-edit-content">
            <form className="new_project form-horizontal" onSubmit={::this.handleSubmit}>
              <input type="text" placeholder="Your name" />
              <input type="text" placeholder="Say something..." />
              <input type="submit" value="Post" />
            </form>
          </div>
        </div>
      </section>
    );
  }
}
