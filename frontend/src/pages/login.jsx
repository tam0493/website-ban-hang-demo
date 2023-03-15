import React from "react";
import { loginUser } from "../redux/actions/user";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import "../assets/styles/loginRegister.css";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    redirect: false,
  };

  redirectHandler = () => {
    this.setState({ redirect: true });
  };

  inputHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }

    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="content">
          <div className="header">ĐĂNG NHẬP</div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Tên đăng nhập</label>
              <input
                type="text"
                name="username"
                onChange={this.inputHandler}
                placeholder=""
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="password">Mật khẩu</label>
              <input
                type="password"
                name="password"
                onChange={this.inputHandler}
                placeholder=""
              ></input>
            </div>
          </div>
        </div>
        <div className="footer">
          <h6>
            Chưa có tài khoảng? Đăng ký <Link to="/register">ở đây</Link>
          </h6>
          <button
            onClick={() => {
              this.props.loginUser(this.state);
              this.redirectHandler();
            }}
            type="submit"
            className="btn btn-login"
          >
            Đăng nhập
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userGlobal: state.user,
  };
};

const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
