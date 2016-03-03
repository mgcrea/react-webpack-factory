import React, {Component, PropTypes} from 'react';

export default class UserForm extends Component {

  static propTypes = {
    router: PropTypes.object,
    actions: PropTypes.object
  };

  handleInputChange(ev) {
    this.setState({[ev.target.name]: ev.target.value});
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const {router, actions} = this.props;
    actions.createUser(this.state).then(() => {
      router.push('/users');
    });
  }

  render() {
    return (
      <section>
        <h3 className="page-title">New Project</h3>
        <div className="project-edit-container">
          <div className="project-edit-content">
            <form className="new_project form-horizontal" onSubmit={::this.handleSubmit}>

              {/* <input type="text" name="text" value={this.state.text} onChange={::this.handleInputChange} placeholder="Your name" autoFocus />
            <input type="submit" value="Post" /> */}

              <fieldset>
                <legend>Account</legend>
                <div className="form-group row">
                  <label className="col-sm-2 form-control-label" htmlFor="user_name">Name</label>
                  <div className="col-sm-10">
                    <input required autoComplete="off" className="form-control" type="text" name="name" id="user_name" onChange={::this.handleInputChange} />
                    <span className="help-inline">* required</span>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 form-control-label" htmlFor="user_username">Username</label>
                  <div className="col-sm-10">
                    <input required autoComplete="off" className="form-control" type="text" name="username" id="user_username" onChange={::this.handleInputChange} />
                    <span className="help-inline">* required</span>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 form-control-label" htmlFor="user_email">Email</label>
                  <div className="col-sm-10">
                    <input required autoComplete="off" className="form-control" type="text" name="email" id="user_email" onChange={::this.handleInputChange} />
                    <span className="help-inline">* required</span>
                  </div>
                </div>
              </fieldset>

              <div className="form-actions">
                <input type="submit" value="Create user" className="btn btn-create" />
                <a className="btn btn-cancel" href="/admin/users">Cancel</a>
              </div>

            </form>
          </div>
        </div>
      </section>
    );
  }
}
