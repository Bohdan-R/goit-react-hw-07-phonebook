import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import './viewsStyles/LoginView.scss';
import { BsFillEnvelopeFill, BsLockFill } from 'react-icons/bs';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.resetInput();
  };

  resetInput = () => {
    this.setState({
      email: '',
      password: '',
    });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="section">
        <div className="log-container">
          <h2 className="log-title">Login</h2>
          <form
            autoComplete="off"
            onSubmit={this.handleSubmit}
            className="log-form"
          >
            <label className="log-form__label">
              Email
              <div className="log-form__input-box">
                <input
                  type="email"
                  name="email"
                  value={email}
                  className="log-form__input"
                  onChange={this.handleChange}
                />
                <BsFillEnvelopeFill className="log-form__icon" />
              </div>
            </label>
            <label className="log-form__label">
              Password
              <div className="log-form__input-box">
                <input
                  type="password"
                  name="password"
                  value={password}
                  className="log-form__input"
                  onChange={this.handleChange}
                />
                <BsLockFill className="log-form__icon" />
              </div>
            </label>
            <button type="submit" className="log-form__btn">
              Sign in
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
